// components/FormField.js
import React, { useState } from 'react';
import { ImEye, ImEyeBlocked } from 'react-icons/im';

const FormField = ({ title, type, placeholder, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="space-y-2 relative">
      <h1 className="block my-1 font-medium text-[#081225] text-sm antialiased">
        {title}
      </h1>
      <div className="relative">
        <input
          type={showPassword ? 'text' : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="block text-sm placeholder:font-light py-3 px-4 rounded-lg w-full border outline-[#081225]"
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute top-1/2 transform -translate-y-1/2 right-3"
          >
            {showPassword ? <ImEyeBlocked /> : <ImEye />}
          </button>
        )}
      </div>
    </div>
  );
};

export default FormField;