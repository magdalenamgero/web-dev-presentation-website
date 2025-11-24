// import { desc, html, title } from "framer-motion/m";

export const MAIN_CARDS = [
  {
    title: "HTML",
    description: "The structure of the web - learn how it all began.",
    href: "/html",
  },
  {
    title: "CSS",
    description: "The design language of the web.",
    href: "/css",
  },
  {
    title: "JavaScript",
    description: "Interactivity, logic, and dynamic behavior.",
    href: "/javascript",
  },
];

export const TIMELINE_DATA = {
  html: [
    {
      year: "1991",
      title: "Birth of HTML",
      text: "Tim Berners-Lee creates the first version of HTML.",
      image: "/images/Screenshot 2025-11-21 at 16.04.40.png",
      desc: "The first version created by Tim Berners-Lee, used purely for scientific documents and simple hypertext. It had no styling, no images, and almost no structure.",
    },
    {
      year: "1995",
      title: "HTML 2.0",
      text: "Standardization begins...",
      image: "/images/Screenshot 2025-11-21 at 16.04.51.png",
      desc: "The first standardized version by the IETF. Introduced forms, basic tables, and more document structure.",
    },
    {
      year: "1997",
      title: "HTML 3.2",
      text: "Tables, applets, layout improvements...",
      image: "/images/Screenshot 2025-11-21 at 16.05.28.png",
      desc: "Added tables, applets, text flow, and layout tricks (before CSS was common).",
    },
    {
      year: "1999",
      title: "HTML 4.01",
      text: "Separation of content and style...",
      image: "/images/Screenshot 2025-11-21 at 16.05.45.png",
      desc: "Separated structure from presentation. Encouraged external CSS. Introduced id, class, and scripting improvements.",
    },
    {
      year: "2000",
      title: "XHTML Era",
      text: "Stricter syntax rules...",
      image: "/images/Screenshot 2025-11-21 at 16.05.54.png",
      desc: "XML-based HTML. Stricter, more structured, often too rigid.",
    },
    {
      year: "2014 +",
      title: "HTML5 ",
      text: "Modern web capabilities...",
      image: "/images/Screenshot 2025-11-21 at 16.06.04.png",
      desc: "Game-changer. Added semantic tags (<header>, <nav>, <article>), video, audio, canvas, storage APIs, and more.",
    },
  ],
  css: [
    {
      year: "1996",
      title: "CSS1 Released",
      text: "First official CSS specification.",
      image: "/images/Screenshot 2025-11-24 at 10.12.46.png",
      desc: "The very first Cascading Style Sheets specification. Introduced typography control, basic colors, margins, borders, and the cascade concept that defines style inheritance.",
    },
    {
      year: "1998",
      title: "CSS2",
      text: "Positioning, media types, z-index…",
      image: "/images/Screenshot 2025-11-24 at 10.13.01.png",
      desc: "A major upgrade that added absolute/relative positioning, z-index stacking, media types (screen/print), bidirectional text, and more advanced selectors.",
    },
    {
      year: "2011",
      title: "CSS3 Modules",
      text: "Animations, transitions, flexbox, grids…",
      image: "/images/Screenshot 2025-11-24 at 10.48.20.png",
      desc: "CSS splits into independent modules (Selectors, Backgrounds, Animations, etc.). Introduced animations, transitions, transforms, shadows, rounded corners, and more.",
    },
    {
      year: "2017",
      title: "Grid Layout",
      text: "First true 2D layout system.",
      image: "/images/Screenshot 2025-11-24 at 10.13.17.png",
      desc: "A groundbreaking layout system allowing precise two-dimensional grid structures. Introduced auto-placement, named areas, and FR units for powerful responsive design.",
    },
    {
      year: "2022",
      title: "Container Qs",
      text: "Responsive design based on component size.",
      image: "/images/Screenshot 2025-11-24 at 10.13.27.png",
      desc: "A long-awaited feature enabling styles based on the size of an element’s container rather than the viewport. Huge for responsive, component-driven design.",
    },
    {
      year: "2024+",
      title: "Modern CSS",
      text: "Cascade layers, scoping, new units…",
      image: "/images/Screenshot 2025-11-24 at 10.13.39.png",
      desc: "Continuous improvements including cascade layers (`@layer`), scoped styles (`@scope`), logical properties, new viewport units (svh, dvh), and ongoing modular updates.",
    },
  ],
  javascript: [
    {
      year: "1995",
      title: "Birth of JavaScript",
      text: "Created by Brendan Eich at Netscape.",
      image: "/images/Screenshot 2025-11-24 at 11.06.41.png",
      desc: "Created in just 10 days, JavaScript began as a lightweight scripting language for browsers, enabling dynamic page behavior.",
    },
    {
      year: "1997",
      title: "ECMAScript 1",
      text: "The first official standard.",
      image: "/images/Screenshot 2025-11-24 at 11.11.48.png",
      desc: "Formalized JavaScript under the ECMAScript name. Standardized basic syntax, types, operators, and the core language.",
    },
    {
      year: "2009",
      title: "ES5",
      text: "Modernization of JavaScript.",
      image: "/images/Screenshot 2025-11-24 at 11.07.25.png",
      desc: "Brought strict mode, JSON support, Array methods (map, filter, reduce), and overall made JavaScript more powerful and predictable.",
    },
    {
      year: "2015",
      title: "ES6 / ES2015",
      text: "JavaScript's biggest upgrade.",
      image: "/images/Screenshot 2025-11-24 at 11.07.33.png",
      desc: "Introduced let/const, arrow functions, classes, modules, promises, template strings, and more. A major turning point for the language.",
    },
    {
      year: "2018",
      title: "Async/Await Era",
      text: "Cleaner asynchronous programming.",
      image: "/images/Screenshot 2025-11-24 at 11.08.03.png",
      desc: "Async/await became widely supported, making asynchronous code easier to read and write on top of Promises.",
    },
    {
      year: "2020+",
      title: "Modern JavaScript",
      text: "Modules everywhere, optional chaining…",
      image: "/images/Screenshot 2025-11-24 at 11.08.14.png",
      desc: "Modern JavaScript includes optional chaining, nullish coalescing, private fields, top-level await, and native module support across browsers.",
    },
  ],
};

