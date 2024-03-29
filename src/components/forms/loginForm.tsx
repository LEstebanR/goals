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
        <p>Or logging using:</p>
        <div className="flex gap-2 mt-2">
          <div className="size-10 border-black border p-1 bg-white">
            <img src="/icons/Google-icon.svg" alt="Google" />
          </div>
        </div>
      </div>
      <div>
        <p className="">
          Don't have an account?{" "}
          <CustomLink to="/signup" label="SignUp for free" />
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
