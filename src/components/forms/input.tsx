import { FC } from "react";

type TextInputProps = {
  label: string;
};

type CustomInputProps = {
  label: string;
  type: string;
};

export const EmailInput: FC = () => {
  return (
    <div>
      <label htmlFor="email" className="block text-sm font-medium leading-6 ">
        Email address
      </label>
      <div className="mt-2 text-black">
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="block w-full rounded-md border-0 py-1.5 px-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export const PasswordInput: FC = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between gap-2">
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-6 "
        >
          Password
        </label>
      </div>
      <div className="mt-2 text-black">
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="block w-full rounded-md border-0 py-1.5 px-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export const TextInput: FC<TextInputProps> = ({ label }) => {
  return (
    <div className="">
      <div className="flex items-center justify-between gap-2">
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-6 "
        >
          {label}
        </label>
      </div>
      <div className="mt-2 text-black">
        <input
          id={label.toLowerCase()}
          name={label.toLowerCase()}
          type="text"
          className="block w-full rounded-md border-0 py-1.5 px-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export const CustomInput: FC<CustomInputProps> = ({ label, type }) => {
  return (
    <div className="">
      <div className="flex items-center justify-between gap-2">
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-6 "
        >
          {label}
        </label>
      </div>
      <div className="mt-2 text-black">
        <input
          id={label.toLowerCase()}
          name={label.toLowerCase()}
          type={type}
          className="block w-full rounded-md border-0 py-1.5 px-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};
