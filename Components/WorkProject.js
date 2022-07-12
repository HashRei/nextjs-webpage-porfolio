import styles from "../styles/Work.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTelegramPlane,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { HStack, Tag, TagLabel, Tooltip } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

const WorkProject = ({ currentTheme, project, id }) => {
  const toast = useToast();
  const [index, setIndex] = useState(0);

  const showGitToast = () => {
    toast({
      description: "Sorry, this project has a private repository!",
      status: "info",
      isClosable: true,
    });
  };

  const showProjToast = () => {
    toast({
      description: "Sorry, this project has not been deployed yet!",
      status: "info",
      isClosable: true,
    });
  };

  const showYoutubeToast = () => {
    toast({
      description: "Sorry, this project has no Youtube video!",
      status: "info",
      isClosable: true,
    });
  };

  const ahead = () => {
    if (index === project.photo.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const back = () => {
    if (index === 0) {
      setIndex(project.photo.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => ahead(),
    onSwipedRight: () => back(),
  });

  return (
    <div
      className={styles.parentofparentcard}
      style={{ justifyContent: id % 2 === 0 ? "flex-start" : "flex-end" }}
    >
      <div className={styles.parentcard}>
        <div className={styles.cardtitle}>
          <h1 className={styles.projtitle}>{project.name}</h1>
          <HStack spacing={2}>
            {project.tech.map((tech) => {
              return (
                <div key={tech}>
                  <Tag
                    size="sm"
                    borderRadius="md"
                    variant="subtle"
                    colorScheme={
                      currentTheme.name === "light" ? "cyan" : "purple"
                    }
                  >
                    <TagLabel>{tech}</TagLabel>
                  </Tag>
                </div>
              );
            })}
          </HStack>
        </div>
        {id % 2 === 0 ? (
          <div className={styles.imageandsocials}>
            <div
              className={styles.card}
              {...handlers}
              style={{
                borderColor: currentTheme.footerColor,
                position: "relative",
              }}
            >
              <Image
                className={styles.cardContent}
                src={project.photo[index]}
                alt="thumbnail image"
                height="300"
                width="500"
              />
              <button
                onClick={back}
                className={styles.thumbnailImageArrowsLeft}
              >
                &lt;
              </button>
              <button
                onClick={ahead}
                className={styles.thumbnailImageArrowsRight}
              >
                &gt;
              </button>
            </div>
            <div>
              <Tooltip label="Github link" placement="right">
                <div
                  className={styles.socialIconRight}
                  style={{
                    color: currentTheme.subtext,
                    borderColor: currentTheme.subtext,
                    borderRadius: "25px",
                  }}
                >
                  {project.githubLink !== "" ? (
                    <Link href={project.githubLink}>
                      <a>
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </Link>
                  ) : (
                    <FontAwesomeIcon
                      icon={faGithubAlt}
                      onClick={showGitToast}
                    />
                  )}
                </div>
              </Tooltip>
              <Tooltip label="Project link" placement="right">
                <div
                  className={styles.socialIconRight}
                  style={{
                    color: currentTheme.subtext,
                    borderColor: currentTheme.subtext,
                    borderRadius: "25px",
                  }}
                >
                  {project.projectLink !== "" ? (
                    <Link href={project.projectLink}>
                      <a>
                        <FontAwesomeIcon icon={faTelegramPlane} />
                      </a>
                    </Link>
                  ) : (
                    <FontAwesomeIcon
                      icon={faTelegramPlane}
                      onClick={showProjToast}
                    />
                  )}
                </div>
              </Tooltip>
              <Tooltip label="Youtube link" placement="right">
                <div
                  className={styles.socialIconRight}
                  style={{
                    color: currentTheme.subtext,
                    borderColor: currentTheme.subtext,
                    borderRadius: "25px",
                  }}
                >
                  {project.videoLink !== "" ? (
                    <Link href={project.videoLink}>
                      <a>
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </Link>
                  ) : (
                    <FontAwesomeIcon
                      icon={faYoutube}
                      onClick={showYoutubeToast}
                    />
                  )}
                </div>
              </Tooltip>
            </div>
          </div>
        ) : (
          <div className={styles.imageandsocialsLeft}>
            <div
              className={styles.card}
              {...handlers}
              style={{
                borderColor: currentTheme.footerColor,
                position: "relative",
              }}
            >
              <Image
                className={styles.cardContent}
                src={project.photo[index]}
                alt="thumbnail image"
                height="300"
                width="500"
              />
              <button
                onClick={back}
                className={styles.thumbnailImageArrowsLeft}
              >
                &lt;
              </button>
              <button
                onClick={ahead}
                className={styles.thumbnailImageArrowsRight}
              >
                &gt;
              </button>
            </div>
            <div>
              <Tooltip label="Github link" placement="right">
                <div
                  className={styles.socialIconLeft}
                  style={{
                    color: currentTheme.subtext,
                    borderColor: currentTheme.subtext,
                    borderRadius: "25px",
                  }}
                >
                  {project.githubLink !== "" ? (
                    <Link href={project.githubLink}>
                      <a>
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </Link>
                  ) : (
                    <FontAwesomeIcon
                      icon={faGithubAlt}
                      onClick={showGitToast}
                    />
                  )}
                </div>
              </Tooltip>
              <Tooltip label="Project link" placement="right">
                <div
                  className={styles.socialIconLeft}
                  style={{
                    color: currentTheme.subtext,
                    borderColor: currentTheme.subtext,
                    borderRadius: "25px",
                  }}
                >
                  {project.projectLink !== "" ? (
                    <Link href={project.projectLink}>
                      <a>
                        <FontAwesomeIcon icon={faTelegramPlane} />
                      </a>
                    </Link>
                  ) : (
                    <FontAwesomeIcon
                      icon={faTelegramPlane}
                      onClick={showProjToast}
                    />
                  )}
                </div>
              </Tooltip>
              <Tooltip label="Youtube link" placement="right">
                <div
                  className={styles.socialIconLeft}
                  style={{
                    color: currentTheme.subtext,
                    borderColor: currentTheme.subtext,
                    borderRadius: "25px",
                  }}
                >
                  {project.videoLink !== "" ? (
                    <Link href={project.videoLink}>
                      <a>
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </Link>
                  ) : (
                    <FontAwesomeIcon
                      icon={faYoutube}
                      onClick={showYoutubeToast}
                    />
                  )}
                </div>
              </Tooltip>
            </div>
          </div>
        )}

        <div className={styles.cardbottom}>
          <p className={styles.projdescription}>{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkProject;
