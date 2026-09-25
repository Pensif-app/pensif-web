// Test de la logique pure de la navbar secondaire.
// Usage : node scripts/test-section-nav.ts   (Node >= 22, type stripping natif)
import assert from "node:assert/strict";
import { pickActiveSection } from "../src/lib/activeSection.ts";

const H = 800;
const probe = H / 2;
// Layout vertical simulé : Hero 0-700, puis les 4 sections de 800px, puis Cadeaux.
const at = (scroll: number) => [
  { id: "accueil", top: 700 - scroll, bottom: 1500 - scroll },
  { id: "proches", top: 1500 - scroll, bottom: 2300 - scroll },
  { id: "pensees", top: 2300 - scroll, bottom: 3100 - scroll },
  { id: "calendrier", top: 3100 - scroll, bottom: 3900 - scroll },
];

assert.equal(pickActiveSection(at(0), probe), null, "Hero -> navbar cachée");
assert.equal(pickActiveSection(at(500), probe), "accueil", "entrée Accueil");
assert.equal(pickActiveSection(at(1200), probe), "proches");
assert.equal(pickActiveSection(at(2100), probe), "pensees");
assert.equal(pickActiveSection(at(3000), probe), "calendrier");
assert.equal(pickActiveSection(at(3499), probe), "calendrier", "encore dans Calendrier");
assert.equal(pickActiveSection(at(3500), probe), null, "sortie Calendrier -> fade-out");
assert.equal(pickActiveSection(at(1099), probe), "accueil", "frontière : dernière ligne d'Accueil");
assert.equal(pickActiveSection(at(1100), probe), "proches", "frontière exacte, sans trou ni chevauchement");
console.log("OK — 9 assertions");
