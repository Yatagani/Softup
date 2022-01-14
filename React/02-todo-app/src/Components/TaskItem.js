import React from "react";
import "./TaskItem.css";

const TaskItem = (props) => {
  
  const markHandler = () => {};

  const removeHandler = () => {};

  return (
    <div className="task-item">
      <div style={{ textDecoration: props.status ? "line-through" : "" }}>
        {props.description}
      </div>
      <div>
        <button className="button-done" onClick={markHandler}>
          V
        </button>
        <button className="button-remove" onClick={removeHandler}>
          X
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
