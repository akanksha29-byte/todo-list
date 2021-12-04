import { TaskContext } from "../context";
import { useContext, useState } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

const TaskDialog = ({ onCancel }) => {
  const [temp, setTemp] = useState("");
  const { setTasks } = useContext(TaskContext);
  const [date, setDate] = useState(new Date());
  const handleAddTask = () => {
    setTasks((prevState) => [
      ...prevState,
      {
        id: prevState.length + 1,
        task: temp,
        date: new Date(date).toLocaleDateString()
      }
    ]);
    setTemp("");
  };

  return (
    <div className="task-input-dialog">
      <input
        placeholder="Enter task..."
        type="text"
        onChange={(e) => setTemp(e.target.value)}
        value={temp}
      />
      <DayPickerInput value={date} onDayChange={(day) => setDate(day)} />
      {console.log(date)}
      <div className="btn-container">
        <button
          className="btn btn-primary"
          disabled={temp.length === 0 ? true : false}
          onClick={handleAddTask}
        >
          Add task
        </button>
        <button className="btn" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default TaskDialog;
