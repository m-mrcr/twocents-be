'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Locations', [
      {
        id: 1,
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
        id: 2,
        name: "Tacos Tequila Whiskey",
        image: "https://s3-media2.fl.yelpcdn.com/bphoto/2tCtqQ01nknaOfFEH4W9DA/o.jpg",
        url: "https://www.yelp.com/biz/tacos-tequila-whiskey-denver-2?adjust_creative=SFrK1QyyPZbVwjh2vOWSjw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=SFrK1QyyPZbVwjh2vOWSjw",
        phone: "(720) 475-1337",
        rating: 4.0,
        reviewCount: 1000,
        categories: [
          "Mexican"
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
      }
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Locations', null, {});
  }
};
