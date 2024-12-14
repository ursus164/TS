import classes from "./Task.module.css";

interface TodoProps {
  itemId: string;
  text: string;
  onTodoDelete: (id: string) => void;
}

export default function Task(props: TodoProps) {
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
            <button onClick={() => props.onTodoDelete(props.itemId)}>
              Delete
            </button>
          </div>
        </div>
      </li>
    </>
  );
}
