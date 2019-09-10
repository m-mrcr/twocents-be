var express = require('express');
var test = express();
var app = require('../app');
var shell = require('shelljs');
var request = require('supertest');
// var cleanup = require('./helper/testCleanup');
var Serializer = require('../serializers/yelpToLocationSerializer.js');

describe('YelpToLocationSerializer', () => {
  var serializer = new Serializer();

  fit('converts Yelp request response to Location format', async () => {

    let tls = await serializer.truncatedLocationSerializer(
      {
        "id": "heaStxibj5y6IIuwuXeNSA",
        "alias": "little-owl-coffee-denver",
        "name": "Little Owl Coffee",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/L14MabdxIQPvzwNpVzPXPQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/little-owl-coffee-denver?adjust_creative=SFrK1QyyPZbVwjh2vOWSjw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=SFrK1QyyPZbVwjh2vOWSjw",
        "review_count": 337,
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
        "distance": 268.93801153151327
      }
    )}
    // console.log(tls)
    // return truncatedLocationSerializer
  )

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
