const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const server = require('../index');

describe('GitHub API Routes', () => {
  after((done) => {
    server.close(() => {
      done();
    });
  });

  it('should fetch GitHub users', (done) => {
    request(server)
      .get('/api/users')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.have.property('users');
        expect(res.body).to.have.property('nextPageLink');
        done();
      });
  });

  it('should fetch details of a GitHub user', (done) => {
    const username = 'leandrozanardo';
    request(server)
      .get(`/api/users/${username}/details`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.have.property('login', username);
        done();
      });
  });

  it('should fetch repositories of a GitHub user', (done) => {
    const username = 'leandrozanardo';
    request(server)
      .get(`/api/users/${username}/repos`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.be.an('array');
        done();
      });
  });
});
