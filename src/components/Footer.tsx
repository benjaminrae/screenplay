import { Link } from "@tanstack/react-router";

const Footer = () => <footer
    className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
    <p className="text-xs text-gray-600">© 2023 Eventify Inc. All rights reserved.</p>
    <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" href="#">
            About
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" href="#">
            Contact
        </Link>
    </nav>
</footer>;

export default Footer;