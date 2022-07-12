import styles from "../styles/Home.module.css";
import Link from "next/link";
import HomeProject from "./HomeProject";
import Skills from "./Skills";
import { projects } from "../Constants/projects";
import { userinfo, ctaTexts, headings } from "../Constants/userinfo";
import Services from "./Services";
import Typewriter from "typewriter-effect";
import { Button } from "@chakra-ui/react";
import { BsTwitter, BsGithub, BsTelegram, BsLinkedin } from "react-icons/bs";

const HomePage = ({ currentTheme }) => {
  // const names = [
  //   "a Blockchain Developer 💻",
  //   "⚙️ Engineer",
  //   "a Web3 enthusiast",
  // ];
  return (
    <div>
      <div
        className={styles.homeheading}
        style={{ backgroundColor: currentTheme.secondary }}
      >
        <h1 className={styles.heading}>{userinfo.greeting.title}</h1>
        <h2 className={styles.subheading}>{userinfo.greeting.subtitle}</h2>
        {/* <h2
          className={styles.subheading}
          style={{ color: currentTheme.subtext }}
        >
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(names[0])
                .pauseFor(2500)
                .deleteAll()
                .typeString(names[1])
                .pauseFor(1500)
                .deleteAll()
                .typeString(names[2])
                .pauseFor(3000)
                .deleteAll()
                .start();
            }}
          />
        </h2> */}
        <Link href="#work">
          <a
            className={styles.cta1}
            style={{
              backgroundColor: currentTheme.accent,
              color: currentTheme.contrastText,
              boxShadow: currentTheme.boxShadow,
            }}
          >
            {ctaTexts.landingCTA}
          </a>
        </Link>
      </div>
      <div>
        {userinfo.education.visible ? (
          <Services currentTheme={currentTheme} />
        ) : null}
      </div>
      <div
        id="skills"
        className={styles.homeSkillSection}
        style={{ backgroundColor: currentTheme.secondary }}
      >
        <Skills currentTheme={currentTheme} />
      </div>
      <div className={styles.homeWorkSection} id="work">
        <h1 className={styles.workheading} data-aos="fade-up">
          {headings.workHomePage}
        </h1>
        {projects.slice(0, 3).map((project, key) => {
          return (
            <div key={key} data-aos="fade-up">
              <HomeProject
                currentTheme={currentTheme}
                project={project}
                id={key}
              />
            </div>
          );
        })}
        <div style={{ textAlign: "center", paddingBottom: "2rem" }}>
          <Link href="/work">
            <a
              className={styles.cta3}
              style={{
                backgroundColor: currentTheme.accent,
                color: currentTheme.contrastText,
              }}
            >
              {ctaTexts.workCTA} <span>&gt;</span>
            </a>
          </Link>
        </div>
      </div>
      <div
        id="about"
        className={styles.homeAboutSection}
        style={{ backgroundColor: currentTheme.secondary }}
      >
        <h1 className={styles.workheading} data-aos="fade-up">
          {headings.about}
        </h1>
        <p
          className={styles.aboutText}
          style={{ color: currentTheme.subtext }}
          data-aos="fade-up"
        >
          {userinfo.about.content}
        </p>
        <div
          data-aos="fade-up"
          style={{
            textAlign: "center",
            padding: "1rem 0",
            margin: "1rem 0",
            position: "relative",
            display: "flex",
            color: currentTheme.subtext,
          }}
        ></div>
        <div className={styles.socials}>
          <ul className={styles.socialIcons}>
            {userinfo.socials
              ? userinfo.socials.map((social, key) => {
                  return (
                    <Link href={social.link} key={key} passHref={true}>
                      <Button
                        style={{
                          backgroundColor: "transparent",
                        }}
                      >
                        {key === 0 && <BsGithub size="40" />}
                        {key === 1 && <BsLinkedin size="40" />}
                        {key === 2 && <BsTwitter size="40" />}
                        {key === 3 && <BsTelegram size="40" />}
                      </Button>
                    </Link>
                  );
                })
              : null}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
