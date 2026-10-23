import { useRef, useState } from "react";
import styles from "./Projetos.module.css";

export default function Projetos() {
  const [mostrarProjetos, setMostrarProjetos] = useState(false);
  const carouselRef = useRef(null);

  const moverCarrossel = (direcao) => {
    const carrossel = carouselRef.current;
    if (!carrossel) return;

    const card = carrossel.querySelector(`.${styles["project-card"]}`);
    const distancia = card
      ? card.getBoundingClientRect().width + 16
      : carrossel.clientWidth;

    carrossel.scrollBy({
      left: direcao * distancia,
      behavior: "smooth",
    });
  };

  const projetosPessoais = [
    {
      titulo: "Sabor Real",
      descricao:
        "Sistema de delivery completo com cardapio, carrinho, integracao com Mercado Pago, WhatsApp, ViaCEP e painel administrativo para gerenciamento de pedidos.",
      tags: ["React", "TypeScript", "Node.js", "Mercado Pago"],
      video:
        "https://player.cloudinary.com/embed/?cloud_name=yelovqtt&public_id=Sabor_Real_X-Tudo_e_Dog%C3%A3o_na_Zona_Norte_de_Londrina_e_mais_3_p%C3%A1ginas_-_Pessoal_Microsoft_Edge_2026-09-23_23-26-02_zncbeg",
      videoTitle: "Sabor Real - Sistema de Delivery",
      badge: "Projeto em Destaque",
      badgeType: "soon",
      links: [
        { label: "Ver Codigo", href: "https://github.com/Barbara-larissa/sabor-real-lanches", type: "secondary" },
        { label: "Ver Projeto", href: "https://sabor-real-lanches.vercel.app/", type: "secondary" },
      ],
    },
    {
      titulo: "Sistema Financeiro",
      descricao: "Gestao financeira completa com PHP e MySQL.",
      tags: ["PHP", "MySQL", "Logica"],
      video:
        "https://player.cloudinary.com/embed/?cloud_name=yelovqtt&public_id=Sabor_Real_X-Tudo_e_Dog%C3%A3o_na_Zona_Norte_de_Londrina_e_mais_3_p%C3%A1ginas_-_Pessoal_Microsoft_Edge_2026-09-23_23-26-02_zncbeg",
      videoTitle: "Sistema Financeiro",
      badge: "Disponivel para Licenca",
      badgeType: "commercial",
      links: [
        { label: "GitHub", href: "https://github.com/Barbara-larissa/Sistema-Financeiro", type: "secondary" },
        { label: "Adquirir", href: "https://wa.me/5543999999999", type: "sale" },
      ],
    },
    {
      titulo: "VR Automotive",
      descricao: "Showroom virtual imersivo para visualizacao detalhada de veiculos.",
      tags: ["React", "Tailwind CSS", "UI/UX"],
      video:
        "https://player.cloudinary.com/embed/?cloud_name=yelovqtt&public_id=vr-automotiv_g4vjfw",
      videoTitle: "VR Automotive Demo",
      badge: "Destaque Tech",
      badgeType: "commercial",
      links: [
        { label: "Ver Codigo", href: "https://github.com/Barbara-larissa/vr-automotive", type: "secondary" },
        { label: "Acessar Demo", href: "https://vr-altomotive.vercel.app", type: "primary" },
      ],
    },
    {
      titulo: "Lumen Login",
      descricao: "Interface de autenticacao imersiva com microinteracoes avancadas que reagem dinamicamente as acoes do usuario.",
      tags: ["React", "JavaScript", "CSS Moderno", "UI/UX"],
      video:
        "https://player.cloudinary.com/embed/?cloud_name=yelovqtt&public_id=Conecte-se_-_Google_Chrome_2026-05-26_14-01-03_hy8vk1",
      videoTitle: "Lumen Login Demo",
      badge: "Destaque UI/UX",
      badgeType: "commercial",
      links: [
        { label: "Ver Codigo", href: "https://github.com/Barbara-larissa/Lumem-Login", type: "secondary" },
        { label: "Acessar Demo", href: "https://lumem-login.vercel.app", type: "primary" },
      ],
    },
    {
      titulo: "Portfolio Criativo V1",
      descricao: "Landing page pessoal construida com JavaScript puro, animacoes nativas e design tematico estilo Chibi.",
      tags: ["HTML5", "CSS3", "JavaScript", "Design Criativo"],
      video:
        "https://player.cloudinary.com/embed/?cloud_name=yelovqtt&public_id=Meu_Portf%C3%B3lio___LariDev_-_Google_Chrome_2026-03-18_16-57-42_kesjfc",
      videoTitle: "Portfolio Criativo V1 Demo",
      badge: "Design Exclusivo",
      badgeType: "commercial",
      links: [
        { label: "Ver Codigo", href: "https://github.com/Barbara-larissa", type: "secondary" },
        { label: "Acessar Demo", href: "https://barbara-larissa.github.io/barbara-portfolio/", type: "primary" },
      ],
    },
    {
      titulo: "Tech Shop",
      descricao: "Plataforma de e-commerce para hardware e perifericos, com busca em tempo real, filtros por categoria e ordenacao dinamica de precos.",
      tags: ["HTML5", "CSS3", "JavaScript", "UI/UX"],
      video:
        "https://player.cloudinary.com/embed/?cloud_name=yelovqtt&public_id=Tech_Shop_-_Home___As_Melhores_Ofertas_em_Tecnologia_-_Google_Chrome_2026-05-26_15-54-25_mjpqoc",
      videoTitle: "Tech Shop Demo",
      badge: "Premium UI/UX",
      badgeType: "commercial",
      links: [
        { label: "Ver Codigo", href: "https://github.com/Barbara-larissa/techshop-store", type: "secondary" },
        { label: "Em Breve", disabled: true, type: "soon" },
      ],
    },
    {
      titulo: "Agencia de Viagens",
      descricao: "Plataforma moderna de turismo para exploracao de destinos, reserva de pacotes e interface imersiva focada na experiencia do usuario.",
      tags: ["React", "JavaScript", "CSS Moderno", "UI/UX"],
      video:
        "https://player.cloudinary.com/embed/?cloud_name=yelovqtt&public_id=Ag%C3%AAncia_Copa_2026_-_Google_Chrome_2026-05-28_14-55-20_sthbjb",
      videoTitle: "Agencia de Viagens Demo",
      badge: "Premium UI/UX",
      badgeType: "commercial",
      links: [
        { label: "Ver Codigo", href: "https://github.com/Barbara-larissa/luxe-seoul", type: "secondary" },
        { label: "Acessar Demo", href: "https://luxe-seoul-s6te.vercel.app", type: "primary" },
      ],
    },
  ];

  const projetosClientes = [
    {
      titulo: "Studio Lena Cauassu",
      descricao:
        "Site oficial desenvolvido com foco em experiencia do usuario (UX), identidade visual personalizada e layout responsivo de alta performance.",
      tags: ["React", "Front-end", "UI/UX", "Design"],
      video:
        "https://player.cloudinary.com/embed/?cloud_name=yelovqtt&public_id=Lena_Cabelereira_-_Google_Chrome_2026-07-08_15-32-43_cmg1il",
      videoTitle: "Studio Lena Cauassu",
      badge: "Web Site Oficial",
      badgeType: "commercial",
      links: [
        { label: "GitHub", href: "https://github.com/Barbara-larissa", type: "secondary" },
        { label: "Acessar Site", href: "https://studio-lena.vercel.app", type: "primary" },
      ],
    },
    {
      titulo: "3D Guinchos 24 Horas",
      descricao: "Site institucional com foco em performance, SEO, responsividade e integracao com Google Ads e WhatsApp para geracao de leads.",
      tags: ["React", "TypeScript", "Google Ads", "UI/UX"],
      video:
        "https://player.cloudinary.com/embed/?cloud_name=yelovqtt&public_id=3D_Guinchos_24_Horas___Leve_Pesado_e_mais_3_p%C3%A1ginas_-_Pessoal_Microsoft_Edge_2026-07-23_22-55-19_ayradi",
      videoTitle: "3D Guinchos 24 Horas",
      badge: "Destaque Front-End",
      badgeType: "commercial",
      links: [
        { label: "GitHub", href: "https://github.com/Barbara-larissa", type: "secondary" },
        { label: "Acessar Demo", href: "https://3dguinchos.com.br", type: "primary" },
      ],
    },
    {
      titulo: "3D Guinchos 24 Horas",
      descricao: "Site institucional desenvolvido com React e TypeScript, focado em performance, SEO, responsividade e integracao com Google Ads e WhatsApp para geracao de leads.",
      tags: ["React", "TypeScript", "Google Ads", "UI/UX"],
      video:
        "https://player.cloudinary.com/embed/?cloud_name=yelovqtt&public_id=3D_Guinchos_24_Horas___Leve_Pesado_e_mais_1_p%C3%A1gina_-_Pessoal_Microsoft_Edge_2026-07-25_18-22-00_jlflzz",
      videoTitle: "3D Guinchos 24 Horas",
      badge: "Projeto Comercial",
      badgeType: "commercial",
      links: [
        { label: "GitHub", href: "https://github.com/Barbara-larissa", type: "secondary" },
        { label: "Acessar Site", href: "https://3dguinchos.com.br", type: "primary" },
      ],
    },
    {
      titulo: "3D Guinchos 24 Horas",
      descricao: "Site para divulgacao dos servicos de guincho 24 horas em Londrina, Cambe e Ibipora, com foco em apresentar o atendimento e facilitar o contato de clientes.",
      tags: ["React", "TypeScript", "Google Ads", "UI/UX"],
      video:
        "https://player.cloudinary.com/embed/?cloud_name=yelovqtt&public_id=Guincho_24h_em_Londrina_Camb%C3%A9_e_Ibipor%C3%A3___3D_-_Google_Chrome_2026-09-11_13-46-41_trndrf",
      videoTitle: "3D Guinchos 24 Horas - Londrina, Cambe e Ibipora",
      badge: "Projeto Comercial",
      badgeType: "commercial",
      links: [
        { label: "GitHub", href: "https://github.com/Barbara-larissa", type: "secondary" },
        { label: "Acessar Site", href: "https://3dguinchos.com.br", type: "primary" },
      ],
    },
  ];

  const projetosAtuais = mostrarProjetos ? projetosPessoais : projetosClientes;

  return (
    <section id="projetos" className={styles["projects-section"]}>
      <h2 className={styles["section-title"]}>
        {mostrarProjetos ? "Projetos Pessoais e de Estudo" : "Projetos para Clientes"}
      </h2>

      <div className={styles["project-filters"]} role="group" aria-label="Filtrar projetos">
        <button
          type="button"
          onClick={() => setMostrarProjetos(false)}
          className={`${styles["filter-button"]} ${!mostrarProjetos ? styles["filter-button-active"] : ""}`}
          aria-pressed={!mostrarProjetos}
        >
          CLIENTES
        </button>
        <button
          type="button"
          onClick={() => setMostrarProjetos(true)}
          className={`${styles["filter-button"]} ${mostrarProjetos ? styles["filter-button-active"] : ""}`}
          aria-pressed={mostrarProjetos}
        >
          PROJETOS
        </button>
      </div>

      <div className={styles["carousel-viewport"]}>
        <div className={styles["carousel-controls"]} aria-label="Navegacao dos projetos">
          <button type="button" className={styles["carousel-arrow"]} onClick={() => moverCarrossel(-1)} aria-label="Projeto anterior">
            <span aria-hidden="true">&#8592;</span>
          </button>
          <button type="button" className={styles["carousel-arrow"]} onClick={() => moverCarrossel(1)} aria-label="Proximo projeto">
            <span aria-hidden="true">&#8594;</span>
          </button>
        </div>

        <div className={styles["carousel-track"]} ref={carouselRef}>
          {projetosAtuais.map((projeto, index) => (
            <article className={styles["project-card"]} key={`${projeto.titulo}-${index}`}>
              <span
                className={
                  projeto.badgeType === "soon"
                    ? styles["badge-soon"]
                    : styles["badge-comercial"]
                }
              >
                {projeto.badge}
              </span>

              <div className={styles["video-container"]}>
                <iframe
                  src={projeto.video}
                  title={projeto.videoTitle}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className={styles["project-video-element"]}
                />
              </div>

              <div className={styles["project-content"]}>
                <h3>{projeto.titulo}</h3>
                <p>{projeto.descricao}</p>

                <div className={styles["tags"]}>
                  {projeto.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

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
