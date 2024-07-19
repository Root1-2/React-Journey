import { useContext, createContext } from "react";

const PostContext = createContext();

export function Results() {
  const { posts } = useContext(PostContext);
  return <p>🚀 {posts.length} atomic posts found</p>;
}
