# ALX Project Nexus — ProDev Frontend Engineering Learnings

This repository is a public log of what I learned in the **ProDev Frontend Engineering** track at ALX Africa. It shows how I build frontend systems from start to finish and how I work with teammates.

---

## Purpose

This repository helps me answer:

- What did you learn?
- How do you solve frontend problems end to end?
- Can you work well with other teams?
- How did you achieve the project Nexus
- What tools did you use

---

## Program Overview (Frontend)

The **ProDev Frontend Engineering** program teaches how to build reliable, accessible, and fast web apps with modern tools and good practices.

**Main topics**

- **Foundations:** HTML5, modern CSS (responsive layouts, fluid text), JavaScript (ESNext), Typescript,
- **Frameworks and Routing:** React and **Next.js (Page Router)**, data fetching, SEO, rendering
- **Type Safety:** **TypeScript** for components, hooks, utilities, API clients
- **Styling Systems:** **Tailwind CSS**, SCSS, CSS Modules, utility-first workflows, design tokens, small reusable parts
- **State and Data:** Local state, app state, Context and reducers, **Zustand/Redux Toolkit** when needed
- **APIs and Data Access:** REST and **GraphQL**, pagination, caching, optimistic updates
- **Performance:** Code splitting, memoization, image optimization, fewer re-renders
- **Mobile and PWA:** Basics of React Native and **PWA** features (service workers, offline, install prompts)

---

## Major Learnings

### Key Technologies Covered

- **Web:** HTML5, CSS3, ESNext, Typescript, React, **Next.js (Page Router)**
- **Styling:** **Tailwind CSS**, CSS Modules, utility-first patterns, responsive and fluid layouts
- **Type Safety:** **TypeScript** across the codebase
- **Data and APIs:** REST, **GraphQL**, SWR/React Query, pagination, caching
- **State Management:** React state, Context/reducers, **Zustand/Redux Toolkit**
- **Mobile and PWA:** React Native basics, **PWA** features
- **Tooling:** Vite/Webpack, ESLint + Prettier, Husky + lint-staged, Storybook
- **Ops for Frontend:** Environment setup, build pipelines, preview deployments

### Important Frontend Concepts Practiced

- **Next.js rendering models:** CSR, **SSR**, **SSG/ISR**, route setup, metadata, SEO
- **System design for the frontend:** clear module boundaries, API client layers, performance budgets
- **API integration:** typed clients, good error handling, retries and backoff, clear loading and empty states
- **Performance:** dynamic imports, image optimization, memoization, bundle checks, clean dependencies
- **Security in the UI:** safe HTML handling, auth flows, input validation at boundaries
- **Documentation:** README-first thinking, short decision records, simple diagrams

---

## Challenges and What Worked


- **State Management**
  - **Solution:** keep state local until it must be shared; use **Redux** or small stores when it adds clarity; document data flow.
  - **Result:** simpler components and easier tests.

- **UI consistency drifted**
  - **Solution:** use Tailwind most times, build small UI primitives
  - **Result:** faster work and a consistent look.

- **environment issues**
  - **Solution:** use a dev proxy, document `.env.local` keys, and separate build-time and runtime variables.
  - **Result:** fewer environment-specific bugs.

---

## Best Practices and Personal Takeaways

- Make small pull requests and review often. Add context and checklists.
- Use **Conventional Commits** (`feat:`, `fix:`, `docs:`) to keep history clear.
- Start with **TypeScript** types. Let types guide the design.
- Plan for empty, loading, and error states from the beginning.
- Use API contracts (OpenAPI or GraphQL). Generate clients. Mock early.
- Treat accessibility as required.
- Write short decision records so future work is clear.

---


**Week 1 plan For the Project Nexus**

1. Post the chosen project in the channel.
2. Find backend partners in the same domain.
3. decide on the API contract type (RestAPI or GraphQL) together.

---
