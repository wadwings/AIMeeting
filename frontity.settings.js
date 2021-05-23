const settings = {
  "name": "aimeeting",
  "state": {
    "frontity": {
      "url": "https://ai.dedsec.site",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      name: "aiMeeting"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://ai.dedsec.site",
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
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
