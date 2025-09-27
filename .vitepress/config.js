import { defineConfig } from "vitepress";
import { sidebar } from "./sidebar.js";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CS Foundation",
  description: "A comprehensive guide to Computer Science fundamentals for GATE and competitive exams",
  base: "/CS-Foundation/", // Updated to match your GitHub repo name
  cleanUrls: true,

  head: [
    ["meta", { name: "theme-color", content: "#3c8772" }],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:locale", content: "en" }],
    ["meta", { name: "og:site_name", content: "CS Foundation" }],
    ["meta", { name: "og:image", content: "https://vitepress.dev/vitepress-og.jpg" }],
  ],

  themeConfig: {
    logo: "/logo.svg",

    nav: [
      { text: "Home", link: "/" },
      { text: "Get Started", link: "/01_Engineering_Mathematics/" },
      {
        text: "Quick Access",
        items: [
          { text: "Engineering Mathematics", link: "/01_Engineering_Mathematics/" },
          { text: "Digital Logic", link: "/02_Digital_Logic/" },
          { text: "Computer Organization", link: "/03_Computer_Organization_and_Architecture/" },
          { text: "Programming & Data Structures", link: "/04_Programming_and_Data_Structures/" },
          { text: "Algorithms", link: "/05_Algorithms/" },
          { text: "Theory of Computation", link: "/06_Theory_of_Computation/" },
          { text: "Compiler Design", link: "/07_Compiler_Design/" },
          { text: "Operating System", link: "/08_Operating_System/" },
          { text: "Databases", link: "/09_Databases/" },
          { text: "Computer Networks", link: "/10_Computer_Networks/" },
        ],
      },
    ],

    sidebar: sidebar,

    editLink: {
      pattern: "https://github.com/Ravindrabisht12/CS-Foundation/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present Ravindra Bisht",
    },

    docFooter: {
      prev: "Previous",
      next: "Next",
    },

    outline: {
      level: [2, 3],
      label: "On this page",
    },

    socialLinks: [{ icon: "github", link: "https://github.com/Ravindrabisht12/CS-Foundation" }],

    search: {
      provider: "local",
    },
  },

  markdown: {
    lineNumbers: true,
    math: true,
  },
});
