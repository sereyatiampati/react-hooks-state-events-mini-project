import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [todoList, setTodo]=useState(TASKS)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} />
      <NewTaskForm categoryArray={CATEGORIES} onAddTodo={setTodo} />
      <TaskList tasks={todoList} />
    </div>
  );
}

export default App;
