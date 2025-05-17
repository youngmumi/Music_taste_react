import React from "react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">🎧 음악 취향 설문</h1>
      <p className="mb-6 text-gray-600">설문을 통해 당신의 음악 취향을 진단하고 추천받아보세요.</p>
      <Button onClick={() => navigate("/survey")}>시작하기</Button>
    </div>
  );
};

export default Home;

