import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1>Let's Start Todo's App</h1>
      <Link
        href={"/todos"}
        className="bg-violet-400 hover:bg-violet-600 text-white font-bold p-2 mt-2 rounded"
      >
        Go to Todo's
      </Link>
    </main>
  );
}
