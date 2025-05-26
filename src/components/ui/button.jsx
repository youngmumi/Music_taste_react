import React from "react";
import "../../styles/Button.css";

const Button = ({
  children,
  onClick = () => {},
  className = "",
  variant = "default",
  disabled = false,
  type = "button",
}) => {
  const baseClass = "btn";
  const variantClass = variant === "outline" ? "btn-outline" : "btn-default";
  const disabledClass = disabled ? "btn-disabled" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClass} ${variantClass} ${disabledClass} ${className}`}
    >
      {children}
    </button>
  );
};

export { Button };

