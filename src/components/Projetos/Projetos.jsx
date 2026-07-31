import styles from "./Projetos.module.css";

export default function Projetos() {
  return (
    <section id="projetos" className={styles["projects-section"]}>
      <h2 className={styles["section-title"]}>Projetos em Destaque</h2>
      <div className={styles["projects-grid"]}>

        {/* Card 1: Burguer do Bom */}
        <div className={styles["project-card"]}>
          <div className={styles["badge-soon"]}>Lançamento em Breve</div>
          <div className={`${styles["video-container"]} ${styles["local-video"]}`}>
            <iframe
              src="https://www.youtube.com/embed/mGbd09ZS3uk"
              title="Burguer do Bom Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles["project-video-element"]}
            ></iframe>
          </div>
          <div className={styles["project-content"]}>
            <h3>Burguer do Bom</h3>
            <p>Sistema de delivery completo com integração de pagamentos e WhatsApp.</p>
            <div className={styles["tags"]}>
              <span>React</span>
              <span>Firebase</span>
              <span>Mercado Pago</span>
            </div>
            <div className={styles["project-links"]}>
              <a href="https://github.com/Barbara-larissa" target="_blank" rel="noreferrer" className={styles["btn-secondary"]}>Ver Código</a>
              <button className={styles["btn-soon"]} disabled>Em Breve</button>
            </div>
          </div>
        </div>

        {/* Card 2: Sistema Financeiro */}
        <div className={styles["project-card"]}>
          <div className={styles["badge-comercial"]}>Disponível para Licença</div>
          <div className={styles["video-container"]}>
            <iframe
              src="https://www.youtube.com/embed/hMQYXhc1-2A"
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

        {/* Card 3: VR Automotive */}
        <div className={styles["project-card"]}>
          <div className={styles["badge-comercial"]}>Destaque Tech</div>
          <div className={`${styles["video-container"]} ${styles["local-video"]}`}>
            <iframe
              src="https://www.youtube.com/embed/uG4lkNxEYs8"
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

        {/* Card 4: Lumen Login */}
        <div className={styles["project-card"]}>
          <div className={styles["badge-comercial"]}>Destaque UI/UX</div>
          <div className={`${styles["video-container"]} ${styles["local-video"]}`}>
            <iframe
              src="https://www.youtube.com/embed/vThcK4sXndQ"
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

        {/* Card 5: Portfólio Criativo */}
        <div className={styles["project-card"]}>
          <div className={styles["badge-comercial"]}>Design Exclusivo</div>
          <div className={`${styles["video-container"]} ${styles["local-video"]}`}>
            <iframe
              src="https://www.youtube.com/embed/8xiTVxgsLa0"
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

        {/* Card 6: Tech Shop */}
        <div className={styles["project-card"]}>
          <div className={styles["badge-comercial"]}>Premium UI/UX</div>
          <div className={`${styles["video-container"]} ${styles["local-video"]}`}>
            <iframe
              src="https://www.youtube.com/embed/22YunVGnQYs"
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

        {/* Card 7: Agencia Viagem */}
        <div className={styles["project-card"]}>
          <div className={styles["badge-comercial"]}>Premium UI/UX</div>
          <div className={`${styles["video-container"]} ${styles["local-video"]}`}>
            <iframe
              src="https://www.youtube.com/embed/Z_91PvulTUU"
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




        <div className={styles["project-card"]}>
          <div className={styles["badge-comercial"]}>Web Site Oficial</div>
          <div className={`${styles["video-container"]} ${styles["local-video"]}`}>
            <iframe
              src="https://www.youtube.com/embed/-sq3ZJGCCk0"
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



        {/* Card: Novo Projeto */}
        <div className={styles["project-card"]}>
          <div className={styles["badge-comercial"]}>Destaque Front-End</div>
          <div className={`${styles["video-container"]} ${styles["local-video"]}`}>
            <iframe
              src="https://www.youtube.com/embed/S6TSKz1mwzg"
              title="Demonstração do Projeto"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className={styles["project-video-element"]}
            ></iframe>
          </div>
          <div className={styles["project-content"]}>
            <h3>Nome do Projeto</h3>
            <p>Descrição detalhada sobre o funcionamento e os diferenciais técnicos desta aplicação.</p>
            <div className={styles["tags"]}>
              <span>React</span>
              <span>JavaScript</span>
              <span>UI/UX</span>
            </div>
            <div className={styles["project-links"]}>
              <a href="https://github.com/Barbara-larissa" target="_blank" rel="noreferrer" className={styles["btn-secondary"]}>GitHub</a>
              <a href="https://3dguinchos.com.br" target="_blank" rel="noreferrer" className={styles["btn-primary"]}>
                Acessar Demo
              </a>
            </div>
          </div>
        </div>






















      </div>
    </section>
  );
}