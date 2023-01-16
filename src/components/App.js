import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [todoList, setTodo]= useState(TASKS)
  function onAddTodo(newTodoItem){
    const updatedTodoList= [...todoList, newTodoItem]
    setTodo(updatedTodoList)
  }
  function onDeleteTodo(text){
    const updatedTodoList= todoList.filter(todo =>todo.text !== text)
    setTodo(updatedTodoList)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} />
      <NewTaskForm categoryArray={CATEGORIES} userData={onAddTodo} />
      <TaskList tasks={todoList} userText={onDeleteTodo}/>
    </div>
  );
}

export default App;
