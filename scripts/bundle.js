// read from the diagrams submodule, parse the metadata yaml file, and create diagrams and a single JSON file in the public/diagrams folder

import { readdirSync, statSync, readFileSync, writeFileSync } from "fs";
import { safeLoad } from "js-yaml";
import { join } from "path";

const diagramsPath = "diagrams";
const publicPath = "public/diagrams";

const diagrams = readdirSync(diagramsPath)
  .filter((file) => {
    return statSync(join(diagramsPath, file)).isDirectory();
  })
  .map((dir) => {
    const metadata = safeLoad(
      readFileSync(join(diagramsPath, dir, "metadata.yaml"), "utf8")
    );
    const id = metadata.id;
    const preview = readFileSync(
      join(diagramsPath, dir, "preview.png"),
      "utf8"
    );
    writeFileSync(join(publicPath, `${id}.png`), preview);
    return metadata;
  });

const diagramsJson = JSON.stringify(diagrams);
writeFileSync(join(publicPath, "diagrams.json"), diagramsJson);
