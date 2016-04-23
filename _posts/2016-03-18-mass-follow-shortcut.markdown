---
layout: post
title: "Hacking the Twitter Follow Button: Mass Follow Shortcut"
description: ere's a little trick I found playing around with Twitter the other day. I build a mass follow button for Twitter.
date: 2016-03-18
permalink: /blog/:title/
lang: en
status: ok
---

Here's a little trick I found playing around with Twitter the other day. I had this Twitter list full of relevant people for [Rumble](https://rumble.live), it had hundreds of profiles. I could follow them one by one but that would have taken forever.

I did one simple thing: **I retrieved the CSS selector path of a "Follow" button (making sure to exclude the "Unfollow"), and triggered a quick JQuery** `.click()` **method to click on all the matching elements**. 

![script gif](/img/follow-script.gif)

Here's the selector path with the JQuery trigger:
```
$("div.user-actions.btn-group.not-following.not-muting > button").click()
```
You can limit the number of clicks by adding the `.slice()` method:
```
$("div.user-actions.btn-group.not-following.not-muting > button").slice(0,50).click()
```

That was already pretty useful, but I wanted something more straightforward than having to open the console and paste the snippet.

Here's what I came up with:

<a style="padding: 10px 20px;
    background: #059FF5;
    border-radius: 3px;
    margin: 10px 0;
    display: inline-block;
    font-weight: 600;
    color: #fff;" href="javascript:$('div.user-actions.btn-group.not-following.not-muting > button').slice(0,50).click()">Mass Twitter Follow Button</a>
 
Just drag this button in your bookmark bar and here you go : **a mass follow button**. Just hit that button and you will trigger a click on 50 follow buttons in your window.

![button gif](/img/button.gif)

This actually gave me the following idea: it'd be awesome to have **a small library of shortcuts to trigger very simple scripts**. It could help marketers, or people who just don't code, solving simple problems, gain time and, at the end of the day, be more productive. 

Hope that helps.
