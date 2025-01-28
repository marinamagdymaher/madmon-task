import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Link, useNavigate } from "react-router-dom";
import {
  faHeart,
  faUser,
  faSignOutAlt,
  faStar,
  faBriefcase,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../Logo";

export default function BottomHeader() {
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
      className={`fixed left-0 w-full h-20 bg-white z-50 transition-all duration-300 border-b-2 border-grey-200 shadow-md ${
        scroll && "top-0 " 
      }`}
    >
      <div className="flex flex-col sm:flex-row justify-between items-center px-4">
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
        </div>
        {/* Navigation Menu */}
        <nav
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "opacity-100" : "max-h-0 opacity-0"
          } lg:block lg:opacity-100 lg:max-h-none  mt-3 lg:mt-0`}
        >
          <div className="flex">
            <NavHeader closeMenu={closeMenu} />
            <UserDropdown />
          </div>
        </nav>
      </div>
    </div>
  );
}

function NavHeader({ closeMenu }) {
  const links = [
    { to: "/", title: "Home" },
    { to: "/contacts", title: "Contact" },
    { to: "/about", title: "About" },
    { to: "/favorite", title: "Favorite", icon: faHeart, color: "text-blue-500" },
  ];
  return (
    <ul className="flex flex-col items-center lg:flex-row gap-5 ">
      {links.map((item, index) => (
        <li key={index}>
          {item.icon && (
            <FontAwesomeIcon icon={item.icon} className={`${item.color}`} />
          )}
          <NavLink
            to={item.to}
            className={({ isActive }) =>
              `font-bold px-1 hover:text-blue-500 hover:underline ${
                isActive ? "text-blue-500 underline" : "text-blue-500 "
              }`
            }
            onClick={closeMenu}
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen((isOpen) => !isOpen); // Toggle the dropdown
  };

  const handleClickOutside = (e) => {
    // Check if the click is outside the dropdown container
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false); // Close the dropdown
    }
  };

  useEffect(() => {
    // Add event listener when the component is mounted
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Remove event listener when the component is unmounted
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const list = [
    { title: "Manage My Account", icon: faUser },
    { title: "My Order", icon: faBriefcase },
    { title: "My Cancellations", icon: faCircleXmark },
    { title: "My Reviews", icon: faStar, color: "text-yellow-500 " },
    {
      title: "Logout",
      icon: faSignOutAlt,
    },
  ];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Circle Icon */}
      <div
        className="w-8 h-8 mx-2 flex items-center justify-center cursor-pointer rounded-full text-white bg-red-200"
        onClick={toggleDropdown}
      >
        <FontAwesomeIcon icon={faUser} />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-grey-300 rounded shadow-lg">
          <ul className="py-1 text-sm text-grey-700">
            {list.map((item, i) => (
              <Link key={i} to={item.link}>
                <li
                  className={` px-4 py-2 flex items-center hover:bg-grey-300 cursor-pointer`}
                  onClick={(e) => item.function?.(e)}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="mr-2 text-grey-700"
                  />
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
