'use strict';

var server = require('../../../server');
var request = require('supertest');

describe('GET /', function() {

  it('should respond with HTML', function(done) {
    request(server)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });

});
