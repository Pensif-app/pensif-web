export type SectionBox = { id: string; top: number; bottom: number };

// Section "dominante" = celle qui contient la ligne de sonde (par défaut le
// centre du viewport). `null` si aucune (Hero, sections après Calendrier...) :
// c'est ce qui pilote l'apparition/disparition de la navbar secondaire.
export function pickActiveSection(boxes: SectionBox[], probeY: number): string | null {
  const hit = boxes.find((b) => b.top <= probeY && probeY < b.bottom);
  return hit ? hit.id : null;
}
