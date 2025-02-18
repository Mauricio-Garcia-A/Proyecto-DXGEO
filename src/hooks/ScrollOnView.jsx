import { useEffect } from "react";

const ScrollOnView = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        });
      },
      { threshold: 0.2 } // Detecta cuando el 30% es visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect(); // Limpia el observer al desmontar
  }, []);

  return null;
};

export default ScrollOnView;
