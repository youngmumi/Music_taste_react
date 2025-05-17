import React, { useState } from "react";
import QuestionCard from "../components/QuestionCard";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import musicData from "../data/musicDataset.json";

const questions = [
  {
    id: 1,
    question: "가장 자주 듣는 음악 장르는 무엇인가요?",
    options: ["팝", "힙합", "록", "클래식", "재즈", "EDM", "발라드", "인디"]
  },
  {
    id: 2,
    question: "음악을 주로 듣는 상황은 언제인가요?",
    options: ["공부할 때", "운동할 때", "감정 정리할 때", "드라이브"]
  },
  {
    id: 3,
    question: "선호하는 음악 분위기는 무엇인가요?",
    options: ["밝고 신나는", "어두운", "차분한", "몽환적인", "감성적인"]
  }
];

const Survey = ({ setResult }) => {
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const handleSelect = (qId, option) => {
    setAnswers({ ...answers, [qId]: option });
  };

  const calculateResult = () => {
    const genre = answers[1];
    const mood = answers[3];
    const matched = musicData.find(
      (m) => m.genre === genre && m.mood === mood
    );
    setResult(matched);
    navigate("/result");
  };

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4">
      {questions.map((q) => (
        <QuestionCard
          key={q.id}
          question={q.question}
          options={q.options}
          selected={answers[q.id]}
          onSelect={(opt) => handleSelect(q.id, opt)}
        />
      ))}
      <Button
        className="w-full mt-4"
        onClick={calculateResult}
        disabled={Object.keys(answers).length < questions.length}
      >
        결과 보기
      </Button>
    </div>
  );
};

export default Survey;