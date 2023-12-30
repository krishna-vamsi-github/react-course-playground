import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { Todo } from "./hooks/useTodos";
import axios from "axios";

const TodoForm = () => {
  const ref = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
        .then((res) => res.data),
    onSuccess: (savedData, newData) => {
      // APPROACH : Invalidating the Cache. it will not work for fake APIS to test
      // queryClient.invalidateQueries({queryKey: ['todos']})

      // Update the data directly in the cache
      queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
        savedData,
        ...(todos || []),
      ]);
    },
  });

  return (
    <form
      className="row mb-3"
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current && ref.current.value)
          mutation.mutate({
            id: 0,
            title: ref.current?.value,
            userId: 3232432,
            completed: false,
          });
      }}
    >
      <div className="col">
        <input ref={ref} type="text" className="form-control" />
      </div>
      <div className="col">
        <button className="btn btn-primary">Add</button>
      </div>
    </form>
  );
};

export default TodoForm;
