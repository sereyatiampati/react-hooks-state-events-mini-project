import React, { useState } from "react";

function NewTaskForm({categoryArray, userData}) {
  const [text, setText] = useState("")
  const [category, setCategory]= useState("All")
  
  function handleAddTodo(e){
    e.preventDefault();
    const newTodo = {
      text,
      category
    }
    userData(newTodo);
   }
return (
    <form className="new-task-form" onSubmit={handleAddTodo}>
      <label>
        Details
        <input 
        type="text" 
        name="text"
        value={text}
        onChange={(e)=>setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" onChange={(e)=>setCategory(e.target.value)}>
          {categoryArray.map((category, index)=> <option key={index} value={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
