import classes from './NewTodo.module.css'
import { useContext } from "react";
import { TodosContext } from "../store/todos-context";

// interface NewTodoProps {
//     onAddTodo: (text: string) => void
// }

export default function NewTodo() {
  const context = useContext(TodosContext);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    // console.log(data.text)

    context.addTodo(data.text as string);
  }

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <label htmlFor="text"></label>
      <input type="text" name="text" id="text" required />
      <button type="submit">Add Todo</button>
    </form>
  );
}
