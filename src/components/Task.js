import React from "react";

function Task({task, id}) {
  const {text, category} = task;
  function deleteTodo(id){
    console.log(id)
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={()=>deleteTodo(id)}>X</button>
    </div>
  );
}

export default Task;
