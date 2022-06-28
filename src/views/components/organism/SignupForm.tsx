import React from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

type Props = {
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitHandler: (e: React.SyntheticEvent) => void;
};

const SignupForm = (props: Props) => {
  const { submitHandler, changeHandler } = props;
  return (
    <form onSubmit={submitHandler}>
      <Input
        changeHandler={changeHandler}
        labelName="name"
        type="text"
        name="name"
        wrapperStyle=""
        inputStyle=""
        labelStyle=""
      />
      <Input
        changeHandler={changeHandler}
        labelName="email"
        type="email"
        name="email"
        wrapperStyle=""
        inputStyle=""
        labelStyle=""
      />
      <Input
        changeHandler={changeHandler}
        labelName="password"
        type="password"
        name="password"
        wrapperStyle=""
        inputStyle=""
        labelStyle=""
      />
      <Button buttonStyle="bg-gray-300">Register</Button>
    </form>
  );
};

export default SignupForm;
