import mongoose from 'mongoose';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server.js';

let should = chai.should();
let expect = chai.expect;

let loginDetails = {
  "email": "testcontractor@mail.com",
  "password": "psword19"
};

chai.use(chaiHttp);

var token = "";
var defids = [];
var instids = [];
describe('Contract deployment', () => {
  before(async () => {
    const loginResult = await chai.request(app)
      .post('/auth/login')
      .send(loginDetails);
    token = loginResult.body.token;

    const addContract = await chai.request(app)
      .post('/contract/definition/add')
      .field('info', JSON.stringify({
        name: "TaskJournalTest2",
        type: "CONTRACT",
        link: "",
        main: "TaskJournal.sol",
      }))
      .attach("files", `../contracts/PayableBasic.sol`, "PayableBasic.sol")
      .attach("files", `../contracts/TaskJournal.sol`, "TaskJournal.sol")
      .set({ "Authorization": `Bearer ${token}` });

    const res = await chai.request(app)
      .get('/contract/definition')
      .set({ "Authorization": `Bearer ${token}` });
    defids.push(res.body.data[0]["_id"]);
  });

  describe('/GET contract instance by email (initial)', () => {
    it('It should return an empty array', async () => {

      const res = await chai.request(app)
        .get('/contract/instance')
        .set({ "Authorization": `Bearer ${token}`});
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('data');
      res.body.data.should.be.a('array');
      expect(res.body.data.length === 0);
    });
  });


  describe('/GET contract instance by id (invalid)', () => {
    it('It should return an object with data: null', async () => {
      let contractId = '62579f88843b9040a69ae9b91';

      const res = await chai.request(app)
        .get(`/contract/instance/byid/${contractId}`)
        .set({ "Authorization": `Bearer ${token}`});

      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.be.eql({});
    });
  });

  describe('/POST deploy contract (success)', async () => {
    it('It should return an object', async () => {
      const res = await chai.request(app)
        .post('/contract/instance/deploy')
        .set({ "Authorization": `Bearer ${token}`})
        .send({
          "name": "TaskJournalTest2-1",
          "contractdefId": defids[0],
        });
      console.log("DEPLOYING: ", defids[0]);
      console.log("RESULT OF DEPLOY: ", res.body);

      res.should.have.status(200);
      res.body.should.be.a('object');
    });
  });

  describe('/GET contract instance by email (with add)', () => {
    it('It should return a contract instance list', async () => {

      const res = await chai.request(app)
        .get('/contract/instance')
        .set({ "Authorization": `Bearer ${token}`});
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('data');
      res.body.data.should.be.a('array');
      expect(res.body.data.length === 1);
      console.log("RESULT OF GET: ", res.body);
      instids.push(res.body.data[0]["_id"]);
    });
  });

  describe('/DELETE delete contract reference', async () => {
    it('It should return an object with data: null', async () => {
      const idToDelete = instids.shift();
      const res = await chai.request(app)
        .delete(`/contract/instance/delete/${idToDelete}`)
        .set({ "Authorization": `Bearer ${token}`});
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('name');
      res.body.should.have.property('address');
    });
  });

  after(async () => {

  });
});
