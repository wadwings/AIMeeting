const settings = {
  "name": "aimeeting",
  "state": {
    "frontity": {
      "url": "https://tx.dedsec.site",
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
          "url": "https://tx.dedsec.site",
          'postTypes': [
            {
              type: "person",
              endpoint: "person",
              archive: "/person",
            },
            {
              type: "review",
              endpoint: "review",
              archive: "/review",
            }
          ],
          taxonomies: [
            {
              taxonomy: "conference",
              endpoint: "conference",
              postTypeEndpoint: "person",
              params: {
                per_page: 5,
                _embed: true,
              },
            },
            {
              taxonomy: "organization",
              endpoint: "organization",
              postTypeEndpoint: "person",
              params: {
                per_page: 5,
                _embed: true,
              },
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
