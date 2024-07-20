import { useQuiz } from "../contexts/QuizContext";

function ProgressBar() {
  const { index, numQuestions, points, maxPossiblePoints, answer } = useQuiz();
  return (
    <div>
      <header className="progress">
        <progress max={numQuestions} value={index + Number(answer !== null)} />
        <p>
          Question <strong>{index + 1}</strong> / {numQuestions}
        </p>
        <p>
          <strong>{points}</strong> / {maxPossiblePoints}
        </p>
      </header>
    </div>
  );
}

export default ProgressBar;
