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
import MiniSearch from "minisearch";

const diagramsPath = "diagrams";
const distPath = "public/diagrams";

// recursively create dist path if it doesn't exist
if (!statSync(distPath, { throwIfNoEntry: false })) {
  mkdirSync(distPath, { recursive: true });
}

// read all diagrams
const diagrams = readdirSync(diagramsPath)
  .filter((file) => {
    return statSync(join(diagramsPath, file)).isDirectory();
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
    return {
      ...metadata,
      previewURI: `diagrams/${id}.webp`,
    };
  });

const diagramsJson = JSON.stringify(diagrams);

// build search index
const miniSearch = new MiniSearch({
  fields: ["title", "notes", "code", "author", "domains"], // fields to index for full-text search
  storeFields: ["title", "id"], // fields to return with search results
});
miniSearch.addAll(diagrams);
const searchIndexJSON = JSON.stringify(miniSearch.toJSON());

// build metadata
// return a unique list of all domains
const uniqueDomains = (diagrams) =>
  Array.from(new Set(diagrams.map(({ domains }) => domains).flat()));
const metadata = {
  ids: diagrams.map(({ id }) => id),
  count: diagrams.length,
  domains: uniqueDomains(diagrams),
};

writeFileSync(join(distPath, "diagrams.json"), diagramsJson);
writeFileSync(join(distPath, "search.json"), searchIndexJSON);
writeFileSync(join(distPath, "metadata.json"), JSON.stringify(metadata));
