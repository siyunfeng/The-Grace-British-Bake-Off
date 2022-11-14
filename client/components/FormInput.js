import React from 'react';

const FormInput = (props) => {
  const { label, errorMessage, value, onChange, ...inputProps } = props;
  return (
    <div className="form-input">
      <label>{label}</label>
      <input {...inputProps} value={value} onChange={onChange} />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
