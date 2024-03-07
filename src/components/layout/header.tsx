import { Link, useRouterState } from "@tanstack/react-router";
import { FC } from "react";
import Button from "../button";

const Header: FC = () => {
  const {
    location: { pathname: path },
  } = useRouterState();

  return (
    <header className="p-2 w-full top-0 fixed flex items-center justify-center border-b-2 border-dotted border-black h-12">
      <div className="flex justify-between items-center md:w-8/12 w-full h-full">
        <Link to="/">
          <h1 className="uppercase">My Goals</h1>
        </Link>
        <div className="flex gap-4 items-center">
          <Link to="/pricing">Pricing</Link>
          {["/", "/pricing"].includes(path) && (
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
