var express = require('express');
var test = express();
var app = require('../app');
var shell = require('shelljs');
var request = require('supertest');
var cleanup = require('./helper/testCleanup');
var User = require("../models").user

describe('User', () => {
  beforeEach(() => {
    cleanup()
  });

  it('GET request for user login', () => {
    return request(app)
    .get('/api/v1/users/login?email=kyle@example.com')
    .then(response => {
      expect(response.statusCode).toBe(200)
      expect(Object.keys(response.body[0])).toContain('id')
      expect(Object.keys(response.body[0])).toContain('name')
      expect(Object.keys(response.body[0])).toContain('image')
      expect(Object.keys(response.body[0])).toContain('hours')
    })
  });

  it('GET request for user sign-up', () => {
    return request(app)
    .get('/api/v1/users/login?email=kyle@example.com')
    .then(response => {
      expect(response.statusCode).toBe(200)
      expect(Object.keys(response.body[0])).toContain('id')
      expect(Object.keys(response.body[0])).toContain('name')
      expect(Object.keys(response.body[0])).toContain('image')
      expect(Object.keys(response.body[0])).toContain('hours')
    })
  });

})
