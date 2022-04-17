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
var ids = [];
describe('Contract definition', () => {
  before(async () => {
    const loginResult = await chai.request(app)
      .post('/auth/login')
      .send(loginDetails);
    token = loginResult.body.token;
  });

  describe('/GET contract definition', () => {
    it('It should return an empty list - nothing has been submitted yet', async () => {

      const res = await chai.request(app)
        .get('/auth')
        .set({ "Authorization": `Bearer ${token}` });
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('data');
      res.body.data.should.be.a('array');
      expect(res.body.data.length === 0);
    });
  });

  describe('/POST add contract definition', () => {
    it('It should accept the TaskJournal contract for processing', async () => {

      const res = await chai.request(app)
        .post('/contract/definition/add')
        .field('info', JSON.stringify({
          name: "TaskJournalTest",
          type: "CONTRACT",
          link: "",
          main: "TaskJournal.sol",
        }))
        .attach("files", `../contracts/PayableBasic.sol`, "PayableBasic.sol")
        .attach("files", `../contracts/TaskJournal.sol`, "TaskJournal.sol")
        .set({ "Authorization": `Bearer ${token}` });

      res.should.have.status(202);
      res.body.should.be.a('object');
      res.body.should.have.property('data');
      res.body.data.should.have.property('name');
      res.body.data.should.have.property('type');
      res.body.data.should.have.property('filenames');
    });
  });

  describe('/GET contract definition after add', () => {
    it('It should return a list of length 1 - added TaskJournalTest', async () => {

      const res = await chai.request(app)
        .get('/contract/definition')
        .set({ "Authorization": `Bearer ${token}` });
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('data');
      res.body.data.should.be.a('array');
      expect(res.body.data.length === 1);
      ids.push(res.body.data[0]["_id"]);
    });
  });

  describe('/DELETE delete contract definition', () => {
    it('It should remove the TaskJournal contract', async () => {
      const idToDelete = ids.shift();

      const res = await chai.request(app)
        .delete('/contract/definition/delete')
        .set({ "Authorization": `Bearer ${token}` })
        .send({"id": idToDelete});

      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('_id');
      res.body.should.have.property('name');
      res.body.should.have.property('type');
    });
  });
});
