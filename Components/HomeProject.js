import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons"
import Link from 'next/link'
import { HStack, Tag, TagLabel } from "@chakra-ui/react"

const HomeProject = ({ currentTheme, project, id }) => {
    return (
        <div className={styles.projectmain} style={{borderColor: currentTheme.accent, borderRadius: id % 2 === 0 ? '50px 0 0 0' : '0 0 50px 0'}}>
            <div className={styles.projectContent}>
                <div className={styles.projectIcon} style={{color: currentTheme.accent, backgroundColor: currentTheme.footerColor, borderColor: currentTheme.accent}}><Link href={project.projectLink}><a><FontAwesomeIcon icon={faTelegramPlane} /></a></Link></div>
                <h1 className={styles.projectTitle}>{project.name}</h1>
                <h2 className={styles.projectSubTitle} style={{color: currentTheme.subtext}}>{project.description}</h2>
                <HStack spacing={2}>
            {
              project.tech.map((tech) => {
                return (
                  <div key={tech}>
                    <Tag size="sm" borderRadius="md" variant="subtle" colorScheme={currentTheme.name === 'light' ? "cyan" : "purple"}>
                      <TagLabel>{tech}</TagLabel>
                    </Tag>
                  </div>
                )
              })
            }
          </HStack>
                <Link href='/work'><a className={styles.cta2} style={{ color: currentTheme.tertiary }}>View More</a></Link>
            </div>
        </div>
    )
}

export default HomeProject
