import { useEffect, useState } from "react";
import Logo from "../Logo";
import UserDropDwn from "./UserDropDwn";
import NavHeader from "./NavHeader";
import English from "./English";


export default function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  // Detect scroll and update scroll state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        // Adjust the scroll position as needed
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenu = () => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <div
      className={`fixed left-0 w-full bg-white z-50 transition-all duration-300 border-b-2 border-grey-200 ${
        scroll ? "top-0 shadow-md" : "top-30"
      }`}
    >
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 ">
        {/* Logo or Title */}

        <Logo />
        {/* Hamburger Menu for Mobile */}
        <div className="flex flex-col">
          <button
            className="block lg:hidden text-xl"
            onClick={handleMenu}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* Navigation Menu */}
          <nav
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            } lg:block lg:opacity-100 lg:max-h-none  mt-3 lg:mt-0`}
          >
            <div className="flex flex-col items-center md:flex-row gap-3">
              <NavHeader closeMenu={closeMenu} />
              <English/>
              <UserDropDwn />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
