import TodoItem from "@/components/TodoItem";
import { prisma } from "@/db";
import Link from "next/link";

function getTodos() {
  return prisma.todo.findMany();
}

export default async function TodosPage() {
  const todos = await getTodos();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <div className="flex flex-col items-center justify-center">
        <h1>Todo's List</h1>
        <Link
          href={"/todos/create"}
          className="bg-violet-400 hover:bg-violet-600 text-white font-bold p-2 mt-2 rounded"
        >
          New
        </Link>
      </div>
      <ul className="mt-3">
        {todos.map((todo) => (
          <TodoItem
            key={`${todo.content}${todo.id}`}
            content={todo.content}
            isCompleted={todo.isCompleted}
            id={todo.id}
          />
        ))}
      </ul>
    </main>
  );
}
