import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import "./App.css";

// Importação dos componentes isolados
import Sobre from "./components/Sobre/Sobre";
import Projetos from "./components/Projetos/Projetos";
import Tecnologias from "./components/Tecnologias/Tecnologias";
import Diferenciais from "./components/Diferenciais/Diferenciais";
import Servicos from "./components/Servicos/Servicos";
import Footer from "./components/Footer/Footer";

// Componente dos Meteoros (Estilo Shadcn/Aceternity)
const Meteors = ({ number = 90 }) => {
  const [meteorStyles, setMeteorStyles] = useState([]);

  useEffect(() => {
    const styles = new Array(number).fill(true).map(() => {
      const spawnFromTop = Math.random() > 0.5;

      return {
        top: spawnFromTop
          ? "-20px"
          : Math.floor(Math.random() * window.innerHeight) + "px",
        left: spawnFromTop
          ? Math.floor(Math.random() * window.innerWidth) + "px"
          : "-20px",
        animationDelay: Math.random() * 8 + "s",
        animationDuration:
          Math.floor(Math.random() * (20 - 18) + 5) + "s",
      };
    });

    setMeteorStyles(styles);
  }, [number]);

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          className="meteor"
          style={style}
        ></span>
      ))}
    </>
  );
};

export default function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = useMemo(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: 0,
      },
      fpsLimit: 120,
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            area: 800,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: {
            min: 0.1,
            max: 0.5,
          },
          animation: {
            enable: true,
            speed: 1,
          },
        },
        size: {
          value: {
            min: 1,
            max: 3,
          },
        },
        move: {
          enable: true,
          speed: 0.2,
          direction: "none",
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className="app-container">
      {init && <Particles options={particlesOptions} />}

      <Meteors number={15} />

      {/* Hero */}
      <main className="main-content">
        <h1 className="title">Barbara Larissa</h1>

        <p className="subtitle">
          FRONT-END ENGINEER & UI DEVELOPER
        </p>

        <div className="main-container-hero">
          <div className="button-group">

            <button
              className="btn-primary"
              onClick={() =>
                document
                  .getElementById("projetos")
                  .scrollIntoView({
                    behavior: "smooth",
                  })
              }
            >
              Ver Projetos
            </button>

            <button
              className="btn-servicos"
              onClick={() =>
                document
                  .getElementById("servicos")
                  .scrollIntoView({
                    behavior: "smooth",
                  })
              }
            >
              Serviços & Valores
            </button>

            <a
              href="https://wa.me/5543996818242?text=Olá%20Barbara!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp-hero"
            >
              <i className="fa-brands fa-whatsapp"></i>
              WhatsApp
            </a>

          </div>

          <div className="social-icons-row">
            <a
              href="https://github.com/Barbara-larissa"
              target="_blank"
              rel="noreferrer"
              className="icon-link-minimal"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                className="icon-only-github"
                alt="GitHub"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/barbara-larissa/"
              target="_blank"
              rel="noreferrer"
              className="icon-link-minimal"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                className="icon-only-linkedin"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
      </main>

      {/* Seções */}
      <Diferenciais />
      <Sobre />
      <Tecnologias />
      <Servicos />
      <Projetos />
      <Footer />
    </div>
  );
}