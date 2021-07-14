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
A while back I offered to build my friend John a personal website for his art and music. Historically I've worked as a fullstack engineer, but the past three years or so, I have not done any frontend work professionally. There's a lot of cool tech out there (and the ongoing jokes about new JS frameworks every day), so after the experience of building my own site (this!) I wanted some more 

# File setup
https://www.netlifycms.org/docs/add-to-your-site/ seems pretty straightforward, let's try it out

First step is to add the html and yaml files that Netlify will need. The npm way seems a little overcomplicated and I don't have a template, let's just use their html.

where does the admin folder go? static/admin

netlify config - I don't have this .yaml file even though I am using Netlify, let's look at that documentation

identity and git gateway, literally two clicks - probably because I have github connected to this site already