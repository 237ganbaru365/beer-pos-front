import React, { useState } from "react";

import SignupForm from "../../components/organism/SignupForm";

const AdminSignup = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
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
      <SignupForm submitHandler={submitHandler} changeHandler={changeHandler} />
    </div>
  );
};

export default AdminSignup;
