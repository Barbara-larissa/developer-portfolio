import styles from "./Diferenciais.module.css";

export default function Diferenciais() {
  return (
    <section className={styles["diferenciais-section"]}>
      <div className={styles["diferenciais-grid"]}>
        
        <div className={styles["diferencial-card"]}>
          <div className={styles["icon-box"]}>⚡</div>
          <h3>Foco em Performance</h3>
          <p>Desenvolvimento otimizado para garantir carregamento rápido e fluidez.</p>
        </div>

        <div className={styles["diferencial-card"]}>
          <div className={styles["icon-box"]}>🎨</div>
          <h3>UI/UX Estratégico</h3>
          <p>Interfaces modernas projetadas para a melhor experiência.</p>
        </div>

        <div className={styles["diferencial-card"]}>
          <div className={styles["icon-box"]}>🛠️</div>
          <h3>Código Limpo</h3>
          <p>Estruturas organizadas e escaláveis para facilitar a manutenção.</p>
        </div>

      </div>
    </section>
  );
}