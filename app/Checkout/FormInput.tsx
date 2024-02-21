import React from "react";

interface FormInputProps {
  placeholder: string;
  name: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  placeholder,
  name,
  id,
  value,
  onChange,
  required,
}) => {
  return (
    <div>
      <input
        type="text"
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="p-2 mt-1 block w-full shadow-sm sm:text-sm border-gray-500 bg-gray-100 formInput"
      />
    </div>
  );
};

export default FormInput;
