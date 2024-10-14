"use client";

import { Trash } from "lucide-react";
import { Button } from "./ui/button";
import Spinner from "./Spinner";
import { deleteTodo } from "@/actions/todo";
import { useState } from "react";
import { EditTodoForm } from "./EditTodoForm";
import { ITodo } from "@/interfaces";

const Buttons = ({ todo }: { todo: ITodo }) => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <EditTodoForm todo={todo} />
      <Button
        size={"icon"}
        variant={"destructive"}
        onClick={async () => {
          setLoading(true);
          await deleteTodo({ id: todo?.id as string });
          setLoading(false);
        }}
      >
        {loading ? <Spinner /> : <Trash size={18} />}
      </Button>
    </>
  );
};

export default Buttons;
