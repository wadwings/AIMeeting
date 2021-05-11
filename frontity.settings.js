const settings = {
  "name": "frontity",
  "state": {
    "frontity": {
      "url": "https://tx.dedsec.site",
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
          "url": "https://tx.dedsec.site",
          "postTypes": [
            {
              type: "person",
              endpoint: "person",
            },            
            {
              type: "profile",
              endpoint: "profile",
              archive: "/profile"
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
