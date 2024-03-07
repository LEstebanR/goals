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
    sm: "w-12 ",
    md: "w-24 ",
    lg: "w-15 ",
    full: "w-full",
  };

  const colorClasses = {
    primary: "bg-primary",
    secondary: "bg-secondary",
  };
  return (
    <button
      className={clsx(
        "h-8 p-2 ont-bold rounded flex justify-center items-center",
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
