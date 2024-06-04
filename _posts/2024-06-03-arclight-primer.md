---
layout: post
title: "Arclight Primer!"
author: "Roughmar"
categories: primer
tags: [primer]
image: opt.webp
---

## Table of Contents

1. [Introduction](#introduction)
   1. [Who is this for?](#who-is-this-for)
   2. [Why play Arclight?](#why-play-arclight)
   3. [Classical Deck Structure](#classical_structure)
2. [Mulligans](#mulligans)
   1. [What to expect from a 7 hander](#7hander)
   2. [Ship it. Do it often.](#aggro-mulligan)
3. [Quantum State](#quantum-state)
4. [Card Notes](#card-notes)
   1. [Cantrips](#cantrips)
   2. [Single Target Removal](#single-target)
   3. [Picklock Prankster](#picklock-prankster)
   4. [Delve Spells](#delve-spells)
   5. [Treasure Cruise](#treasure-cruise)
   6. [Turn Package](#turn-package)
   7. [Creatures](#creatures)


## Introduction

### Who is this for?

The point of this guide is to act both as a facilitator to new people coming to the format and the deck, as well as the old school dudes who want to check up on ideas of both cards and concepts.
The main reason I decided to write this up was due to cycle of new players purchasing this deck as they thought it was one thing, and immediately discarding it, as they found it was (possibly) another.

I won't be constantly updating this with a list, or a sideboard guide, and the main goal about this document is to hopefuly provide you with the tools to be able to craft those yourself, depending on your goals and meta expectations.

### Why play Arclight?

Over the relative small time Pioneer has been up, Phoenix has stood firmly in the upper tier echelons.
Not as powerful as the modern version during Hogaak Summer, the pioneer version has one thing that the modern version never had - access to [Treasure Cruise](https://scryfall.com/card/otc/120/treasure-cruise)

On previous iterations of the 75, [Pieces of the Puzzle](https://scryfall.com/card/soi/78/pieces-of-the-puzzle) (we will talk about this card [later](#pieces-of-the-puzzle)) and [Expressive Iteration](https://scryfall.com/card/stx/186/expressive-iteration) were the main pieces that kept the deck rolling and sort of helped create the notion that Phoenix was mostly all about the midrange with the 2 for 1's held together by the inevitability of an extra turn(s).
Later on, bans happened, [the Apocalypse](https://scryfall.com/card/dmu/107/sheoldred-the-apocalypse) happened, and Phoenix was on an all time low.
Wilds of Eldraine changed this with [Picklock Prankster](https://scryfall.com/card/woe/64/picklock-prankster-free-the-fae) and the reprint of [Sleight of Hand](https://scryfall.com/card/woe/67/sleight-of-hand).


When trying to describe what Phoenix is, most people have it wrong. Some people say it's a combo deck, others will say control. After some time playing the format, some player's will say it's an Aggro/Tempo deck.

It's not.

>Phoenix is a Storm Deck(...) I see the deck similar to Storm/Scapeshift where you make land drops and develop yourself until you get enough resources to cast Timewalk and just win - _Daniel Goetschel_

The concept of Phoenix is extremely straightforward since its inception: your oponents cast their threats, you cast your spells to remove them, and eventually they are topdecking while you still have a full grip and go literally over the top with a flying armada and potentially extra turns.

Phoenix is mostly all about the grave. The namesake wants to be there, cruise wants to feed from it, your removal needs it.
Like most broken decks, trying to beat phoenix the conventional way doesn't usually work, but the deck is very easily hated on. We'll cover what you can expect to go against post board, and what to do against it, [here](#problem-cards).


### Classical Structure

Phoenix is a deck that keeps evolving over new entrances on the card pool, as well as the meta, but the bread and butter doesn't change much:

```bash
Main Deck/
├── 8 Creatures                     # 4 Arclight Phoenix
|  ├── 4 Ledger Shredder            # Best creature overall
|  └── 4 Thing in the Ice           # The OG, meta dependant
├── 12 Cantrips                     # Air. to breathe
├── 8 Single target removal         # Fire. so they don't
├── 4 Grave Fillers/Card Selection  # Gas for cruise, binning phoenixes
|  ├── Pieces of the Puzzle         # Classic best worst card
|  └── Picklock Prankster           # New kid on the block, here to stay
├── 5 (+1 Fork) Delve Spells        # Seems too specific. (It isn't)
|  ├── 3-4 Treasure Cruise          # Water. So they choke
|  └── Turns Package                # The thing that wins you game one
|     ├── 1-2 Temp. Trespass        # The stuff that leaves most often
|     └── 1-2 Galv. Iteration       # Sometimes this stays
├── 17-19 Lands                     # Earth. Cause I need to put it somewhere
|  └── 2 MDFC                       # More than 2 is usually trolling                     
├── 3 Flex Slots                    # Usually aren't that flexxy tho:
|  ├── 2 Spell Pierce               # It's not a control deck
|  └── 1 Brazen Borrower            # But you can always try to make it act like one.
```

## Mulligans

This is the part you seriously need to read if you are starting with the deck.
The whole thing about Phoenix is understanding that the match, at least in game 1, is all about spending your mana, building up for future Treasure Cruises, all the while mantaining  the battlefield in a manageable state.
I understand that mulliganing leaves your initial options slimmer, but unless you are against a deck with hand disruption (eg: [Thoughtseize](https://scryfall.com/card/2xm/109/thoughtseize) or [Duress](https://scryfall.com/card/usg/132/duress)), you can and should aggressively mulligan to be able to build your plan.

The number one issue I see people doing is keeping hands that seem great in the long run (+2 Delve Spells in Hand), or having a lot of removal without knowing the opposing matchup.
On the other hand, I tend to see people mulliganing away hands that are perfectly reasonable and due to confirmation bias (or failure to believe in the [quantum state](#quantum-state) the deck offers), mulligan away Air hands.

There's a [specific section]({{ site.github.url }}{% post_url 2024-06-04-hand-examples.md %})