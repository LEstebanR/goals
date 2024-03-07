import { FC } from "react";
import { Link } from "@tanstack/react-router";

type CustomLinkProps = {
  to: string;
  label: string;
  blank?: boolean;
};

const CustomLink: FC<CustomLinkProps> = ({ label, to, blank = false }) => {
  return (
    <Link
      className="text-link hover:underline underline-offset-2 decoration-dashed hover:text-linkHover transition-all duration-300 ease-in-out"
      to={to}
      target={blank ? "_blank" : "_self"}
    >
      {label}
    </Link>
  );
};

export default CustomLink;
