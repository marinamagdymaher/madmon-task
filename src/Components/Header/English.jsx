import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

export default function English() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownEnRef = useRef();

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState); // Toggle the dropdown visibility
  };

  const handleClickOutside = (e) => {
    // Check if the click is outside the dropdown container
    if (dropdownEnRef.current && !dropdownEnRef.current.contains(e.target)) {
      setIsOpen(false); // Close the dropdown if click is outside
    }
  };

  useEffect(() => {
    // Add event listener when the component is mounted
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Clean up event listener when the component is unmounted
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className=" inline-block text-left text-blue-500 font-semibold cursor-pointer"
      ref={dropdownEnRef}
    >
      {/* Globe Icon and Language Text */}
      <div onClick={toggleDropdown} className="flex items-center">
        <FontAwesomeIcon icon={faGlobe} className="pr-2" />
        <span>EN</span>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-10 right-[16%] mt-2 w-32 bg-white border border-grey-300 rounded shadow-lg">
          <ul className="py-1 text-sm text-gray-700">
            {/* Replace with your actual language options */}
            <li className="px-4 py-2 cursor-pointer hover:bg-grey-100">English</li>
            <li className="px-4 py-2 cursor-pointer hover:bg-grey-100">Spanish</li>
            <li className="px-4 py-2 cursor-pointer hover:bg-grey-100">French</li>
          </ul>
        </div>
      )}
    </div>
  );
}
