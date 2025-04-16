![React Avançado](https://raw.githubusercontent.com/React-Avancado/boilerplate/master/public/img/logo-gh.svg)

> ⚠️ **This is an updated version of the original 2023 boilerplate** from the [React Avançado](https://reactavancado.com.br/) course. 
> Several breaking changes and deprecated packages have been resolved to support the modern ecosystem (Next.js 15, React 19, Storybook 8+).

---

## 🆕 Key Updates

### ✅ Dependencies (Before → After)

- `next`: `12.0.10` → `15.2.3`
- `react`: `17.0.2` → `^19.1.0`
- `react-dom`: `17.0.2` → `^19.1.0`
- `styled-components`: `5.3.3` → `^6.1.17`
- `babel-jest`: added `29.7.0`

### ✅ Dev Dependencies

- Upgraded Storybook: `6.4.x` → `^8.6.12`
- Updated Jest, Testing Library, ESLint, TypeScript to latest stable versions
- Replaced legacy Storybook builders with `@storybook/nextjs`
- Updated React and TypeScript typings: now supports React 19 and TypeScript 5+

### ✅ Node Version

- `16.19.0` → `18.20.7`

---

![ci](https://github.com/React-Avancado/boilerplate-apps-router/workflows/ci/badge.svg)

## What is inside?

This project uses lot of stuff as:

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages
- `test:watch`: runs jest in watch mode
- `storybook`: runs storybook on `localhost:6006`
- `build-storybook`: create the build version of storybook

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

