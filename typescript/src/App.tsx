import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todos-context";

function App() {
  // const todos = [
  //   new Todo("Learn React"),
  //   new Todo("Learn Typescript"),
  //   new Todo("Learn PHP"),
  // ];

  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
