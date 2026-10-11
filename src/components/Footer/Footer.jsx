import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles["footer-section"]}>
      <div className={styles["footer-card"]}>
        {/* Lado esquerdo */}
        <div className={styles["text-group"]}>
          <h2 className={styles.title}>
            Vamos criar algo incrível juntos?
          </h2>

          <p className={styles.subtitle}>
            Desenvolvedora Front-end especializada na criação de interfaces
            modernas, responsivas e focadas na experiência do usuário.
          </p>

          <p className={styles.copy}>
            © 2026 Barbara Larissa. Todos os direitos reservados.
          </p>
        </div>

        {/* Lado direito */}
        <div className={styles["action-group"]}>
          <a
            href="https://wa.me/5543996818242?text=Ol%C3%A1%20Barbara!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento"
            target="_blank"
            rel="noreferrer"
            className={styles["btn-contact"]}
          >
            Solicitar Orçamento
            <i
              className="fa-regular fa-paper-plane"
              aria-hidden="true"
            />
          </a>

          {/* Redes sociais */}
          <div className={styles["social-row"]}>
            {/* GitHub */}
            <a
              href="https://github.com/Barbara-larissa"
              target="_blank"
              rel="noreferrer"
              className={styles["social-icon"]}
              title="GitHub"
              aria-label="GitHub"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt=""
                className={styles["github-image"]}
              />
            </a>

            {/* LinkedIn sem fundo azul */}
            <a
              href="https://www.linkedin.com/in/barbara-larissa/"
              target="_blank"
              rel="noreferrer"
              className={styles["social-icon"]}
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                alt=""
                className={styles["linkedin-image"]}
              />
            </a>

            {/* E-mail */}
            <a
              href="mailto:laribdev@gmail.com"
              className={styles["social-icon"]}
              title="E-mail"
              aria-label="E-mail"
            >
              <span className={styles["email-icon"]}>
                ✉
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}