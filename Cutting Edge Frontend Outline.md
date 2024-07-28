# Cutting Edge Frontend

## Vite

- What
- Why Vite
- Compare to Webpack
- Ecosystem
  - [create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite) - Scaffolding Your First Vite Project.
  - [Vitesse](https://github.com/antfu/vitesse) - Opinionated starter template.
  - [electron-vite-react](https://github.com/electron-vite/electron-vite-react) - Electron + Vite + React template.
  - [unplugin-icons](https://github.com/antfu/unplugin-icons) - Access thousands of icons as components.
  - [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) - On-demand API auto-importing.
  - [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages) - File system based route generator.
  - [vitest](https://github.com/vitest-dev/vitest) - A Vite-native test framework.
  - [VitePress](https://github.com/vuejs/vitepress) - Static Site Generator powered by Vite and Vue.
  - [Slidev](https://github.com/slidevjs/slidev) - Presentation Slides for Developers.
  - [Astro](https://github.com/withastro/astro) - Modern Static Site Builder.

## ky

### What

A tiny and elegant HTTP client based on the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch)

### Why ky over axios

- Smaller bundle size
- ESM first design
- Built-in retries, timeouts, and hooks
- Supports Readable Streams out of the box
- TypeScript niceties (e.g. `.json()` resolves to `unknown`, not `any`; `.json<T>()` can be used too)

画个图表

## SWR

### What

React Hooks for Data Fetching

With SWR, components will get a stream of data updates **constantly** and **automatically**.
And the UI will be always **fast** and **reactive**.

### Why you should not directly use `useEffect` to fetch data from API in React

- Most network requests are triggered by user actions, and they should be sent in the Event Handler.
- Most of the time, the data needed for the first screen can be rendered directly on the server side (SSR), without requiring additional network requests from the client side.
- Even if the client needs to fetch data for the first screen, in the future, React and community-maintained libraries will provide a data fetching pattern based on Suspense, implementing "Render as you fetch".
- Even when using the "Fetch on render" pattern, you should directly use third-party libraries like SWR or React Query, rather than using useEffect directly.

### Start from a simple request

- You are building an React app
- You need to fetch product list data from API
- Network request is render's side effect
- `useEffect` is the dedicated hook for side effect
- Without hesitation, you implemented this

- You run `npm run dev`, seeing product list showing on page with great pride

### Display loading and error in UI

- You find there's the blank screen before the whole data is loaded
- The user experience is terrible
- You decide to add a loading progress bar
- Introducing a new state `isLoading`

## Tailwind CSS

### What

A utility-first CSS framework designed to enable users to create applications faster and easier.

### Compare to Bootstrap

### State of CSS

## Zod

### What

A TypeScript-first schema declaration and validation library.

### Why zod

Typescript: compile-time

zod: runtime

### When zod

When you don't really trust the inputs

## Zustand

### What

A small, fast, and scalable bearbones state management solution.

### Why zustand



### Compare to Redux and Pinia

### Introduce the siblings: jotai and valtio

## ESLint

### What

### Why should we use ESLint and why not using Prettier

### Recommended ruleset

### IDE plugin settings

## Vitest

### What

### Why vitest

zero config

### Compare to Jest

