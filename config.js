'use strict';

module.exports = {
  url: 'https://rosshudgins.dev',
  pathPrefix: '/',
  title: 'Blog by Ross Hudgins',
  subtitle: '',
  copyright: '© All rights reserved.',
  disqusShortname: process.env.GATSBY_DISQUS_SHORTNAME || '',
  postsPerPage: 4,
  googleAnalyticsId: process.env.GTAG || '',
  useKatex: false,
  menu: [
    {
      label: 'Articles',
      path: '/'
    },
    {
      label: 'About me',
      path: '/pages/about'
    },
    {
      label: 'Contact me',
      path: '/pages/contacts'
    }
  ],
  author: {
    name: 'Ross Hudgins',
    photo: '/sit.jpg',
    bio: 'bio in progress',
    contacts: {
      email: '',
      facebook: 'ross.hudgins/',
      telegram: '',
      twitter: 'rosshudgins',
      github: 'rosshudgins',
      rss: '',
      vkontakte: '',
      linkedin: 'michaelrosshudgins/',
      instagram: 'rosshudgins',
      line: '',
      gitlab: '',
      weibo: '',
      codepen: '',
      youtube: '',
      soundcloud: '',
    }
  }
};
