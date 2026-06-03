import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <h2 className={styles.nome}>Barbara Larissa</h2>

        <p className={styles.texto}>
          Desenvolvedora Front-end especializada na criação de
          interfaces modernas, responsivas e focadas na experiência
          do usuário.
        </p>

        <div className={styles.contatos}>
          <a
            href="mailto:laribdev@gmail.com"
            className={styles.link}
          >
            📧 laribdev@gmail.com
          </a>

          <a
            href="https://wa.me/5543996818242"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            📱 (43) 99681-8242
          </a>
        </div>

        <div className={styles.redes}>
          <a
            href="https://github.com/Barbara-larissa"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/barbara-larissa/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <a
          href="https://wa.me/5543996818242?text=Olá%20Barbara!%20Gostaria%20de%20fazer%20um%20orçamento."
          target="_blank"
          rel="noreferrer"
          className={styles.btnWhatsapp}
        >
          Solicitar Orçamento
        </a>

        <p className={styles.copy}>
          © 2026 Barbara Larissa. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}