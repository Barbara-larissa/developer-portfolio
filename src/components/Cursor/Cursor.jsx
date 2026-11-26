import { useEffect, useRef } from 'react';
import styles from './Cursor.module.css';

export function Cursor() {
  const wrapperRef = useRef(null);
  const svgRef = useRef(null);
  const lastPos = useRef({ x: 0, y: 0 });
  const currentAngle = useRef(0);

  useEffect(() => {
    // Não ativa o cursor customizado em dispositivos touch (celular/tablet)
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const wrapper = wrapperRef.current;
    const svg = svgRef.current;
    if (!wrapper || !svg) return;

    const handleMouseMove = (e) => {
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;

      if (Math.hypot(dx, dy) > 2) {
        const targetAngle = Math.atan2(dy, dx) * (180 / Math.PI) + 135;

        let delta = targetAngle - currentAngle.current;
        while (delta > 180) delta -= 360;
        while (delta < -180) delta += 360;

        currentAngle.current += delta;
        lastPos.current = { x: e.clientX, y: e.clientY };
      }

      wrapper.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      svg.style.transform = `translate(-50%, -50%) rotate(${currentAngle.current}deg)`;

      createParticle(e.clientX, e.clientY, false);
    };

    const handleClick = (e) => {
      createPulseRing(e.clientX, e.clientY);
      for (let i = 0; i < 12; i++) {
        createParticle(e.clientX, e.clientY, true);
      }
    };

    const createParticle = (x, y, isBurst) => {
      const particle = document.createElement('span');
      particle.className = isBurst
        ? `${styles.particle} ${styles.burst}`
        : styles.particle;

      const rad = (currentAngle.current - 135) * (Math.PI / 180);
      const offsetX = isBurst ? 0 : -Math.cos(rad) * 14;
      const offsetY = isBurst ? 0 : -Math.sin(rad) * 14;

      // Garante que a partícula não ultrapasse as bordas da tela
      const safeX = Math.min(Math.max(x + offsetX, 8), window.innerWidth - 12);
      const safeY = Math.min(Math.max(y + offsetY, 8), window.innerHeight - 12);

      particle.style.left = `${safeX}px`;
      particle.style.top = `${safeY}px`;

      const angle = Math.random() * Math.PI * 2;
      const distance = isBurst ? Math.random() * 35 + 10 : Math.random() * 10;
      particle.style.setProperty('--dx', `${Math.cos(angle) * distance}px`);
      particle.style.setProperty('--dy', `${Math.sin(angle) * distance}px`);

      document.body.appendChild(particle);
      setTimeout(() => particle.remove(), 550);
    };

    const createPulseRing = (x, y) => {
      const ring = document.createElement('span');
      ring.className = styles.pulseRing;
      ring.style.left = `${x}px`;
      ring.style.top = `${y}px`;
      document.body.appendChild(ring);
      setTimeout(() => ring.remove(), 600);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div ref={wrapperRef} className={styles.rocketWrapper}>
      <svg
        ref={svgRef}
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.rocketSvg}
      >
        <defs>
          <linearGradient id="rocketGrad" x1="2" y1="2" x2="28" y2="28" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ff2a9d" />
            <stop offset="55%" stopColor="#9b5de5" />
            <stop offset="100%" stopColor="#00f0ff" />
          </linearGradient>
        </defs>
        <path
          d="M4 4C11 4.5 19.5 9.5 24 16L16 24C9.5 19.5 4.5 11 4 4Z"
          fill="url(#rocketGrad)"
          stroke="#ffffff"
          strokeWidth="1.2"
        />
        <path d="M10 19L6 25L12 22" fill="#ff2a9d" />
        <path d="M19 10L25 6L22 12" fill="#00f0ff" />
        <circle cx="13.5" cy="13.5" r="2.8" fill="#140c24" stroke="#00f0ff" strokeWidth="1.2" />
        <path
          d="M21 21C23.5 22.5 26.5 26.5 27.5 27.5C26.5 26.5 22.5 23.5 21 21Z"
          stroke="#ff2a9d"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}