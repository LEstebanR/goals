import { createLazyFileRoute } from "@tanstack/react-router";
import SignUp from "../views/signUp";

export const Route = createLazyFileRoute("/signup")({
  component: SignUp,
});
