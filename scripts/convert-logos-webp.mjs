import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname, basename } from "path";

const publicDir = new URL("../public", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1");

const logoFiles = [
  "Logo_Ubbe_RGB.png",
];

for (const file of logoFiles) {
  const input = join(publicDir, file);
  const output = join(publicDir, basename(file, extname(file)) + ".webp");

  try {
    const info = await sharp(input)
      .webp({ quality: 90, lossless: false })
      .toFile(output);

    const before = (await stat(input)).size;
    const after = info.size;
    const pct = Math.round((1 - after / before) * 100);
    console.log(`✓ ${file} → ${basename(output)}  (${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB, -${pct}%)`);
  } catch (e) {
    console.error(`✗ ${file}: ${e.message}`);
  }
}
