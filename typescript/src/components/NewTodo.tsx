import classes from './NewTodo.module.css'

interface NewTodoProps {
    onAddTodo: (text: string) => void

}

export default function NewTodo(props: NewTodoProps) {

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    // console.log(data.text)

    props.onAddTodo(data.text as string)
  }

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <label htmlFor="text"></label>
      <input type="text" name="text" id="text" required />
      <button type="submit">Add Todo</button>
    </form>
  );
}
