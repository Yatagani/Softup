import React, { useState } from "react";
import "./TaskForm.css";

const TaskForm = (props) => {
  const [enteredTask, setEnteredTask] = useState("");

  const taskChangeHandler = (event) => {
    setEnteredTask(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); // Prevent page reload, which is set by default when using Forms in browser

    const taskData = {
      description: enteredTask,
    };

    // console.log(taskData);
    props.onSaveTaskData(taskData);
    setEnteredTask("");
  };

  return (
    <div className="task-form">
      <form onSubmit={submitHandler}>
        <div>
          <label>Add Todo</label>
          <input type="text" value={enteredTask} onChange={taskChangeHandler} />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
