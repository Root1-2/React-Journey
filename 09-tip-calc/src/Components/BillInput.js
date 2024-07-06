export function BillInput({ bill, onSetBill }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}
