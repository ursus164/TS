// import React from "react";

import Todo from "../models/types";
import Task from "./Task";
import classes from './Todos.module.css'
import { useContext } from "react";
import { TodosContext } from "../store/todos-context";

// interface representing props
interface TodosProps {
//   children: React.ReactNode;
  items: Todo[];
  onDelete: (id: string) => void
}

const Todos = (props: TodosProps) => {

  const context = useContext(TodosContext);

  return (
    <>
      <ul className={classes.todos}>
        {context.items.map((item) => (
          <Task key={item.id} itemId={item.id} text={item.text} />
        ))}
      </ul>
    </>
  );
};
export default Todos;
