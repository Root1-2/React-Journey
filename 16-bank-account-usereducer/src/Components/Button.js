export default function Button({ iconClass, onClick, disabled, children }) {
  return (
    <div>
      <button
        className={`btn btn-sep fa-solid ${iconClass}`}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
}
