'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Locations', [
      {
        id: 1000000,
        name: "Little Owl Coffee",
        image: "https://s3-media4.fl.yelpcdn.com/bphoto/L14MabdxIQPvzwNpVzPXPQ/o.jpg",
        url: "https://www.yelp.com/biz/little-owl-coffee-denver?adjust_creative=SFrK1QyyPZbVwjh2vOWSjw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=SFrK1QyyPZbVwjh2vOWSjw",
        phone: "(720) 328-5574",
        rating: 4.5,
        reviewCount: 336,
        categories: [
          "Coffee & Tea",
          "Bakeries"
        ],
        coordinates: [
          39.7505164957921,
          -104.999718748432
        ],
        location: [
          "1555 Blake St",
          "Ste 150",
          "Denver, CO 80202"
        ],
        price: "$$",
        hours: [
          "0700-1700",
          "0700-1700",
          "0700-1700",
          "0700-1700",
          "0700-1700",
          "0800-1500",
          "0800-1500"
        ],
        yelpId: 'heaStxibj5y6IIuwuXeNSA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2000000,
        name: "Tacos Tequila Whiskey",
        image: "https://s3-media2.fl.yelpcdn.com/bphoto/2tCtqQ01nknaOfFEH4W9DA/o.jpg",
        url: "https://www.yelp.com/biz/tacos-tequila-whiskey-denver-2?adjust_creative=SFrK1QyyPZbVwjh2vOWSjw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=SFrK1QyyPZbVwjh2vOWSjw",
        phone: "(720) 475-1337",
        rating: 4.0,
        reviewCount: 1000,
        categories: [
          "Mexican"
        ],
        coordinates: [
          39.7403831481934,
          -104.959533691406
        ],
        location: [
          "1514 York St",
          "Ste 150",
          "Denver, CO 80206"
        ],
        price: "$$",
        hours: [
          "1500-2200",
          "1100-2200",
          "1100-2200",
          "1100-2200",
          "1100-2200",
          "1100-2200",
          "1100-2100"
        ],
        yelpId: 'EwiMXeyrGX5IPGJZAXuQdg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3000000,
        name: "IHOP",
        image: "https://s3-media2.fl.yelpcdn.com/bphoto/7PWw0gAaPPwHIaH9PdjArQ/o.jpg",
        url: "https://www.yelp.com/biz/ihop-denver?adjust_creative=SFrK1QyyPZbVwjh2vOWSjw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=SFrK1QyyPZbVwjh2vOWSjw",
        phone: "(303) 758-1492",
        rating: 3.0,
        reviewCount: 68,
        categories: [
          "Breakfast & Brunch",
          "American (Traditional)",
          "Burgers"
        ],
        coordinates: [
          39.6877,
          -104.94131
        ],
        location: [
          "1595 S Colorado Blvd",
          "Denver, CO 80222"
        ],
        price: "$$",
        hours: [
          "0000-0000",
          "0000-0000",
          "0000-0000",
          "0000-0000",
          "0000-0000",
          "0000-0000",
          "0000-0000"
        ],
        yelpId: 'rNiup7lpPQCqHK71VI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4000000,
        name: "Highland Tavern",
        image: "https://s3-media4.fl.yelpcdn.com/bphoto/wUTo1kzYprBZekjQb3rDxQ/o.jpg",
        url: "https://www.yelp.com/biz/highland-tavern-denver?adjust_creative=SFrK1QyyPZbVwjh2vOWSjw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=SFrK1QyyPZbVwjh2vOWSjw",
        phone: "(303) 433-1990",
        rating: 4.0,
        reviewCount: 524,
        categories: [
          "Bars",
          "American (Traditional)"
        ],
        coordinates: [
          39.7645908878767,
          -105.00402038862
        ],
        location: [
          "3400 Navajo St",
          "Denver, CO 80211"
        ],
        price: "$$",
        hours: [
          "1100-0200",
          "1100-0200",
          "1100-0200",
          "1100-0200",
          "1100-0200",
          "1000-0200",
          "1000-0200"
        ],
        yelpId: 'wmGPi9TKAkWbiWzIhE2U9g',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5000000,
        name: "Crema Coffee House",
        image: "https://s3-media1.fl.yelpcdn.com/bphoto/X3fUAFy1liKGObQ3tDL6zQ/o.jpg",
        url: "https://www.yelp.com/biz/crema-coffee-house-denver-2?adjust_creative=6IQ69FnHUmPOvoU64q9Xgw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=6IQ69FnHUmPOvoU64q9Xgw",
        phone: "",
        rating: 4.5,
        reviewCount: 551,
        categories: [
          "Coffee & Tea",
          "Breakfast & Brunch",
          "Cafes"
        ],
        coordinates: [
          39.76117,
          -104.98174
        ],
        location: [
          "2862 Larimer St",
          "Unit B",
          "Denver, CO 80205"
        ],
        price: "$",
        hours: [
          "0700-1700",
          "0700-1700",
          "0700-1700",
          "0700-1700",
          "0700-1700",
          "0700-1700",
          "0700-1700"
        ],
        yelpId: 'kZGotdsAt2Bh9QGmHgrEIg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6000000,
        name: "Novo Coffee",
        image: "https://s3-media1.fl.yelpcdn.com/bphoto/53U_7LVynqaOMhzxfglU7g/o.jpg",
        url: "https://www.yelp.com/biz/novo-coffee-denver-2?adjust_creative=6IQ69FnHUmPOvoU64q9Xgw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6IQ69FnHUmPOvoU64q9Xgw",
        phone: "(303) 999-0077",
        rating: 4.5,
        reviewCount: 294,
        categories: [
          "Coffee & Tea"
        ],
        coordinates: [
          39.7443251468664,
          -104.989716522396
        ],
        location: [
          "1600 Glenarm Pl",
          "Denver, CO 80202"
        ],
        price: "$$",
        hours: [
          "0500-1500",
          "0500-1600",
          "0500-1600",
          "0500-1600",
          "0500-1600",
          "0500-1500",
          "0500-1400"
        ],
        yelpId: 'dc_wr_Dy6ZfHFbo3p5HcXg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7000000,
        name: "Huckleberry Roasters at Dairy Block",
        image: "https://s3-media4.fl.yelpcdn.com/bphoto/5D4jaXjYMvjXgqBohSbtUA/o.jpg",
        url: "https://www.yelp.com/biz/huckleberry-roasters-at-dairy-block-denver?adjust_creative=6IQ69FnHUmPOvoU64q9Xgw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6IQ69FnHUmPOvoU64q9Xgw",
        phone: "",
        rating: 4.0,
        reviewCount: 44,
        categories: [
          "Coffee & Tea",
          "Breakfast & Brunch"
        ],
        coordinates: [
          39.75337,
          -104.99703
        ],
        location: [
          "1800 Wazee St",
          "Denver, CO 80205"
        ],
        price: "$",
        hours: [
          "0603-1700",
          "0603-1700",
          "0603-1700",
          "0603-1700",
          "0700-1700",
          "0700-1700",
          "0700-1700"
        ],
        yelpId: 'g1lbyi7U9SFheSp5eCRogA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8000000,
        name: "Serendipity Coffee Bar",
        image: "https://s3-media1.fl.yelpcdn.com/bphoto/lbgG-QNJGCNinzAiUBYUlw/o.jpg",
        url: "https://www.yelp.com/biz/serendipity-coffee-bar-denver?adjust_creative=6IQ69FnHUmPOvoU64q9Xgw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6IQ69FnHUmPOvoU64q9Xgw",
        phone: "(303) 433-1990",
        rating: 4.5,
        reviewCount: 6,
        categories: [
          "Coffee & Tea",
          "Breakfast & Brunch"
        ],
        coordinates: [
          39.751068,
          -105.0016899
        ],
        location: [
          "1536 Wynkoop St",
          "Denver, CO 80202"
        ],
        price: "$",
        hours: [
          "0400-1400",
          "0400-1400",
          "0400-1400",
          "0400-1400",
          "0400-1200",
          "0500-1200",
          "0600-1200"
        ],
        yelpId: 'c9tsOxhiwFRtFWtY_Xf_7Q',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9000000,
        name: "Sapor Coffee & Concepts",
        image: "https://s3-media1.fl.yelpcdn.com/bphoto/_a4qootZNkU46ICcIInTBA/o.jpg",
        url: "https://www.yelp.com/biz/sapor-coffee-and-concepts-denver?adjust_creative=6IQ69FnHUmPOvoU64q9Xgw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6IQ69FnHUmPOvoU64q9Xgw",
        phone: "",
        rating: 4.5,
        reviewCount: 25,
        categories: [
          "Coffee & Tea"
        ],
        coordinates: [
          39.756864,
          -105.018048
        ],
        location: [
          "2795 Speer Blvd",
          "Ste 17",
          "Denver, CO 80211"
        ],
        price: "$$",
        hours: [
          "0545-1700",
          "0545-1700",
          "0545-1700",
          "0545-1700",
          "0545-1700",
          "0545-1700",
          "0545-1700"
        ],
        yelpId: 'gdJh5jOgAxTqOvZnHGrwXA',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Locations', null, {});
  }
};
