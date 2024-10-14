"use server";

import { ITodo } from "@/interfaces";
import { PrismaClient } from "@prisma/client";

import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const getTodoListWithUserId = async ({
  userId,
}: {
  userId: string | null;
}) => {
  return await prisma.todo.findMany({
    where: {
      user_id: userId as string,
    },
    orderBy: { createdAt: "desc" },
  });
};
export const createTodo = async ({
  title,
  body,
  completed,
  userId,
}: {
  title: string;
  body?: string | undefined;
  completed: boolean;
  userId: string | null;
}) => {
  await prisma.todo.create({
    data: {
      title: title,
      body: body,
      completed: completed,
      user_id: userId as string,
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
