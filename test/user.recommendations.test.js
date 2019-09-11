var express = require('express');
var test = express();
var app = require('../app');
var shell = require('shelljs');
var request = require('supertest');
var cleanup = require('./helper/testCleanup');

describe('Recommendations', () => {
  beforeEach(async () => {
    await cleanup()
  });

  it("GET request for all specific user's recommendations", async () => {
    return await request(app)
    .get('/api/v1/users/recommendations/44a4e0cd5616b584e6727171016f37bc943d456cb4d4f4f94ca3ff8def77da64')
    .then(response => {
      (response.body)
      expect(response.statusCode).toBe(200)
      expect(Object.keys(response.body[0])).toContain('name')
      expect(Object.keys(response.body[0])).toContain('url')
      expect(Object.keys(response.body[0])).toContain('hours')
    })
  });

  fit("POST request for specific recommendation", async () => {
    return await request(app)
    .post('/api/v1/users/recommendations/44a4e0cd5616b584e6727171016f37bc943d456cb4d4f4f94ca3ff8def77da64?yelpId=UeIXzDWs8YLusMDYElJuSQ')
    .then(response => {
      console.log(response)
      expect(response.statusCode).toBe(201)
      // expect(Object.keys(response.body[0])).toContain('name')
      // expect(Object.keys(response.body[0])).toContain('url')
      // expect(Object.keys(response.body[0])).toContain('hours')
    })
  });

  // it("GET request for all specific user's recommendations", async () => {
  //   return await request(app)
  //   .get('/api/v1/users/recommendations/44a4e0cd5616b584e6727171016f37bc943d456cb4d4f4f94ca3ff8def77da64')
  //   .then(response => {
  //     (response.body)
  //     expect(response.statusCode).toBe(200)
  //     expect(Object.keys(response.body[0])).toContain('name')
  //     expect(Object.keys(response.body[0])).toContain('url')
  //     expect(Object.keys(response.body[0])).toContain('hours')
  //   })
  // });

})
