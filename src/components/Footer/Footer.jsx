import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles["footer-section"]}>
      <div className={styles["footer-card"]}>
        
        {/* Lado Esquerdo: Textos do seu portfólio */}
        <div className={styles["text-group"]}>
          <h2 className={styles.title}>Vamos criar algo incrível juntos?</h2>
          <p className={styles.subtitle}>
            Desenvolvedora Front-end especializada na criação de interfaces modernas, 
            responsivas e focadas na experiência do usuário.
          </p>
          <p className={styles.copy}>
            © 2026 Barbara Larissa. Todos os direitos reservados.
          </p>
        </div>

        {/* Lado Direito: Botão de Ação Reconstruído e Redes */}
        <div className={styles["action-group"]}>
          <a
            href="https://wa.me/5543996818242?text=Olá%20Barbara!%20Gostaria%20de%20fazer%20um%20orçamento."
            target="_blank"
            rel="noreferrer"
            className={styles["btn-contact"]}
          >
            Solicitar Orçamento
            <i className="fa-regular fa-paper-plane"></i>
          </a>

         <div className={styles["social-row"]}>
  <a 
    href="https://github.com/Barbara-larissa" 
    target="_blank" 
    rel="noreferrer" 
    className={styles["social-icon"]}
    title="GitHub"
  >
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style={{ width: '22px', height: '22px', filter: 'invert(0.6)' }} />
  </a>
  <a 
    href="https://www.linkedin.com/in/barbara-larissa/" 
    target="_blank" 
    rel="noreferrer" 
    className={styles["social-icon"]}
    title="LinkedIn"
  >
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" style={{ width: '22px', height: '22px' }} />
  </a>
  <a 
    href="mailto:laribdev@gmail.com" 
    className={styles["social-icon"]}
    title="E-mail"
  >
    <span style={{ fontSize: '1.2rem', color: '#94a3b8' }}>✉</span>
  </a>
</div>
        </div>

      </div>
    </footer>
  );
}