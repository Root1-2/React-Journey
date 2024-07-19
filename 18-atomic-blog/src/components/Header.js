import { Results } from "./Results";
import { SearchPosts } from "./SearchPosts";
import { usePosts } from "./PostContext";

export function Header() {
  const { onClearPosts } = usePosts;
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}
