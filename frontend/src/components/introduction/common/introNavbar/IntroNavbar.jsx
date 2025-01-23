import { useEffect, useState } from "react";
import styles from "./IntroNavbar.module.css";
import PlanItLogo from "/PlanItLogo.webp";
import { NavHashLink, HashLink } from "react-router-hash-link";
import { Link, useLocation } from "react-router";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const IntroNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenuHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    function handleScrollY() {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScrollY);

    return () => window.removeEventListener("scroll", handleScrollY);
  });

  return (
    <nav
      id={styles.navbar}
      style={scrolled ? { backgroundColor: "black" } : {}}
    >
      <HashLink to="#welcome">
        <img src={PlanItLogo} alt="PlanIt Logo" />
      </HashLink>
      <div className={styles.navbarMenu} onClick={toggleMenuHandler}>
        {isMenuOpen ? (
          <CloseIcon fontSize="large" />
        ) : (
          <MenuIcon fontSize="large" />
        )}
      </div>
      <ul id={styles.normalUl} style={isMenuOpen ? { display: "flex" } : {}}>
        <li>
          <NavHashLink
            className={styles.navLinkLi}
            to="#features"
            style={
              location.hash === "#features"
                ? { borderBottom: "1px solid white", paddingBottom: "10px" }
                : {}
            }
          >
            FEATURES
          </NavHashLink>
        </li>
        <li>
          <NavHashLink
            className={styles.navLinkLi}
            to="#about"
            style={
              location.hash === "#about"
                ? { borderBottom: "1px solid white", paddingBottom: "10px" }
                : {}
            }
          >
            ABOUT
          </NavHashLink>
        </li>
        <li>
          <NavHashLink
            className={styles.navLinkLi}
            to="#download"
            style={
              location.hash === "#download"
                ? { borderBottom: "1px solid white", paddingBottom: "10px" }
                : {}
            }
          >
            DOWNLOAD
          </NavHashLink>
        </li>
      </ul>
      <ul
        id={styles.registerLoginUl}
        style={isMenuOpen ? { display: "flex" } : {}}
      >
        <Link to="/login" className={styles.loginLink}>
          <li>LOGIN</li>
        </Link>
        <Link to="/register" className={styles.registerLink}>
          <li>REGISTER</li>
        </Link>
      </ul>
    </nav>
  );
};

export default IntroNavbar;
