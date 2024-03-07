import { createLazyFileRoute } from "@tanstack/react-router";
import Pricing from "../views/pricing";

export const Route = createLazyFileRoute("/pricing")({
  component: Pricing,
});
