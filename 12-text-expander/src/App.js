import { useState } from "react";

export default function App() {
  return (
    <div>
      <TextExpander
        className="box"
        expandButtonText="Show text"
        buttonColor="#ff6622"
      >
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        buttonColor="#ff6622"
        className="box"
        collapseButtonText="Show Less"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  expandButtonText = "Show More",
  collapseButtonText = "Show Less",
  collapsedNumWords = 15,
  buttonColor = "#1f09cd",
  className,
  expanded = false,
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  return (
    <div className={className}>
      <span>{displayText}</span>
      <button
        style={{
          background: "none",
          font: "inherit",
          border: "none",
          cursor: "pointer",
          color: buttonColor,
          marginLeft: "6px",
        }}
        onClick={() => setIsExpanded((exp) => !exp)}
      >
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
