"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Plus } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { todoFormValues, todoFormSchema } from "@/schema";
import { createTodo } from "@/actions/todo";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import Spinner from "./Spinner";

export function AddTodoForm({ userId }: { userId: string | null }) {
  const [loading, setLoading] = useState(false);
  const [opened, setOpened] = useState(false);
  const defaultValues: Partial<todoFormValues> = {
    title: "",
    body: "",
    completed: false,
  };

  const form = useForm<todoFormValues>({
    resolver: zodResolver(todoFormSchema),
    defaultValues,
    mode: "onChange",
  });

  const onSubmit = async (data: todoFormValues) => {
    setLoading(true);
    await createTodo({
      title: data.title,
      body: data.body,
      completed: data.completed,
      userId: userId,
    });
    setLoading(false);
    setOpened(false);
  };

  return (
    <Dialog open={opened} onOpenChange={setOpened}>
      <DialogTrigger asChild>
        <Button className="flex gap-1">
          <Plus size={25} /> Add New Todo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center pb-5">Add New Todo</DialogTitle>
          <DialogDescription className="text-center">
            Appreciate all the hard work you have put in :D
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Go for a walk" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="body"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Add short drscription (optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Ex: Finish this task as soon as possible!"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="completed"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="pr-1">Completed</FormLabel>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <Spinner /> <span className="pl-2">Saving...</span>
                  </>
                ) : (
                  "Save changes"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
