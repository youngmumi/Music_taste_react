import React from "react";

const Button = ({ children, onClick, className = "", variant = "default", disabled = false }) => {
  const base = "px-4 py-2 rounded text-white font-semibold transition";
  const variants = {
    default: "bg-indigo-500 hover:bg-indigo-600",
    outline: "bg-white text-indigo-500 border border-indigo-500 hover:bg-indigo-50"
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant] || variants.default} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {children}
    </button>
  );
};

export { Button };