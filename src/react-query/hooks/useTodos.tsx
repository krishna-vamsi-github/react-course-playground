import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodos = () => {
  const fetchTodos = () => {
    return axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data);
  };
  // queryFn is a function that used to fetch the data from the backend, this function should return promise that
  // resolves to data or the error . we can use any http or fetch function to fetch the data. becoz react query only
  // concerns about managing and caching data not about how we fetch it
  // queryKey is used for caching, whenever data is fecthed from the backend, it is stored in caching
  return useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    staleTime: 10 * 1000,
  });
};

export default useTodos;
