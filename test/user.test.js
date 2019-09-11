var express = require('express');
var test = express();
var app = require('../app');
var shell = require('shelljs');
var request = require('supertest');
var cleanup = require('./helper/testCleanup');

describe('User', () => {
   beforeEach(async () => {
    await cleanup()
  });

  it('GET request for user login', async () => {
    return await request(app)
    .get('/api/v1/users/login?p=108443533200110515478')
    .then(response => {
      expect(response.statusCode).toBe(200)
      expect(Object.keys(response.body)).toContain('id')
      expect(Object.keys(response.body)).toContain('key')
      expect(Object.keys(response.body.locations[0])).toContain('name')
      expect(Object.keys(response.body.locations[0])).toContain('url')
      expect(Object.keys(response.body.locations[0])).toContain('hours')
    })
  });

  it('POST request for user sign-up', async () => {
    return await request(app)
    .post('/api/v1/users/signup?p=112826686791851952769')
    .then(response => {
      expect(response.statusCode).toBe(201)
      expect(Object.keys(response.body)).toContain('id')
      expect(Object.keys(response.body)).toContain('key')
    })
  });

  it('POST request for user sign-up - SADPATH', async () => {
    return await request(app)
    .post('/api/v1/users/signup?p=108443533200110515478')
    .then(response => {
      expect(response.statusCode).toBe(409)
    })
  });

})
