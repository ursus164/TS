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

  const [todos, setTodos] = useState<Todo[]>([]);

  function onAddTodoHandler(text: string) {
    const newTodo = new Todo(text);

    setTodos((prevState) => {
      // return prevState.concat(newTodo) // like this
      return [...prevState, newTodo]; // or like this
    });
  }

  function onDeleteTodoHandler(id: string) {
    setTodos((prevState) => {  
     return prevState.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <NewTodo onAddTodo={onAddTodoHandler} />
      <Todos items={todos} onDelete={onDeleteTodoHandler} />
    </>
  );
}

export default App;
