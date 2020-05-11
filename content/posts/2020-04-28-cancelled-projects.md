---
template: post
title: How to Handle Cancelled Software Projects
slug: cancelled-software-projects
draft: false
date: 2020-04-28T23:29:00.000Z
description: It's really a bummer when a project gets cut unexpectedly. I wrote
  this to help encourage myself and navigate how to use some things I learned in
  future projects.
category: Software Development
tags:
  - software development
  - coronavirus
  - cancelled software projects
  - database
  - imposter syndrome
  - system design
---
There are a lot of ways to feel when a software project you’ve worked on gets cancelled. I’m processing this right now because a project that I’d spent the last five or six months working on just got shut down. It was partially due to some coronavirus company cost cuts, but also some people higher up realized that another team was independently building another API that would be able to serve the same purpose. This team was further along than ours but nobody in our segment was aware until now, so we got cut.

I’ve had another project that has still not been deployed to production nearly two years after my team completed it. One project of mine early on at Viasat was actually a new version of a project whose first version failed to make any sales. And the version I built also failed to make any sales… So they decided to skip version 3 and call the next one version 4, which actually did have some success (but I was not involved). I’ll refrain from details about the projects as I’m not sure what the rules are for sharing internal project stuff - I’d rather just play it safe and it doesn’t really matter for the purposes of this.

But wait, shouldn’t it be a red flag that this has happened to me multiple times? Am I the common denominator of these failures? They’ve kept me around, my performance reviews have been great, and I’ve continued to get more opportunities and move up, so I guess I’m still doing fine.

It’s hard not to take these things personally or put too much blame on yourself when projects don’t pan out. So for myself, I want to take this opportunity to reflect back on this project in a more positive light while it’s still fresh. There are definitely things that I learned that I’ll be able to apply to the next project I’m on. And the reality is that this happens to a ton of projects. Think of the Google engineers who’ve worked on things like Allo, Inbox, or [any of these killed products](https://killedbygoogle.com/). I was able to take a bit of a different role on this project than I have had in the past, and I learned a ton from it.

### Design

System design is a different beast than “just” writing code for already-defined tasks. Don’t read this as “just” writing code is easy or just grunt work. Obviously it’s extremely valuable work that takes special skill. But it’s a very different skill to be able to build something with direction versus figuring out what you think is the best way to build something. When actually building something, you often run into some issues that should have been designed better, or some use cases that nobody had considered. A challenge of designing systems that I found is to learn how to make these considerations before you start building it. This takes a lot of time and a lot of discussion. I’m not comfortable saying much more since I’m still pretty inexperienced at this and wouldn’t consider myself good at it, but I definitely got a lot from this opportunity and hope for more.

### Database stuff

I hadn’t touched databases in a while. It’s a domain that I feel like is really easy to forget best practices. It turns out there are a lot of cool things you can do with cloud services and database extensions. Funny enough, right after I started writing this, I saw[ this on Reddit](https://www.reddit.com/r/programming/comments/g72ysr/things_i_wished_more_developers_knew_about/). A lot is still way over my head, but it really showed me that I need to take some time and keep these skills in shape.

Databases are tricky and there are so many options and so many considerations when designing your storage and access. You get situations where doing it one way is easier to work with in your code, but it’s bad database practice and will be inefficient. One example from this project: working with some GIS data we found that our main query wasn’t using the index because of the way we were calling utility functions in the query. I could go on, but let’s just end with some brief advice. Do your research and ask colleagues for help. Get your DBA to review your queries.

### Confidence

Imposter syndrome is very real. There are people who really do know what they’re doing, but so many people who you think know what they’re doing really don’t a lot of the time. Learning from failure or experimentation is extremely valuable. Learning the “why” from these experiences really helps internalize bigger concepts than just reading experts’ opinions. If someone asks if you’re able to do something, say yes and figure it out. There’s a lot of power in learning how to just fake it and make decisions.