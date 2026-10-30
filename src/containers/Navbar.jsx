
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import DesktopNav from "../components/Navbar/DesktopNav";
import MobileNav from "../components/Navbar/MobileNav";
import HamburgerMenu from "../components/Navbar/HamburgerMenu";
import SideLinks from "../components/SideLinks";
import FadeIn from "../animation components/FadeIn";

const Navbar = ({ isOpen, toggleMenu }) => {
    const [navbar, setNavbar] = useState(false);

    useEffect(() => {
        const changeHeight = () => {
            setNavbar(window.scrollY > 100);
        };

        const onScroll = setTimeout(() => {
            window.addEventListener("scroll", changeHeight);
        }, 500);

        return () => {
            clearTimeout(onScroll);
            window.removeEventListener("scroll", changeHeight);
        };
    }, []);

    return (
        <>
            <header
                className={`fixed z-50 top-0 right-0 left-0 flex items-center px-6 md:px-10 bg-black/80 lg:px-[50px] backdrop-blur-[10px] ease-in-out duration-300 ${
                    navbar
                        ? "h-[70px] shadow-[0_10px_30px_-10px] shadow-mono-shadow"
                        : "h-[100px]"
                }`}
            >
                <nav className="flex items-center justify-between w-full">
                    {/* Logo and hamburger */}

                    <FadeIn delay={0.2}>
                        <a
                            href="/"
                            className="text-white text-2xl font-bold tracking-tight"
                        >
                            dayo.
                        </a>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <HamburgerMenu
                            onToggleMenu={toggleMenu}
                            isMenuOpen={isOpen}
                        />
                    </FadeIn>

                    <DesktopNav />

                    <MobileNav
                        isMenuOpen={isOpen}
                        onToggleMenu={toggleMenu}
                    />
                </nav>
            </header>

            <SideLinks />
        </>
    );
};

export default Navbar;
