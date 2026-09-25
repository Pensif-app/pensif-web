import { useEffect, useState } from "react";
import { pickActiveSection } from "../lib/activeSection";

// IntersectionObserver avec une bande de sonde très fine au centre du
// viewport : il ne sert qu'à DÉCLENCHER le recalcul quand une section franchit
// le centre ; la décision elle-même vient de pickActiveSection (pure, testée).
export function useActiveSection(ids: string[]): { active: string | null; last: string } {
  const [state, setState] = useState<{ active: string | null; last: string }>({ active: null, last: ids[0] });
  const key = ids.join("|");

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el);
    if (els.length === 0) return;

    const compute = () => {
      const boxes = els.map((el) => {
        const r = el.getBoundingClientRect();
        return { id: el.id, top: r.top, bottom: r.bottom };
      });
      const next = pickActiveSection(boxes, window.innerHeight / 2);
      // `last` conserve le dernier item actif pendant le fade-out (la pilule ne saute pas).
      setState((prev) => (prev.active === next ? prev : { active: next, last: next ?? prev.last }));
    };

    const observer = new IntersectionObserver(compute, {
      rootMargin: "-49.5% 0px -49.5% 0px",
      threshold: [0, 1],
    });
    els.forEach((el) => observer.observe(el));
    window.addEventListener("resize", compute);
    compute();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", compute);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return state;
}
