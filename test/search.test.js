var express = require('express');
var test = express();
var app = require('../app');
var shell = require('shelljs');
var request = require('supertest');
var cleanup = require('./helper/testCleanup');

describe('Search', () => {
  beforeEach(async () => {
    await cleanup()
  });

  it('GET request for all locations formatted for search page', async () => {
    return await request(app)
    .get('/api/v1/search/recommendations_search?q=coffee')
    .then(response => {
      expect(response.statusCode).toBe(200)
      expect(response.body[0].name).toBe('Little Owl Coffee')
      expect(response.body[1].name).toBe('Crema Coffee House')
    })
  })

  it('GET request for all yelp search results formatted for search page - LOCATION', async () => {
    return await request(app)
    .get('/api/v1/search/yelp_search?term=coffee&location=80202')
    .then(response => {
      expect(response.statusCode).toBe(200)
      expect(response.body.length).toBe(10)
      expect(Object.keys(response.body[0])).toContain('yelpId')
      expect(Object.keys(response.body[0])).toContain('name')
    })
  })

  it('GET request for all yelp search results formatted for search page - LAT/LONG', async () => {
    return await request(app)
    .get('/api/v1/search/yelp_search?term=coffee&latitude=39.7508006&longitude=-104.9965947')
    .then(response => {
      expect(response.statusCode).toBe(200)
      expect(response.body.length).toBe(10)
      expect(Object.keys(response.body[0])).toContain('yelpId')
      expect(Object.keys(response.body[0])).toContain('name')
    })
  })

  it('GET request for single yelp search result', async () => {
    return await request(app)
    .get('/api/v1/search/yelp_business?yelpId=wmGPi9TKAkWbiWzIhE2U9g')
    .then(response => {
      expect(response.statusCode).toBe(200)
      expect(Object.keys(response.body)).toContain('name')
      expect(Object.keys(response.body)).toContain('hours')
    })
  })
});
