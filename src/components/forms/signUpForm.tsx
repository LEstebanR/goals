import { FC } from "react";
import Button from "../button";
import { CustomInput, EmailInput, PasswordInput, TextInput } from "./input";
import CustomLink from "../customLink";

const SignUpForm: FC = () => {
  return (
    <form className="space-y-4" action="#" method="POST">
      <TextInput label="Name" />
      <EmailInput />
      <PasswordInput />
      <CustomInput label="Confirm Password" type="password" />
      <div>
        <p className="">
          You already have an account? <CustomLink to="/login" label="Login" />
        </p>
      </div>
      <Button variant="solid" size="full" color="primary">
        SignUp
      </Button>
      <div>
        <p>Or SignUp using:</p>
        <div className="flex gap-2 mt-2">
          <div className="size-10 border-black border p-1 bg-white">
            <img src="/icons/Google-icon.svg" alt="Google" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
