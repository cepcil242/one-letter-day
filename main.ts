// One Letter for Your Day
// make.fun bounty: u-puan-one-letter-for-your-day-e54e9c36
//
// Writes exactly one character, the letter "X", to /output/entry.txt.
// Node.js, standard library only, no network.
//
// Usage: ENTRY_OUTPUT_PATH=/output/entry.txt node main.ts
// (defaults to /output/entry.txt when the variable is unset)

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY_LETTER = "X";

// The letter: X for "exhausted". A day that leaves you crossed out —
// X is the mark of a day that ended you: vivid (bone-tired, done in),
// funny (X as in dead, cancelled, crossed off the list), true (an honest
// report of a day that drained you), and X is not the obvious initial for
// the word — it lands as the shape of exhaustion itself, not a generic
// mood. It also avoids the house examples A, F and Z, the most copied picks.

// =====================================================================
// Validation
//
// The entry is a single uppercase letter A-Z, chosen from the letters
// whose hidden word is documented in the comment above. Today that set
// is exactly one letter: X = "exhausted".
// =====================================================================

/** A single uppercase letter A-Z, and nothing else. */
const SINGLE_LETTER_PATTERN = /^[A-Z]$/;

/**
 * Letters whose hidden word is documented in this file.
 * Kept as an explicit allow-list so a letter can never slip in without
 * its word being written down next to it.
 */
const DOCUMENTED_LETTERS = new Set<string>(["X"]);

/**
 * Validate a candidate entry letter.
 *
 * Checks, in order, each with its own error so a bad entry fails loudly
 * and says exactly why:
 *   (a) it must be a string;
 *   (b) it must be exactly 1 code point (so no multi-char or emoji input);
 *   (c) it must match /^[A-Z]$/ — one uppercase letter A-Z;
 *   (d) it must be a letter whose hidden word is documented above.
 *
 * Throws on the first failing check; returns nothing on success.
 */
export function validateEntry(text: unknown): void {
  // (a) Type: the entry must be a string.
  if (typeof text !== "string") {
    throw new TypeError(
      `Entry must be a string, got ${typeof text}.`,
    );
  }
  // (b) Length: exactly 1 code point — [...text] counts code points,
  // so astral characters (emoji, etc.) count as one and still fail here
  // only if there is more than one of them; single astral chars fail (c).
  const codePoints = [...text];
  if (codePoints.length !== 1) {
    throw new Error(
      `Entry must be exactly 1 code point, got ${codePoints.length}.`,
    );
  }
  // (c) Shape: one uppercase letter A-Z.
  if (!SINGLE_LETTER_PATTERN.test(text)) {
    throw new Error(
      `Entry must be a single uppercase letter A-Z, got ${JSON.stringify(text)}.`,
    );
  }
  // (d) Documented: the letter's hidden word must be written down above.
  if (!DOCUMENTED_LETTERS.has(text)) {
    throw new Error(
      `Entry letter ${JSON.stringify(text)} has no documented hidden word.`,
    );
  }
}

function main(): void {
  validateEntry(ENTRY_LETTER);
  const out = process.env.ENTRY_OUTPUT_PATH ?? "/output/entry.txt";
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, ENTRY_LETTER, "utf8");
}

main();
