import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constans";
import { Todo } from "../../models/todo.model";
import todoService from "../services/todo-service";

const useTodos = () => {
  // queryFn is a function that used to fetch the data from the backend, this function should return promise that
  // resolves to data or the error . we can use any http or fetch function to fetch the data. becoz react query only
  // concerns about managing and caching data not about how we fetch it
  // queryKey is used for caching, whenever data is fecthed from the backend, it is stored in caching
  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: todoService.getAll,
    staleTime: 10 * 1000,
  });
};

export default useTodos;
