import React from "react";
import Task from "./Task";

function TaskList({tasks}) {
  
  return (
    <div className="tasks">
      {tasks.map((task, index) => {
        return <Task task={task} key={index} id={index}/>
      })}
    </div>
  );
}

export default TaskList;
