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

const diagramsPath = "diagrams";
const distPath = "public/diagrams";

// recursively create dist path if it doesn't exist
if (!statSync(distPath, { throwIfNoEntry: false })) {
  mkdirSync(distPath, { recursive: true });
}

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
writeFileSync(join(distPath, "diagrams.json"), diagramsJson);
