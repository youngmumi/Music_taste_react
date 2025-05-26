import React, { useState } from "react";
import QuestionCard from "../components/QuestionCard";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import musicData from "../data/musicDataset.json";
import "../styles/Survey.css";

const questions = [
  {
    id: 1,
    question: "가장 자주 듣는 음악 장르는 무엇인가요?",
    options: ["POP", "K-POP", "J-POP", "록", "클래식"],
  },
  {
    id: 2,
    question: "음악을 주로 듣는 상황은 언제인가요?",
    options: ["공부할 때", "운동할 때", "감정 정리할 때", "드라이브"],
  },
  {
    id: 3,
    question: "선호하는 음악 분위기는 무엇인가요?",
    options: ["밝고 신나는", "어두운", "차분한", "몽환적인", "감성적인"],
  },
];

const Survey = ({ setResult }) => {
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const handleSelect = (qId, option) => {
    setAnswers((prev) => ({ ...prev, [qId]: option }));
  };

  const calculateResult = () => {
    if (
      !answers[1] ||
      !answers[2] ||
      !answers[3]
    ) {
      alert("모든 질문에 답변해주세요.");
      return;
    }

    // 예시: 상황(answers[2])도 포함해 매칭하는 경우 (optional)
    const matched =
      musicData.find(
        (m) =>
          m.genre === answers[1] &&
          m.mood === answers[3] &&
          (m.situation ? m.situation === answers[2] : true)
      ) || null;

    setResult(matched);
    navigate("/result");
  };

  return (
    <div className="survey-container">
      <div className="survey-box">
        <h1 className="survey-title">🎶 음악 취향 설문</h1>

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
          className="survey-submit"
          onClick={calculateResult}
          disabled={Object.keys(answers).length < questions.length}
        >
          결과 보기 🎧
        </Button>
      </div>
    </div>
  );
};

export default Survey;
