import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  { skill: "HTML+CSS", level: "advanced", color: "red" },
  { skill: "JavaScript", level: "beginner", color: "blue" },
  { skill: "Web Design", level: "intermediate", color: "green" },
  { skill: "Git/GitHub", level: "advanced", color: "orange" },
  { skill: "React", level: "beginner", color: "yellow" },
];

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
    <div className="list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div
      className="skill"
      style={{
        backgroundColor: color,
        marginBottom: "10px",
        // marginEnd: "20px",
        display: "inline-block",
      }}
    >
      <span>{skill}</span>
      <span>
        {level === "beginner" && "😶"}
        {level === "advanced" && "🔥"}
        {level === "intermediate" && "☠️"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
