import React from "react";
import { Button } from "../components/ui/button";

const QuestionCard = ({ question, options, selected, onSelect }) => {
  return (
    <div className="p-4 border rounded-xl shadow bg-white">
      <p className="font-bold mb-2">{question}</p>
      <div className="grid grid-cols-2 gap-2">
        {options.map((opt) => (
          <Button
            key={opt}
            variant={selected === opt ? "default" : "outline"}
            onClick={() => onSelect(opt)}
          >
            {opt}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
