import React, { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState("");
  const [tasks, setTasks] = useState([]);
  const value = {
    selectedTab,
    setSelectedTab,
    tasks,
    setTasks
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
