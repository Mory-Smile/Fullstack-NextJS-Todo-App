import { DialogDemo as DialogForm } from "@/components/DialogForm";
import TodoTable from "@/components/TodoTable";

export default function Home() {
  // const todos = await getTodoList();

  return (
    <main className="container px-36">
      <DialogForm />
      <TodoTable />
      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul> */}
    </main>
  );
}
