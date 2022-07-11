import styles from "../styles/NavbarFooter.module.css";
import { userinfo } from "../Constants/userinfo";
import Link from "next/link";

const Footer = ({ currentTheme }) => {
  return (
    <div
      className={styles.footermain}
      style={{
        backgroundColor: currentTheme.footerColor,
        color: currentTheme.subtext,
      }}
    >
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
