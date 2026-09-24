import styles from "./Tecnologias.module.css";

import {
  FaReact,
  FaJs,
  FaCss3Alt,
  FaPhp,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiSupabase,
  SiTypescript,
  SiExpress,
  SiVite,
  SiTailwindcss,
  SiMercadopago,
} from "react-icons/si";

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
          <SiSupabase className={styles["stack-icon"]} />
          <p>Supabase</p>
        </div>

        <div className={styles["stack-card"]}>
          <FaPhp className={styles["stack-icon"]} />
          <p>PHP / MySQL</p>
        </div>

        <div className={styles["stack-card"]}>
          <SiTypescript className={styles["stack-icon"]} />
          <p>TypeScript</p>
        </div>

        <div className={styles["stack-card"]}>
          <FaNodeJs className={styles["stack-icon"]} />
          <p>Node.js</p>
        </div>

        <div className={styles["stack-card"]}>
          <SiExpress className={styles["stack-icon"]} />
          <p>Express</p>
        </div>

        <div className={styles["stack-card"]}>
          <SiVite className={styles["stack-icon"]} />
          <p>Vite</p>
        </div>

        <div className={styles["stack-card"]}>
          <SiTailwindcss className={styles["stack-icon"]} />
          <p>Tailwind CSS</p>
        </div>

        <div className={styles["stack-card"]}>
          <FaGitAlt className={styles["stack-icon"]} />
          <p>Git / GitHub</p>
        </div>

        <div className={styles["stack-card"]}>
          <SiMercadopago className={styles["stack-icon"]} />
          <p>Mercado Pago</p>
        </div>

      </div>

    </section>
  );
}