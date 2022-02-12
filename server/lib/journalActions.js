
const JournalActions = {
  // rewrite to accept todo
  getTasks: async (req, res) => {
    try {
      res.status(200).json({"message": "Test"});
    } catch (error) {
      res.status(400).json({"error": error});
    }
  },
  addTask: async (req, res) => {

  },
  modifyTaskDesc: async (req, res) => {

  },
  delayTask: async (req, res) => {

  }
}

export default JournalActions;
