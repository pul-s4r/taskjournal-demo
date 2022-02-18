import React, { createContext, useState } from "react";

const TaskDataContext = createContext(undefined);
const TaskDataDispatchContext = createContext(undefined);

const TaskDataProvider = ({ children }) => {
  const [taskData, setTaskData] = useState({});

  return (
    <TaskDataContext.Provider value={taskData}>
      <TaskDataDispatchContext.Provider value={setTaskData}>
        {children}
      </TaskDataDispatchContext.Provider>
    </TaskDataContext.Provider>
  );
};

export { TaskDataProvider, TaskDataContext, TaskDataDispatchContext };
