import React from "react";
import Todo from "../models/types";

interface TodosContextInterface {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
}

interface TodosContextProviderProps {
  children: React.ReactNode;
}

const TodosContext = React.createContext<TodosContextInterface>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider = (props: TodosContextProviderProps) => {

    
  return <TodosContext.Provider value={}>
    {props.children}</TodosContext.Provider>;
};
