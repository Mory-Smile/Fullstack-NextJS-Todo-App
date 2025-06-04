import { AddTodoForm as DialogForm } from "@/components/DialogForm";
import { getTodoListWithUserId } from "@/actions/todo";
import TodoTable from "@/components/TodoTable";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = auth();
  const todos = await getTodoListWithUserId({ userId });

  return (
    <main className="container">
      <DialogForm userId={userId} />
      <TodoTable todos={todos} />
    </main>
  );
}
