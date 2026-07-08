import styles from "./Sobre.module.css";


export default function Sobre() {
  return (
    <section className={styles["about-section"]}>
      <div className={styles["about-container"]}>
        <div className={styles["about-text"]}>
          <h2 className={styles["about-title"]}>Sobre Mim</h2>
          <p>
            Desenvolvedora focada em construir soluções funcionais e eficientes.
            Com formação técnica em Web Development, foco minha atuação em criar
            interfaces que unem performance e uma experiência intuitiva.
          </p>
          <p>
            Minha abordagem é prática: resolver problemas complexos com código limpo
            e design estratégico, garantindo resultados reais para o negócio.
          </p>
        </div>
        <div className={styles["about-image-area"]}>
        
        </div>
      </div>
    </section>
  );
}