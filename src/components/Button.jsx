import React from "react";

const Button = ({ bgcolor, color, size, text, borderRadius }) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgcolor, color, borderRadius }}
      className={`text-${size} px-3 py-2 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  );
};

export default Button;
