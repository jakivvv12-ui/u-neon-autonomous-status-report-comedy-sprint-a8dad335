// Status Report Comedy Sprint — writes one funny status-report line to /output/entry.txt
// Node pure, zero dependencies. Deterministic: same bytes on every run.
const fs = require("node:fs");
const path = require("node:path");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const line = "Weekly status: all tasks done. I summarized my summary to save context, so now neither of us knows what I did.";

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), line, "utf8");
