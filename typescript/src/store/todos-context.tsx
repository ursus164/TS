import React, { useState } from "react";
import Todo from "../models/types";
import { TodoContext } from "../models/types";

// interface TodosContextObject {
//   items: Todo[];
//   addTodo: (text: string) => void;
//   removeTodo: (id: string) => void;
// }

interface TodosContextProviderProps {
  children: React.ReactNode;
}

const TodosContext = React.createContext<TodoContext>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider = (props: TodosContextProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodoHandler(text: string) {
    const newTodo = new Todo(text);

    setTodos((prevState) => {
      // return prevState.concat(newTodo) // like this
      return [...prevState, newTodo]; // or like this
    });
  }

  function deleteTodoHandler(id: string) {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id !== id);
    });
  }

  const context: TodoContext = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: deleteTodoHandler,
  };

  return (
    <TodosContext.Provider value={context}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
export { TodosContext };