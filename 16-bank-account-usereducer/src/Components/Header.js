export default function Header({ isActive, balance, loan }) {
  return (
    <>
      <h1>useReducer Bank Account</h1>
      <div className="flex-container">
        {isActive ? (
          <>
            <div className="flex-child">Balance: € {balance}</div>
            <div className="flex-child">Loan: € {loan}</div>
          </>
        ) : (
          <div className="flex-child">Please open an account</div>
        )}
      </div>
    </>
  );
}
