import mongoose from 'mongoose';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server.js';

let should = chai.should();

chai.use(chaiHttp);
describe('Contract Deployment', () => {
  describe('/GET contract instance by email (valid)', () => {
    it('It should return a contract instance schema', (done) => {
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
            .get('/contract/instance')
            .set({ "Authorization": `Bearer ${token}`})
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('data');
              res.body.data.should.be.a('array');
              if (res.body.data.length > 0) {
                res.body.data[0].should.have.property('name');
                res.body.data[0].should.have.property('contractdefId');
                res.body.data[0].should.have.property('providerUrl');
                res.body.data[0].should.have.property('address');
              }
            });
          done();
        });

    });
  });

  describe('/GET contract instance by id (valid)', () => {
    it('It should return a contract instance schema', (done) => {
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
            .get('/contract/instance')
            .set({ "Authorization": `Bearer ${token}`})
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('data');
              res.body.data.should.be.a('array');
              if (res.body.data.length > 0) {
                res.body.data[0].should.have.property('name');
                res.body.data[0].should.have.property('contractdefId');
                res.body.data[0].should.have.property('providerUrl');
                res.body.data[0].should.have.property('address');
              }
            });
          done();
        });

    });
  });

  describe('/GET contract instance by id (invalid)', () => {
    it('It should return an object with data: null', (done) => {
      let loginDetails = {
        "email": "test@mail.com",
        "password": "psword19"
      };
      let contractId = '62579f88843b9040a69ae9b91';

      let result = chai.request(app)
        .post('/auth/login')
        .send(loginDetails)
        .then((result) => {
          let token = result.body.token;

          chai.request(app)
            .get(`/contract/instance/byid/${contractId}`)
            .set({ "Authorization": `Bearer ${token}`})
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.be.eql({});
            });
          done();
        });
    });
  });

  // describe('/POST deploy contract (success)', () => {
  //
  // });
});
