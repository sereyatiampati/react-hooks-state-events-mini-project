import React, {useState} from "react";

function NewTaskForm({categoryArray, onAddTodo}) {
  const [detail, setDetail] = useState("")
  const [category, setCategory]= useState("All")
  const newTodo = {
    detail,
    category
  }
  function handleAddTodo(e){
    e.preventDefault()
    console.log(newTodo);
    setDetail("");
    setCategory("");
  //   const updatedTodo =[...categoryArray,newTodo]
  //   onAddTodo(updatedTodo)
   }
return (
    <form className="new-task-form" onSubmit={handleAddTodo}>
      <label>
        Details
        <input 
        type="text" 
        name="text" 
        onChange={(e)=>{
          return setDetail(e.target.value)}}/>
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
