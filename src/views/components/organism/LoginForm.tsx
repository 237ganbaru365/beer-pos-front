import React from "react";

import Button from "../atoms/Button";
import Input from "../molecules/Input";

type Props = {
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitHandler: (e: React.SyntheticEvent) => void;
};

const LoginForm = (props: Props) => {
  const { submitHandler, changeHandler } = props;
  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <Input
          changeHandler={changeHandler}
          labelName="name"
          type="text"
          name="name"
        />
        <Input
          changeHandler={changeHandler}
          labelName="password"
          type="password"
          name="password"
        />
        <Button buttonStyle="bg-gray-300">Login</Button>
      </form>
    </section>
  );
};

export default LoginForm;
