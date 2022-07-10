import React from "react";
import styles from "../styles/Home.module.css";
import { userinfo, headings, ctaTexts } from "../Constants/userinfo";
import Link from "next/link";

const Services = ({ currentTheme }) => {
  return (
    <div className={styles.educationWrapper}>
      <div className={styles.workheading} data-aos="fade-up">
        {headings.education}
      </div>

      <div className={styles.timeline}>
        <ul>
          {userinfo.education.educationList
            ? userinfo.education.educationList.map((value, key) => {
                return (
                  <li data-aos="fade-up" key={key}>
                    <div className={styles.content}>
                      <h3 style={{ color: currentTheme.accent }}>
                        {value.title}
                      </h3>
                      <p style={{ color: currentTheme.text }}>
                        {value.organization}
                      </p>
                      <p style={{ color: currentTheme.subtext }}>
                        {value.description}
                      </p>
                    </div>
                    <div
                      className={styles.time}
                      style={{
                        fontWeight: 600,
                        border: `2px solid ${currentTheme.accent}`,
                        color: currentTheme.subtext,
                      }}
                    >
                      <h2>{value.time}</h2>
                    </div>
                  </li>
                );
              })
            : null}
          <div style={{ clear: "both" }}></div>
        </ul>
      </div>

      <div style={{ textAlign: "center", paddingBottom: "2rem" }}>
        <Link href="/work">
          <a
            className={styles.cta3}
            style={{
              background: currentTheme.accent,
              color: currentTheme.contrastText,
            }}
          >
            {ctaTexts.educationCTA} <span>&gt;</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Services;
