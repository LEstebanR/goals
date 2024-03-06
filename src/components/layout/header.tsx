import { Link, useRouterState } from "@tanstack/react-router";
import { FC } from "react";
import Button from "../button";

const Header: FC = () => {
  const {
    location: { pathname: path },
  } = useRouterState();

  return (
    <header className="p-4 w-full top-0 fixed flex items-center justify-center border-b-2 border-dotted border-black">
      <div className="flex justify-between items-center md:w-8/12 w-full">
        <Link to="/">
          <h1>Goals</h1>
        </Link>
        <div className="flex gap-4">
          {path !== "/login" && (
            <Link to="/login">
              <Button
                variant="solid"
                size="md"
                color="primary"
                label="SignIn"
              />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
