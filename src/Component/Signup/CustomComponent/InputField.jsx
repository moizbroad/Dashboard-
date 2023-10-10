import React, { Fragment } from 'react'

const InputField = (props) => {
  const { id,
    label,
    type,
    name,
    autoComplete,
    required,
    value,
    defaultValue,
    onBlur,
    onKeyUp,
    onKeyDown,
    autoFocus,
    disabled,
    placeholder,
    onChange,
    className,
    minLength,
    maxLength,
    min,
    max,
    pattern,
    title,
    marginTop,
    marginBottom,
    noBorder,
    noBoxShadow,
  } = props;


  return (

    
    <div className={`${marginTop && "mt-4"} ${marginBottom && "mb-4"}`}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>)}


       
        <input
        id={id}
        label={label}
        max={max}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        pattern={pattern}
        title={title}
        value={value}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        autoFocus={autoFocus}
        disabled={disabled}
        defaultValue={defaultValue}
        onChange={onChange}
        autoComplete={autoComplete}
        required={required} />
         </div>
           )}
         export default InputField