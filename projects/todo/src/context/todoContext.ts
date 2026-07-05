import { createContext, useContext } from "react";

export type Todo = {
  id: number;
  todo: string;
  completed: boolean;
};

export type TodoContextType = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  updateTodo: (id: number, todo: Todo) => void;
  deleteTodo: (id: number) => void;
  toggleComplete: (id: number) => void;
};

export const TodoContext = createContext<TodoContextType | undefined>(
  undefined,
);

export const UseTodo = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("UseTodo must be within a provider");
  }

  return context;
};
export const TodoProvider = TodoContext.Provider;
