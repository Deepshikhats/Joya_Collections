import React from "react";
type ButtonType = "button" | "submit" | "reset" | undefined;
interface propsTypes {
  children?: React.ReactNode;
  type: ButtonType;
  className?: string;
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement> | any;
}

const Button: React.FC<propsTypes> = (props) => {
  const { type, children, className, disabled, onClick } = props;

  return (
    <button
      onClick={onClick}
      type={type}
      className={`button ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
