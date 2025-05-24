import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/survey");
  };

  return (
    <div className="home-container">
      <h1 className="home-title">🎵 음악 취향 테스트</h1>
      <p className="home-description">
        간단한 질문에 답하고 당신만의 음악 스타일을 알아보세요!
      </p>
      <img
        src="https://cdn-icons-png.flaticon.com/512/4472/4472584.png"
        alt="음악 일러스트"
        className="home-image"
      />
      <Button onClick={handleStart} variant="default" className="start-button">
        테스트 시작하기
      </Button>
    </div>
  );
};

export default Home;
