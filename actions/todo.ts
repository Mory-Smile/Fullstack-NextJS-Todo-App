"use server";

import { PrismaClient } from "@prisma/client";
import { boolean } from "zod";

const prisma = new PrismaClient();

export const getTodoList = async () => {
  return await prisma.todo.findMany();
  //   ** ERORR HANDLING
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
};
export const updateTodo = async () => {};
export const deleteTodo = async () => {};
