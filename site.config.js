module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '219a533a72de47eca2ec8814c488a578',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Alarm Sistemleri',
  domain: 'alarmsistemleri.org',
  author: 'Can Burak Sofyalıoğlu',

  // open graph metadata (optional)
  description: 'Alarm sistemleri ve güvenlik teknolojileri üzerine yazılar.',
  socialImageTitle: 'Alarm Sistemleri Blog',
  socialImageSubtitle: 'Güvenlik ve Alarm Sistemleri Yazıları',

  // social usernames (optional)
  //twitter: 'webmeisterorg',
  //github: 'transitive-bullshit',
  //linkedin: 'fisch2',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.8,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/alarm-sensor-ve-dedektorleri': 'c9b97f605e6d420fac9fa7c48d01ff8d',
    '/alarm-merkezi': 'ef7c4823576e41ce99b1d9244a5d97b8',
    '/en-iyi-alarm-sistemleri': '953c516d9348431caf2bf50d0fa0a214'

    //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  },
  pageUrlOverrides: null
}
