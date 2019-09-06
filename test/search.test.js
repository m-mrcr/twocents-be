var express = require('express');
var test = express();
var app = require('../app');
var shell = require('shelljs');
var request = require('supertest');
var cleanup = require('./helper/testCleanup');
var Location = require("../models").Location

describe('Search', () => {
  beforeEach(() => {
    cleanup()
  });

  // it('GET request for all locations formatted for search page', () => {
  //   return request(app)
  //   .get('/api/v1/search/recommendations_search?q=coffee')
  //   .then(response => {
  //     expect(response.statusCode).toBe(200)
  //     expect(response.body[0].id).toBe(1)
  //     expect(response.body[0].name).toBe('Little Owl Coffee')
  //     expect(response.body[1].id).toBe(5)
  //     expect(response.body[1].name).toBe('Crema Coffee House')
  //   })
  // })

  // it('GET request for all yelp search results formatted for search page - LOCATION', () => {
  //   return request(app)
  //   .get('/api/v1/search/yelp_search?term=coffee&location=80202')
  //   .then(response => {
  //     expect(response.statusCode).toBe(200)
  //   })
  // })

  it('GET request for all yelp search results formatted for search page - LAT/LONG', () => {
    return request(app)
    .get('/api/v1/search/yelp_search?term=coffee&latitude=39.7508006&longitude=-104.9965947')
    .then(response => {
      expect(response.statusCode).toBe(200)

    })
  })
});
