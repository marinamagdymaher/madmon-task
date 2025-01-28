import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  return (
    <div className="bg-blue-600 text-white">
      <TopFooter />
    </div>
  );
}

function TopFooter() {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 items-center gap-6 p-5">
      {/* Logo Section */}
      <div className="xs:w-64 md:border-r border-yellow">
        <Logo colorChange="inset-0" />
      </div>
      {/* Quick Links Section */}
      <ul className="md:border-r border-yellow">
        <li className="font-bold py-2">Quick Links</li>
        <li className="py-2">Privacy Policy</li>
        <li className="py-2">Terms of Use</li>
        <li className="py-2">FAQ</li>
        <li className="py-2">
          <Link to="contacts">Contact</Link>
        </li>
      </ul>
      <ul className="md:border-r border-yellow">
        <li className="font-bold py-2">Quick Links</li>
        <li className="py-2">Privacy Policy</li>
        <li className="py-2">Terms of Use</li>
        <li className="py-2">FAQ</li>
        <li className="py-2">
          <Link to="contacts">Contact</Link>
        </li>
      </ul>

      <SocialMedia />
    </div>
  )
}

function SocialMedia() {
  return (
    <div className="flex items-center md:justify-between  py-5 gap-3 md:gap-6">
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className=" transition border p-2"
      >
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="transition border p-2"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className=" transition border p-2"
      >
        <FontAwesomeIcon icon={faFacebookF} size="2x" />
      </a>
    </div>
  );
}
