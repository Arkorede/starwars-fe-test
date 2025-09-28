"use client";
import { tv } from "tailwind-variants";
import { AuthForm } from "../components/auth-form";
import useAuth from "@/app/hooks/useAuth";

const loginModule = tv({
  base: "flex h-full min-h-screen w-full flex-col items-center justify-center gap-y-7",
});

const LoginModule = () => {
  const {
    formData,
    handleInputChange,
    touched,
    errors,
    handleBlur,
    handleSubmit,
  } = useAuth();

  return (
    <div className={loginModule()}>
      <AuthForm
        title="Login"
        subTitle="Kindly enter your details to log in "
        emailInputProps={{
          name: "email",
          type: "email",
          value: formData.email,
          onValueChange: handleInputChange("email"),
          label: "Email Address",
          handleBlur: handleBlur("email"),
          errorMessage: touched.email ? errors.email : "",
          isError: touched.email && !!errors.email,
        }}
        passwordInputProps={{
          name: "password",
          type: "password",
          value: formData.password,
          onValueChange: handleInputChange("password"),
          label: "Password",
          handleBlur: handleBlur("password"),
          errorMessage: touched.password ? errors.password : "",
          isError: touched.password && !!errors.password,
        }}
        onSubmit={handleSubmit}
        buttonProps={{
          type: "submit",
          label: "Login",
        }}
      />
    </div>
  );
};

export default LoginModule;
