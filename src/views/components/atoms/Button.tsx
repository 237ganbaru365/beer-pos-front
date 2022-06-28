import React from "react";

type Props = {
  buttonStyle: string;
  children?: React.ReactNode;
};

const Button: React.FC<Props> = ({ children, buttonStyle }) => {
  return (
    <button className={`p-2 px-4 rounded-md ${buttonStyle}`}>{children}</button>
  );
};

export default Button;
