import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constans";
import { Todo } from "../../models/todo.model";
import APIClient from "../services/api-client";

interface AddToDoContext {
  previosTodos: Todo[];
}

const useAddTodo = (addTodoCB: () => void) => {
  const queryClient = useQueryClient();
  const apiClient = new APIClient<Todo>('/todos');
  return useMutation<Todo, Error, Todo, AddToDoContext>({
    mutationFn: (todo: Todo) => apiClient.post(todo),
    onSuccess: (savedData, newData) => {
      // APPROACH : Invalidating the Cache. it will not work for fake APIS to test
      // queryClient.invalidateQueries({queryKey: ["todos"]})

      // Update the data directly in the cache
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
        todos?.map((todo) => (todo === newData ? savedData : todo))
      );
    },
    onMutate: (newData: Todo) => {
      const previosTodos =
        queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) => [
        newData,
        ...(todos || []),
      ]);
      addTodoCB();
      return { previosTodos };
    },
    onError: (error, newData, context) => {
      if (!context) return;
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context?.previosTodos);
    },
  });
};

export default useAddTodo;
