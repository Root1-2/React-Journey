import Options from "./Options";
import { useQuiz } from "../contexts/";

function Questions() {
  const [question, dispatch, answer] = useQuiz();
  // console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Questions;
