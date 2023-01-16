import React from "react";

function Task({task, userText}) {
  const {text, category} = task;

  function deleteTodo(text){
    (userText(text))
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={()=>deleteTodo(text)} >X</button>
    </div>
  );
}

export default Task;
