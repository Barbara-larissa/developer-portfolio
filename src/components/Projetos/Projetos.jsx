import { useRef, useState } from "react";
import styles from "./Projetos.module.css";

export default function Projetos() {
  const [mostrarProjetos, setMostrarProjetos] = useState(false);
  const [animando, setAnimando] = useState(false);
  const carouselRef = useRef(null);

  const moverCarrossel = (direcao) => {
    const carrossel = carouselRef.current;
    if (!carrossel) return;

    carrossel.scrollBy({
      left: direcao * Math.max(carrossel.clientWidth * 0.82, 280),
      behavior: "smooth",
    });
  };

  const selecionarVisualizacao = (exibirProjetos) => {
    if (animando || mostrarProjetos === exibirProjetos) return;

    setAnimando(true);

    window.setTimeout(() => {
      setMostrarProjetos(exibirProjetos);
      window.setTimeout(() => setAnimando(false), 40);
    }, 220);
  };

  return (
    <section id="projetos" className={styles["projects-section"]}>
      <h2 className={styles["section-title"]}>
        {mostrarProjetos ? "Projetos Pessoais e de Estudo" : "Projetos para Clientes"}
      </h2>

      <div className={styles["project-filters"]} role="group" aria-label="Filtrar projetos">
        <button
          type="button"
          onClick={() => selecionarVisualizacao(false)}
          className={`${styles["filter-button"]} ${!mostrarProjetos ? styles["filter-button-active"] : ""}`}
          aria-pressed={!mostrarProjetos}
          disabled={animando}
        >
          Clientes
        </button>
        <button
          type="button"
          onClick={() => selecionarVisualizacao(true)}
          className={`${styles["filter-button"]} ${mostrarProjetos ? styles["filter-button-active"] : ""}`}
          aria-pressed={mostrarProjetos}
          disabled={animando}
        >
          Projetos
        </button>
      </div>

      <div
        className={`${styles["projects-content"]} ${animando ? styles["projects-content-exit"] : ""}`}
        aria-live="polite"
      >
        {mostrarProjetos ? (
          <div className={styles["carousel-viewport"]}>
            <div className={styles["carousel-controls"]} aria-label="Navegacao dos projetos pessoais">
              <button
                type="button"
                className={styles["carousel-arrow"]}
                onClick={() => moverCarrossel(-1)}
                aria-label="Ver projetos anteriores"
              >
                <span aria-hidden="true">&#8592;</span>
              </button>
              <button
                type="button"
                className={styles["carousel-arrow"]}
                onClick={() => moverCarrossel(1)}
                aria-label="Ver proximos projetos"
              >
                <span aria-hidden="true">&#8594;</span>
              </button>
            </div>

            <div ref={carouselRef} className={styles["carousel-track"]}>
<div className={styles["project-card"]}>

  <div className={styles["badge-soon"]}>Projeto em Destaque</div>

  <div className={`${styles["video-container"]} ${styles["local-video"]}`}>
    <iframe
      src="https://player.cloudinary.com/embed/?cloud_name=yelovqtt&public_id=Sabor_Real_X-Tudo_e_Dog%C3%A3o_na_Zona_Norte_de_Londrina_e_mais_3_p%C3%A1ginas_-_Pessoal_Microsoft_Edge_2026-09-23_23-26-02_zncbeg"
      title="Sabor Real - Sistema de Delivery"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className={styles["project-video-element"]}
    ></iframe>
  </div>

  <div className={styles["project-content"]}>

    <h3>Sabor Real</h3>

    <p>
      Sistema de delivery completo com cardápio, carrinho,
      integração com Mercado Pago, WhatsApp, ViaCEP e painel
      administrativo para gerenciamento de pedidos.
    </p>

    <div className={styles["tags"]}>
      <span>React</span>
      <span>TypeScript</span>
      <span>Node.js</span>
      <span>Mercado Pago</span>
    </div>

    <div className={styles["project-links"]}>
      <a
        href="https://github.com/Barbara-larissa/sabor-real-lanches"
        target="_blank"
        rel="noreferrer"
        className={styles["btn-secondary"]}
      >
        Ver Código
      </a>

      <a
        href="https://sabor-real-lanches.vercel.app/"
        target="_blank"
        rel="noreferrer"
        className={styles["btn-secondary"]}
      >
        Ver Projeto
      </a>
    </div>

  </div>

</div>

<div className={styles["project-card"]}>
          <div className={styles["badge-comercial"]}>Disponível para Licença</div>
          <div className={styles["video-container"]}>
            <iframe
              src="https://player.cloudinary.com/embed/?cloud_name=yelovqtt&public_id=Sabor_Real_X-Tudo_e_Dog%C3%A3o_na_Zona_Norte_de_Londrina_e_mais_3_p%C3%A1ginas_-_Pessoal_Microsoft_Edge_2026-09-23_23-26-02_zncbeg"
              title="Sistema Financeiro"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className={styles["project-content"]}>
            <h3>Sistema Financeiro</h3>
            <p>Gestão financeira completa com PHP e MySQL.</p>
            <div className={styles["tags"]}>
              <span>PHP</span>
              <span>MySQL</span>
              <span>Lógica</span>
            </div>
            <div className={styles["project-links"]}>
              <a href="https://github.com/Barbara-larissa/Sistema-Financeiro" target="_blank" rel="noreferrer" className={styles["btn-secondary"]}>GitHub</a>
              <a href="https://wa.me/5543999999999" target="_blank" rel="noreferrer" className={styles["btn-venda"]}>Adquirir</a>
            </div>
          </div>
        </div>

<div className={styles["project-card"]}>
          <div className={styles["badge-comercial"]}>Destaque Tech</div>
          <div className={`${styles["video-container"]} ${styles["local-video"]}`}>
            <iframe
              src="https://player.cloudinary.com/embed/?cloud_name=yelovqtt&public_id=vr-automotiv_g4vjfw"
              title="VR Automotive Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles["project-video-element"]}
            ></iframe>
          </div>
          <div className={styles["project-content"]}>
            <h3>VR Automotive</h3>
            <p>Showroom virtual imersivo para visualização detalhada de veículos.</p>
            <div className={styles["tags"]}>
              <span>React</span>
              <span>Tailwind CSS</span>
              <span>UI/UX</span>
            </div>
            <div className={styles["project-links"]}>
              <a href="https://github.com/Barbara-larissa/vr-automotive" target="_blank" rel="noreferrer" className={styles["btn-secondary"]}>Ver Código</a>
              <a href="https://vr-altomotive.vercel.app" target="_blank" rel="noreferrer" className={styles["btn-primary"]}>Acessar Demo</a>
            </div>
          </div>
        </div>

<div className={styles["project-card"]}>
          <div className={styles["badge-comercial"]}>Destaque UI/UX</div>
          <div className={`${styles["video-container"]} ${styles["local-video"]}`}>
            <iframe
              src="https://player.cloudinary.com/embed/?cloud_name=yelovqtt&public_id=Conecte-se_-_Google_Chrome_2026-05-26_14-01-03_hy8vk1"
              title="Lumen Login Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles["project-video-element"]}
            ></iframe>
          </div>
          <div className={styles["project-content"]}>
            <h3>Lumen Login</h3>
            <p>Interface de autenticação imersiva com microinterações avançadas que reagem dinamicamente às ações do usuário.</p>
            <div className={styles["tags"]}>
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS Moderno</span>
              <span>UI/UX</span>
            </div>
            <div className={styles["project-links"]}>
              <a href="https://github.com/Barbara-larissa/Lumem-Login" target="_blank" rel="noreferrer" className={styles["btn-secondary"]}>Ver Código</a>
              <a href="https://lumem-login.vercel.app" target="_blank" rel="noreferrer" className={styles["btn-primary"]}>Acessar Demo</a>
            </div>
          </div>
        </div>

<div className={styles["project-card"]}>
          <div className={styles["badge-comercial"]}>Design Exclusivo</div>
          <div className={`${styles["video-container"]} ${styles["local-video"]}`}>
            <iframe
              src="https://player.cloudinary.com/embed/?cloud_name=yelovqtt&public_id=Meu_Portf%C3%B3lio___LariDev_-_Google_Chrome_2026-03-18_16-57-42_kesjfc"
              title="Portfólio Criativo V1 Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles["project-video-element"]}
            ></iframe>
          </div>
          <div className={styles["project-content"]}>
            <h3>Portfólio Criativo V1</h3>
            <p>Landing page pessoal construída com JavaScript puro, animações nativas e design temático estilo Chibi.</p>
            <div className={styles["tags"]}>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
              <span>Design Criativo</span>
            </div>
            <div className={styles["project-links"]}>
              <a href="https://github.com/Barbara-larissa" target="_blank" rel="noreferrer" className={styles["btn-secondary"]}>Ver Código</a>
              <a href="https://barbara-larissa.github.io/barbara-portfolio/" target="_blank" rel="noreferrer" className={styles["btn-primary"]}>Acessar Demo</a>
            </div>
          </div>
        </div>

<div className={styles["project-card"]}>
          <div className={styles["badge-comercial"]}>Premium UI/UX</div>
          <div className={`${styles["video-container"]} ${styles["local-video"]}`}>
            <iframe
              src="https://player.cloudinary.com/embed/?cloud_name=yelovqtt&public_id=Tech_Shop_-_Home___As_Melhores_Ofertas_em_Tecnologia_-_Google_Chrome_2026-05-26_15-54-25_mjpqoc"
              title="Tech Shop Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles["project-video-element"]}
            ></iframe>
          </div>
          <div className={styles["project-content"]}>
            <h3>Tech Shop</h3>
            <p>Plataforma de e-commerce completa para hardware e periféricos, com busca em tempo real, filtros por categoria e ordenação dinâmica de preços.</p>
            <div className={styles["tags"]}>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
              <span>UI/UX</span>
            </div>
            <div className={styles["project-links"]}>
              <a href="https://github.com/Barbara-larissa/techshop-store" target="_blank" rel="noreferrer" className={styles["btn-secondary"]}>Ver Código</a>
              <button className={styles["btn-soon"]} disabled>Em Breve</button>
            </div>
          </div>
        </div>

<div className={styles["project-card"]}>
          <div className={styles["badge-comercial"]}>Premium UI/UX</div>
          <div className={`${styles["video-container"]} ${styles["local-video"]}`}>
            <iframe
              src="https://player.cloudinary.com/embed/?cloud_name=yelovqtt&public_id=Ag%C3%AAncia_Copa_2026_-_Google_Chrome_2026-05-28_14-55-20_sthbjb"
              title="Agência de Viagens Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles["project-video-element"]}
            ></iframe>
          </div>
          <div className={styles["project-content"]}>
            <h3>Agência de Viagens</h3>
            <p>Plataforma moderna de turismo para exploração de destinos, reserva de pacotes e interface imersiva focada na experiência do usuário.</p>
            <div className={styles["tags"]}>
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS Moderno</span>
              <span>UI/UX</span>
            </div>
            <div className={styles["project-links"]}>
              <a href="https://github.com/Barbara-larissa/luxe-seoul" target="_blank" rel="noreferrer" className={styles["btn-secondary"]}>Ver Código</a>
              <a href="https://luxe-seoul-s6te.vercel.app" target="_blank" rel="noreferrer" className={styles["btn-primary"]}>Acessar Demo</a>
            </div>
          </div>
        </div>
            </div>
          </div>
        ) : (
          <div className={styles["carousel-viewport"]}>
            <div className={styles["carousel-controls"]} aria-label="Navegacao dos projetos para clientes">
              <button
                type="button"
                className={styles["carousel-arrow"]}
                onClick={() => moverCarrossel(-1)}
                aria-label="Ver clientes anteriores"
              >
                <span aria-hidden="true">&#8592;</span>
              </button>
              <button
                type="button"
                className={styles["carousel-arrow"]}
                onClick={() => moverCarrossel(1)}
                aria-label="Ver proximos clientes"
              >
                <span aria-hidden="true">&#8594;</span>
              </button>
            </div>

            <div ref={carouselRef} className={styles["carousel-track"]}>
<div className={styles["project-card"]}>
          <div className={styles["badge-comercial"]}>Web Site Oficial</div>
          <div className={`${styles["video-container"]} ${styles["local-video"]}`}>
            <iframe
              src="https://player.cloudinary.com/embed/?cloud_name=yelovqtt&public_id=Lena_Cabelereira_-_Google_Chrome_2026-07-08_15-32-43_cmg1il"
              title="Studio Lena Cauassu"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className={styles["project-video-element"]}
            ></iframe>
          </div>
          <div className={styles["project-content"]}>
            <h3>Studio Lena Cauassu</h3>
            <p>Site oficial desenvolvido com foco em experiência do usuário (UX), identidade visual personalizada e layout responsivo de alta performance.</p>
            <div className={styles["tags"]}>
              <span>React</span>
              <span>Front-end</span>
              <span>UI/UX</span>
              <span>Design</span>
            </div>
            <div className={styles["project-links"]}>
              <a href="https://github.com/Barbara-larissa" target="_blank" rel="noreferrer" className={styles["btn-secondary"]}>GitHub</a>
              <a href="https://studio-lena.vercel.app" target="_blank" rel="noreferrer" className={styles["btn-primary"]}>Acessar Site</a>
            </div>
          </div>
        </div>

<div className={styles["project-card"]}>
          <div className={styles["badge-comercial"]}>Destaque Front-End</div>
          <div className={`${styles["video-container"]} ${styles["local-video"]}`}>
            <iframe
              src="https://player.cloudinary.com/embed/?cloud_name=yelovqtt&public_id=3D_Guinchos_24_Horas___Leve_Pesado_e_mais_3_p%C3%A1ginas_-_Pessoal_Microsoft_Edge_2026-07-23_22-55-19_ayradi"
              title="3D Guinchos 24 Horas"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className={styles["project-video-element"]}
            ></iframe>
          </div>
          <div className={styles["project-content"]}>
            <h3>3D Guinchos 24 Horas</h3>
            <p>Descrição detalhada sobre o funcionamento e os diferenciais técnicos desta aplicação.</p>
            <div className={styles["tags"]}>
              <span>React</span>
              <span>JavaScript</span>
              <span>UI/UX</span>
              <span>Google Ads</span>
            </div>
            <div className={styles["project-links"]}>
              <a href="https://github.com/Barbara-larissa" target="_blank" rel="noreferrer" className={styles["btn-secondary"]}>GitHub</a>
              <a href="https://3dguinchos.com.br" target="_blank" rel="noreferrer" className={styles["btn-primary"]}>
                Acessar Demo
              </a>
            </div>
          </div>
        </div>

<div className={styles["project-card"]}>
          <div className={styles["badge-comercial"]}>Projeto Comercial</div>

          <div className={`${styles["video-container"]} ${styles["local-video"]}`}>
            <iframe
              src="https://player.cloudinary.com/embed/?cloud_name=yelovqtt&public_id=3D_Guinchos_24_Horas___Leve_Pesado_e_mais_1_p%C3%A1gina_-_Pessoal_Microsoft_Edge_2026-07-25_18-22-00_jlflzz"
              title="3D Guinchos 24 Horas"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className={styles["project-video-element"]}
            ></iframe>
          </div>

          <div className={styles["project-content"]}>
            <h3>3D Guinchos 24 Horas</h3>

            <p>
              Site institucional desenvolvido com React e TypeScript, focado em
              performance, SEO, responsividade e integração com Google Ads e
              WhatsApp para geração de leads.
            </p>

            <div className={styles["tags"]}>
              <span>React</span>
              <span>TypeScript</span>
              <span>Google Ads</span>
              <span>UI/UX</span>
            </div>

            <div className={styles["project-links"]}>
              <a
                href="https://github.com/Barbara-larissa"
                target="_blank"
                rel="noreferrer"
                className={styles["btn-secondary"]}
              >
                GitHub
              </a>

              <a
                href="https://3dguinchos.com.br"
                target="_blank"
                rel="noreferrer"
                className={styles["btn-primary"]}
              >
                Acessar Site
              </a>
            </div>
          </div>
        </div>

        <div className={styles["project-card"]}>
          <div className={styles["badge-comercial"]}>Projeto Comercial</div>
          <div className={`${styles["video-container"]} ${styles["local-video"]}`}>
            <iframe
              src="https://player.cloudinary.com/embed/?cloud_name=yelovqtt&public_id=Guincho_24h_em_Londrina_Camb%C3%A9_e_Ibipor%C3%A3___3D_-_Google_Chrome_2026-09-11_13-46-41_trndrf"
              title="3D Guinchos 24 Horas - Londrina, Cambé e Ibiporã"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className={styles["project-video-element"]}
            ></iframe>
          </div>
          <div className={styles["project-content"]}>
            <h3>3D Guinchos 24 Horas</h3>
            <p>
              Site para divulgação dos serviços de guincho 24 horas em Londrina,
              Cambé e Ibiporã, com foco em apresentar o atendimento e facilitar
              o contato de clientes.
            </p>
            <div className={styles["tags"]}>
              <span>React</span>
              <span>TypeScript</span>
              <span>Google Ads</span>
              <span>UI/UX</span>
            </div>
            <div className={styles["project-links"]}>
              <a
                href="https://github.com/Barbara-larissa"
                target="_blank"
                rel="noreferrer"
                className={styles["btn-secondary"]}
              >
                GitHub
              </a>
              <a
                href="https://3dguinchos.com.br"
                target="_blank"
                rel="noreferrer"
                className={styles["btn-primary"]}
              >
                Acessar Site
              </a>
            </div>
          </div>
        </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
