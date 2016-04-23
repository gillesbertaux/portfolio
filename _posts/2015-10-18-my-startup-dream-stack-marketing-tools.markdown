---
layout: post
title: "SaaS Marketing Startup Stack #1"
description: This is the first part of several posts in which you’ll find a variety of tools in every field whereas it is marketing, tech, design or even operations (HR, admin, etc.).
date: 2015-10-18
permalink: /blog/:title/
lang: en
status: ok
cover: gillesbertaux.com/img/segment.png
---

I just wanted to list of all the SaaS tools I would love to use if my resources were limitless. This is the first version. I'll make another list as my usage evolves.

This is the first part of several posts in which you’ll find a variety of tools in every field whereas it is marketing, tech, design or even operations (HR, admin, etc.).

So, the marketing stack, that’s an easy one. During my last year at Mention I learned to use almost a dozen of marketing tools, and maybe tested twice as many, so I have pretty good idea of what tools could fit my needs.

### For data collection: Segment

I discovered [Segment](//segment.com) with Mention and I will probably bring it with me everywhere I go from now on. Segment is just incredibly powerful.

Briefly, Segment is a « data hub », a unified API fr tracking. It provides an API to push front-end or server-side standardized events from your app to Segment and then to any software that has a Segment integration (+100 integrations).

For example, if you send an « Upgrade » event to Segment, you’ll be able to find it on your analytics tool, emailing software, CRM or even Twitter Ads, Facebook Conversions or Google Adwords.

One tool to find them, One tool to track them all and in the darkness bind them.

![Segment](/img/segment.png)

### For analytics/BI: Amplitude

I tested some analytics tools outside of the good ol’ Google Analytics and the one I enjoyed the most was [Amplitude](//amplitude.com). It provides cool features such as funnels, events segmentation, user search, custom dashboards and the ability to cross your data with user properties. It even allows SQL commands on your data (only available for big ass premium plans).

Other cool options are [Kissmetrics](//kissmetrics.com) or [Mixpanel](//mixpanel.com) . It is very reliable with Segment, awesome power reports, but the learning curve is a bit high.

![Amplitude](/img/amplitude.png)
*The real-time map of events in Amplitude*

### For mailing: Customer.io

By mailing I distinguish two things: automatic nurturing/transactional emails and blog newsletters.

I met [Customer.io](//customer.io) two years ago and I would never change for any other solution now. Customer.io is to me the best emailing solution out there because of its customization capability. Because of its [Liquid](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers) syntax inside the emails templates you can so awesome stuff like:

> { if customer.plan_value.size > 0 and customer.plan_value > 200 % and customer.app_rating < 6 }
> Hello {{customer.firstName}}!
>
> My name is {{customer.account_manager}}, I am your account manager on your {{customer.plan_type}} plan. I saw that yesterday you gave us a rating of {{customer.rating}}, I am terribly sorry you had such a bad experience. What were your pain points? Can we make a one-on-one Skype so that you can show me what is wrong ? I will do my best to help you.
>
> Have a great day,
> {{customer.account_manager}}
> { else }
> { endif }

And it has a Segment integration.

### For CRM & Customer Success: Depends…

Well, here I’m not really sure. I believe there is a CRM for every stage of a company.

For example, an early-stage startup will be satisfied with a basic Streak gmail add-on or [Front](//frontapp.com) (not a CRM tool I know) for both sales and CS.

Then maybe switching sales to [Close.io](//close.io) or [Pipedrive](//pipedrive.com) would be a good idea. Finally once you reached a certain size and struggle with hundreds of leads you’ll want to switch your sales team to Salesforce.

As for CS, once you have a proper CS team, moving to simple tools such as [Zendesk](//zendesk.com) or [Totango](//totango.com) (Segment integrations \o/).

To sum up:
- Early stage: Streak + Front
- Startup: Close.io + Zendesk
- Company: Salesforce

### For live chat: Chatlio

Not very well known, this small startup has an awesome team and their product is top notch. [Chatlio](//chatlio.com) is the only live chat tool that integrates directly with Slack. So basically, you get a new cool chat without leaving the one you already use.

It could get easily messy, but in the end everything work like a charm.

### For analyzing user behaviors: Fullstory

[Fullstory](//fullstory.com) « records » every single users on your app and even keep track of the logs in the console. It means that you can bring the popcorn, sit back, and watch your users struggling with your brand new signup form. As they say: it's a DVR for your website.

It is indeed very useful to get full insights on why X users are behaving this way or why did they get a form error. Fullstory could be useful not just marketers but also for product managers or even UX designers.

### Conclusion

So here it is, I might be updating this post a little bit with SEO tools such as Moz or BI/Dashboard softwares. Let me know what you think in the comments.