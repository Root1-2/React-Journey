import { useState } from "react";

export function TextExpander({
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
