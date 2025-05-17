import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import Result from "./pages/Result";

function App() {
  const [result, setResult] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey" element={<Survey setResult={setResult} />} />
        <Route path="/result" element={<Result result={result} />} />
      </Routes>
    </Router>
  );
}

export default App;
