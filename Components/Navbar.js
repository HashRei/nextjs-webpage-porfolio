import styles from "../styles/NavbarFooter.module.css";
import Navlinks from "./Navlinks";
import { useMediaQuery } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { userinfo } from "../Constants/userinfo";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";

const Navbar = ({ toggleTheme, currentTheme }) => {
  const [drawerVisible] = useMediaQuery("(max-width: 950px)");
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div
      className={styles.navbar}
      style={{
        backgroundColor: currentTheme.secondary,
        boxShadow: currentTheme.boxShadow,
        position: sticky ? "fixed" : "static",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "baseline",
          marginBottom: !drawerVisible ? "0" : "10px",
        }}
      >
        <Link href="/">
          <a>
            <h2 className={styles.logo}>{userinfo.logoText}</h2>
          </a>
        </Link>
        {!drawerVisible ? (
          <div style={{ display: "flex" }}>
            <Navlinks />
          </div>
        ) : null}

        <button onClick={() => toggleTheme()} id="dark-mode">
          {currentTheme.name === "light" ? (
            <MdDarkMode size={!drawerVisible ? "38" : "26"} />
          ) : (
            <BsFillSunFill size={!drawerVisible ? "38" : "26"} />
          )}
        </button>
      </div>
      {drawerVisible ? (
        <>
          <hr></hr>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "10px",
            }}
          >
            <Navlinks />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Navbar;
