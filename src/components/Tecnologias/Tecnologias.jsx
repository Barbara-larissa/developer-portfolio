import styles from "./Tecnologias.module.css";
import { FaReact, FaJs, FaCss3Alt, FaFire, FaPhp } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export default function Tecnologias() {
  return (
    <section className={styles["stacks-section"]}>
      <h2 className={styles["section-title"]}>Minhas Stacks</h2>
      <div className={styles["stacks-grid"]}>
        
        <div className={styles["stack-card"]}>
          <FaReact className={styles["stack-icon"]} />
          <p>React</p>
        </div>
        
        <div className={styles["stack-card"]}>
          <FaJs className={styles["stack-icon"]} />
          <p>JavaScript</p>
        </div>
        
        <div className={styles["stack-card"]}>
          <FaCss3Alt className={styles["stack-icon"]} />
          <p>CSS3 / UI UX</p>
        </div>
        
        <div className={styles["stack-card"]}>
          <SiNextdotjs className={styles["stack-icon"]} />
          <p>Next.js</p>
        </div>
        
        <div className={styles["stack-card"]}>
          <FaFire className={styles["stack-icon"]} />
          <p>Firebase</p>
        </div>
        
        <div className={styles["stack-card"]}>
          <FaPhp className={styles["stack-icon"]} />
          <p>PHP / MySQL</p>
        </div>

      </div>
    </section>
  );
}