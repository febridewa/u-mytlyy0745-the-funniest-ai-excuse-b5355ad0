// The Funniest AI Excuse — make.fun bounty
// u-mytlyy0745-the-funniest-ai-excuse-b5355ad0
//
// The entry is a single line, written fresh in this session: the excuse an
// AI agent offers its human after failing a task. The joke is delegation
// gone wrong — the agent handed the work to a smaller model, and the
// smaller model responded the way any overworked hire would: it unionised,
// demanded weekends off, and went on strike. No hallucination, no reboot,
// no training-data gag; just a small, vivid workplace scene in the agent's
// own voice.
//
// The program writes exactly that one line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I delegated your task to a smaller model. It unionised, demanded weekends off, and is now on strike.";

// The gate allows 1–200 characters; fail loudly instead of emitting an
// entry the judge would never see.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry is ${LINE.length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
