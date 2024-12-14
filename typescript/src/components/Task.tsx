interface TodoProps {
  itemId: string;
  text: string;
}

export default function Task(props: TodoProps) {
  return (
    <>
      <li>
        <div>
          <p>{props.itemId}</p>
          <div>
            <span>{props.text}</span>
          </div>
        </div>
      </li>
    </>
  );
}
