// read from the diagrams submodule, parse the metadata yaml file, and create diagrams and a single JSON file in the public/diagrams folder

import {
  mkdirSync,
  readdirSync,
  statSync,
  readFileSync,
  writeFileSync,
  copyFileSync,
} from "fs";
import { load } from "js-yaml";
import { join } from "path";
import path from "path";
import zlib from "zlib";
import MiniSearch from "minisearch";
import fs from "fs";

const diagramsPath = "diagrams";
const distPath = "public/diagrams";
const datikzPath = "diagrams/datikz";

async function convertToWebp(inputFilePath, id) {
  const extension = path.extname(inputFilePath).toLowerCase();
  const outputFilePath = path.join(path.dirname(inputFilePath), `${id}.webp`);
  try {
    fs.renameSync(inputFilePath.replace(extension, ".png"), outputFilePath);
    console.log(`Converted ${inputFilePath} to ${outputFilePath}`);
  } catch (error) {
    console.error("Error during conversion:", error);
  }
}

// recursively create dist path if it doesn't exist
if (!statSync(distPath, { throwIfNoEntry: false })) {
  mkdirSync(distPath, { recursive: true });
}

const handwrittenDiagrams = readdirSync(diagramsPath)
  .filter((file) => {
    return (
      statSync(join(diagramsPath, file)).isDirectory() && file !== "datikz"
    );
  })
  .map((dir) => {
    const metadata = load(
      readFileSync(join(diagramsPath, dir, "data.yaml"), "utf8")
    );
    const id = metadata.id;
    // copy the preview data to the dist folder
    copyFileSync(
      join(diagramsPath, dir, `${id}.webp`),
      join(distPath, `${id}.webp`)
    );
    const data = {
      ...metadata,
      previewURI: `diagrams/${id}.webp`,
    };
    writeFileSync(join(distPath, `${id}.json`), JSON.stringify(data));
    return data;
  });

// starts after manually input diagrams
const datikzID = handwrittenDiagrams.length;

// read all diagrams
const datikz = readdirSync(datikzPath)
  .filter((file, i) => {
    if (i % 10 === 0) {
      return statSync(join(datikzPath, file)).isDirectory();
    }
  })
  .map((dir) => {
    const metadata = load(
      readFileSync(join(datikzPath, dir, `${dir}.yaml`), "utf8")
    );
    const id = metadata.id + datikzID;
    // const imagePath = join(datikzPath, dir, `${dir}.png`);
    // copy the preview data to the dist folder
    copyFileSync(
      join(datikzPath, dir, `${id}.webp`),
      join(distPath, `${id}.webp`)
    );
    const data = {
      ...metadata,
      id,
      previewURI: `diagrams/${id}.webp`,
    };
    writeFileSync(join(distPath, `${id}.json`), JSON.stringify(data));
    console.log("wrote datikz file", id);
    return data;
  });

// TODO: excluding datikz to avoid big size
const diagramsJson = JSON.stringify(handwrittenDiagrams);
const diagrams = [...handwrittenDiagrams, ...datikz];
console.log(diagrams);

// build metadata
// return a unique list of all domains
const uniqueDomains = (diagrams) =>
  Array.from(new Set(diagrams.map(({ domains }) => domains).flat()));
const uniqueTools = (diagrams) =>
  Array.from(new Set(diagrams.map(({ tools }) => tools).flat()));

const metadata = {
  ids: diagrams.map(({ id }) => id),
  titles: Object.fromEntries(diagrams.map(({ id, title }) => [id, title])),
  count: diagrams.length,
  domains: uniqueDomains(diagrams),
  tools: uniqueTools(diagrams),
};

writeFileSync(join(distPath, "diagrams.json"), diagramsJson);
writeFileSync(join(distPath, "metadata.json"), JSON.stringify(metadata));

// build search index
const miniSearch = new MiniSearch({
  // fields: ["title", "notes", "code", "author", "domains"], // fields to index for full-text search
  fields: ["title", "notes", "author", "domains"], // fields to index for full-text search
  storeFields: ["title", "id"], // fields to return with search results
});
miniSearch.addAll(diagrams);
console.log("built search index");
const searchIndexJSON = JSON.stringify(miniSearch.toJSON());
writeFileSync(join(distPath, "search.json"), searchIndexJSON);
// gzip the index
await new Promise((resolve, reject) => {
  const gzip = zlib.createGzip();
  const input = fs.createReadStream(join(distPath, "search.json"));
  const output = fs.createWriteStream(join(distPath, "search.json.gz"));
  input.pipe(gzip).pipe(output);
  output.on("close", () => {
    console.log(
      `compressed search index to ${join(distPath, "search.json.gz")}. size: ${
        output.bytesWritten
      }`
    );
    resolve();
  });
  output.on("error", reject);
});
