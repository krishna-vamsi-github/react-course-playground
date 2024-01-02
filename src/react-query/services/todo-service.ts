import { Todo } from "../../models/todo.model";
import APIClient from "./api-client";

export default new APIClient<Todo>("/todos");
