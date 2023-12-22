import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const TodoList = () => {
  const fetchTodos = () =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data);
  const { data: todos, error } = useQuery<Todo[], Error>({
    // queryKey is used for caching, whenever data is fecthed from the backend, it is stored in caching
    queryKey: ["todos"],
    // queryFn is a function that used to fetch the data from the backend, this function should return promise that
    // resolves to data or the error . we can use any http or fetch function to fetch the data. becoz react query only
    // concerns about managing and caching data not about how we fetch it
    queryFn: fetchTodos,
  });

  if (error) return <p>{error.message}</p>;

  return (
    <ul className="list-group">
      {todos?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
