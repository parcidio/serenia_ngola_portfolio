// IMPORTS
import navStyle from "../styles/Nav.module.css"; //Navigation bar style
import Link from "next/link";
import { useState } from "react"; // React state
import { BsFillBrightnessHighFill, BsMoonFill } from "react-icons/bs"; //React icons - theme
import { useEffect } from "react";
import { setTheme } from "./setTheme";

const Nav = () => {
  const [activeLink, setActiveLink] = useState("home"); //this state has the role of determining if a link is active or not
  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    setTheme(darkTheme);
  }, [darkTheme]);

  return (
    <nav className={navStyle.nav}>
      <div className={navStyle.nav__links}>
        {/* this holds all the links of the navbar */}
        <ul>
          <Link href="#sobreMin"  scroll={false}>
            <li
              className={`Nav_nav__link__zSE_b ${
                activeLink === "home" ? navStyle.nav__link_active : ""
              }`}
              onClick={() => setActiveLink("home")}
            >
              Sobre mim
            </li>
          </Link>
          <Link href="#curriculo"  scroll={false}>
            <li
              className={`Nav_nav__link__zSE_b ${
                activeLink === "projects" ? navStyle.nav__link_active : ""
              }`}
              onClick={() => setActiveLink("projects")}
            >
              Curriculo
            </li>
          </Link>
          <Link href="#projectos"  scroll={false}>
            <li
              className={`Nav_nav__link__zSE_b ${
                activeLink === "contact" ? navStyle.nav__link_active : ""
              }`}
              onClick={() => setActiveLink("contact")}
            >
              Projectos
            </li>
          </Link>
          
          
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
