import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Run from the newly downloaded project, targeting your existing Git checkout.
const source = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const argument = process.argv[2];
if (!argument) {
  console.error("Usage: node scripts/migrate.mjs /absolute/path/to/existing/exeter-circular");
  process.exit(1);
}
const target = path.resolve(argument);
if (!fs.existsSync(path.join(target, ".git"))) {
  console.error("The target must be your existing Git project containing .git. Nothing was changed.");
  process.exit(1);
}
if (source === target || source.startsWith(target + path.sep) || target.startsWith(source + path.sep)) {
  console.error("Keep the new download and existing project in separate folders. Nothing was changed.");
  process.exit(1);
}
const stamp = new Date().toISOString().replace(/[:.]/g, "-");
const backup = path.join(target, ".migration-backups", stamp);
const copyEntries = ["src", "public", "scripts", "package.json", "package-lock.json", "tsconfig.json", "next-env.d.ts", "next.config.ts", "vercel.json", "README.md", ".gitignore"];
function backupEntry(relative) {
  const old = path.join(target, relative);
  if (!fs.existsSync(old)) return;
  const destination = path.join(backup, relative);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.cpSync(old, destination, { recursive: true });
}
// Back up every entry we are about to overwrite. Do not include .git or installed dependencies.
for (const entry of copyEntries) backupEntry(entry);
// Retire only the four known files from the original static export.
for (const entry of ["public/index.html", "public/app.js", "public/style.css", "public/content.json"]) {
  const old = path.join(target, entry);
  if (!fs.existsSync(old)) continue;
  backupEntry(entry);
  fs.unlinkSync(old);
}
for (const entry of copyEntries) {
  fs.cpSync(path.join(source, entry), path.join(target, entry), { recursive: true });
}
// Preserve any existing local ignore rules, then add the new project's rules.
const previousIgnore = path.join(backup, ".gitignore");
if (fs.existsSync(previousIgnore)) {
  const oldRules = fs.readFileSync(previousIgnore, "utf8");
  fs.appendFileSync(path.join(target, ".gitignore"), "\n# Previous project rules\n" + oldRules + "\n");
}
console.log("Next.js migration complete. Your .git folder and Git remote were preserved.");
console.log("Previous files were backed up to: " + backup);
console.log("Next: open the existing project folder, run npm install, then npm run dev.");
console.log("Before pushing, verify Vercel uses Next.js with no public Output Directory override.");
