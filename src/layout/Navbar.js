import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import { FaHome, FaGamepad, FaStar, FaEnvelope } from "react-icons/fa"; // Import ikon z paczki react-icons
import { FaBars } from "react-icons/fa";

import homePageImg from '../img/homePageImg.png'


import "../css/Navbar.css";

const navItem = [
  {
    name: "Home",
    path: "/",
    icon: <FaHome className="navIcon" />,
  },
  {
    name: "Games",
    path: "/games",
    icon: <FaGamepad className="navIcon" />,
  },
  {
    name: "Game of the month",
    path: "/topgame", // Poprawienie ścieżki
    icon: <FaStar className="navIcon" />,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: <FaEnvelope className="navIcon" />,
  },
];

const Navbar = () => {
  const [showfaBar, setShowfaBar] = useState(false);
  const [toggleList, setToggleList] = useState(false);

  const handleToggleLinks = () => {
    setToggleList(!toggleList);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShowfaBar(false);
      } else {
        setShowfaBar(true);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navList = navItem.map((item) => (
    <li key={item.name} >
      <NavLink to={item.path}>
        {item.icon}
        {item.name}
      </NavLink>
    </li>
  ));
  return (
    <nav className="navBar">
      {showfaBar && <ul>{navList}</ul>}
      {!showfaBar && (
        <div className="faBar">
          <FaBars className="navToggleIcon" onClick={handleToggleLinks} />
          <ul className={toggleList ? 'navListItem show' : 'navListItem'}>{navList}</ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
