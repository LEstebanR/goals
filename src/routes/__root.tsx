import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

export const Route = createRootRoute({
  component: () => (
    <div className="p-2 flex gap-2 w-full min-h-screen justify-center items-center flex-col">
      <Header />
      <Outlet />
      <TanStackRouterDevtools />
      <Footer />
    </div>
  ),
});
