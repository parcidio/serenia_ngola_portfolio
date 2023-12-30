import styles from "../styles/Project.module.css";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";

const Projects = ({
  name,
  description,
  tools,
  image,
  imageAlt,
  inProgress,
}) => {
  return (
    <div className={styles.project}>
      <div className={styles.project__imageContainer}>
        <Image
          className={styles.image}
          src={image}
          alt={imageAlt}
          layout="responsive"
          width={100}
          height={100}
        />
      </div>
      <div className={styles.project__content}>
        <h2>{name}</h2>
        <p className={styles.project__description}>{description}</p>
        <div className={styles.project__toolList}>
          <h5>Tools:</h5>
          {tools.map((element, index) => (
            <span key={`${element}-${index}`} className={styles.tool}>
              {element}
            </span>
          ))}
        </div>
        <div className={styles.project__footer}>
          <span className={styles.project__progress}>
            {inProgress ? "In progress" : "Completed"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
