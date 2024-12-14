// import React from "react";

import Todo from "../models/types";
import Task from "./Task";
import classes from './Todos.module.css'

// interface representing props
interface TodosProps {
//   children: React.ReactNode;
  items: Todo[];
  onDelete: (id: string) => void
}

const Todos = (props: TodosProps) => {
  return (
    <>
      <ul className={classes.todos}>
        {props.items.map((item) => (
          <Task key={item.id} itemId={item.id} text={item.text} onTodoDelete={props.onDelete} />
        ))}
      </ul>
    </>
  );
};
export default Todos;
