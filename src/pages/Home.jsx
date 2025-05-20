import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/survey");
  };

  return (
    <div className="container flex flex-col items-center justify-center min-h-screen text-center">
      <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem" }}>
        🎵 음악 취향 테스트
      </h1>
      <p style={{ fontSize: "1.25rem", marginBottom: "2rem", color: "#555" }}>
        간단한 질문에 답하고 당신만의 음악 스타일을 알아보세요!
      </p>
      <img
        src="https://cdn-icons-png.flaticon.com/512/4472/4472584.png"
        alt="음악 일러스트"
        style={{
          width: "10%",
          maxWidth: "400px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          marginBottom: "2rem"
        }}
      />
      <Button onClick={handleStart} variant="default">
        테스트 시작하기
      </Button>
    </div>
  );
};

export default Home;


