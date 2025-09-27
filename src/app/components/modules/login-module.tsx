"use client";
import { useState } from "react";
import { tv } from "tailwind-variants";
import { AuthForm } from "../components/auth-form";

const loginModule = tv({
  base: "flex h-full min-h-screen w-full flex-col items-center justify-center gap-y-7",
});

const LoginModule = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={loginModule()}>
      <AuthForm
        title="Login"
        subTitle="Kindly enter your details to log in "
        emailInputProps={{
          name: "email",
          type: "email",
          value: email,
          placeholder: "",
          onValueChange: (e) => setEmail(e.target.value),
          label: "Email Address",
          // handleBlur,
          dataError: "Please enter a valid email address",
          // errorMessage: errors.email,
        }}
        passwordInputProps={{
          name: "password",
          type: "password",
          value: password,
          onValueChange: (e) => setPassword(e.target.value),
          placeholder: "***********",
          label: "Password",
          // handleBlur,
          // errorMessage: errors.password,
          dataError: "Please enter your password",
        }}
        // onSubmit={(e) => handleSubmit(e, handleLogin)}
        buttonProps={{
          type: "submit",
          label: "Login",
        }}
      />
    </div>
  );
};

export default LoginModule;
