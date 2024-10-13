"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTodoList = async () => {
  return await prisma.todo.findMany();
  //   ** ERORR HANDLING
};
export const createTodo = async ({
  title,
  body,
}: {
  title: string;
  body?: string | undefined;
}) => {
  await prisma.todo.create({
    data: {
      title: title,
      body: body,
    },
  });
};
export const updateTodo = async () => {};
export const deleteTodo = async () => {};
