import React, { useState } from "react";
import Card from "./Card";
import { useContext } from "react";
import { TaskContext } from "../context";

import TaskDialog from "./TaskDialog";
const TaskSection = () => {
  const { selectedTab, tasks } = useContext(TaskContext);

  const [showAddTask, setShowAddTask] = useState(false);
  return (
    <div className="task-container">
      {selectedTab === "INBOX" ? (
        <div className="add-task-container">
          {!showAddTask && (
            <div
              className="add-task-btn"
              onClick={() => setShowAddTask((prevState) => !prevState)}
            >
              <span className="add-icon">+</span>
              <span>Add Task</span>
            </div>
          )}
          {showAddTask && (
            <TaskDialog
              onCancel={() => {
                setShowAddTask(false);
              }}
            />
          )}
        </div>
      ) : (
        ""
      )}

      <div className="display-task">
        {tasks.map((task, index) => (
          <Card key={index} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskSection;
