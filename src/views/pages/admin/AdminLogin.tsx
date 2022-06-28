import React, { useState } from "react";

import LoginForm from "../../components/organism/LoginForm";

const AdminLogin = () => {
  const [value, setValue] = useState({
    name: "",
    password: "",
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <div className="w-screen h-screen FlexCenter">
      <LoginForm submitHandler={submitHandler} changeHandler={changeHandler} />
    </div>
  );
};

export default AdminLogin;
