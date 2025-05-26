import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import "../styles/Home.css";
import img1 from '../img/main.png';

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/survey");
  };

  return (
    <div className="home-container">
      <h1 className="home-title">🎵 음악 취향 테스트</h1>
      <p className="home-description">
        당신의 음악 취향을 알고 노래를 추천 받으세요!
      </p>
      <img
        src={img1}
        alt="음악 관련 일러스트 이미지"
        className="home-image"
      />
      <Button onClick={handleStart} variant="default" className="start-button">
        테스트 시작하기
      </Button>
    </div>
  );
};

export default Home;
