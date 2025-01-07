import { defineConfig } from "tinacms";

import Post from "./collection/post";
import Global from "./collection/global";
import Author from "./collection/author";
import Page from "./collection/page";

const config = defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
  branch:
    process.env.NEXT_PUBLIC_TINA_BRANCH! || // custom branch env override
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF! || // Vercel branch env
    process.env.HEAD!, // Netlify branch env
  token: process.env.TINA_TOKEN!,
  media: {
    // If you wanted cloudinary do this
    // loadCustomStore: async () => {
    //   const pack = await import("next-tinacms-cloudinary");
    //   return pack.TinaCloudCloudinaryMediaStore;
    // },
    // this is the config for the tina cloud media store
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  build: {
    publicFolder: "public", // The public asset folder for your framework
    outputFolder: "admin", // within the public folder
  },
  schema: {
    collections: [Page, Post, Author, Global],
  },
   tinaioConfig: {
    //frontendUrlOverride: 'https://pr1993-app.tinajs.dev', // 'https://app.tina.io'
    //identityApiUrlOverride: 'https://pr1993-identity.tinajs.dev',
    //contentApiUrlOverride: 'https://pr1993-content.tinajs.dev',
    //assetsApiUrlOverride: 'https://assets.tinajs.io',
    //frontendUrlOverride: 'https://app.tina.io', // 'https://app.tina.io'
    //identityApiUrlOverride: 'https://identity.tinajs.io',
    //contentApiUrlOverride: 'https://content.tinajs.io',
    //assetsApiUrlOverride: 'https://assets.tinajs.dev',
    //frontendUrlOverride: 'https://app.tinajs.dev', // 'https://app.tina.io'
    //identityApiUrlOverride: 'https://identity.tinajs.dev',
    //contentApiUrlOverride: 'https://content.tinajs.dev'
    frontendUrlOverride: 'http://localhost:3002', // 'https://app.tina.io'
    identityApiUrlOverride: 'https://kldavis4-identity.tinajs.dev',
    contentApiUrlOverride: 'https://kldavis4-content.tinajs.dev',
    //assetsApiUrlOverride: 'https://kldavis4-assets.tinajs.dev'
    //assetsApiUrlOverride: 'https://assets-api-local-kldavis4.tinajs.dev'
  },
});

export default config;
