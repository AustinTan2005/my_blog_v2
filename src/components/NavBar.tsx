import React from "react";
import Link from "next/link";
import Image from "next/image";

interface NavLink {
    label: string;
    href: string;
}

interface NavBarProps {
    links: NavLink[];
}

const NavBar: React.FC<NavBarProps> = ({links}) => {
    return (
        <nav
            id="navbar-example2"
            className="fixed top-0 left-0 right-0 bg-gray-200 bg-opacity-75 px-3 py-2 z-50"
            style={{backdropFilter: "blur(6px)"}}
        >
            <div className="flex items-center justify-between">
                <Link className="flex items-center" href="/">
                    <Image
                        src="/jake.svg"
                        alt="Logo"
                        width={50}
                        height={48}
                        className="inline-block"
                    />
                </Link>
                <ul className="flex items-center gap-3 ml-auto">
                    {links.map((link, idx) => (
                        <li key={idx}>
                            <a className="px-3 py-2 text-black rounded-md hover:bg-gray-300 transition-colors"
                               href={link.href}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;