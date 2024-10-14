import { AddTodoForm as DialogForm } from "@/components/DialogForm";
import { getTodoList } from "@/actions/todo";
import TodoTable from "@/components/TodoTable";

export default async function Home() {
  const todos = await getTodoList();

  return (
    <main className="container px-36">
      <DialogForm />
      <TodoTable todos={todos} />
    </main>
  );
}
