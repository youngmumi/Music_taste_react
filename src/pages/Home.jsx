import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/survey");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 text-center px-4">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-800">
        🎵 음악 취향 테스트
      </h1>
      <p className="text-lg sm:text-xl mb-6 text-gray-600 max-w-md">
        간단한 질문에 답하고 당신만의 음악 스타일을 알아보세요!
      </p>
      <img
        src="https://cdn-icons-png.flaticon.com/512/4472/4472584.png"
        alt="음악 일러스트"
        className="w-32 sm:w-48 md:w-56 mb-6 rounded-xl shadow-lg"
      />
      <Button onClick={handleStart} variant="default" className="text-lg px-6 py-3">
        테스트 시작하기
      </Button>
    </div>
  );
};

export default Home;


