// import React from "react";

import Todo from "../models/types";
import Task from "./Task";

// interface representing props
interface TodosProps {
//   children: React.ReactNode;
  items: Todo[];
}

const Todos = (props: TodosProps) => {
  return (
    <>
      <ul>
        {props.items.map((item) => (
          <Task itemId={item.id} text={item.text}/>
        ))}
      </ul>
    </>
  );
};
export default Todos;
