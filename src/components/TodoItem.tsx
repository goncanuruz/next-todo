type TodoItemProps = {
  id: string;
  content: string;
  isCompleted: boolean;
};
const TodoItem = ({ id, content, isCompleted }: TodoItemProps) => {
  return (
    <li className="flex" key={id}>
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {content}
      </label>
      <input id={id} type="checkbox" className="cursor-pointer peer" />
    </li>
  );
};
export default TodoItem;
