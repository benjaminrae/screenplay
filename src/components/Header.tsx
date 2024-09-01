import { Link } from "@tanstack/react-router";
import { CalendarDays } from "lucide-react";

const Header = () => {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center">
            <Link className="flex items-center justify-center" to="/">
                <CalendarDays className="h-6 w-6" />
                <span className="sr-only">Eventify</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <Link className="text-sm font-medium hover:underline underline-offset-4" to="/find-events">
                    Find Events
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" to="/host">
                    Host
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" to="/organize">
                    Organize
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" to="/sign-in">
                    Sign In
                </Link>
            </nav>
        </header>
    );
};

export default Header;