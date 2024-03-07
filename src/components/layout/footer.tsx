import { FC } from "react";
import CustomLink from "../customLink";

const Footer: FC = () => {
  return (
    <footer className="p-2 w-full flex justify-center border-t-2 border-black  fixed bottom-0 border-dotted">
      <h1>
        Made by{" "}
        <CustomLink to="https://github.com/LEstebanR" label="LEstebanR" blank />
      </h1>
    </footer>
  );
};

export default Footer;
