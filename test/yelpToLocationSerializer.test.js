var express = require('express');
var test = express();
var app = require('../app');
var shell = require('shelljs');
var request = require('supertest');
var Serializer = require('../serializers/yelpToLocationSerializer.js');

describe('YelpToLocationSerializer', () => {
  var serializer = new Serializer();

  it('converts Yelp request response to Location format -- WITHOUT HOURS', async () => {
    let businesses = await serializer.truncatedLocationSerializer(
      {
        "businesses": [
        {
          "id": "heaStxibj5y6IIuwuXeNSA",
          "alias": "little-owl-coffee-denver",
          "name": "Little Owl Coffee",
          "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/L14MabdxIQPvzwNpVzPXPQ/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/little-owl-coffee-denver?adjust_creative=SFrK1QyyPZbVwjh2vOWSjw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=SFrK1QyyPZbVwjh2vOWSjw",
          "review_count": 336,
          "categories": [
              {
                  "alias": "coffee",
                  "title": "Coffee & Tea"
              },
              {
                  "alias": "bakeries",
                  "title": "Bakeries"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 39.7505164957921,
              "longitude": -104.999718748432
          },
          "transactions": [],
          "price": "$$",
          "location": {
              "address1": "1555 Blake St",
              "address2": "Ste 150",
              "address3": "",
              "city": "Denver",
              "zip_code": "80202",
              "country": "US",
              "state": "CO",
              "display_address": [
                  "1555 Blake St",
                  "Ste 150",
                  "Denver, CO 80202"
              ]
          },
          "phone": "+17203285574",
          "display_phone": "(720) 328-5574",
          "distance": 203.66384519906563
        },
        {
          "id": "dc_wr_Dy6ZfHFbo3p5HcXg",
          "alias": "novo-coffee-denver-2",
          "name": "Novo Coffee",
          "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/53U_7LVynqaOMhzxfglU7g/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/novo-coffee-denver-2?adjust_creative=SFrK1QyyPZbVwjh2vOWSjw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=SFrK1QyyPZbVwjh2vOWSjw",
          "review_count": 294,
          "categories": [
              {
                  "alias": "coffee",
                  "title": "Coffee & Tea"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 39.7443251468664,
              "longitude": -104.989716522396
          },
          "transactions": [],
          "price": "$",
          "location": {
              "address1": "1600 Glenarm Pl",
              "address2": "",
              "address3": "",
              "city": "Denver",
              "zip_code": "80202",
              "country": "US",
              "state": "CO",
              "display_address": [
                  "1600 Glenarm Pl",
                  "Denver, CO 80202"
              ]
          },
          "phone": "+13039990077",
          "display_phone": "(303) 999-0077",
          "distance": 1217.5609317123233
        }
      ]
    })
    expect(businesses.length).toEqual(2)
    expect(Object.keys(businesses[0])).toContain('name')
    expect(Object.keys(businesses[0])).toContain('image')
    expect(Object.keys(businesses[0])).toContain('location')
    expect(Object.keys(businesses[0])).toContain('categories')
    expect(Object.keys(businesses[0])).toContain('coordinates')
  })

  fit('converts Yelp request response to Location format - WITH HOURS', async () => {
    let business = await serializer.locationSerializer(
      {
        "id": "wmGPi9TKAkWbiWzIhE2U9g",
        "alias": "highland-tavern-denver",
        "name": "Highland Tavern",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/wUTo1kzYprBZekjQb3rDxQ/o.jpg",
        "is_claimed": true,
        "is_closed": false,
        "url": "https://www.yelp.com/biz/highland-tavern-denver?adjust_creative=SFrK1QyyPZbVwjh2vOWSjw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=SFrK1QyyPZbVwjh2vOWSjw",
        "phone": "+13034331990",
        "display_phone": "(303) 433-1990",
        "review_count": 524,
        "categories": [
            {
                "alias": "bars",
                "title": "Bars"
            },
            {
                "alias": "tradamerican",
                "title": "American (Traditional)"
            }
        ],
        "rating": 4.0,
        "location": {
            "address1": "3400 Navajo St",
            "address2": "",
            "address3": "",
            "city": "Denver",
            "zip_code": "80211",
            "country": "US",
            "state": "CO",
            "display_address": [
                "3400 Navajo St",
                "Denver, CO 80211"
            ],
            "cross_streets": ""
        },
        "coordinates": {
            "latitude": 39.7645908878767,
            "longitude": -105.00402038862
        },
        "photos": [
            "https://s3-media4.fl.yelpcdn.com/bphoto/wUTo1kzYprBZekjQb3rDxQ/o.jpg",
            "https://s3-media3.fl.yelpcdn.com/bphoto/-SMT-bsqL5HwNFrPn1ui8g/o.jpg",
            "https://s3-media3.fl.yelpcdn.com/bphoto/TsCKVP_2BsxMlULR2XuW7Q/o.jpg"
        ],
        "price": "$$",
        "hours": [
            {
                "open": [
                    {
                        "is_overnight": true,
                        "start": "1100",
                        "end": "0200",
                        "day": 0
                    },
                    {
                        "is_overnight": true,
                        "start": "1100",
                        "end": "0200",
                        "day": 1
                    },
                    {
                        "is_overnight": true,
                        "start": "1100",
                        "end": "0200",
                        "day": 2
                    },
                    {
                        "is_overnight": true,
                        "start": "1100",
                        "end": "0200",
                        "day": 3
                    },
                    {
                        "is_overnight": true,
                        "start": "1100",
                        "end": "0200",
                        "day": 4
                    },
                    {
                        "is_overnight": true,
                        "start": "1000",
                        "end": "0200",
                        "day": 5
                    },
                    {
                        "is_overnight": true,
                        "start": "1000",
                        "end": "0200",
                        "day": 6
                    }
                ],
                "hours_type": "REGULAR",
                "is_open_now": true
            }
        ],
        "transactions": [
        ]
      })
    expect(Object.keys(business)).toContain('name')
    expect(Object.keys(business)).toContain('image')
    expect(Object.keys(business)).toContain('location')
    expect(Object.keys(business)).toContain('categories')
    expect(Object.keys(business)).toContain('coordinates')
  })

  it('converts Yelp Categories to Location Categories', async () => {
    let serializeCategories = await serializer.serializeCategories(
      [{
        "alias": "coffee",
        "title": "Coffee & Tea"
      },
      {
        "alias": "bakeries",
        "title": "Bakeries"
      }])
    let expectedResult = ['Coffee & Tea', 'Bakeries']
    expect(serializeCategories).toEqual(expectedResult)
  })

  it('converts Yelp Categories to Location Categories', async () => {
    let serializeCoordinates = await serializer.serializeCoordinates(
      {
        "latitude": 39.7505164957921,
        "longitude": -104.999718748432
      })
    let expectedResult = [ 39.7505164957921, -104.999718748432 ]
    expect(serializeCoordinates).toEqual(expectedResult)
  })

  it('converts Yelp Location to Location Location', async () => {
    let serializeLocation = await serializer.serializeLocation(
      {
        "address1": "1555 Blake St",
        "address2": "Ste 150",
        "address3": "",
        "city": "Denver",
        "zip_code": "80202",
        "country": "US",
        "state": "CO",
        "display_address": [
            "1555 Blake St",
            "Ste 150",
            "Denver, CO 80202"
        ]
      })
    let expectedResult = [ "1555 Blake St", "Ste 150", "Denver, CO 80202" ]
    expect(serializeLocation).toEqual(expectedResult)
  })

  it('converts Yelp Hours to Location Hours', async () => {
    let serializeHours = await serializer.serializeHours(
      [
        {
            "open": [
                {
                    "is_overnight": true,
                    "start": "1100",
                    "end": "0200",
                    "day": 0
                },
                {
                    "is_overnight": true,
                    "start": "1100",
                    "end": "0200",
                    "day": 1
                },
                {
                    "is_overnight": true,
                    "start": "1100",
                    "end": "0200",
                    "day": 2
                },
                {
                    "is_overnight": true,
                    "start": "1100",
                    "end": "0200",
                    "day": 3
                },
                {
                    "is_overnight": true,
                    "start": "1100",
                    "end": "0200",
                    "day": 4
                },
                {
                    "is_overnight": true,
                    "start": "1000",
                    "end": "0200",
                    "day": 5
                },
                {
                    "is_overnight": true,
                    "start": "1000",
                    "end": "0200",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": true
        }
      ])
    let expectedResult = [
      '1100-0200',
      '1100-0200',
      '1100-0200',
      '1100-0200',
      '1100-0200',
      '1000-0200',
      '1000-0200'
    ]
    expect(serializeHours).toEqual(expectedResult)
  })

});
