const TaskJournal = artifacts.require("TaskJournal");

contract("TaskJournal", () => {
  let accounts;

  before(async () => {
    accounts = await web3.eth.getAccounts();
  });

  describe("Internal state changes", () => {
    it("Should create and complete two tasks, return correct fee", async () => {
      const due = new Date("2022-03-01T11:00:00");
      const instance = await TaskJournal.deployed();
      await instance.createTask("Mow lawn", "Extra short", Math.floor(due.getTime()/1000), 2);
      await instance.createTask("Clear gutter", "Everything out", Math.floor(due.getTime()/1000), 2);

      const t1 = await instance.getTask(1);
      const t2 = await instance.getTask(2);

      assert.isObject(t1, "Task 1 not an object/struct")
      assert.equal(t1['1'], "Mow lawn", "Name (1) incorrect");
      assert.equal(t2['1'], "Clear gutter", "Name (2) incorrect");

      await instance.markComplete(1, "Done");
      await instance.markComplete(2, "Done");
      assert.equal(await instance.sumFeeCompleted(), 4, "Sum of fees for completed tasks not equal");
    });

    it("Should change task description", async () => {
      const due = new Date("2022-03-01T11:00:00");
      const instance = await TaskJournal.deployed();
      await instance.createTask("Mow lawn", "Extra short", Math.floor(due.getTime()/1000), 2);
      await instance.modifyTaskDesc(3, "Extra extra short", "Longer grow back");

      const t1 = await instance.getTask(3);

      assert.equal(t1['2'], "Extra extra short", "Description (1) unchanged");
    });

    it("Should change task deadline to a fixed date", async () => {
      const due = new Date("2022-03-04T11:00:00");
      const due2 = new Date("2022-03-08T14:00:00");
      const instance = await TaskJournal.deployed();
      await instance.createTask("Mow lawn", "Extra short", Math.floor(due.getTime()/1000), 2);
      await instance.modifyTaskDate(4, Math.floor(due2.getTime()/1000), "Grass too tall");

      const t1 = await instance.getTask(4);
      const result = new Date(t1['4'].toNumber()*1000);
      assert.equal(result.getTime(), due2.getTime(), "Date (1) does not match");
    });

    it("Should change task deadline to a set number of days in the future", async () => {
      const due = new Date("2022-03-04T11:00:00");
      const dueExpected = new Date("2022-03-07T11:00:00");
      const instance = await TaskJournal.deployed();
      await instance.createTask("Mow lawn", "Extra short", Math.floor(due.getTime()/1000), 2);

      await instance.delayTaskByDays(5, 3, "Grass too tall");

      t1 = await instance.getTask(5);
      const result = new Date(t1['4'].toNumber()*1000);
      assert.equal(result.getTime(), dueExpected.getTime(), "Incorrect offset");
    });
  });

  describe("Addresses and transfers", () => {
    it("Should have 0 internal balance", async () => {
      const instance = await TaskJournal.deployed();
      assert.equal(await instance.getBalance(), 0, "Non-zero contract balance");
    });

    it("Should have 1 ETH balance transferred from account 0", async () => {
      const instance = await TaskJournal.deployed();
      const account0 = accounts[0];
      await web3.eth.sendTransaction({
        from: account0,
        to: instance.address,
        value: web3.utils.toWei(String(2)),
        gas: 100000,
      });

      const bal = await instance.getBalance();
      assert.equal(web3.utils.fromWei(bal), 2, "Incorrect contract balance");
    });

    it("Should have 0 ETH balance after transfer to account 1", async () => {
      const instance = await TaskJournal.deployed();
      const account1 = accounts[1];
      await instance.transferToAddress(account1, web3.utils.toWei(String(2)));

      const bal = await instance.getBalance();
      assert.equal(await instance.getBalance(), 0, "Incorrect contract balance");
    });
  });


});
