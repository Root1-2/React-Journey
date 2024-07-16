import { useReducer } from "react";
import Button from "./Button";
import Header from "./Header";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

function reducer(state, action) {
  if (!state.isActive && action.type !== "openAccount") return state;

  switch (action.type) {
    case "openAccount":
      return {
        ...state,
        balance: 500,
        isActive: true,
      };
    case "deposit":
      return { ...state, balance: state.balance + action.payload };
    case "withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload,
        balance: state.balance + action.payload,
      };
    case "payLoan":
      return { ...state, loan: 0, balance: state.balance - state.loan };
    case "closeAccount":
      if (state.loan > 0 || state.balance !== 0) return state;
      return initialState;
    default:
      throw new Error("Unknown");
  }
}

export default function App() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div className="App">
      <Header balance={balance} loan={loan} isActive={isActive} />
      <Button
        iconClass="fa-circle-user btn-1"
        disabled={isActive}
        onClick={() => dispatch({ type: "openAccount" })}
      >
        Open account
      </Button>
      <Button
        iconClass="fa-sack-dollar btn-2"
        disabled={!isActive}
        onClick={() => dispatch({ type: "deposit", payload: 150 })}
      >
        Deposit 150
      </Button>
      <Button
        iconClass="fa-sack-xmark btn-2"
        disabled={!isActive}
        onClick={() => dispatch({ type: "withdraw", payload: 50 })}
      >
        Withdraw 50
      </Button>
      <Button
        iconClass="fa-hand-holding-dollar btn-2"
        disabled={!isActive}
        onClick={() => dispatch({ type: "requestLoan", payload: 5000 })}
      >
        Request a loan of 5000
      </Button>
      <Button
        iconClass="fa-money-bill-transfer btn-2"
        disabled={!isActive}
        onClick={() => dispatch({ type: "payLoan" })}
      >
        Pay loan
      </Button>
      <Button
        iconClass="fa-circle-xmark btn-3"
        disabled={!isActive}
        onClick={() => dispatch({ type: "closeAccount" })}
      >
        Close account
      </Button>
    </div>
  );
}
