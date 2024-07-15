import { useReducer } from "react";

const START_BALANCE = 500;
const LOAN = 5000;

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "openAccount":
      if (state.isActive) return state;
      return { ...state, isActive: true, balance: START_BALANCE };
    case "deposit":
      return { ...state, balance: state.balance + payload.value };
    case "withdraw":
      return { ...state, balance: state.balance - payload.value };
    case "requestLoan":
      if (state.loan > 0) return state;
      return { ...state, loan: LOAN, balance: state.balance + LOAN };
    case "payLoan":
      if (state.loan <= 0) return state;
      return { ...state, loan: 0, balance: state.balance - state.loan };
    case "closeAccount":
      if (state.balance < 0 && state.isActive) return state;
      state = initialState;
      return state;
    default:
      console.log("No action type found");
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <div className="flex-container">
        {state.isActive ? (
          <>
            <div className="flex-child">Balance: € {state.balance}</div>
            <div className="flex-child">Loan: € {state.loan}</div>
          </>
        ) : (
          <div className="flex-child">Please open an account</div>
        )}
      </div>

      <p>
        <button
          className="btn btn-1 btn-sep fa-solid fa-circle-user"
          onClick={() => {
            dispatch({ type: "openAccount" });
          }}
          disabled={state.isActive ? true : false}
        >
          Open account
        </button>
      </p>
      <p>
        <button
          className="btn btn-2 btn-sep fa-solid fa-sack-dollar"
          onClick={() => {
            dispatch({ type: "deposit", payload: { value: 150 } });
          }}
          disabled={state.isActive ? false : true}
        >
          Deposit 150
        </button>
      </p>
      <p>
        <button
          className="btn btn-2 btn-sep fa-solid fa-sack-xmark"
          onClick={() => {
            dispatch({ type: "withdraw", payload: { value: 50 } });
          }}
          disabled={state.isActive ? false : true}
        >
          Withdraw 50
        </button>
      </p>
      <p>
        <button
          className="btn btn-2 btn-sep fa-solid fa-hand-holding-dollar"
          onClick={() => {
            dispatch({ type: "requestLoan" });
          }}
          disabled={state.isActive ? (state.loan > 0 ? true : false) : true}
        >
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button
          className="btn btn-2 btn-sep fa-solid fa-money-bill-transfer"
          onClick={() => {
            dispatch({ type: "payLoan" });
          }}
          disabled={state.isActive ? (state.loan > 0 ? false : true) : true}
        >
          Pay loan
        </button>
      </p>
      <p>
        <button
          className="btn btn-3 btn-sep fa-solid fa-circle-xmark"
          onClick={() => {
            dispatch({ type: "closeAccount" });
          }}
          disabled={
            state.isActive && state.loan === 0
              ? state.balance >= 0
                ? false
                : true
              : true
          }
        >
          Close account
        </button>
      </p>
    </div>
  );
}
