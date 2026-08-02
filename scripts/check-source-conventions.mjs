import { access, readFile, readdir } from "node:fs/promises";
import { resolve, relative, join } from "node:path";

const args = process.argv.slice(2);
const readOption = (name, fallback) => {
  const index = args.indexOf(name);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
};

const root = resolve(readOption("--root", process.cwd()));
const maxLines = Number(readOption("--max-lines", "200"));
const strict = args.includes("--strict");
const sourceRoots = ["src", "scripts"];
const ignoredDirectories = new Set([
  ".git",
  "node_modules",
  "dist",
  "build",
  "coverage",
]);
const sourceExtensionPattern = /\.[cm]?[jt]sx?$/;
const declarationPattern = /\.d\.ts$/;

const exists = async (path) => {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
};

const collectSourceFiles = async (directory, files = []) => {
  if (!(await exists(directory))) return files;

  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    const entryPath = join(directory, entry.name);

    if (entry.isDirectory()) {
      if (!ignoredDirectories.has(entry.name)) {
        await collectSourceFiles(entryPath, files);
      }
      continue;
    }

    if (
      sourceExtensionPattern.test(entry.name) &&
      !declarationPattern.test(entry.name)
    ) {
      files.push(entryPath);
    }
  }

  return files;
};

const sourceFiles = (
  await Promise.all(
    sourceRoots.map((directory) => collectSourceFiles(join(root, directory))),
  )
).flat();
const warnings = [];

for (const file of sourceFiles) {
  const content = await readFile(file, "utf8");
  const lineCount = content.split(/\r?\n/).length;

  if (lineCount > maxLines) {
    warnings.push({
      file: relative(root, file).replace(/\\/g, "/"),
      lineCount,
    });
  }
}

for (const warning of warnings) {
  console.warn(
    `[WARN] ${warning.file} has ${warning.lineCount} lines; review its responsibilities.`,
  );
}

if (warnings.length === 0) {
  console.log("Convention audit passed with no findings.");
} else {
  console.log(`Convention audit completed with ${warnings.length} warning(s).`);
}

if (strict && warnings.length > 0) {
  process.exitCode = 1;
}
