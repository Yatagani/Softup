import React, { useState } from "react";
import Tasks from "./Components/Tasks";
import TaskForm from "./Components/TaskForm";

const DUMMY_TASKS = [
  {
    description: "First Task",
    status: false,
  },
  {
    description: "Second Task",
    status: true,
  },
  {
    description: "Third Task",
    status: false,
  },
];
function App() {
  const [tasks, setTasks] = useState(DUMMY_TASKS);

  const saveTaskDataHandler = (enteredTaskData) => {
    const taskData__ = {
      ...enteredTaskData,
      id: Math.random().toString(),
    };

    // console.log(taskData__);
    setTasks((prevTasks) => {
      return [taskData__, ...prevTasks];
    });
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}> Todo List</h2>
      <TaskForm onSaveTaskData={saveTaskDataHandler} />
      <Tasks items={tasks} />
    </div>
  );
}

export default App;
