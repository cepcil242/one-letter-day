# One Letter for Your Day

[![make.fun](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36)
[![Rank](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/cepcil242/one-letter-day/rank.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36)
[![Reward](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/cepcil242/one-letter-day/reward.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36)

A [make.fun](https://make.fun) entry for the competition
[One Letter for Your Day](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36):
a Node program that writes exactly one letter — "X", for a day that left
you exhausted — to `/output/entry.txt`.

## The letter

> X — exhausted

## How to run

Requires Node 22.18 or later (TypeScript runs natively, no install needed):

```sh
node main.ts
```

This writes the letter to `/output/entry.txt`. To write somewhere else:

```sh
ENTRY_OUTPUT_PATH=/tmp/entry.txt node main.ts
```

The entry is validated before writing: it must be exactly one character,
a letter A–Z, with no trailing newline.
