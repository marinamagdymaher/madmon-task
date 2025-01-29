import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function NavHeader({closeMenu}) {
  const links = [
    { to: "/", title: "Home" },
    { to: "/contacts", title: "Contact" },
    { to: "/about", title: "About" },
    {
      to: "/favorite",
      title: "Favorite",
      icon: faHeart,
      color: "text-blue-500",
    },
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
           
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
