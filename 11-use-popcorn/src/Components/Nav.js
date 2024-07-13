import { useEffect, useRef } from "react";

export function Nav({ children }) {
  return <nav className="nav-bar">{children}</nav>;
}

export function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

export function NumResult({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

export function Search({ query, setQuery }) {
  // useEffect(function () {
  //   const el = document.querySelector(".search");
  //   el.focus();
  // }, []);

  const inputElement = useRef(null);

  useEffect(
    function () {
      function callback(e) {
        if (document.activeElement === inputElement.current) {
          return;
        }

        if (e.code === "Enter") {
          inputElement.current.focus();
          setQuery("");
        }
      }

      document.addEventListener("keydown", callback);
      return () => document.addEventListener("keydown", callback);
    },
    [setQuery]
  );

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputElement}
    />
  );
}
