export function Output({ bill, tip }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <h3>
        You Pay {bill + tip} (${bill} + ${tip} tip)
      </h3>
    </div>
  );
}
