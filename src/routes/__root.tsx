import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "@/components/Header.tsx";
import Footer from "@/components/Footer.tsx";

export const Route = createRootRoute({
    component: () => (
        <div className="flex flex-col min-h-screen">
            <Header />
            <hr />
            <Outlet />
            <Footer />
            <TanStackRouterDevtools />
        </div>
    ),
});