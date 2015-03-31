'use strict';

var server = require('<%= rootDir %>/server/server');
var request = require('supertest');

describe('GET /api/<%= name.toLowerCase() %>', function() {

  it('should respond with HTML', function(done) {
    request(server)
      .get('/api/<%= _.camelize(name.toLowerCase()) %>')
      .expect(200)
      .expect('Content-Type', /html/)
      .end(function(err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
  });
});
