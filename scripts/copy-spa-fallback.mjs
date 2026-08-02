import { copyFile } from "node:fs/promises";
import { resolve } from "node:path";

const distributionDirectory = resolve("dist");

await copyFile(
  resolve(distributionDirectory, "index.html"),
  resolve(distributionDirectory, "404.html"),
);
