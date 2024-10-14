import { AddTodoForm as DialogForm } from "@/components/DialogForm";
import { getTodoList } from "@/actions/todo";
import TodoTable from "@/components/TodoTable";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = auth();
  const todos = await getTodoList();

  return (
    <main className="container px-36">
      <DialogForm userId={userId} />
      <TodoTable todos={todos} />
    </main>
  );
}
