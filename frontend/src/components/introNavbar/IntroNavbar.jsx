import { useEffect, useState } from "react";
import styles from "./IntroNavbar.module.css";
import PlanItLogo from "/PlanItLogo.webp";
import { NavHashLink, HashLink } from "react-router-hash-link";

const IntroNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
      <ul id={styles.normalUl}>
        <li>
          <NavHashLink className={styles.navLinkLi} to="#features">
            FEATURES
          </NavHashLink>
        </li>
        <li>
          <NavHashLink className={styles.navLinkLi} to="#about">
            ABOUT
          </NavHashLink>
        </li>
        <li>
          <NavHashLink className={styles.navLinkLi}>DOWNLOAD</NavHashLink>
        </li>
      </ul>
      <ul id={styles.registerLoginUl}>
        <li>LOGIN</li>
        <li>REGISTER</li>
      </ul>
    </nav>
  );
};

export default IntroNavbar;
