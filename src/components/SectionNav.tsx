import { useCallback, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { IoCalendar, IoHome, IoPerson } from "react-icons/io5";
import { useActiveSection } from "../hooks/useActiveSection";

// Adaptation Web de la bottom navigation native (FloatingTabBar, TabBar.tsx).
// Valeurs reprises du code natif : voir le bloc ".secnav" dans index.css.
type Item = { id: string; label: string; icon: ReactNode };

const ITEMS: Item[] = [
  { id: "accueil", label: "Accueil", icon: <IoHome size={22} /> },
  { id: "proches", label: "Proches", icon: <IoPerson size={22} /> },
  // Vrai logo « P » de l'app (assets/logo-mark.png), recoloré via mask-image
  // (équivalent Web de tintColor).
  { id: "pensees", label: "Pensées", icon: <span className="secnav__mark" aria-hidden="true" /> },
  { id: "calendrier", label: "Calendrier", icon: <IoCalendar size={22} /> },
];

const IDS = ITEMS.map((i) => i.id);

export default function SectionNav() {
  const { active, last: lastActive } = useActiveSection(IDS);
  const listRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [pill, setPill] = useState<{ top: number; left: number; width: number; height: number } | null>(null);

  const measure = useCallback(() => {
    const el = itemRefs.current[lastActive];
    if (!el) return;
    // Marge de pilule en CSS (--secnav-pill-pad, 3px natif, mise à l'échelle desktop).
    setPill({ top: el.offsetTop, left: el.offsetLeft, width: el.offsetWidth, height: el.offsetHeight });
  }, [lastActive]);

  useLayoutEffect(() => {
    measure();
  }, [measure]);

  useEffect(() => {
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  function goTo(id: string) {
    const target = document.getElementById(id);
    if (!target) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  }

  const visible = active !== null;

  return (
    <nav
      aria-label="Parcourir l'application"
      aria-hidden={!visible}
      className={`secnav ${visible ? "is-visible" : ""}`}
    >
      <div className="secnav__bg" aria-hidden="true" />
      <div className="secnav__list" ref={listRef}>
        <span
          className="secnav__pill"
          aria-hidden="true"
          style={
            pill
              ? {
                  top: `calc(${pill.top}px - var(--secnav-pill-pad))`,
                  left: `calc(${pill.left}px - var(--secnav-pill-pad))`,
                  width: `calc(${pill.width}px + 2 * var(--secnav-pill-pad))`,
                  height: `calc(${pill.height}px + 2 * var(--secnav-pill-pad))`,
                }
              : { opacity: 0 }
          }
        />
        {ITEMS.map((item) => {
          const isActive = item.id === lastActive;
          return (
            <button
              key={item.id}
              type="button"
              ref={(el) => {
                itemRefs.current[item.id] = el;
              }}
              className="secnav__item"
              data-active={isActive}
              aria-current={item.id === active ? "true" : undefined}
              tabIndex={visible ? 0 : -1}
              onClick={() => goTo(item.id)}
            >
              <span className="secnav__content">
                {item.icon}
                <span className="secnav__label">{item.label}</span>
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
