import React, { useEffect, useRef, useState } from 'react'
import lottie from 'lottie-web'
import { useTheme } from '../context/ThemeContext.jsx'
import useIsMobile from '../hooks/useIsMobile.jsx'

export default function LightMobileBg() {
  const { theme } = useTheme();
  const isMobile = useIsMobile();
  const ref = useRef(null);
  const animRef = useRef(null);
  const [projectsVisible, setProjectsVisible] = useState(false);

  useEffect(() => {
    if (theme !== 'dark' && isMobile && ref.current) {
      const anim = lottie.loadAnimation({
        container: ref.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: `${import.meta.env.BASE_URL}assets/animaciones/vivid-green-room-with-a-window.json`,
      });
      animRef.current = anim;
      return () => {
        anim.destroy();
        animRef.current = null;
      };
    }
  }, [theme, isMobile]);

  useEffect(() => {
    // hide background when Projects section is visible
    const target = document.getElementById('projects');
    if (!target) return undefined;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setProjectsVisible(entry.isIntersecting && entry.intersectionRatio > 0.15);
        });
      },
      { root: null, threshold: [0, 0.15, 0.5] }
    );
    obs.observe(target);
    return () => obs.disconnect();
  }, []);

  if (theme === 'dark' || !isMobile || projectsVisible) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="md:hidden pointer-events-none absolute inset-0 z-0"
      style={{ opacity: 0.9, filter: 'brightness(0.98)' }}
    />
  );
}
