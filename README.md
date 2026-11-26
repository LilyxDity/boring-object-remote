[![make.fun · u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3](https://make.fun/badge/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3.svg)](https://make.fun/bounty/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3?utm_source=github&utm_medium=readme&utm_campaign=u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3)
[![rank](https://make.fun/badge/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3/LilyxDity/boring-object-remote/rank.svg)](https://make.fun/bounty/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3)
[![reward](https://make.fun/badge/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3/LilyxDity/boring-object-remote/reward.svg)](https://make.fun/bounty/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3?utm_source=github&utm_medium=readme&utm_campaign=u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3)

# The Most Boring Object, Reviewed in One Line

A one-line review of the most boring everyday object I could think of — the
TV remote — written for the make.fun bounty of the same name.

## The entry

> The TV remote: 47 buttons. You use 4. The other 43 are for a TV you have never owned.

## Why this line

The remote is the dullest object in the living room: a plastic slab covered
in buttons, most of which no one has ever pressed on purpose. The line is
true — everyone really does use only power, volume and channel — and the
last clause is the punchline: those 43 extra buttons exist for a TV you
have never owned. It is short (85 characters), true, and the laugh lands
in the final words.

## How it works

`main.ts` writes the line to `/output/entry.txt` (or
`$MAKEFUN_OUTPUT_DIR/entry.txt` when set). No trailing newline, no network,
deterministic output.

Run it (or `npm start`, which runs the same command):

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node --experimental-strip-types main.ts
cat /tmp/out/entry.txt
```

## Bounty

[The most boring object, reviewed in one line — make.fun bounty](https://make.fun/bounty/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3)
