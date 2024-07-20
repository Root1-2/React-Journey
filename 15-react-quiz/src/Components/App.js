import { useQuiz } from "../contexts/QuizContext";

import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Questions from "./Questions";
import NextButton from "./NextButton";
import ProgressBar from "./ProgressBar";
import FinishScreen from "./FinishScreen";
import Timer from "./Timer";
import Footer from "./Footer";

export default function App() {
  const { status } = useQuiz();
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "Loading" && <Loader />}
        {status === "Error" && <Error />}
        {status === "Ready" && <StartScreen />}
        {status === "Active" && (
          <>
            <ProgressBar />
            <Questions />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "Finished" && <FinishScreen />}
      </Main>
    </div>
  );
}
