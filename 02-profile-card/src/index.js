import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="intro">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="1.jpg" alt="user" />;
}

function Intro() {
  return (
    <div>
      <h1>Abdullah Al Masrur</h1>
      <h3>
        Dummy Texts Dummy Texts Dummy Texts Dummy Texts Dummy Texts Dummy
        TextsDummy TextsDummy TextsDummy Texts Dummy Texts Dummy TextsDummy
        TextsDummy Texts Dummy Texts Dummy Texts Dummy Texts.
      </h3>
    </div>
  );
}

function SkillList() {
  return (
    <div class="list">
      <Skill skill="React" emoji="🔥" color="blue" />
      <Skill skill="Next" emoji="📞" color="red" />
      <Skill skill="HTML" emoji="💀" color="green" />
      <Skill skill="CSS" emoji="📨" color="orange" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      {props.skill} {props.emoji}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
