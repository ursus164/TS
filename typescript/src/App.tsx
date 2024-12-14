import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/types";
import { useState } from "react";

function App() {
  // const todos = [
  //   new Todo("Learn React"),
  //   new Todo("Learn Typescript"),
  //   new Todo("Learn PHP"),
  // ];

  return (
    <>
      <NewTodo onAddTodo={onAddTodoHandler} />
      <Todos items={todos} onDelete={onDeleteTodoHandler} />
    </>
  );
}

export default App;
