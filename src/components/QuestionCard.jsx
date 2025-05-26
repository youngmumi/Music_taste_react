import React from "react";
import { Button } from "../components/ui/button";
import "../styles/QuestionCard.css";

const QuestionCard = ({ question, options, selected, onSelect }) => {
  return (
    <div className="question-card">
      <p className="question-text">{question}</p>
      <div className="option-grid">
        {options.map((opt) => (
          <Button
            key={`${question}-${opt}`}
            variant={selected === opt ? "default" : "outline"}
            onClick={() => onSelect(opt)}
            aria-pressed={selected === opt}
          >
            {opt}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;

