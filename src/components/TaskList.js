import React from "react";
import Task from "./Task";

function TaskList({tasks, userText}) {
  
  return (
    <div className="tasks">
      {tasks.map((task, index) => {
        return <Task task={task} key={index} id={index} userText={userText}/>
      })}
    </div>
  );
}

export default TaskList;
