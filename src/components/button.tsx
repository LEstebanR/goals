import { FC } from "react";
import clsx from "clsx";

type ButtonProps = {
  children?: string;
  variant?: "solid";
  size?: "sm" | "md" | "lg" | "full";
  color?: "primary" | "secondary";
  label?: string;
};

const Button: FC<ButtonProps> = ({
  children,
  variant = "solid",
  size = "md",
  color = "primary",
  label,
}) => {
  const VariantClasses = {
    solid: "hover:bg-opacity-90",
  };

  const SizeClasses = {
    sm: "py-1 px-2",
    md: "py-2 px-4",
    lg: "py-3 px-6",
    full: "w-full p-2",
  };

  const colorClasses = {
    primary: "bg-primary",
    secondary: "bg-secondary",
  };
  return (
    <button
      className={clsx(
        "font-bold rounded flex justify-center items-center",
        colorClasses[color],
        VariantClasses[variant],
        SizeClasses[size]
      )}
    >
      {label || children}
    </button>
  );
};

export default Button;
