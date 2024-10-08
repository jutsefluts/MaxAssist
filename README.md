
# MaxAssist - Lesson Generator App

Welcome to the **MaxAssist Lesson Generator App**, a powerful tool designed for educators to create, manage, and customize lessons using a variety of content blocks. This app is built using **Next.js**, **TypeScript**, and **Tailwind CSS**, offering a modern and scalable platform for lesson creation.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the App](#running-the-app)
- [Building for Production](#building-for-production)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The **MaxAssist Lesson Generator App** simplifies the process of creating educational lessons by offering a block-based interface. Teachers and content creators can easily drag, drop, and customize different types of lesson blocks, such as Text Blocks, Multiple Choice Questions, Open Questions, and more, within predefined phases of a lesson plan (e.g., Introduction, Instruction, Practice, Conclusion).

This tool is perfect for educators looking to efficiently compose lessons while maintaining flexibility and structure.

## Features

- **User Authentication**: Secure login and registration functionality.
- **Lesson Phases**: Divide lessons into structured phases (Introduction, Instruction, Practice, Conclusion).
- **Custom Blocks**: Create and manage different types of blocks, including Text, Multiple Choice, and Open Questions.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Modular Structure**: The app follows a clean and well-organized project structure for easy scalability and maintenance.
- **API Integration**: Easily extend the app with backend services via the `services/` folder.
- **Type Safety**: Full TypeScript integration for better type safety and prevention of potential bugs.

## Project Structure

```bash
\`\`\`
.
├── README.md
├── app
│   ├── favicon.ico
│   ├── fonts
│   │   ├── GeistMonoVF.woff
│   │   └── GeistVF.woff
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.module.css
│   └── page.tsx
├── components
│   ├── BlockActionButtons.tsx
│   ├── Header.tsx
│   └── Sidebar.tsx
├── features
│   ├── auth
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   └── authUtils.ts
│   └── lesson
│       ├── PhaseComponent.tsx
│       ├── blocks
│       │   ├── MultipleChoiceBlock
│       │   │   └── MultipleChoiceBlock.tsx
│       │   ├── OpenQuestionBlock
│       │   │   └── OpenQuestionBlock.tsx
│       │   ├── TextBlock
│       │   │   ├── FileUploader.tsx
│       │   │   ├── ImageUploader.tsx
│       │   │   ├── RichTextEditor.tsx
│       │   │   └── TextBlock.tsx
│       └── utils.ts
├── hooks
│   ├── useAuth.ts
│   ├── useLesson.ts
│   └── useLessonBlocks.ts
├── jest.config.js
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── public
│   ├── icons
│   ├── images
│   └── uploads
├── services
│   ├── authService.ts
│   └── lessonService.ts
├── types
│   ├── auth.ts
│   └── lesson.ts
└── utils
    ├── api.ts
    ├── constants.ts
    ├── formatDate.ts
    └── supabaseClient.ts
\`\`\`

## Installation

Before running the app, make sure you have **Node.js** and **npm** installed. You can download Node.js [here](https://nodejs.org/).

### Clone the Repository

\`\`\`bash
git clone https://github.com/your-username/lesson-generator-app.git
cd lesson-generator-app
\`\`\`

### Install Dependencies

Run the following command to install all required dependencies:

\`\`\`bash
npm install
\`\`\`

## Environment Variables

You need to set up the environment variables for the app to connect to Supabase.

### Set Up Environment Variables

Create a `.env.local` file in the root of the project with the following variables:

\`\`\`bash
NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
\`\`\`

Make sure to replace `<your-supabase-url>` and `<your-supabase-anon-key>` with the values from your Supabase project. You can find these values in the Supabase dashboard:

- **NEXT_PUBLIC_SUPABASE_URL**: Found in the "API" section of your Supabase project, under the "Project URL" field.
- **NEXT_PUBLIC_SUPABASE_ANON_KEY**: Found in the same "API" section under the "anon public" key field.

### Restart the Development Server

Once you have set up the environment variables, restart your development server for the changes to take effect:

\`\`\`bash
npm run dev
\`\`\`

## Running the App

First, run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

### Building for Production

To create a production build, use:

\`\`\`bash
npm run build
npm start
\`\`\`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Technologies

- **Next.js**: A React framework for building fast, server-rendered applications.
- **TypeScript**: A superset of JavaScript that adds static types.
- **Tailwind CSS**: A utility-first CSS framework for building custom designs quickly.
- **React**: A JavaScript library for building user interfaces.
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **API Services**: For handling external API requests (authentication, lesson management).