import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HIGHLIGHT_CLASS = "role-anchor-target";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = decodeURIComponent(hash.slice(1));
    let tries = 0;
    let scrollTimer;
    let clearTimer;

    const focusTarget = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
        el.classList.add(HIGHLIGHT_CLASS);
        clearTimer = setTimeout(() => el.classList.remove(HIGHLIGHT_CLASS), 2200);
        return;
      }
      if (tries < 20) {
        tries += 1;
        scrollTimer = setTimeout(focusTarget, 60);
      }
    };

    focusTarget();

    return () => {
      clearTimeout(scrollTimer);
      clearTimeout(clearTimer);
    };
  }, [pathname, hash]);

  return null;
}
