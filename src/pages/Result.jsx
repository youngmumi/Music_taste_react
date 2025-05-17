import React from "react";
import { Button } from "../components/ui/button";

const Result = ({ result }) => {
  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="p-4 border rounded-xl shadow bg-white">
        <h2 className="text-xl font-bold mb-2">당신의 음악 추천은:</h2>
        {result ? (
          <div>
            <p className="mb-1">🎵 {result.song} - {result.artist}</p>
            <a
              href={result.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              YouTube로 이동
            </a>
          </div>
        ) : (
          <p>추천 결과를 찾을 수 없습니다.</p>
        )}
        <Button className="mt-4" onClick={() => window.location.href = "/"}>
          다시 시작
        </Button>
      </div>
    </div>
  );
};

export default Result;