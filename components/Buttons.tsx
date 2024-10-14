"use client";

import { Pen, Trash } from "lucide-react";
import { Button } from "./ui/button";
import Spinner from "./Spinner";
import { deleteTodo } from "@/actions/todo";
import { useState } from "react";

const Buttons = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Button size={"icon"}>
        <Pen size={18} />
      </Button>
      <Button
        size={"icon"}
        variant={"destructive"}
        onClick={async () => {
          setLoading(true);
          await deleteTodo({ id: id });
          setLoading(false);
        }}
      >
        {loading ? <Spinner /> : <Trash size={18} />}
      </Button>
    </>
  );
};

export default Buttons;
