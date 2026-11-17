import { useRef, useState } from "react";
import styles from "./Projetos.module.css";

// CAPAS DOS PROJETOS
import capaGuinchos from "./img/capa-3Dguincho.png";
import capaGuinchos2 from "./img/cap-3Dgincho (1).png";
import capaAgencia from "./img/capa-agencia.png";
import capaFinanceiro from "./img/capa-financeiro.png";
import capaLena from "./img/capa-lena.png";
import capareal from "./img/capa-real.png";
import capaVR from "./img/capa-vr.png";
import capasabor from "./img/sabor.png";

export default function Projetos() {
  const [mostrarProjetos, setMostrarProjetos] = useState(false);
  const [videosAtivos, setVideosAtivos] = useState({});
  const carouselRef = useRef(null);

  // NAVEGAÇÃO DO CARROSSEL
  const moverCarrossel = (direcao) => {
    const carrossel = carouselRef.current;

    if (!carrossel) return;

    const card = carrossel.querySelector(
      `.${styles["project-card"]}`
    );

    const distancia = card
      ? card.getBoundingClientRect().width + 16
      : carrossel.clientWidth;

    carrossel.scrollBy({
      left: direcao * distancia,
      behavior: "smooth",
    });
  };

  // ==========================================
  // PROJETOS PESSOAIS
  // ==========================================

  const projetosPessoais = [
    {
      id: "sabor-real",
      titulo: "Sabor Real",
      descricao:
        "Sistema de delivery completo com cardápio, carrinho, integração com Mercado Pago, WhatsApp, ViaCEP e painel administrativo para gerenciamento de pedidos.",
      tags: ["React", "TypeScript", "Node.js", "Mercado Pago"],
      video:
        "https://player.cloudinary.com/embed/?cloud_name=yelovqtt&public_id=Sabor_Real_X-Tudo_e_Dog%C3%A3o_na_Zona_Norte_de_Londrina_e_mais_3_p%C3%A1ginas_-_Pessoal_Microsoft_Edge_2026-09-23_23-26-02_zncbeg",
      videoTitle: "Sabor Real - Sistema de Delivery",
       imagem: capareal,
      badge: "Projeto em Destaque",
      badgeType: "soon",
      links: [
        {
          label: "Ver Código",
          href: "https://github.com/Barbara-larissa/sabor-real-lanches",
          type: "secondary",
        },
        {
          label: "Ver Projeto",
          href: "https://sabor-real-lanches.vercel.app/",
          type: "secondary",
        },
      ],
    },

    {
      id: "sistema-financeiro",
      titulo: "Sistema Financeiro",
      descricao:
        "Gestão financeira completa desenvolvida com PHP e MySQL.",
      tags: ["PHP", "MySQL", "Lógica"],
      video:
        "https://player.cloudinary.com/embed/?cloud_name=yelovqtt&public_id=Design_sem_nome_4_ju25iw",
      videoTitle: "Sistema Financeiro",
      imagem: capaFinanceiro,
      badge: "Disponível para Licença",
      badgeType: "commercial",
      links: [
        {
          label: "GitHub",
          href: "https://github.com/Barbara-larissa/Sistema-Financeiro",
          type: "secondary",
        },
        {
          label: "Adquirir",
          href: "https://wa.me/5543999999999",
          type: "sale",
        },
      ],
    },

    {
      id: "vr-automotive",
      titulo: "VR Automotive",
      descricao:
        "Showroom virtual imersivo para visualização detalhada de veículos.",
      tags: ["React", "Tailwind CSS", "UI/UX"],
      video:
        "https://player.cloudinary.com/embed/?cloud_name=yelovqtt&public_id=vr-automotiv_g4vjfw",
      videoTitle: "VR Automotive Demo",
      imagem: capaVR,
      badge: "Destaque Tech",
      badgeType: "commercial",
      links: [
        {
          label: "Ver Código",
          href: "https://github.com/Barbara-larissa/vr-automotive",
          type: "secondary",
        },
        {
          label: "Acessar Demo",
          href: "https://vr-altomotive.vercel.app",
          type: "primary",
        },
      ],
    },

    {
      id: "lumen-login",
      titulo: "Lumen Login",
      descricao:
        "Interface de autenticação imersiva com microinterações avançadas que reagem dinamicamente às ações do usuário.",
      tags: ["React", "JavaScript", "CSS Moderno", "UI/UX"],
      video:
        "https://player.cloudinary.com/embed/?cloud_name=yelovqtt&public_id=Conecte-se_-_Google_Chrome_2026-05-26_14-01-03_hy8vk1",
      videoTitle: "Lumen Login Demo",
      badge: "Destaque UI/UX",
      badgeType: "commercial",
      links: [
        {
          label: "Ver Código",
          href: "https://github.com/Barbara-larissa/Lumem-Login",
          type: "secondary",
        },
        {
          label: "Acessar Demo",
          href: "https://lumem-login.vercel.app",
          type: "primary",
        },
      ],
    },

    {
      id: "portfolio-criativo",
      titulo: "Portfolio Criativo V1",
      descricao:
        "Landing page pessoal construída com JavaScript puro, animações nativas e design temático estilo Chibi.",
      tags: ["HTML5", "CSS3", "JavaScript", "Design Criativo"],
      video:
        "https://player.cloudinary.com/embed/?cloud_name=yelovqtt&public_id=Meu_Portf%C3%B3lio___LariDev_-_Google_Chrome_2026-03-18_16-57-42_kesjfc",
      videoTitle: "Portfolio Criativo V1 Demo",
      badge: "Design Exclusivo",
      badgeType: "commercial",
      links: [
        {
          label: "Ver Código",
          href: "https://github.com/Barbara-larissa",
          type: "secondary",
        },
        {
          label: "Acessar Demo",
          href: "https://barbara-larissa.github.io/barbara-portfolio/",
          type: "primary",
        },
      ],
    },

    {
      id: "tech-shop",
      titulo: "Tech Shop",
      descricao:
        "Plataforma de e-commerce para hardware e periféricos, com busca em tempo real, filtros por categoria e ordenação dinâmica de preços.",
      tags: ["HTML5", "CSS3", "JavaScript", "UI/UX"],
      video:
        "https://player.cloudinary.com/embed/?cloud_name=yelovqtt&public_id=Tech_Shop_-_Home___As_Melhores_Ofertas_em_Tecnologia_-_Google_Chrome_2026-05-26_15-54-25_mjpqoc",
      videoTitle: "Tech Shop Demo",
      badge: "Premium UI/UX",
      badgeType: "commercial",
      links: [
        {
          label: "Ver Código",
          href: "https://github.com/Barbara-larissa/techshop-store",
          type: "secondary",
        },
        {
          label: "Em Breve",
          disabled: true,
          type: "soon",
        },
      ],
    },

    {
      id: "agencia-viagens",
      titulo: "Agência de Viagens",
      descricao:
        "Plataforma moderna de turismo para exploração de destinos, reserva de pacotes e interface imersiva focada na experiência do usuário.",
      tags: ["React", "JavaScript", "CSS Moderno", "UI/UX"],
      video:
        "https://player.cloudinary.com/embed/?cloud_name=yelovqtt&public_id=Ag%C3%AAncia_Copa_2026_-_Google_Chrome_2026-05-28_14-55-20_sthbjb",
      videoTitle: "Agência de Viagens Demo",
      imagem: capaAgencia,
      badge: "Premium UI/UX",
      badgeType: "commercial",
      links: [
        {
          label: "Ver Código",
          href: "https://github.com/Barbara-larissa/luxe-seoul",
          type: "secondary",
        },
        {
          label: "Acessar Demo",
          href: "https://luxe-seoul-s6te.vercel.app",
          type: "primary",
        },
      ],
    },
  ];

  // ==========================================
  // PROJETOS PARA CLIENTES
  // ==========================================

  const projetosClientes = [
    {
      id: "studio-lena",
      titulo: "Studio Lena Cauassu",
      descricao:
        "Site oficial desenvolvido com foco em experiência do usuário (UX), identidade visual personalizada e layout responsivo de alta performance.",
      tags: ["React", "Front-end", "UI/UX", "Design"],
      imagem: capaLena,
      video:
        "https://player.cloudinary.com/embed/?cloud_name=yelovqtt&public_id=Lena_Cabelereira_-_Google_Chrome_2026-07-08_15-32-43_cmg1il",
      videoTitle: "Studio Lena Cauassu",
      badge: "Destaque",
      badgeType: "commercial",
      links: [
        {
          label: "Acessar Site",
          href: "https://studio-lena.vercel.app",
          type: "primary",
        },
      ],
    },

    {
      id: "guinchos-principal",
      titulo: "3D Guinchos 24 Horas",
      descricao:
        "Site institucional com foco em performance, SEO, responsividade e integração com Google Ads e WhatsApp para geração de leads.",
      tags: ["React", "TypeScript", "Google Ads", "UI/UX"],
      imagem: capaGuinchos2,
      video:
        "https://player.cloudinary.com/embed/?cloud_name=yelovqtt&public_id=3D_Guinchos_24_Horas___Leve_Pesado_e_mais_3_p%C3%A1ginas_-_Pessoal_Microsoft_Edge_2026-07-23_22-55-19_ayradi",
      videoTitle: "3D Guinchos 24 Horas",
      badge: "Destaque",
      badgeType: "commercial",
      links: [
        {
          label: "Acessar Site",
          href: "https://3dguinchos.com.br",
          type: "primary",
        },
      ],
    },

    {
      id: "guinchos-segundo",
      titulo: "3D Guinchos 24 Horas",
      descricao:
        "Site institucional desenvolvido com React e TypeScript, focado em performance, SEO, responsividade e integração com Google Ads e WhatsApp para geração de leads.",
      tags: ["React", "TypeScript", "Google Ads", "UI/UX"],
      imagem: capaGuinchos,
      video:
        "https://player.cloudinary.com/embed/?cloud_name=yelovqtt&public_id=3D_Guinchos_24_Horas___Leve_Pesado_e_mais_1_p%C3%A1gina_-_Pessoal_Microsoft_Edge_2026-07-25_18-22-00_jlflzz",
      videoTitle: "3D Guinchos 24 Horas - Segunda Demonstração",
      badge: "Destaque",
      badgeType: "commercial",
      links: [
        {
          label: "Acessar Site",
          href: "https://3dguinchos.com.br",
          type: "primary",
        },
      ],
    },

   

    {
      id: "sabor-da-vovo",
      titulo: "Sabor da Vovó",
      descricao:
        "Landing page desenvolvida para uma marmitaria em Londrina, com apresentação dos tamanhos de marmitas, informações comerciais, horário de funcionamento, localização e contato direto pelo WhatsApp.",
      tags: [
        "React",
        "Tailwind CSS",
        "JavaScript",
        "UI/UX",
        "Responsividade",
      ],
      imagem: capasabor,
      video:
        "https://player.cloudinary.com/embed/?cloud_name=yelovqtt&public_id=202611151740_h17owl",
      videoTitle: "Sabor da Vovó - Landing Page",
      badge: "Destaque",
      badgeType: "commercial",
      links: [
        {
          label: "Acessar Site",
          href: "https://www.sabordavovo.com/",
          type: "primary",
        },
      ],
    },
  ];

  // PROJETOS EXIBIDOS
  const projetosAtuais = mostrarProjetos
    ? projetosPessoais
    : projetosClientes;

  return (
    <section
      id="projetos"
      className={styles["projects-section"]}
    >
      <h2 className={styles["section-title"]}>
        {mostrarProjetos
          ? "Projetos Pessoais e de Estudo"
          : "Projetos para Clientes"}
      </h2>

      {/* FILTROS */}
      <div
        className={styles["project-filters"]}
        role="group"
        aria-label="Filtrar projetos"
      >
        <button
          type="button"
          onClick={() => setMostrarProjetos(false)}
          className={`${styles["filter-button"]} ${
            !mostrarProjetos
              ? styles["filter-button-active"]
              : ""
          }`}
          aria-pressed={!mostrarProjetos}
        >
          CLIENTES
        </button>

        <button
          type="button"
          onClick={() => setMostrarProjetos(true)}
          className={`${styles["filter-button"]} ${
            mostrarProjetos
              ? styles["filter-button-active"]
              : ""
          }`}
          aria-pressed={mostrarProjetos}
        >
          PROJETOS
        </button>
      </div>

      {/* CARROSSEL */}
      <div className={styles["carousel-viewport"]}>
        <div
          className={styles["carousel-controls"]}
          aria-label="Navegação dos projetos"
        >
          <button
            type="button"
            className={styles["carousel-arrow"]}
            onClick={() => moverCarrossel(-1)}
            aria-label="Projeto anterior"
          >
            <span aria-hidden="true">←</span>
          </button>

          <button
            type="button"
            className={styles["carousel-arrow"]}
            onClick={() => moverCarrossel(1)}
            aria-label="Próximo projeto"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>

        <div
          className={styles["carousel-track"]}
          ref={carouselRef}
        >
          {projetosAtuais.map((projeto) => (
            <article
              className={styles["project-card"]}
              key={projeto.id}
            >
              {/* BADGE */}
              <span
                className={
                  projeto.badgeType === "soon"
                    ? styles["badge-soon"]
                    : styles["badge-comercial"]
                }
              >
                {projeto.badge}
              </span>

              {/* VÍDEO E CAPA */}
              <div className={styles["video-container"]}>
                {projeto.imagem && !videosAtivos[projeto.id] ? (
                  <button
                    type="button"
                    className={styles["video-poster-button"]}
                    onClick={() =>
                      setVideosAtivos((prev) => ({
                        ...prev,
                        [projeto.id]: true,
                      }))
                    }
                    aria-label={`Reproduzir vídeo: ${projeto.titulo}`}
                  >
                    <img
                      src={projeto.imagem}
                      alt={`Capa do projeto ${projeto.titulo}`}
                      className={styles["project-video-element"]}
                    />

                    <span
                      className={styles["video-play-button"]}
                    >
                      ▶
                    </span>
                  </button>
                ) : (
                  <iframe
                    src={
                      projeto.imagem
                        ? `${projeto.video}&autoplay=true`
                        : projeto.video
                    }
                    title={projeto.videoTitle}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className={styles["project-video-element"]}
                  />
                )}
              </div>

              {/* INFORMAÇÕES */}
              <div className={styles["project-content"]}>
                <h3>{projeto.titulo}</h3>

                <p>{projeto.descricao}</p>

                {/* TECNOLOGIAS */}
                <div className={styles["tags"]}>
                  {projeto.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                {/* LINKS */}
                <div className={styles["project-links"]}>
                  {projeto.links.map((link) =>
                    link.disabled ? (
                      <button
                        key={link.label}
                        type="button"
                        className={styles["btn-soon"]}
                        disabled
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className={
                          styles[
                            link.type === "primary"
                              ? "btn-primary"
                              : link.type === "sale"
                                ? "btn-venda"
                                : "btn-secondary"
                          ]
                        }
                      >
                        {link.label}
                      </a>
                    )
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}