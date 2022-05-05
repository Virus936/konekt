import React from 'react';

export default function InputElement({ inputType, target, name, children }) {
  return (
    <div>
      <input type={inputType} name={name} id={target} />
      <label htmlFor={target}>{children}</label>
    </div>
  );
}
