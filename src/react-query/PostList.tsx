import { useState } from "react";
import usePosts from "./hooks/usePosts";
import useInfinitePosts from "./hooks/useInfinitePosts";

const PostList = () => {
  const pageSize = 10;
  // const [page, setPage] = useState(1);
  const [userId, setUserId] = useState<number>();
  const {
    data: posts,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfinitePosts({ userId, pageSize });
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <select
        className="form-select mb-3"
        onChange={(event) => setUserId(parseInt(event.target.value))}
        value={userId?.toString()}
      >
        <option value=""></option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>
      <ul className="list-group">
        {posts.pages.map((page) =>
          page.map((post) => (
            <li key={post.id} className="list-group-item">
              {post.title}
            </li>
          ))
        )}
        {/* {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))} */}
      </ul>
      {/* <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="btn btn-danger"
      >
        Previous
      </button>
      <button onClick={() => setPage(page + 1)} className="btn btn-success">
        Next
      </button> */}
      <button
        disabled={isFetchingNextPage || !hasNextPage}
        onClick={() => fetchNextPage()}
        className="btn btn-success"
      >
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
    </>
  );
};

export default PostList;
