---
title: 2016 03 18 Food Slack Bot Zapier
---

I've been using Zapier intensively for a while now and I built some pretty advanced cool integrations with all sort of tools. Most of them were business related but I wanted to show you how we hacked some fun stuff for our own offices at [Livestorm](https://livestorm.co).

Here's the basic story I was aiming for:

_Every day at noon, I pick a random item in a pre-built restaurant DB. Then the Slack bot sends a new message in our #notifications channel containing the restaurant info._

Here are the main steps to build the Slack Bot:

1. Scrap a viable source of restaurants
2. Clean the data
3. Start the Zapier integration
4. Insert a small JS script to randomize
5. Send the message in Slack

## Find a reliable source of data

First things first, let's find some data source worth scrapping. I figured that Yelp was our best choice but you might have some local platform in your area that's more accurate.

I want restaurants with the following criterias:

- Delivery service (Not every restaurant in France offers that service...)
- Good restaurants
- Reasonably cheap
- Close to the office
- Open at noon

Go to Yelp and applied those criterias. Then copy paste the URL once the criterias are applied.

![yelp-criterias](/img/yelp.png "yelp screenshot")

## Crawl the source using [Import.io](http://import.io) & Store in Google Spreadsheet

I am not going to do a step by step tutorial on Import.io since it's pretty straightfroward. Basically, pick the Crawler option and then go to your Yelp URL. Each data type will be a column in the final CSV generated.

Pick the data you need, here I selected:

- Title
- Pricing
- Type
- Rating
- Address
- Phone number

![import.io](/img/importio.png "import.io screenshot")

That's it! Then just run the crawler. Now import the whole thing to Google Spreadsheet:

![spreadsheet data](/img/sheet.png "spreadsheet data")

Here I over used the `=REGEXEXTRACT()` formula to clean it. Make sure you have the HTML of each item in a column in the list so that you can extract every element you want.

### The Zapier integration

Almost there. First, since we want the script to run every day at noon, we'll start with the Sheduling built-in app from Zapier:

![schedule zapier](/img/schedule.png "schedule zapier")

Let's insert a small Javascript snippet to trigger a random number. Here we trigger something between 1 and 331 because I have 331 entries in my database:

![javascript zapier](/img/zapier-js.png "javascript zapier")

Then we link our spreadshseet. We want to look up for that random value, we will be reusing the matching row's data later:

![lookup sheet zapier](/img/zapier-lookup-sheet.png "lookup sheet zapier")

Final touch, we create our Slack message:

![slack zapier](/img/slack-zapier.png "slack zapier")

And voilà. Here's how it looks every day at noon:

![slack message](/img/slack-msg.png "slack message")

To be 100% honest we stopped using it at [Livestorm](https://livestorm.co) because the data we scraped was not as reliable as we thought. So try to get some real good up to date data.

Next step will be: cleaner data and a basic hosted randomization engine server-side.

Hope that helps.

