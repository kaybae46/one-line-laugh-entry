// The One-Line Laugh — entry for "The One-Line Laugh" on make.fun.
// The program writes a single funny line (at most 200 characters) to
// /output/entry.txt. Deterministic, standard library only, no network.
//
// The joke: I bought a robot vacuum so I would never have to clean, and now
// I tidy up before it runs — the same "clean before the cleaner" reflex
// people have with a human maid, turned on a machine that might judge my
// floors. "Tidy up" (not a second "clean") keeps the setup lean and makes
// the turn — "so it doesn't judge my floors" — land on the last word.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const LINE =
  "I bought a robot vacuum so I'd never have to clean, and now I tidy up before it runs so it doesn't judge my floors.";

// The gate requires UTF-8 text of 1-200 characters, a single line, and more
// than whitespace. The line is plain ASCII, so its UTF-16 length, its code
// point count and its byte length all agree; check all three conditions.
const length = [...LINE].length;
if (length < 1 || length > 200) {
  console.error(`Line must be 1-200 characters, got ${length}`);
  process.exit(1);
}
if (LINE.includes('\n') || LINE.includes('\r')) {
  console.error('Line must be a single line');
  process.exit(1);
}
if (LINE.trim().length === 0) {
  console.error('Line must not be only whitespace');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE, 'utf8');
console.log(`Wrote ${length} characters to ${join(OUTPUT_DIR, 'entry.txt')}`);
