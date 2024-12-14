import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";

function App() {
  // const todos = [
  //   new Todo("Learn React"),
  //   new Todo("Learn Typescript"),
  //   new Todo("Learn PHP"),
  // ];

  return (
    <>
      <NewTodo />
      <Todos />
    </>
  );
}

export default App;
