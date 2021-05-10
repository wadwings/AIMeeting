const settings = {
  "name": "frontity",
  "state": {
    "frontity": {
      "url": "http://wp.dedsec.site",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      name: "my-first-theme"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "http://wp.dedsec.site"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
