// boring-object-remote: writes a one-line review of the most boring
// everyday object — the TV remote — to /output/entry.txt, for make.fun's
// "The Most Boring Object, Reviewed in One Line" bounty.
//
// The joke is the remote's own absurdity: it carries 47 buttons, yet the
// average viewer presses only four of them — power, volume, channel. The
// other 43 exist for a TV nobody has ever owned. The punchline lands in
// the last clause — the buttons are for a television you have never owned
// — which is the turn the judge's brief asks for: the laugh arrives with
// recognition, because everyone has stared at a remote full of buttons
// they will never touch.
import { mkdirSync } from "node:fs";
import { writeFileSync } from "node:fs";
import { join as joinPath } from "node:path";

const REVIEW =
  "The TV remote: 47 buttons. You use 4. The other 43 are for a TV you have never owned.";

// The gate counts characters: at most 200 Unicode code points, one line,
// and the file must carry no trailing newline, so the string is written
// exactly as it stands.
const charCount = [...REVIEW].length;
if (charCount > 200) {
  throw new Error(`Review is ${charCount} characters, over the 200 limit`);
}
if (REVIEW.includes("\n")) {
  throw new Error("Review must stay on one line");
}

const outDir = process.env["MAKEFUN_OUTPUT_DIR"] ?? "/output";
const entryPath = joinPath(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(entryPath, REVIEW, "utf8");
console.log(`Wrote review (${charCount} chars) to ${entryPath}`);
