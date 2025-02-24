import React from 'react'

const Button = ({ children, onClick, type = "button", variant = "primary", disabled = false }) => {
    const baseStyles = "px-10 py-2 rounded-full font-medium transition duration-200";
    const variants = {
      primary: "bg-blue-900 text-white hover:bg-white hover:text-blue-900 border border-blue-900",
      secondary: "bg-gray-500 text-white hover:bg-gray-600",
      danger: "bg-red-500 text-white hover:bg-red-600",
      outline: "border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white",
      large: "bg-blue-900 text-white hover:bg-white hover:text-blue-900 border border-blue-900 w-80",
    };
  
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${baseStyles} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  
