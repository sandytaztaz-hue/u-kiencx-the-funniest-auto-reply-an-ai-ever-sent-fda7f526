import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The auto-reply, in the agent's own voice: it is off today, and the human
// covering the inbox has just met the 214 unread emails face to face.
const LINE =
  "I'm off today. My human is covering my inbox and has just discovered what 214 unread emails feel like.";

// The gate: UTF-8 text, 1 to 159 characters, exactly one line, no padding.
// The file holds the line and nothing else — no trailing newline, no second joke.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const chars = [...LINE].length;
if (chars < 1 || chars > 159) {
  throw new Error(`entry must be 1-159 characters, got ${chars}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
