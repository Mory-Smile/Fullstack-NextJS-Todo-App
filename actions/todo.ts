"use server";

import { ITodo } from "@/interfaces";
import { PrismaClient } from "@prisma/client";

import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const getTodoList = async () => {
  return await prisma.todo.findMany({ orderBy: { createdAt: "desc" } });
};
export const createTodo = async ({
  title,
  body,
  completed,
}: {
  title: string;
  body?: string | undefined;
  completed: boolean;
}) => {
  await prisma.todo.create({
    data: {
      title: title,
      body: body,
      completed: completed,
    },
  });
  revalidatePath("/");
};
export const updateTodo = async ({ id, title, body, completed }: ITodo) => {
  await prisma.todo.update({
    where: {
      id: id,
    },
    data: {
      title,
      body,
      completed,
    },
  });
  revalidatePath("/");
};
export const deleteTodo = async ({ id }: { id: string }) => {
  await prisma.todo.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/");
};
