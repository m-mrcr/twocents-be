var express = require('express');
var test = express();
var app = require('../app');
var shell = require('shelljs');
var request = require('supertest');
var cleanup = require('./helper/testCleanup');
var Location = require("../models").Location

describe('Location', () => {
  beforeEach(() => {
    cleanup()
  });

  it('GET request for all locations formatted for search results', () => {
    return request(app)
    .get('/api/v1/search/recommendations_search?q=coffee')
    .then(response => {
      console.log(response.body)
      expect(response.statusCode).toBe(200)
      expect(response.body[0].id).toBe(1)
      expect(response.body[0].name).toBe('Little Owl Coffee')
      expect(response.body[1].id).toBe(5)
      expect(response.body[1].name).toBe('Crema Coffee House')
    })
  })

});
