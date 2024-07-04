import { useState } from "react";

const questions = [
  {
    id: 32,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 31,
    question: "What are the building blocks of React Apps?",
    answer: "Components",
  },
  {
    id: 33,
    question: "Whats the name of syntax we use to descrive a UI in React?",
    answer: "JSX",
  },
  {
    id: 34,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 35,
    question: "How to give components memory?",
    answer: "useState Hook",
  },
  {
    id: 36,
    question: "What do we call an input element that is completely sync?",
    answer: "Controlled Element",
  },
];

export default function App() {
  return (
    <div className="app">
      <Flashcards />
    </div>
  );
}

function Flashcards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div class="flashcard">
      {questions.map((questions) => (
        <div
          key={questions.id}
          onClick={() => handleClick(questions.id)}
          className={questions.id === selectedId ? "selected" : ""}
        >
          <p>
            {questions.id === selectedId
              ? questions.answer
              : questions.question}
          </p>
        </div>
      ))}
    </div>
  );
}
