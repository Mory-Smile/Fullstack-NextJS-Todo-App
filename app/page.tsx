import { DialogDemo as DialogForm } from "@/components/DialogForm";

export default function Home() {
  // const todos = await getTodoList();

  return (
    <main className="container w-full h-screen flex justify-center">
      <DialogForm />
      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul> */}
    </main>
  );
}
