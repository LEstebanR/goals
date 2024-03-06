import { FC } from "react";
import Button from "../button";
import { EmailInput, PasswordInput } from "./input";
import CustomLink from "../customLink";

const LoginForm: FC = () => {
  return (
    <form className="space-y-4" action="#" method="POST">
      <EmailInput />
      <PasswordInput />
      <CustomLink to="/forgot-password" label="Forgot Password" />
      <Button variant="solid" size="full" color="primary">
        Login
      </Button>
      <div>
        <p className="">
          Don't have an account? <CustomLink to="/signup" label="SignUp" />
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
