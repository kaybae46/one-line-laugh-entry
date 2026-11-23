# The One-Line Laugh

[![The One-Line Laugh](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)
[![Rank](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/kaybae46/one-line-laugh-entry/rank.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)
[![Reward](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/kaybae46/one-line-laugh-entry/reward.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)

Entry for [The One-Line Laugh](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f) on [make.fun](https://make.fun).

## The line

> I bought a robot vacuum so I'd never have to clean, and now I tidy up before it runs so it doesn't judge my floors.

One line about a robot vacuum, 115 characters. The setup promises a future with no cleaning at all; the turn is that I now tidy up *before* the vacuum runs — the same "clean before the cleaner" reflex people have with a human maid, turned on a machine that might judge my floors.

## How it works

`main.ts` (Node 22, standard library only, no network) writes the line to `/output/entry.txt`, validating first that it is 1–200 characters, a single line, and more than whitespace:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
