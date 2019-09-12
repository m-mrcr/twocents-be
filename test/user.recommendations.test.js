var express = require('express');
var test = express();
var app = require('../app');
var shell = require('shelljs');
var request = require('supertest');
var cleanup = require('./helper/testCleanup');
var User = require('../models').User;
var Location = require('../models').Location;

describe('Recommendations', () => {
  beforeEach(async () => {
    await cleanup()
  });

  it("GET request for all specific user's recommendations", async () => {
    return await request(app)
    .get('/api/v1/users/recommendations/44a4e0cd5616b584e6727171016f37bc943d456cb4d4f4f94ca3ff8def77da64')
    .then(response => {
      expect(response.statusCode).toBe(200)
      console.log(Object.keys(response.body.locations[0]))
      expect(Object.keys(response.body.locations[0])).toContain('name')
      expect(Object.keys(response.body.locations[0])).toContain('url')
      expect(Object.keys(response.body.locations[0])).toContain('hours')
    })
  });

  it("POST request to create a user recommendation", async () => {
    let userKey = '44a4e0cd5616b584e6727171016f37bc943d456cb4d4f4f94ca3ff8def77da64'
    let yelpId = 'heaStxibj5y6IIuwuXeNSA'

    let response = await request(app).post(`/api/v1/users/recommendations/${userKey}?yelpId=${yelpId}`)
    expect(response.status).toBe(201)
    expect(Object.keys(response.body)).toContain('id')
    expect(Object.keys(response.body)).toContain('userId')
    expect(Object.keys(response.body)).toContain('locationId')
  });

  it("POST request to create a user recommendation with location not in database", async () => {
    let userKey = '44a4e0cd5616b584e6727171016f37bc943d456cb4d4f4f94ca3ff8def77da64'
    let yelpId = "3qGNUG1rT8piRNczCuCrXg"

    let response = await request(app).post(`/api/v1/users/recommendations/${userKey}?yelpId=${yelpId}`)
    expect(response.status).toBe(201)
    expect(Object.keys(response.body)).toContain('id')
    expect(Object.keys(response.body)).toContain('userId')
    expect(Object.keys(response.body)).toContain('locationId')
  });

})
