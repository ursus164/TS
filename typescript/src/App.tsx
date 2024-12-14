import Todos from "./components/Todos";
import Todo from "./models/types";

function App() {
  const todos = [
    new Todo('Learn React'),
    new Todo('Learn Typescript'),
    new Todo('Learn PHP')
  ]

  return (
    <>
      <Todos items={todos} />
    </>
  );
}

export default App;
