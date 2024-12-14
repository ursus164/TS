// import React from "react";

import Todo from "../models/types";

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
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  );
};
export default Todos;
