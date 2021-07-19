---
template: post
title: Adding Netlify CMS to an Existing Site
slug: adding-netlify-to-existing-site
draft: true
date: 2021-07-14T02:04:46.777Z
description: Documentation of my process learning some more gatsby things
category: software
tags:
  - software
  - gatsby
---
# Intro
A while back I offered to build my friend John a personal website for his art and music. Historically I've worked as a fullstack engineer, but the past three years or so, I have not done any frontend work professionally. There's a lot of cool tech out there (and the ongoing jokes about new JS frameworks every day), so after the experience of building my own site (this one!) I wanted some more exercise. 

I just used a template initially to build the site, which didn't have a CMS hooked up already. So for any changes, even small text or image ones, John would have to text or email me and I'd have to fit it in my schedule. I'm hosting on Netlify and I used their CMS for my personal site, so I thought I'd see if I could add it manually rather than using a template.

# File setup
[Netlify's documentation](https://www.netlifycms.org/docs/add-to-your-site/) seems pretty straightforward, let's try it out.

First step is to add the html and yaml files that Netlify will need. The npm way seems a little overcomplicated and I don't have a template, let's just use their html. mkdir, touch, copy and paste, easy.

where does the admin folder go? static/admin with static being alongside src. makes sense now, static under public is what gets built

netlify config - I don't have this .yaml file even though I am using Netlify, let's look at that documentation

uhhh, run `gatsby develop` and everything builds, but I can't get to /admin. I thought my personal site did this, let's check it. Also serving it didn't work. Maybe we can't run this locally?

wait, stuff in the public folder is what gets built. and it's in my gitignore. maybe 

yes, working in a really automated framework and also working from a template really saves some bootstrap time. but one real bad thing about it is the weird and super unhelpful errors you can get. and y'all, it's not helpful when the solution to an error is to just use `yarn` install of `npm install`.

identity and git gateway, literally two clicks - probably because I have github connected to this site already

ok, recap - it ended up being as simple as adding those two files. awesome, commit to master and netlify will deploy for us - /admin is up and running

oh, I should definitely make sure /admin is safe and I don't get spam people trying to get access.

software folks are lazy, you know. and here's a place where we can go ahead and use what we just deployed. no need to manually create the "posts" that we're going to pull content from, let's just access our /admin portal and create the posts we need so John can edit them whenever he pleases. He may have to learn markdown, but it's not too bad.

but this tutorial doesn't tell us how to get our content into our site. Maybe they assume you're already Gatsby-ing enough to understand that? That's not the case for me with this though, so let's learn fundamental Gatsby things (finally). I know it's gonna be graphql stuff, but let's take a look at my personal site, since I just copied someone else's work and I honestly don't know how it works.

well, here's something called page-template.js, I think this is what I'm looking for, but now I need to find what calls this. actually, this seems more complicated and too much of a framework for me to try to shoehorn my stuff into. let's google and see what gatsby's documentation can give us.

[here we go](https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/)

need to add gatsby-transformer-remark and gatsby-source-filesystem

cool, got that working in graphiql and the html is coming back right. let's get the content into components and import those into our main website layout.

these are non-page queries, so we need to use StaticQuery
https://www.gatsbyjs.com/docs/how-to/querying-data/static-query/

almost there! but images aren't working
maybe this? https://www.gatsbyjs.com/docs/working-with-images-in-markdown/


