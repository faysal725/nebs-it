import React from 'react'


const Radio = ({ options, name, selected, onChange, label, required=false }) => {
    return (
      <div className="flex flex-col space-y-2">
        {/* {label && <p className="text-lg font-medium">{label}</p>} */}
        <div className="space-x-1">
        {label && <label className="text-lg font-medium">{label}</label>}
        {required && <span className="text-lg font-medium">*</span>}
      </div>

        <div className="flex flex-col space-y-2">
          {options.map((option) => (
            <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={selected === option.value}
                onChange={() => onChange(option.value)}
                className="w-4 h-4 accent-blue-500"
              />
              <span className="text-base font-normal">{option.label}</span>
            </label>
          ))}
        </div>
      </div>
    );
  };
  
  export default Radio;
  