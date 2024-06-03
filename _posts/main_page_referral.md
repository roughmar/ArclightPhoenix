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
   2. [Why is it ok to be agressive at mulliganing against certain matchups](#aggro-mulligan)
3. [Card Notes](#card-notes)
   1. [Cantrips](#cantrips)
   2. [Single Target Removal](#single-target)
   3. [Picklock Prankster](#picklock-prankster)
   4. [Delve Spells](#delve-spells)
   5. [Treasure Cruise](#treasure-cruise)
   6. [Turn Package](#turn-package)
   7. [Creatures](#creatures)
4. [Features](#features)
   1. [Design Considerations](#design-considerations)
   2. [Disqus](#disqus)
   3. [Google Analytics](#google-analytics)
   4. [RSS Feeds](#rss-feeds)
   5. [Social Media Icons](#social-media-icons)
   6. [MathJax](#mathjax)
   7. [Syntax Highlighting](#syntax-highlighting)
   8. [Markdown](#markdown)
5. [Everything Else](#everything-else)
6. [Contributing](#Contributing)
7. [Questions?](#questions)
8. [Credits](#credits)
9. [License](#license)

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
|  ├── 4 Shredder                   # Best creature overall
|  └── 4 Thing in the Ice           # The OG, meta dependant
├── 12 Cantrips                     # Air. to breathe
├── 8 Single target removal         # Fire. so they don't
├── 4 Grave Fillers/Card Selection  # Gas for cruise, binning phoenixes and threat prep
|  ├── Pieces of the Puzzle         # Classic best worst card
|  └── Picklock Prankster           # New kid on the block, here to stay
├── 5 (+1 Fork) Delve Spells        # Seems too specific. [It isn't](#delve-spells).
|  ├── 3-4 Treasure Cruise          # Water. So they choke
|  └── Turns Package                # The thing that wins you game one
|     ├── 1-2 Temp. Trespass        # The stuff that leaves most often game 2
|     └── 1-2 Galv. Iteration       # Sometimes this stays
├── 17-19 Lands                     # Earth. Cause I need to put it somewhere
├── 3 Flex Slots                    # Which are usually the same culprits
|  ├── 2 Spell Pierce               # It's not a control deck
|  └── 1 Brazen Borrower            # But you can always try to make it act like one.
```

### Starting From Scratch

To completely start from scratch, simply delete all the files in the `_posts`, `assets/img`, and `pages` folder, and add your own content. You may also replace the `README.md` file with your own README. Everything in the `_data` folder and `_config.yml` file can be edited to suit your needs. You may also change the `favicon.ico` file to your own favicon.

## Configuration

### Sample Posts

Visit the [the demo site](https://lenpaul.github.io/Millennial/) to find sample posts that show what different types of text formatting look like. You can find these posts in the `_posts` folder, which show what the best practices for setting up your own site are.

### Site Variables

To change site build settings, edit the `_config.yml` file found in the root of your repository, which you can tweak however you like. More information on configuration settings and plugins can be found on [the Jekyll documentation site](https://jekyllrb.com/docs/configuration/). This is also where you will be able to customize the title, description, and the author/owner of your site.

If you are hosting your site on GitHub Pages, then committing a change to the `_config.yml` file will force a rebuild of your site with Jekyll. Any changes made should be viewable soon after. If you are hosting your site locally, then you must run `jekyll serve` again for the changes to take place.

In the `settings.yml` file found in the `_data` folder, you will be able to customize your site settings, such as setting Disqus comments, Google Analytics, what shows up in your menu, and social media information.

### Adding Menu Pages

The menu pages are found in the `menu` folder in the root directory, and can be added to your menu in the `settings.yml` file.

### Posts

You will find example posts in your `_posts` directory. Go ahead and edit any post and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention of `YYYY-MM-DD-name-of-post.md` and includes the necessary front matter. Take a look at any sample post to get an idea about how it works. If you already have a website built with Jekyll, simply copy over your posts to migrate to Millennial.

### Layouts

There are two main layout options that are included with Millennial: post and page. Layouts are specified through the [YAML front block matter](https://jekyllrb.com/docs/frontmatter/). Any file that contains a YAML front block matter will be processed by Jekyll. For example:

```
---
layout: post
title: "Example Post"
---
```

Examples of what posts looks like can be found in the `_posts` directory, which includes this post you are reading right now. Posts are the basic blog post layout, which includes a header image, post content, author name, date published, social media sharing links, and related posts.

Pages are essentially the post layout without any of the extra features of the posts layout. An example of what pages look like can be found at the [documentation page](https://lenpaul.github.io/Millennial/pages/documentation.html).

In addition to the two main layout options above, there are also custom layouts that have been created for the [home page](https://lenpaul.github.io/Millennial/) and the [contacts page](https://lenpaul.github.io/Millennial/pages/contact.html). These are simply just page layouts with some [Liquid template code](https://shopify.github.io/liquid/). Check out the `index.html` file in the root directory for what the code looks like.

### YAML Front Block Matter

The recommended YAML front block is:

```
---
layout:
title:
author:
categories:
tags: []
image:
---
```

`layout` specifies which layout to use, `title` is the page or post title, `categories` can be used to better organize your posts, `tags` are used when generating related posts based on the topic of the post, and `image` specifies which images to use. Have a look at some posts in the `_posts` directory to see how these variables are set.

## Features

### Design Considerations

Millennial was designed to be a minimalist theme in order for the focus to remain on your content. For example, links are signified mainly through an underline text-decoration, in order to maximize the perceived affordance of clickability (I originally just wanted to make the links a darker shade of grey).

### Disqus

Millennial supports comments at the end of posts through [Disqus](https://disqus.com/). In order to activate Disqus commenting, set `disqus.comments` to true in the `_data/settings.yml` file. If you do not have a Disqus account already, you will have to set one up, and create a profile for your website. You will be given a `disqus_shortname` that will be used to generate the appropriate comments sections for your site. More information on [how to set up Disqus](http://www.perfectlyrandom.org/2014/06/29/adding-disqus-to-your-jekyll-powered-github-pages/).

### Google Analytics

It is possible to track your site statistics through [Google Analytics](https://www.google.com/analytics/). Similar to Disqus, you will have to create an account for Google Analytics, and enter the correct Google ID for your site under `google-ID` in the `settings.yml` file. More information on [how to set up Google Analytics](https://michaelsoolee.com/google-analytics-jekyll/).

### RSS Feeds

Atom is supported by default through [jekyll-feed](https://github.com/jekyll/jekyll-feed). With jekyll-feed, you can set configuration variables such as 'title', 'description', and 'author', in the `_config.yml` file.

RSS 2.0 is also supported through [RSS auto-discovery](http://www.rssboard.org/rss-autodiscovery). The `rss-feed.xml` file (based on the template found at [jekyll-rss-feeds](https://github.com/snaptortoise/jekyll-rss-feeds)) that the feed path points to when using RSS 2.0 is automatically generated based on the appropriate configuration variables found in `_data/settings.yml`.

To use RSS 2.0, ensure the following is done:

* Uncomment the last two lines in the `_config.yml` file.

* In `_data/settings.yml`, under 'social', comment out the rss-square that points to `feed.xml`, and uncomment the rss-square that points to `rss-feed.xml`.

* In `_includes/head.html`, comment out `{% feed_meta %}` and uncomment the line under the RSS 2.0 comment.

### Social Media Icons

All social media icons are courtesy of [Font Awesome](http://fontawesome.io/). You can change which icons appear, as well as the account that they link to, in the `settings.yml` file in the `_data` folder.

### MathJax

Millennial comes out of the box with [MathJax](https://www.mathjax.org/), which allows you to display mathematical equations in your posts through the use of [LaTeX](http://www.andy-roberts.net/writing/latex/mathematics_1).

### Syntax Highlighting

Millennial provides syntax highlighting through [fenced code blocks](https://help.github.com/articles/creating-and-highlighting-code-blocks/). Syntax highlighting allows you to display source code in different colors and fonts depending on what programming language is being displayed. You can find the full list of supported programming languages [here](https://github.com/jneen/rouge/wiki/List-of-supported-languages-and-lexers). Another option is to embed your code through [Gist](https://en.support.wordpress.com/gist/).

### Markdown

As always, Jekyll offers support for GitHub Flavored Markdown, which allows you to format your posts using the [Markdown syntax](https://guides.github.com/features/mastering-markdown/). Examples of these text formatting features can be seen below. You can find this post in the `_posts` directory as well as the `README.md` file.

## Everything Else

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll's GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: http://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/

## Contributing

If you would like to make a feature request, or report a bug or typo in the documentation, then please [submit a GitHub issue](https://github.com/LeNPaul/Millennial/issues/new). If you would like to make a contribution, then feel free to [submit a pull request](https://help.github.com/articles/about-pull-requests/) - as a bonus, I will credit all contributors below! If this is your first pull request, it may be helpful to read up on the [GitHub Flow](https://guides.github.com/introduction/flow/) first.

Millennial has been designed as a base for users to customize and fit to their own unique needs. Please keep this in mind when requesting features and/or submitting pull requests. Some examples of changes that I would love to see are things that would make the site easier to use, or better ways of doing things. Please avoid changes that do not benefit the majority of users.

## Questions?

This theme is completely free and open source software. You may use it however you want, as it is distributed under the [MIT License](http://choosealicense.com/licenses/mit/). If you are having any problems, any questions or suggestions, feel free to [tweet at me](https://twitter.com/intent/tweet?text=My%question%about%Millennial%is:%&amp;via=paululele), or [file a GitHub issue](https://github.com/lenpaul/Millennial/issues/new).

## Credits

### Creator

#### Paul Le

* [www.lenpaul.com](http://lenpaul.com)

* [Twitter](https://twitter.com/paululele)

* [GitHub](https://github.com/LeNPaul)

### Contributors

* [b-morawiec](https://github.com/b-morawiec)

* [JainVikas](https://github.com/JainVikas)

* [mschaeffner](https://github.com/mschaeffner)

* [cfe316](https://github.com/cfe316)

* [JeremyGonzales](https://github.com/JeremyGonzales)

### Icons + Demo Images

* [Death to Stock](https://deathtothestockphoto.com/)

* [Font Awesome](http://fontawesome.io/)

### Other

* [Jekyll](https://jekyllrb.com/)

* [Free Code Camp](https://www.freecodecamp.org)

* [Khan Academy](https://www.khanacademy.org/)

## License

Open sourced under the [MIT license](https://github.com/LeNPaul/Millennial/blob/gh-pages/LICENSE.md).