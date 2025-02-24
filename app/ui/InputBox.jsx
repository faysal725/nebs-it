import React from "react";

const InputBox = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
}) => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="space-x-1">
        {label && <label className="text-lg font-medium">{label}</label>}
        {required && <span className="text-lg font-medium">*</span>}
        
      </div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border rounded-3xl p-2 px-4 focus:ring-2 focus:ring-black outline-none font-thin border-black/50"
        required={required}
      />
    </div>
  );
};

export default InputBox;
