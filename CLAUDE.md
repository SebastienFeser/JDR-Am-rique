# Instructions pour Claude — Projet JDR

## Contexte

L'utilisateur conçoit un JDR de A à Z (JDR sur la conquête de l'Amérique avec ruines atlanto-natives). Les sources de vérité du projet sont :

- `jdr-synthese.md` — document de synthèse principal
- `jdr-playbook-conquistador.md` — premier playbook complet, sert de modèle

Un site web statique (`site/`) sert d'**interface MJ** et reflète l'ensemble du contenu du JDR. Il doit rester **strictement synchronisé** avec les .md et avec les décisions prises en conversation.

## Règles de travail

1. **Ne jamais inventer de contenu** sans validation explicite de l'utilisateur. Si une section n'est pas encore définie ou validée, la page correspondante du site doit rester **vide** (placeholder uniquement).
2. **Site web = source de vérité unique.** Ne créer aucun nouveau `.md` ; les deux `.md` existants (`jdr-synthese.md`, `jdr-playbook-conquistador.md`) sont conservés en archive mais ne sont **plus mis à jour**. Tout nouveau contenu va directement dans le site.
3. À chaque ajout de contenu validé :
   - écrire dans la page HTML correspondante dans `site/pages/`
   - mettre à jour le statut dans `site/assets/nav.js` (`todo` → `wip` → `done`)
   - mettre à jour le tableau d'avancement dans `site/index.html` si pertinent
4. Si une nouvelle section apparaît, créer une nouvelle page HTML et l'ajouter à la nav (`site/assets/nav.js`).
5. **Workflow de validation playbook par playbook :** proposer le playbook complet en HTML, attendre la validation de l'utilisateur, puis passer au suivant.
6. Le site est en français.
7. Pas de framework, pas de build : HTML + CSS + JS vanilla pour que l'utilisateur puisse ouvrir le site en double-cliquant sur `site/index.html`.

## Structure du projet

```
JDR Amérique/
├── site/                        — interface MJ (privée)
│   ├── index.html
│   ├── assets/
│   │   ├── style.css
│   │   └── nav.js               — barre latérale construite depuis une liste de pages
│   └── pages/
│       └── <thème>.html         — une page par thème
└── fiche-joueur/                — fichiers à distribuer aux joueurs
    └── fiche-perso.html         — fiche autonome, éditable, sauvegarde localStorage + export JSON + impression
```

**Séparation MJ / joueurs :** le dossier `site/` est réservé au MJ. Le dossier `fiche-joueur/` contient les fichiers autonomes destinés aux joueurs (à envoyer par mail/Discord). Ne jamais mettre de contenu MJ-only dans `fiche-joueur/`.

Chaque page suit le template :

```html
<!DOCTYPE html>
<html lang="fr"><head>
<meta charset="UTF-8"><title>TITRE — JDR</title>
<link rel="stylesheet" href="../assets/style.css"></head>
<body>
<aside id="nav"></aside>
<main>
<!-- contenu -->
</main>
<script src="../assets/nav.js"></script>
</body></html>
```

Les pages vides contiennent un bandeau `À définir` (classe CSS `.todo`) pour qu'on les repère d'un coup d'œil.

## État d'avancement (à tenir à jour)

- ✅ Couches 1-2 du système (moteur, attributs)
- 🟡 Couche 3 : 1/6 playbook (Conquistador)
- ⬜ Couches 4-8, worldbuilding fin (voir section 10 de `jdr-synthese.md`)
