const settings = {
  "name": "frontity",
  "state": {
    "frontity": {
<<<<<<< HEAD
      "url": "http://wp.dedsec.site",
=======
      "url": "https://tx.dedsec.site",
>>>>>>> wings_dev
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
<<<<<<< HEAD
          "url": "http://wp.dedsec.site"
=======
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
>>>>>>> wings_dev
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
