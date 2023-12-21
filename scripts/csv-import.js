import {
  existsSync,
  mkdirSync,
  createWriteStream,
  writeFileSync,
  createReadStream,
} from "fs";
import axios from "axios";
import { dump } from "js-yaml";
import path from "path";
import fs from "fs";
import csvParser from "csv-parser";
import { argv } from "process";
import svg2png from "svg2png";
import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";
import { execSync } from "child_process";

async function convertToWebp(inputFilePath, id) {
  const extension = path.extname(inputFilePath).toLowerCase();
  const outputFilePath = path.join(path.dirname(inputFilePath), `${id}.webp`);

  try {
    if (extension === ".svg") {
      const buffer = fs.readFileSync(inputFilePath);
      const pngBuffer = await svg2png(buffer, { width: 500, height: 500 });
      fs.writeFileSync(inputFilePath.replace(".svg", ".png"), pngBuffer);
    } else if (extension === ".pdf") {
      const pngFilePath = inputFilePath.replace(".pdf", ".png");
      execSync(
        `convert -density 150 "${inputFilePath}" -quality 90 "${pngFilePath}"`
      );
    }

    // Convert PNG to WEBP
    await imagemin([inputFilePath.replace(extension, ".png")], {
      destination: path.dirname(inputFilePath),
      plugins: [imageminWebp({ quality: 50 })],
    });

    fs.renameSync(inputFilePath.replace(extension, ".png"), outputFilePath);
  } catch (error) {
    console.error("Error during conversion:", error);
  }
}

const csvFilePath = argv[2];
const outputDir = "./output";

// Ensure the output directory exists
if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

// Helper function to download file
async function downloadFile(fileUrl, outputPath) {
  const writer = createWriteStream(outputPath);

  const response = await axios({
    url: fileUrl,
    method: "GET",
    responseType: "stream",
  });

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on("finish", resolve);
    writer.on("error", reject);
  });
}

// Convert kebab case
function toKebabCase(str) {
  return str
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

// Process each row of the CSV
function processRow(row, id) {
  const title = row[Object.keys(row)[0]];
  const code = row["Code"];
  const notes = row["Notes"];
  const author = row["Author"];
  const domains = row["Domains"].split(",").map((domain) => domain.trim());
  const tools = row["Tools"].split(",").map((domain) => domain.trim());
  const previewContent = row["Preview"];
  const previewURLMatch = previewContent.match(/\((https?:\/\/[^)]+)\)/);
  const previewURI = previewURLMatch ? previewURLMatch[1] : "";
  const originalFormat = row["Original Input Format"] === "checked";

  const diagramData = {
    id,
    title,
    domains,
    author,
    tools,
    notes,
    code,
    previewURI: `${id}.webp`,
    originalFormat,
  };

  // Folder name as per the requirement
  const folderName = `${id}-${toKebabCase(title)}`;
  const folderPath = path.join(outputDir, folderName);
  mkdirSync(folderPath, { recursive: true });

  // Save YAML file
  const yamlContent = dump(diagramData);
  writeFileSync(path.join(folderPath, "data.yaml"), yamlContent);

  // Download preview file if URL is available
  if (previewURI) {
    //get the string before the url
    const previewFileName = previewContent.split("(")[0].trim();
    const previewFilePath = path.join(folderPath, previewFileName);
    downloadFile(previewURI, previewFilePath).catch(console.error);
    convertToWebp(previewFilePath, id);
  }
}

let id = 0;

// Read and process the CSV file
createReadStream(csvFilePath)
  .pipe(csvParser())
  .on("data", (row) => processRow(row, id++))
  .on("end", () => {
    console.log("CSV file processing completed.");
  });
