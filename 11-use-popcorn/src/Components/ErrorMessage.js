export function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>❌</span> {message}
    </p>
  );
}

export function Loader() {
  return <p className="loader">Loading...</p>;
}
