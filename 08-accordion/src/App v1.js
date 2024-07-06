import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque bibendum varius nibh, nec fringilla turpis tempor ac. In hac habitasse platea dictumst. Quisque sit amet eros varius, consequat ex sit amet, pulvinar neque. Cras lobortis est turpis, sed tempor lorem malesuada sed. Praesent non nisi ullamcorper, efficitur nisi condimentum, tincidunt tellus. Fusce non turpis mi. Nunc ut varius neque, at molestie arcu. Sed a orci eu risus pulvinar porttitor.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque bibendum varius nibh, nec fringilla turpis tempor ac. In hac habitasse platea dictumst. Quisque sit amet eros varius, consequat ex sit amet, pulvinar neque. Cras lobortis est turpis, sed tempor lorem malesuada sed. Praesent non nisi ullamcorper, efficitur nisi condimentum, tincidunt tellus. Fusce non turpis mi. Nunc ut varius neque, at molestie arcu. Sed a orci eu risus pulvinar porttitor.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque bibendum varius nibh, nec fringilla turpis tempor ac. In hac habitasse platea dictumst. Quisque sit amet eros varius, consequat ex sit amet, pulvinar neque. Cras lobortis est turpis, sed tempor lorem malesuada sed. Praesent non nisi ullamcorper, efficitur nisi condimentum, tincidunt tellus. Fusce non turpis mi. Nunc ut varius neque, at molestie arcu. Sed a orci eu risus pulvinar porttitor.",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}
function Accordion({ data }) {
  return (
    <div>
      {data.map((el, i) => (
        <AccordionItem title={el.title} text={el.text} num={i} key={el.title} />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <div className="items">
        <div>
          <span className="number">{num < 9 ? `0${num + 1}` : num + 1}</span>
          <span className="title">{title}</span>
        </div>

        <span className="icon">{isOpen ? "-" : "+"}</span>
      </div>

      {isOpen && <div className="contextbox">{text}</div>}
    </div>
  );
}
