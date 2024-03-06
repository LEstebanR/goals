import { FC } from "react";
import { Link } from "@tanstack/react-router";

type CustomLinkProps = {
  to: string;
  label: string;
};

const CustomLink: FC<CustomLinkProps> = ({ label, to }) => {
  return (
    <Link
      className="text-link hover:underline underline-offset-2 decoration-dashed hover:text-linkHover transition-all duration-300 ease-in-out"
      to={to}
      target="_blank"
    >
      {label}
    </Link>
  );
};

export default CustomLink;
