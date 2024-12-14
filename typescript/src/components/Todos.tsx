import React from "react";

// interface representing props
interface TodosProps {
  children?: React.ReactNode;
  items: string[];
}

const Todos = (props: TodosProps) => {
  return (
    <>
      <ul>
        {props.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};
export default Todos;
