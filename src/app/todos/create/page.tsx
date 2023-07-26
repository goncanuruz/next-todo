import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

async function createTodo(data: FormData) {
  "use server";
  console.log("aaaaaaaaa", "AAAAAAAAAAAA");
  const content = data.get("content")?.valueOf();
  console.log(content, "AAAAAAAAAAAA");
  if (typeof content !== "string" || content.length === 0) {
    throw new Error("Invalid Content");
  }
  await prisma.todo.create({
    data: { content, isCompleted: false, completedDate: new Date() },
  });
  redirect("/todos");
}
export default function CreateTodosPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1>Create New Todo</h1>
      <form action={createTodo} className="mt-2 flex gap-2">
        <input
          className="border rounded py-1 p-2 border-slate-300 focus-within:border-slate-100 focus-visible:outline-none"
          type="text"
          name="content"
          id="content"
        />
        <button
          type="submit"
          className="rounded bg-green-500 hover:bg-green-600 text-white px-2 py-1 text-sm"
        >
          ADD
        </button>
        <Link
          href={".."}
          className="text-white bg-red-500 hover:bg-red-700 p-2 rounded"
        >
          CANCEL
        </Link>
      </form>
      <div className="mt-3"></div>
    </main>
  );
}
