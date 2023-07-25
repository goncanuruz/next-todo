type TodoItemProps = {
  id: string;
  content: string;
  isCompleted: boolean;
};
const TodoItem = ({ id, content, isCompleted }: TodoItemProps) => {
  return (
    <li className="flex">
      <input id={id} type="checkbox" className="cursor-pointer peer" />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {content}
      </label>
    </li>
  );
};
