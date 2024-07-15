function StartScreen({ numberQuestions }) {
  return (
    <div className="start">
      <h2>Welcome To The React Quiz</h2>
      <h3>{numberQuestions} question to start your react mastery</h3>
      <button className="btn btn-ui">Let's Start</button>
    </div>
  );
}

export default StartScreen;
