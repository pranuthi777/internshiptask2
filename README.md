# react-portfolio

My personal portfolio site, made with React for task 2 of my front-end internship.

**Live site:** https://react-portfolio-zeta-azure.vercel.app

## What's in it

- Pages for Home, About, Projects and Contact, using React Router (plus a "page not found" page)
- Components for the header, hero, projects, skills, contact form and footer
- Projects are kept in state, so you can star them, filter them by type and search them
- A contact form that checks the name, email and message before sending
- A dark/light mode button that remembers your choice
- Works on phones, tablets and desktops

## Running it locally

You need Node.js (version 18 or newer).

```bash
git clone https://github.com/pranuthi777/react-portfolio.git
cd react-portfolio
npm install
npm run dev
```

Then open http://localhost:5173.

To make a production build, run `npm run build`. The files end up in `dist/`.

## Folder layout

```
src/
  components/   Header, Hero, Projects, Skills, Contact, Footer, Layout
  pages/        one file per route
  data/         my profile text, projects and skills
  context.js    theme and projects context
  App.jsx       routes and app state
  index.css     all the styles
```

To change the content, edit the files in `src/data/`.

## Notes

- The contact form has no backend. When the form is valid it opens your email app with the
  message already filled in.
- `vercel.json` sends every URL to `index.html` so refreshing on `/projects` still works on
  Vercel.

## Built with

React, React Router, Vite, plain CSS
