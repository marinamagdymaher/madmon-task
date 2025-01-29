import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBriefcase,
  faCircleXmark,
  faStar,
  faSignOutAlt,faChevronDown 
} from "@fortawesome/free-solid-svg-icons";

export default function UserDropDwn() {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState); // Toggle the dropdown
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
    { title: "My Reviews", icon: faStar, color: "text-yellow-500" },
    {
      title: "Logout",
      icon: faSignOutAlt,
      function: () => alert("Logging out..."),
    }, // Add function for Logout
  ];

  return (
    <div className="inline-block text-left" ref={dropdownRef}>
      {/* Circle Icon */}
      <div className="flex justify-center items-center  px-2 cursor-pointer" onClick={toggleDropdown}>
        <div
          className="w-8 h-8 mx-2 flex items-center justify-center  rounded-full text-white bg-red-200"
          
        >
          <FontAwesomeIcon icon={faUser} />
        </div>
        <p>Omar Mahmoud</p>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-10 right-0 mt-2 w-48 bg-white border border-grey-300 rounded shadow-lg">
          <ul className="py-1 text-sm text-grey-700">
            {list.map((item, i) => (
              <li
                key={i}
                className="px-4 py-2 flex items-center hover:bg-grey-300 cursor-pointer"
                onClick={(e) => item.function?.(e)} // Call the function if it exists
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className={`mr-2 ${item.color || "text-grey-700"}`} // Apply dynamic color if available
                />
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
