import { prisma } from "@/db";

function getTodos() {
  return prisma.todo.findMany();
}
export default async function TodosPage() {
  const todos = await getTodos();

  return (
    <section>
      <header>Todo's List</header>
      <ul>
        {todos.map((todo) => {
          return (
            <TodoItem
              id={todo.id}
              content={todo.content}
              isCompleted={todo.isCompleted}
            />
          );
        })}
      </ul>
    </section>
  );
}
