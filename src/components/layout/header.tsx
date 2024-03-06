import { Link } from "@tanstack/react-router";
import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="p-4 w-full top-0 fixed flex items-center justify-between">
      <Link to="/">
        <h1>Goals</h1>
      </Link>

      <div className="flex gap-4">
        <Link to="/signup">SignUp</Link>
        <Link to="/login">logIn</Link>
      </div>
    </header>
  );
};

export default Header;
