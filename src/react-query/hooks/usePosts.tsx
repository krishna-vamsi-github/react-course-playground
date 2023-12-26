import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
interface Props {
  page: number;
  pageSize: number;
  userId: number | undefined;
}

const usePosts = (query: Props) => {
  const fetchPosts = () =>
    axios
      .get("https://jsonplaceholder.typicode.com/posts", {
        params: {
          userId: query.userId ? query.userId : null,
          _start: (query.page - 1) * query.pageSize,
          _limit: query.pageSize,
        },
      })
      .then((res) => res.data);
  return useQuery<Post[], Error>({
    // queryKey: query.userId ? ["users", query.userId, "posts"] : ["posts"],
    queryKey: ["posts", query],
    queryFn: fetchPosts,
    staleTime: 1 * 60 * 1000,
  });
};

export default usePosts;
