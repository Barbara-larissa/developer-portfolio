import styles from "./Tecnologias.module.css";

export default function Tecnologias() {
  return (
    <section className={styles["stacks-section"]}>
      <h2 className={styles["section-title"]}>Minhas Stacks</h2>
      <div className={styles["stacks-grid"]}>
        
        <div className={styles["stack-card"]}>
          <span className={styles["stack-icon"]}>⚛️</span>
          <p>React</p>
        </div>
        
        <div className={styles["stack-card"]}>
          <span className={styles["stack-icon"]}>JS</span>
          <p>JavaScript</p>
        </div>
        
        <div className={styles["stack-card"]}>
          <span className={styles["stack-icon"]}>🎨</span>
          <p>CSS3 / UI UX</p>
        </div>
        
        <div className={styles["stack-card"]}>
          <span className={styles["stack-icon"]}>🌊</span>
          <p>Tailwind CSS</p>
        </div>
        
        <div className={styles["stack-card"]}>
          <span className={styles["stack-icon"]}>🔥</span>
          <p>Firebase</p>
        </div>
        
        <div className={styles["stack-card"]}>
          <span className={styles["stack-icon"]}>🐘</span>
          <p>PHP / MySQL</p>
        </div>

      </div>
    </section>
  );
}