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
   1. [The concept of Air](#air-concept)
   3. [Embracing Eisenberg](#embracing-eisenberg)
   2. [Topdeck Mode](#topdeck-mode)
4. [Card Notes - Core](#card-notes-core)
   1. [Air](#air-cards)
      1. [Sleight of Hand](#sleight-of-hand)
      2. [Consider](#consider)
      3. [Opt](#opt)
      4. [What to actually cast when you have Air options](#what-to-actually-cast-when-you-have-air-options)
   2. [Single Target Removal](#single-target)
      1. [Fiery Impulse](#fiery-impulse)
   3. [Grave Fillers/Card Selection](#picklock-prankster)
   4. [Delve Spells](#delve-spells)
   5. [Creatures](#creatures)


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
I understand that mulliganing leaves your initial options slimmer, but unless you are against a deck with hand disruption (eg: [Thoughtseize](https://scryfall.com/card/2xm/109/thoughtseize) or [Duress](https://scryfall.com/card/usg/132/duress)), you can and _should_ aggressively mulligan to be able to build your plan.

The number one issue I see people doing is keeping hands that seem great in the long run (+2 Delve Spells in Hand), or having a lot of removal without knowing the opposing matchup.
On the other hand, I tend to see people mulliganing away hands that are perfectly reasonable and due to confirmation bias (or failure to believe in the [quantum state](#quantum-state) the deck offers), mulligan away Air hands.

There's a [specific section]({{ site.github.url }}{% post_url 2024-06-04-hand-examples %}) to dive through initial hands.

### What to expect from a 7 hander

You want to ideally have 2-3 lands with at least one of them being able to give red mana.
You want some Air.
Removal is fine but not mandatory.
You don't want delve spells.
Phoenixes are ok as long as you can ship them away in a way that isn't too taxing (Shredder is cool, Lightning Axe works, but you sort of mulliganed to 6. Cards like [Prismari Command](https://scryfall.com/card/stx/214/prismari-command) or [Izzet Charm](https://scryfall.com/card/rvr/190/izzet-charm) can do this proactively but come at a cost.)

One land hands are fine game 1 if you have Air and the land can give both colors of mana. Be mentally prepared to stumble sometimes.

### Ship it. Do it often.

You have Treasure Cruise to rebuild. Following the logic that there are many games where you need to discard during cleanup, you can and should be able to rebuild from a smaller starting hand.
[Pieces](https://scryfall.com/card/soi/78/pieces-of-the-puzzle) isn't as played as it used to be, and [EI](https://scryfall.com/card/stx/186/expressive-iteration) is banned, so you can no longer be a complete degenerate and hard mulligan for them to make sure you have game against anything, but you can still rely on the fact that your deck functions lightly.
Also, Phoenix is a deck that sometimes stumbles it's engine (over time you'll learn to make sure it happens as few times as possible) and it can enter topdeck.
Being on topdeck obviously isn't great, but if there's a deck that's capable of clawing it's way out of it, it's Phoenix.

## Quantum State

I couldn't find a better term to express this concept.
It's the most important thing to understand about the deck, the hardest part to feel comfortable with, and why I think, honestly, that Phoenix isn't as hard to pilot as some people think.
You just need to adapt to this concept and play around it. Be water my friend.

>The cards in your hand might not be there.
>The cards on the top of your deck might not be there.

The only thing you know is what's on the grave, what might be going to the grave, and eventually what's exactly on the bottom of your library since you placed it there.
Playing with this in mind, understand that every card state is [mutable to a certain extent](#embracing-eisenberg).

### Air

Air are all the cantrips you have in your deck. All 12 of them. 30% of your spells are Air.
They're nothing and everything at the same time and are what makes your deck actually function.

Air in your hand can be a land, a creature, a piece of removal. It can even be more Air.
It can become a cruise and multiply into more Air, or whiff into 3 lands.
As long as you have Air, you have control in your game, and it's outcome.
It's due to this Air that you can recycle your hands and bring your Phoenixes back by just using mana but not wasting cards.

### Embracing Eisenberg

The cards in your hand can be swapped with connive triggers from Ledger Shredder, or be sent away with a Lightning Axe. You can loot them with a Charm or Command.

Every single card in the top of your deck can be either there, go to your hand, be in your grave or on the bottom of the library.
You can often look at it and decide upon it, unlike Schrodinger's Cat, and take an informed decision.

Sometimes you need to Embrace the Quantum state and let the wheel turn.
Sometimes you will Cruise, sometimes you will Free the Fae/Pieces.
Sometimes you go hard mode and you play with Air, effectively not knowing the card that's underneath and wasting all of that precious resource, making your hand cumbersome, while you dig for a specific card.

Whenever you send a card away, the probability that the card on top can mutate into a copy of one of them diminishes, but at the same time, you need to play around the fact that you will eventually see it. This is the push and pull the deck offers, and you eventually need to embrace it if you want to be able to play it to its fullest.

It's midgame and you need to find a counterspell. You have a Free the Fae in hand.
You might find the counter, you might find something else.
You might bin a Phoenix, you might bin that Hall of the Storm Giant or Crackling Drake too.

Playing around what is, what was and most importantly what might be is the most important thing in the whole deck, and the sooner you realize that, and feel confortable navigating the aether of unknown one spell after the other so the little Bird can be set free, the sooner you can tell whether Phoenix is the deck for you or not.

## Card Notes - Core
### Air
Air, or the card selection cantrips, are what allows this deck to exist. You Breathe through it, and more other than not it stokes the flame for Arclight to come back to life.

Traditionally we used to have only 8 good cantrips, with some people trying out cards like [Crash Through](https://scryfall.com/card/m19/133/crash-through) or [Quicken](https://scryfall.com/card/gpt/31/quicken) to increase their density but often giving up due to the fact that you couldn't manipulate anything.

#### Sleight of Hand
Reprinted in Wilds of Eldraine, it's arguably the worse of the trio, being a sorcery, but it comes with a few notable upsides.
Being able to actually choose from 2 cards is quite different than seing the top, shipping it, and then getting the unknown.
Also, it's not a draw. It goes over [Narset](https://scryfall.com/card/cmm/853/narset-parter-of-veils) and it won't trigger [Sheoldred](https://scryfall.com/card/dmu/107/sheoldred-the-apocalypse)

#### Consider
The best of the bunch. Fills your grave faster.
Allows your Fiery Impulse to go online with a single cast.
It gives information to the opponent, however.

#### Opt
The OG. Humble in it's inception, possibly the prettiest card in the whole 75.
Phoenix is [the only deck that should play opt](https://www.channelfireball.com/article/Stop-Playing-Opt-Why-Opt-is-a-Bad-MTG-Card/78c85aa3-646a-4079-80dd-35f112883145/?utm_source=clipboard&utm_campaign=infinite&utm_medium=social&utm_content=magic)

#### What to actually cast when you have Air options?
Sleight is usually better to just send away at the beginning, if there's no fear of repercussion on the opponents turn, since it's a sorcery.
Beyond this point, Sleight is better when you're looking for a very specific card, so that if you miss, you can still take the best of the 2 options given.
>Imagine it's turn 2 and you only have a slow land in hand. You want to use that land for next turn. You Opt. The card on top is another Opt.
>Do you keep it, and stumble your land drop this turn allowing you to keep looking for lands next turn with this new Opt, or do you bottom it, not knowing whether you will hit an actual hand? What if you hit a Cruise you can't possibly cast anytime soon? If you use Sleight of Hand in situations like these, you can take an informed decision. The less mana you have, the more value Sleight usually brings to the table.

Consider is always the best choice, unless you want to save it so that you can [fork it](https://scryfall.com/card/otc/227/galvanic-iteration).
The reason I say it's the best choice stems from the fact that you are generating mana for delve spells with it, and potentially binning Phoenixes with it.

It's also better to cast earlier in the game as the sooner in the game it is, the more often you will send spells away, and losing that graveyard equity is detrimental for you.
If I cast an Opt right at the beginning of the game and see a Phoenix, I'll probably send it down, as there's other cards I need right away. I won't ever see that Phoenix again (unless my opponent has shuffle effects). 

The only issue with casting Consider in the beginning is if you bin something that signals something. Like, say, a Ledger Shredder in the first turn. If that happens, you are probably really desperate for lands, and savvy opponents might be able to pray on that.

### Single Target Removal


### Grave Fillers/Card Selection
### Delve Spells
### Creatures
