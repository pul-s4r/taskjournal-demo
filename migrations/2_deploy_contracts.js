const TaskJournal = artifacts.require("TaskJournal");

module.exports = function(deployer) {
  // deployer.deploy(ConvertLib);
  // deployer.link(ConvertLib, ToDo);
  // Link other contracts here
  deployer.deploy(TaskJournal);
};
