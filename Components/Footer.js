import styles from "../styles/NavbarFooter.module.css";
import { userinfo } from "../Constants/userinfo";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = ({ currentTheme }) => {
  return (
    <div
      className={styles.footermain}
      style={{
        backgroundColor: currentTheme.footerColor,
        color: currentTheme.subtext,
      }}
    >
      <div className={styles.footertable}>
        {/* <Link href="/">
          <a>
            <h2 className={styles.footerlogo}>{userinfo.logoText}</h2>
          </a>
        </Link> */}
        <ul className={styles.footertableSocials}>
          {userinfo.socials
            ? userinfo.socials.map((social, key) => {
                return (
                  <Link href={social.link} key={key}>
                    <a>
                      <li>
                        <FontAwesomeIcon icon={social.icon} />
                      </li>
                      <li>{social.type}</li>
                    </a>
                  </Link>
                );
              })
            : null}
        </ul>
      </div>
      <hr
        style={{
          height: "1px",
          backgroundColor: currentTheme.subtext,
          border: "none",
          opacity: "0.5",
        }}
      ></hr>
      <h2 className={styles.footercontent}>
        <Link href="/">
          <a>
            © {new Date().getFullYear()} {userinfo.logoText}
          </a>
        </Link>
      </h2>
    </div>
  );
};

export default Footer;
