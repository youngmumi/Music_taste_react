import React from "react";

const Button = ({ children, onClick, className = "", variant = "default", disabled = false }) => {
  const base = "px-4 py-2 rounded text-white font-semibold transition";
  const variants = {
    default: "bg-blue-500 hover:bg-blue-600",
    outline: "bg-white text-blue-500 border border-blue-500 hover:bg-blue-50"
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