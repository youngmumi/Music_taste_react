import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import "../styles/Result.css";

const Result = ({ result }) => {
  const navigate = useNavigate();

  return (
    <div className="result-container">
      <div className="result-box">
        <h2 className="result-title">🎧 당신을 위한 음악 추천은?</h2>

        {result ? (
          <div className="result-content">
            <p className="result-song">
              🎵{" "}
              <span className="song-name" aria-label={`곡 제목: ${result.song}`}>
                {result.song}
              </span>{" "}
              - {result.artist}
            </p>
            <p className="genre-info">🎼 장르: {result.genre}</p>
            <p className="mood-info">🌈 분위기: {result.mood}</p>

            {result.link ? (
              <a
                href={result.link}
                target="_blank"
                rel="noopener noreferrer"
                className="youtube-link"
                aria-label={`${result.song} 유튜브 링크 열기`}
              >
                🔗 YouTube로 듣기
              </a>
            ) : (
              <p className="no-link">YouTube 링크가 제공되지 않았습니다.</p>
            )}
          </div>
        ) : (
          <p className="no-result">추천 결과를 찾을 수 없습니다.</p>
        )}

        <Button className="restart-button" onClick={() => navigate("/")}>
          🔄 다시 시작
        </Button>
      </div>
    </div>
  );
};

export default Result;
