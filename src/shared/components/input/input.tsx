import React from "react";
import "./input.scss";
import search from "@assets/images/search.png";
interface propsTypes {
  label?: string;
  type?: string;
  id?: string;
  value?: any;
  placeholder?: string;
  className?: string;
  name?: string;
  wrapperClass?: string;
  showError?: boolean;
  Righticon?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  onClickRightButton?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
const Input: React.FC<propsTypes> = (props) => {
  const {
    type,
    placeholder,
    className,
    Righticon,
    disabled,
    wrapperClass,
    name,
    value,
    id,
    label,
    autoFocus,
    onChange,
    onBlur,
    onFocus,
    onClickRightButton,
  } = props;

  return (
    <div
      className={`d-flex align-items-center wrapper position-relative ${wrapperClass}`}
    >
      <label
        htmlFor={id}
        className="position-absolute inputLabel fw-semibold start-0"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={className}
        disabled={disabled}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        autoFocus={autoFocus}
      />
      {Righticon ? <img alt="icon" src={search} /> : ""}
    </div>
  );
};

export default Input;
