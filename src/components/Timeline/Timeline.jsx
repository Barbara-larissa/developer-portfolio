import React, { useEffect, useRef } from 'react';
import styles from './Timeline.module.css';

const timelineData = [
  {
    period: "2026 - Hoje",
    title: "Início do Curso Superior em ADS & Formação Full Stack",
    description: "Desenvolvimento e entrega de projetos profissionais para clientes reais, unindo engenharia de software e foco comercial.",
    tag: "Atual"
  },
  {
    period: "2026",
    title: "Projeto 3D Guinchos & Campanhas de ADS",
    description: "Desenvolvimento do sistema do 3D Guinchos integrado com botões de WhatsApp de alta conversão voltados para tráfego pago (ADS) e captação de clientes.",
    tag: "Destaque"
  },
  {
    period: "2026",
    title: "Desenvolvimento do Site Studio Lena",
    description: "Criação de plataforma web personalizada, estruturação de sistema de delivery e aplicações modernas utilizando React e tecnologias de nuvem.",
    tag: "Projeto"
  },
  {
    period: "2025",
    title: "Conclusão do Curso Técnico em PHP / MySQL",
    description: "Consolidação das bases de desenvolvimento web com os primeiros passos sólidos em HTML, CSS, JavaScript, PHP e banco de dados.",
    tag: "Fundação"
  }
];

export default function Timeline() {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles["show"]);
          }
        });
      },
      { threshold: 0.15 }
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles["timeline-section"]}>
      <h2 className={styles["timeline-main-title"]}>
        Minha <span className={styles["timeline-highlight"]}>Trajetória</span>
      </h2>

      <div className={styles["timeline-wrapper"]}>
        <div className={styles["timeline-line"]} />

        {timelineData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            className={styles["timeline-item"]}
          >
            <div className={styles["timeline-dot"]} />
            <div className={styles["timeline-card"]}>
              <span className={styles["timeline-period"]}>{item.period}</span>
              <span className={styles["timeline-tag"]}>{item.tag}</span>
              <h3 className={styles["timeline-title"]}>{item.title}</h3>
              <p className={styles["timeline-description"]}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}