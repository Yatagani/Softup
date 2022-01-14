import React from "react";
import TaskItem from "./TaskItem";
import "./Tasks.css";

const Tasks = (props) => {
  return (
    <div className="tasks">
      <TaskItem
        description={props.items[0].description}
        status={props.items[0].status}
      />
      <TaskItem
        description={props.items[1].description}
        status={props.items[1].status}
      />
      <TaskItem
        description={props.items[2].description}
        status={props.items[2].status}
      />
    </div>
  );
};

export default Tasks;
