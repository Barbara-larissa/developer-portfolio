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

const STACKS = [
  { name: "React", Icon: FaReact, color: "#61DAFB" },
  { name: "JavaScript", Icon: FaJs, color: "#F7DF1E" },
  { name: "CSS3 / UI UX", Icon: FaCss3Alt, color: "#2965F1" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
  { name: "PHP / MySQL", Icon: FaPhp, color: "#8892BF" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", Icon: FaNodeJs, color: "#68A063" },
  { name: "Express", Icon: SiExpress, color: "#E2E8F0" },
  { name: "Vite", Icon: SiVite, color: "#BD34FE" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Git / GitHub", Icon: FaGitAlt, color: "#F05032" },
  { name: "Mercado Pago", Icon: SiMercadopago, color: "#00B1EA" },
];

export default function Tecnologias() {
  return (
    <section id="tecnologias" className={styles["stacks-section"]}>
      <h2 className={styles["section-title"]}>Minhas Stacks</h2>

      <div className={styles["stacks-grid"]}>
        {STACKS.map(({ name, Icon, color }) => (
          <div
            key={name}
            className={styles["stack-card"]}
            style={{ "--icon-color": color }}
          >
            <Icon className={styles["stack-icon"]} />
            <p>{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}