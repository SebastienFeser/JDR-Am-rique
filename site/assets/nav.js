// Liste centrale des pages. Pour ajouter une page : créer le fichier HTML
// dans site/pages/, puis ajouter une entrée ici.
// status: 'done' = contenu validé, 'wip' = partiel, 'todo' = vide

const NAV = [
  { section: "Présentation", items: [
    { href: "index.html", label: "Accueil", status: "done", root: true },
    { href: "pages/pitch.html", label: "Pitch", status: "done" },
    { href: "pages/these.html", label: "Thèse de l'univers", status: "done" },
    { href: "pages/ton.html", label: "Ton et registre", status: "done" },
  ]},
  { section: "Comment jouer", items: [
    { href: "pages/comment-jouer.html", label: "Vue d'ensemble", status: "done" },
    { href: "pages/creation-personnage.html", label: "Création de personnage", status: "wip" },
    { href: "pages/lexique.html", label: "Lexique", status: "wip" },
  ]},
  { section: "Univers", items: [
    { href: "pages/histoire.html", label: "Histoire de l'univers", status: "done" },
    { href: "pages/peuples.html", label: "Peuples", status: "wip" },
    { href: "pages/magie-techno.html", label: "Magie & technologie", status: "wip" },
  ]},
  { section: "Personnages & campagne", items: [
    { href: "pages/personnages.html", label: "Personnages-joueurs", status: "done" },
    { href: "pages/campagne.html", label: "Structure de campagne", status: "done" },
  ]},
  { section: "Système — couches validées", items: [
    { href: "pages/systeme-moteur.html", label: "Moteur de base", status: "done" },
    { href: "pages/systeme-attributs.html", label: "Attributs & actions", status: "done" },
    { href: "pages/systeme-combat.html", label: "Combat", status: "done" },
  ]},
  { section: "Playbooks", items: [
    { href: "pages/playbook-conquistador.html", label: "Conquistador", status: "done" },
    { href: "pages/playbook-cartographe-savant.html", label: "Cartographe-Savant", status: "wip" },
    { href: "pages/playbook-renegat.html", label: "Renégat", status: "wip" },
    { href: "pages/playbook-precheur.html", label: "Prêcheur", status: "wip" },
    { href: "pages/playbook-pisteur.html", label: "Pisteur", status: "wip" },
    { href: "pages/playbook-chirurgien-barbier.html", label: "Chirurgien-Barbier", status: "wip" },
  ]},
  { section: "Système — couches à venir", items: [
    { href: "pages/magie-native.html", label: "Magie native (Souffle)", status: "todo" },
    { href: "pages/techno-atlante.html", label: "Techno atlante (Charge)", status: "todo" },
    { href: "pages/compagnie.html", label: "Compagnie d'exploration", status: "todo" },
    { href: "pages/factions.html", label: "Factions & pouvoir", status: "todo" },
    { href: "pages/traumas-zones.html", label: "Traumas & zones", status: "todo" },
  ]},
  { section: "Worldbuilding à détailler", items: [
    { href: "pages/colonie.html", label: "Colonie centrale", status: "todo" },
    { href: "pages/continent.html", label: "Continent", status: "todo" },
    { href: "pages/tribus.html", label: "Tribus descendantes", status: "todo" },
    { href: "pages/atlantes.html", label: "Origine des Atlantes", status: "todo" },
    { href: "pages/fragments.html", label: "Fragments & artefacts", status: "todo" },
    { href: "pages/bestiaire.html", label: "Bestiaire", status: "todo" },
    { href: "pages/origines.html", label: "Origines eurafrasiatiques", status: "wip" },
  ]},
  { section: "Méta", items: [
    { href: "pages/notes-design.html", label: "Notes de design", status: "done" },
  ]},
];

(function buildNav() {
  const nav = document.getElementById("nav");
  if (!nav) return;

  // Détermine si on est à la racine ou dans /pages/
  const path = window.location.pathname.replace(/\\/g, "/");
  const isInPages = /\/pages\//.test(path);
  const prefix = isInPages ? "../" : "";
  const currentFile = path.split("/").pop() || "index.html";

  let html = `<h1>JDR — Amérique</h1>
<div class="subtitle">Civilisation atlanto-native ⋅ 1492+</div>`;

  for (const group of NAV) {
    html += `<div class="section-label">${group.section}</div>`;
    for (const item of group.items) {
      // résoudre l'URL relative correcte
      let href;
      if (item.root) {
        href = isInPages ? "../index.html" : "index.html";
      } else {
        // item.href est relatif à la racine du site
        href = prefix + item.href;
      }
      const itemFile = item.href.split("/").pop();
      const isActive = (currentFile === itemFile) ||
                       (item.root && (currentFile === "index.html" || currentFile === ""));
      const cls = isActive ? "active" : "";
      const statusChar = item.status === "todo" ? "○"
                      : item.status === "wip"  ? "◐"
                      : "●";
      html += `<a href="${href}" class="${cls}"><span class="status">${statusChar}</span>${item.label}</a>`;
    }
  }
  nav.innerHTML = html;
})();
