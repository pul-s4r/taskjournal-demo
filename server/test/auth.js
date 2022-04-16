import mongoose from 'mongoose';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server.js';

let should = chai.should();

chai.use(chaiHttp);
describe('User', () => {
  // beforeEach((done) => {
  //
  // });

  describe('/POST login (valid)', () => {
    it('It should return the email, account type and token', (done) => {
      let loginDetails = {
        "email": "test@mail.com",
        "password": "psword19"
      };

      chai.request(app)
        .post('/auth/login')
        .send(loginDetails)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('email');
          res.body.should.have.property('accountType');
          res.body.should.have.property('token');
        });
        done();
    });
  });

  describe('/POST login (invalid)', () => {
    it('It should return an error object', (done) => {
      let loginDetails = {
        "email": "test@mail.com",
        "password": "psword18"
      };

      chai.request(app)
        .post('/auth/login')
        .send(loginDetails)
        .end((err, res) => {
          res.should.have.status(403);
          res.body.should.be.a('object');
          res.body.should.have.property('code');
          res.body.should.have.property('fullError');
          res.body.should.have.property('errors');
        });
        done();
    });
  });

  describe('/GET users (valid)', () => {
    it('It should return the email, account type and token', (done) => {
      let loginDetails = {
        "email": "test@mail.com",
        "password": "psword19"
      };

      let result = chai.request(app)
        .post('/auth/login')
        .send(loginDetails)
        .then((result) => {
          let token = result.body.token;

          chai.request(app)
            .get('/auth')
            .set({ "Authorization": `Bearer ${token}`})
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('data');
              res.body.data.should.be.a('array');
            });
          done();
        });
    });
  });

  describe('/GET users (invalid)', () => {
    it('It should return an \"unauthorised\" message', (done) => {

      chai.request(app)
        .get('/auth')
        .end((err, res) => {
          res.should.have.status(401);
        });
        done();
    });
  });
});
