import { useQuiz } from "../contexts/QuizContext";

function StartScreen() {
  const { numberQuestions, dispatch } = useQuiz();
  return (
    <div className="start">
      <h2>Welcome To The React Quiz</h2>
      <h3>{numberQuestions} question to start your react mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;
