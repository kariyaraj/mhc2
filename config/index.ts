import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "Alyssa",
  description: "A Modern Next.js 14 Mental Health AI Companion.",
  keywords: [
    "reactjs",
    "nextjs",
    "netlify",
    "react",
    "genius-ai",
    "artifical-intelligence",
    "shadcn",
    "shadcn-ui",
    "radix-ui",
    "cn",
    "clsx",
    "saas",
    "aiven",
    "sonner",
    "zustand",
    "zod",
    "mysql",
    "sql",
    "lucide-react",
    "crisp-chat",
    "postcss",
    "prettier",
    "react-dom",
    "tailwindcss",
    "tailwindcss-animate",
    "ui/ux",
    "js",
    "javascript",
    "typescript",
    "eslint",
    "html",
    "css",
  ] as Array<string>,
  authors: {
    name: "Raj kariya",
    url: "https://github.com/kariyaraj",
  },
} as const;

export const links = {
  sourceCode: "https://github.com/kariyaraj/Genie",
} as const;

// <script>
//   window.watsonAssistantChatOptions = {
//     integrationID: "76ec23cf-500b-4f5e-bb68-1d013fdeb0bf", // The ID of this integration.
//     region: "eu-gb", // The region your integration is hosted in.
//     serviceInstanceID: "bf336989-02a9-462c-99af-357569671baf", // The ID of your service instance.
//     onLoad: async (instance) => { await instance.render(); }
//   };
//   setTimeout(function(){
//     const t=document.createElement('script');
//     t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
//     document.head.appendChild(t);
//   });
// </script>