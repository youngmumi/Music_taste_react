import React from "react";
import { Button } from "../components/ui/button";

const Result = ({ result }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-indigo-100 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🎧 당신의 음악 추천은?</h2>

        {result ? (
          <div className="mb-6">
            <p className="text-lg text-gray-700 font-medium mb-2">
              🎵 <span className="font-semibold">{result.song}</span> - {result.artist}
            </p>
            <a
              href={result.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-blue-600 font-medium underline hover:text-blue-800 transition"
            >
              🔗 YouTube로 듣기
            </a>
          </div>
        ) : (
          <p className="text-gray-500">추천 결과를 찾을 수 없습니다.</p>
        )}

        <Button
          className="mt-4 px-6 py-2 text-base"
          onClick={() => window.location.href = "/"}
        >
          🔄 다시 시작
        </Button>
      </div>
    </div>
  );
};

export default Result;