export const TECH_DESCRIPTIONS = {
  html: `
HTML (HyperText Markup Language) is the structural backbone of the web.\n
It defines content and the meaning of elements on a page.\n\n

• HTML uses tags such as <header>, <nav>, <p>, and <div> to indicate structure.\n
• Early HTML relied heavily on generic <div> tags for layout.\n
• HTML5 introduced semantic tags that improve clarity, accessibility, and SEO.\n
• Modern HTML can embed video, audio, canvas drawing, forms, and more.\n
• HTML can be written manually or generated by JavaScript frameworks.\n
• It answers the question: "What is this content?"\n\n

Example HTML:\n
  <section>\n
    <h1>Title</h1>\n
    <p>Hello World</p>\n
  </section>\n\n

HTML works together with CSS for styling and JavaScript for interactivity.\n
`,

  css: `
CSS (Cascading Style Sheets) controls the visual presentation of websites.\n
It defines layout, colors, spacing, typography, and animation.\n\n

• CSS can be applied inline, in a <style> tag, or in external .css files.\n
• External CSS supports clean separation between structure and design.\n
• Modern CSS includes Flexbox and Grid for powerful layouts.\n
• CSS Variables allow theme consistency.\n
• Transitions and animations enable motion effects.\n
• Responsive design adapts content to any screen size.\n
• CSS answers the question: "How does this look?"\n\n

Example (basic styles):\n
  .card {\n
    padding: 1.5rem;\n
    border-radius: 12px;\n
    box-shadow: 0 4px 10px rgb(0 0 0 / 20%);\n
  }\n\n

Example (Grid layout):\n
  .grid {\n
    display: grid;\n
    grid-template-columns: 1fr 2fr;\n
    gap: 20px;\n
  }\n\n

CSS transforms raw structure into polished visual experiences.\n
`,

  javascript: `
JavaScript provides behavior, logic, and interactivity for web applications.\n\n

• Updates content dynamically without reloading the page.\n
• Responds to user actions: clicks, input, scrolling.\n
• Works with HTML and CSS through the DOM.\n
• Fetches data from servers.\n
• Powers modern frameworks such as React, Vue, and Svelte.\n
• Runs backend systems through Node.js.\n
• JavaScript answers: "What can this do?"\n\n

Example (basic function):\n
  const greet = (name) => "Hello, " + name;\n\n

ES6 Examples:\n
  const message = "Hello World";\n
  const greetUser = (user) => \`Hello, \${user}\`;\n\n

  class Person {\n
    constructor(name) { this.name = name; }\n
    speak() { return "Hi, I'm " + this.name; }\n
  }\n\n

Modern JavaScript Examples:\n
  const username = data?.user?.profile?.name;    // optional chaining\n
  const role = user.role ?? "guest";             // nullish coalescing\n\n

Private Fields:\n
  class Counter {\n
    #count = 0;\n
    increment() { this.#count++; }\n
  }\n\n

Top-level await:\n
  const config = await fetch("/config.json").then(r => r.json());\n\n

JavaScript evolved from a simple scripting tool into a full ecosystem that powers both front-end and back-end applications.\n
`,
};
