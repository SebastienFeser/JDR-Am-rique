# Instructions pour Claude — Projet JDR

## Contexte

L'utilisateur conçoit un JDR de A à Z (JDR sur la conquête de l'Amérique avec ruines atlanto-natives). Les sources de vérité du projet sont :

- `jdr-synthese.md` — document de synthèse principal
- `jdr-playbook-conquistador.md` — premier playbook complet, sert de modèle

Un site web statique (`site/`) sert d'**interface MJ** et reflète l'ensemble du contenu du JDR. Il doit rester **strictement synchronisé** avec les .md et avec les décisions prises en conversation.

## Règles de travail

1. **Ne jamais inventer de contenu** pour le JDR. Si une section n'est pas encore définie dans les .md ou en conversation, la page correspondante du site doit rester **vide** (placeholder uniquement) jusqu'à ce que l'utilisateur valide le contenu.
2. À chaque décision/ajout de contenu pris en conversation, **mettre à jour à la fois** :
   - le `.md` concerné (ou en créer un nouveau si le sujet le justifie)
   - la page HTML correspondante dans `site/pages/`
3. Si une nouvelle section apparaît, créer une nouvelle page HTML et l'ajouter à la nav (`site/assets/nav.js`).
4. Le site est en français.
5. Pas de framework, pas de build : HTML + CSS + JS vanilla pour que l'utilisateur puisse ouvrir le site en double-cliquant sur `site/index.html`.

## Structure du site

```
site/
  index.html              — accueil + table des matières
  assets/
    style.css             — styles partagés
    nav.js                — barre latérale construite depuis une liste de pages
  pages/
    <thème>.html          — une page par thème
```

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
