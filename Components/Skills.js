import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { userinfo, ctaTexts, headings } from "../Constants/userinfo";

const Skills = ({ currentTheme }) => {
  return (
    <>
      <h1 className={styles.workheading} data-aos="fade-up">
        {headings.capabilities}
      </h1>
      <div className={styles.skills} style={{ color: currentTheme.subtext }}>
        {userinfo.capabilities
          ? userinfo.capabilities.map((value, key1) => {
              return (
                <>
                  <ul className={styles.skillList} data-aos="fade-up">
                    <h1
                      className={styles.skillHeading}
                      style={{ color: currentTheme.text }}
                    >
                      {value.category}
                    </h1>
                    {value.skills
                      ? value.skills.map((skill, key2) => {
                          return (
                            <div key={key2}>
                              <Image
                                src={
                                  "/capabilities/" +
                                  userinfo.capabilities[key1].images[key2]
                                }
                                alt={
                                  "" + userinfo.capabilities[key1].images[key2]
                                }
                                width={"30px"}
                                height={"30px"}
                              />
                              <h2 key={key2}>{skill}</h2>
                            </div>
                          );
                        })
                      : null}
                  </ul>
                  {userinfo.capabilities.indexOf(value) ===
                  userinfo.capabilities.length - 1 ? null : (
                    <div
                      className={styles.line}
                      style={{ backgroundColor: currentTheme.subtext }}
                      data-aos="fade-up"
                    ></div>
                  )}
                </>
              );
            })
          : null}
      </div>
      <div style={{ textAlign: "center", padding: "1rem 0" }}>
        <Link href="/contact">
          <a
            className={styles.cta3}
            style={{
              background: "transparent",
              border: `2px solid ${currentTheme.accent}`,
            }}
          >
            {ctaTexts.capabCTA} <span>&gt;</span>
          </a>
        </Link>
      </div>
    </>
  );
};

export default Skills;
