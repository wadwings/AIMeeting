const settings = {
<<<<<<< HEAD
  "name": "frontity",
  "state": {
    "frontity": {
<<<<<<< HEAD
      "url": "http://wp.dedsec.site",
=======
      "url": "https://tx.dedsec.site",
>>>>>>> wings_dev
=======
  "name": "aimeeting",
  "state": {
    "frontity": {
      "url": "https://tx.dedsec.site",
>>>>>>> 1036f6ff7e629dcf41952c2db6868c82cd19a4ca
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
<<<<<<< HEAD
      name: "my-first-theme"
=======
      name: "aiMeeting"
>>>>>>> 1036f6ff7e629dcf41952c2db6868c82cd19a4ca
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
<<<<<<< HEAD
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
=======
          "url": "https://tx.dedsec.site",
          'postTypes': [
            {
              type: "person",
              endpoint: "person",
              archive: "/person",
            },
            {
              type: "photograph",
              endpoint: "photograph",
              archive: "/photograph",
            }
          ],
          taxonomies: [
            {
              taxonomy: "conference",
              endpoint: "conference",
              postTypeEndpoint: "person",
            },
            {
              taxonomy: "usage",
              endpoint: "usage",
              postTypeEndpoint: "photograph",
            },
            {
              taxonomy: "organization",
              endpoint: "organization",
              postTypeEndpoint: "person",
            },
          ]
        },
>>>>>>> 1036f6ff7e629dcf41952c2db6868c82cd19a4ca
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
