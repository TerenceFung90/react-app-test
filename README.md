## Note from app owner
This is test app for ReactJS + NextJS + Tailwind + RsJS + Material UI

## Installation Step by Step
1. register GitHub account and open a repo for react-app, ref: https://github.com/
    - in terminal, type: git config --global user.email "you@example.com"
    - in terminal, type: git config --global user.name "Your Name"
2. install vscode, clone the repo from GitHub
    - vscode plugins: ESLint, ES7+, HTML CSS Support / Tailwind CSS intelliSense, IntelliCode, Prettier ESLint
    - setting: check format on save, default formatter use Prettier ESLint.
3. install nodeJS, ref: https://nodejs.org/en/download/prebuilt-installer
4. in terminal, cd to your repo folder and type: npx create-next-app@latest ./
5. install and configure Material UI with NextJs and Tailwind
    - install MUI: npm install @mui/material @emotion/react @emotion/styled
    - setup with NextJS, ref: https://mui.com/material-ui/integrations/nextjs/
    - setup with Tailwind, ref: https://mui.com/material-ui/integrations/interoperability/#tailwind-css
6. install and configure RsJS
    - ref: https://rxjs.dev/guide/installation
7. [Optional] install karma and jasmine for unit test

## Build app
package / build the app
```bash
npm run build
# or
next build
```

## Host app using nodejs
```bash
npm start
# or
next start
```

===

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
