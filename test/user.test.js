var express = require('express');
var test = express();
var app = require('../app');
var shell = require('shelljs');
var request = require('supertest');
var cleanup = require('./helper/testCleanup');

describe('User', () => {
  beforeEach(() => {
    cleanup()
  });

  it('GET request for user login', () => {
    return request(app)
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

  it('GET request for user sign-up', () => {
    return request(app)
    .get('/api/v1/users/signup?p=108443533200110515478')
    .then(response => {
      expect(response.statusCode).toBe(200)
      console.log(response.body)
      expect(Object.keys(response.body)).toContain('id')
      expect(Object.keys(response.body)).toContain('key')
    })
  });

})
