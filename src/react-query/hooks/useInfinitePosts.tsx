import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
interface Props {
  pageSize: number;
  userId: number | undefined;
}

const useInfinitePosts = (query: Props) => {
  const fetchPosts = (pageParam = 1) =>
    axios
      .get("https://jsonplaceholder.typicode.com/posts", {
        params: {
          userId: query.userId ? query.userId : null,
          _start: (pageParam - 1) * query.pageSize,
          _limit: query.pageSize,
        },
      })
      .then((res) => res.data);
  return useInfiniteQuery<Post[], Error>({
    // queryKey: query.userId ? ["users", query.userId, "posts"] : ["posts"],
    queryKey: ["posts", query],
    queryFn: ({ pageParam }) => fetchPosts(pageParam),
    staleTime: 1 * 60 * 1000,
    keepPreviousData: true, // it will not show loading state because it will keep previous data until we get new data
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length > 0 ? allPages.length + 1 : undefined,
  });
};

export default useInfinitePosts;
