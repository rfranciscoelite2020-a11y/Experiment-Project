# Orbit Growth Studio

An original, responsive agency landing page inspired by the broad structure and interaction patterns of a modern growth consultancy website. All names, copy, visual design, metrics, illustrations, and testimonials are fictional and original.

## Local setup

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open the local URL shown by Vite. Build a production bundle with `npm run build` and preview it with `npm run preview`.

## GitHub

Create an empty repository, then from this folder run:

```bash
git init
git add .
git commit -m "Initial Orbit Studio site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

## Render

1. In Render, choose **New → Blueprint** and connect the GitHub repository.
2. Render detects `render.yaml` and creates a static site.
3. Approve the blueprint and deploy.

Alternatively create a Static Site manually using build command `npm install && npm run build` and publish directory `dist`.

## Customize

Edit content in `src/App.jsx` and design tokens near the top of `src/styles.css`. The contact form is a front-end demo; connect it to your preferred form endpoint before launch.
