import mongoose from 'mongoose';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server.js';

let should = chai.should();

let loginDetails = {
  "email": "testcontractor@mail.com",
  "password": "psword19"
};

let invalidLoginDetails = {
  "email": "testcontractor@mail.com",
  "password": "psword18"
};

let testRegisterLoginDetails = {
  "email": "testcontractor01@mail.com",
  "password": "psword19"
};

chai.use(chaiHttp);
describe('User', () => {
  before(async () => {
    let registerDetails = {
      ...loginDetails,
      "accountType": "CONTRACTOR"
    }

    const res = await chai.request(app)
      .post('/auth/register')
      .send(loginDetails);
    res.should.have.status(200);
    res.body.should.be.a('object');
    res.body.should.have.property('email');
    res.body.should.have.property('accountType');
  });

  describe('/POST register (valid)', () => {
    it('It should add a contractor type user to the DB', async () => {
      let registerDetails = {
        ...testRegisterLoginDetails,
        "accountType": "CONTRACTOR"
      }

      const res = await chai.request(app)
        .post('/auth/register')
        .send(testRegisterLoginDetails);
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('email');
      res.body.should.have.property('accountType');
    });
  });

  describe('/POST register (invalid)', () => {
    it('It should reject duplicate registrations', async () => {
      let registerDetails = {
        ...testRegisterLoginDetails,
        "accountType": "CONTRACTOR"
      }

      const res = await chai.request(app)
        .post('/auth/register')
        .send(testRegisterLoginDetails);
      res.should.have.status(403);
      res.body.should.be.a('object');
      res.body.should.have.property('fullError');
      res.body.should.have.property('errors');
    });
  });

  describe('/POST login', () => {
    it('Valid - it should return the email, account type and token', async () => {
      const res = await chai.request(app)
        .post('/auth/login')
        .send(loginDetails);
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('email');
      res.body.should.have.property('accountType');
      res.body.should.have.property('token');
    });
  });

  describe('/POST login (invalid)', () => {
    it('Invalid - it should return an error object', async () => {
      const res = await chai.request(app)
        .post('/auth/login')
        .send(invalidLoginDetails);
      res.should.have.status(403);
      res.body.should.be.a('object');
      res.body.should.have.property('code');
      res.body.should.have.property('fullError');
      res.body.should.have.property('errors');
    });
  });

  describe('/GET users (valid)', () => {
    it('It should return the email, account type and token', async () => {
      const loginResult = await chai.request(app)
        .post('/auth/login')
        .send(loginDetails);
      const token = loginResult.body.token;

      const res = await chai.request(app)
        .get('/auth')
        .set({ "Authorization": `Bearer ${token}` });
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('data');
      res.body.data.should.be.a('array');
    });
  });
  describe('/GET users (invalid)', () => {
    it('It should return an \"unauthorised\" message', async () => {

      const res = await chai.request(app)
        .get('/auth');
        // .then((res) => {
      res.should.have.status(401);
        // });
    });
  });
});
