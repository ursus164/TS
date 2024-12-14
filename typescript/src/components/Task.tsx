import classes from "./Task.module.css";
import { useContext } from "react";
import { TodosContext } from "../store/todos-context";

interface TodoProps {
  itemId: string;
  text: string;
}

export default function Task(props: TodoProps) {
  const context = useContext(TodosContext);

  return (
    <>
      <li className={classes.item}>
        <div className={classes.content}>
          <div>
            <p>{props.itemId}</p>
            <div>
              <span>{props.text}</span>
            </div>
          </div>
          <div className={classes.actions}>
            <button onClick={() => context.removeTodo(props.itemId)}>
              Delete
            </button>
          </div>
        </div>
      </li>
    </>
  );
}
