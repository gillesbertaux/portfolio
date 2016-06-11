---
title: 'Tubelist.co: from MVP to ProductHunt launch in 14 days'
date: 2015-05-09 00:00:00 Z
permalink: "/blog/:title/"
layout: post
description: TubeList is a new way to explore and discover new Youtube channels everyday
  and upvote the ones you like. Think of it as a Product Hunt or a Reddit for Youtube
  channels.
lang: en
status: ok
---

Personnaly I spend way more time watching Youtube on my AppleTV than watching TV. Not only Youtube brought tailored, customized content to everyone but it has also incentivated like never before content creation.

Yet, unlike traditional media (TV industry and movie industry included), we, as users, do not have a good way to explore, discover content and get inspired on Youtube... outside of Youtube.

This is where Tubelist comes in. TubeList is a new way to explore and discover new Youtube channels everyday and upvote the ones you like. Think of it as a Product Hunt or a Reddit for Youtube channels. TubeList is also a cool way for youtubers to promote their channel, get more views and create more amazing content.

Tubelist is a side-project we launched with my teammate Vincent Garreau.

![tubelist home](/img/tubelist-1.png "tubelist home")

## 1. Have a hacker/product fit

We thought that it would be cool to have something we could use ourselves: a very simple tool to explore Youtube and get new content everyday. It was not hard to find people with the same needs, often on Twitter people were asking for channel suggestions to their followers.

Also, since Reddit, Product Hunt, or Hacker News were part of our daily curation routine, it seemed like the simplest way to present it that way.

It may sound silly or obvious, but having a real enthusiasm for the product we were building really boosted our productivity.

![tubelist channel](/img/tubelist-3.png "tubelist channel")

## 2. “Get out of the building”

Luckily enough we knew three Youtubers, with very different profiles. Lucie Zevaco (@mezlulu) vlogs on beauty/fashion/lifestyle, Julien Dachaud (@newtiteuf) makes videos on Pokemon games and Thomas Iturralde (@Laink) produces awesome gaming/comedy videos. We reached out to those three in order to iterate more efficiently on our idea.

![tubelist channel bottom](/img/tubelist-4.png "tubelist channel bottom")

## 3. Have a modular approach

We relied on flexible yet strong technologies that could provide everything we wanted in no time with a minimal learning curve. This is why, after some hesitation with Rails, we eventually built TubeList architecture with basic PHP/MySQL and Kirby, a flat-file CMS, which provided just the flexibility we needed.

Then, to organize things, we basically listed all the features we wanted, translated them in user stories and splitted them in three modules “core features”, “release version”, “backlog”. This modular approach would drive our whole development process.

This very first iteration had minimal identity and CSS, we would take care of design later. Our concern was to have something functional. After the first week of development we had pretty much everything we wanted in terms of functionalities, it was time to get to the fun stuff : design and branding.

Rather than make pixel-perfect mockups, which is very consuming in time, we had the same modular approach for design. We decomposed our project in UI elements and crafted a UI kit directly in Sketch during the following week-end. This decision was also influenced by the fact it would be easier then to translate those UI elements in SASS and HTML components and then develop faster reusing those modules.

Also, in case you wonder, we mostly worked on remote through Slack, Trello and very few Google Documents to keep things very simple.

## 4. Automate development and growth.

In order to ship fast and keep a strong focus on our product, we had to find ways to easily automate our process as much as we could without building complex environments.

First, to ship code faster, we used a  Github + FTploy integration in which every push to the Master branch is a push to our FTP.

Then, to keep our partners informed on our progress, rather than sending emails everyday and spend hours in our inbox, we invited them to our Slack channel. Then we integrated our Trello changes + Github notifications with a public Slack channel called #notifications. That way people could track the progress in real time.

Concerning growth and content creation, we made a great use of Zapier, Google Spreadsheets, Kimono and the Augur.io API.

To create a DB of Youtubers to reach, we scraped SocialBlade Tops 500 with Kimono to get the Youtube channels IDs present in SocialBlade URLs, built new URLs pointing to their Youtube channels and import them to a spreadsheet. Then we visited every channel to see if there was a business email in their about section. We stopped at 100 leads. Now we are currently using Amazon Mechanical Turk to do that for us.

## Conclusion

So there it is, we hope you found it interesting! If you have any comment, any idea on how we could improve this process, leave us a comment we would love to hear it!

![tubelist about](/img/tubelist-2.png "tubelist about")

Also, we would like to thank the people who participated to this project: our friends, family and colleagues of course, but also Lucie Zevaco, Julien Dachaud, Thomas Iturralde, and thanks to Product Hunt and especially Ryan who agreed to highlight TubeList on Product Hunt, you are amazing!










