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
    const matched = musicData.find((m) => m.genre === genre && m.mood === mood);
    setResult(matched);
    navigate("/result");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-pink-100 py-10 px-4 flex justify-center">
      <div className="w-full max-w-2xl space-y-6 bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">🎶 음악 취향 설문</h1>

        {questions.map((q) => (
          <div key={q.id} className="border rounded-xl p-4 shadow-sm bg-gray-50">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">{q.question}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {q.options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleSelect(q.id, opt)}
                  className={`py-2 px-4 rounded-lg border transition
                    ${answers[q.id] === opt
                      ? "bg-indigo-500 text-white font-semibold"
                      : "bg-white text-gray-700 hover:bg-indigo-100 border-gray-300"}`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}

        <Button
          className="w-full mt-6 py-3 text-lg"
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
