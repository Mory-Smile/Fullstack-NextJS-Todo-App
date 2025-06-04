"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "./ui/badge";
import { ITodo } from "@/interfaces";
import Buttons from "./Buttons";

export default function TodoTable({ todos }: { todos: ITodo[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>
            {!todos.length ? (
              <div className="w-full text-center text-red-600">
                <h1>There are no Todos! Try adding some...</h1>
              </div>
            ) : (
              "Completed"
            )}
          </TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map((todo) => (
          <TableRow key={todo?.id}>
            <TableCell>{todo?.title}</TableCell>
            <TableCell>
              {todo?.completed ? (
                <Badge>Completed🎉</Badge>
              ) : (
                <Badge variant={"secondary"}>
                  In progress...(Not completed)
                </Badge>
              )}
            </TableCell>
            <TableCell className="flex items-center justify-end space-x-2">
              <Buttons todo={todo} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow className="text-center">
          <TableCell colSpan={3} className="flex">
            Total
          </TableCell>
          <TableCell></TableCell>
          <TableCell className="text-right">{todos.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
