---
layout: post
title:  "How to Prevent Gmail App From Autoscaling HTML Emails"
description: Here's a hack to prevent the Gmail app on iOS and Android from autoscaling the typography by 50% and breaking the whole layout.
date:   2015-04-18
permalink: /blog/:title/
---

Emails clients are terrible at doing their job. Especially Gmail and, obviously Outlook. Recently, I had this very frustrating experience: we had a HTML emails, optimized for desktop email clients BUT the Gmail app on iOS and Android were autoscaling the typography by 50% breaking the whole layout. After some research, I finally found a hack to solve this. 

But let me first list all of the potential solutions that I tried. Maybe those will fix your problem:

* Add a table row width a single cell set to your email width.
* Add  `<meta name="viewport" content="width=device-width, initial-scale=1"/>` and then set an image (can be a 1px image) that spans the full width of the page.
* Add add min-width to your background/container table.
* Add `<body style="-webkit-text-size-adjust:none;">

That might solve your problem on Android. But, for me, at least, the problem was persisting on the Gmail iOS app. Until I found a hack on a blog called [Freshinbox](http://freshinbox.com/blog/gmail-on-ios-increases-font-size-on-some-emails/).

And finally here's the hack, put this code at the bottom of your email above the closing body tag:

```<div style="display:none; white-space:nowrap; font:15px courier; color:#ffffff;">
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
</div>```

Here's the explanation:

> The white-space:nowrap with the dashed line creates a line about 500px across that when bumped up in size will exceed 700px causing the Gmail app to not apply the font change.
>
> The display:none style causes non-Gmail clients to hide the block (Gmail ignores display:none). When the email is viewed in say, a non-Gmail mobile client, it won’t affect your responsive layout.
>
> The font is set to white so the dashes are not displayed when viewed in Gmail. If you have a different color background, set it to your background color.

Hope this helps ;) 

Btw: I'm working on a template for bootstrapping scalable newsletter optimized for all email clients called Mailstrap, [here's the github](https://github.com/gillesbertaux/mailstrap), you are more than welcome to fork it or leave a comment! 