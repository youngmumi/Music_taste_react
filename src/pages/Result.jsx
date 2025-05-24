import React from "react";
import { Button } from "../components/ui/button";
import "../styles/Result.css";

const Result = ({ result }) => {
  return (
    <div className="result-container">
      <div className="result-box">
        <h2 className="result-title">🎧 당신의 음악 추천은?</h2>

        {result ? (
          <div className="result-content">
            <p className="result-song">
              🎵 <span className="song-name">{result.song}</span> - {result.artist}
            </p>
            <a
              href={result.link}
              target="_blank"
              rel="noopener noreferrer"
              className="youtube-link"
            >
              🔗 YouTube로 듣기
            </a>
          </div>
        ) : (
          <p className="no-result">추천 결과를 찾을 수 없습니다.</p>
        )}

        <Button
          className="restart-button"
          onClick={() => window.location.href = "/"}
        >
          🔄 다시 시작
        </Button>
      </div>
    </div>
  );
};

export default Result;
