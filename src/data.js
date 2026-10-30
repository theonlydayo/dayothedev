import outpostImage from "./assets/images/outpost.png";
import forgeImage from "./assets/images/forge.png";
import t3ChatImage from "./assets/images/t3-chat.png";
import dreamsLmsImage from "./assets/images/dreams-lms.png";
import jobPilotImage from "./assets/images/job-pilot.png";

console.log({
    outpostImage,
    forgeImage,
    t3ChatImage,
    dreamsLmsImage,
    jobPilotImage,
});

import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const data = {
    pageSections: ["about", "projects", "contact"],
    skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Git",
        "GitHub",
        "REST APIs",
        "Node.js",
        "MongoDB",
        "Prisma",
    ],

    socials: [
        {
            id: 1,
            name: "GitHub",
            icon: FiGithub,
            link: "https://github.com/theonlydayo",
        },
        {
            id: 2,
            name: "X",
            icon: FaXTwitter,
            link: "https://x.com/theonlydayo",
        },
        {
            id: 3,
            name: "LinkedIn",
            icon: FiLinkedin,
            link: "https://www.linkedin.com/in/adedayoogunwolu",
        },
    ],

    projects: [
        {
            id: 1,
            category: "featured",
            image: outpostImage,
            name: "Outpost",
            description: [
                "An AI-powered workspace application built with Next.js, TypeScript, and Tailwind CSS. Features include AI-assisted workflows, document editing with BlockNote, an interactive canvas, Kanban task management, voice prompting, and AI code reviews. Integrated with Neon PostgreSQL and Prisma for database management.",
            ],
            skills: [
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Prisma",
                "PostgreSQL",
                "Clerk",
            ],
            github: "https://github.com/theonlydayo/outpost",
            live: "https://outpost-mocha-nine.vercel.app",
        },

        {
            id: 2,
            category: "featured",
            image: forgeImage,
            name: "Forge",
            description: [
                "An AI-powered web application built with Next.js and TypeScript. Features secure authentication, database management, and AI-powered functionality, integrating Clerk, Prisma, PostgreSQL, and Google's Gemini AI.",
            ],
            skills: [
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Prisma",
                "PostgreSQL",
                "Clerk",
                "Gemini AI",
            ],
            github: "https://github.com/theonlydayo/forge",
            live: "https://forge-henna-theta.vercel.app",
        },

        {
            id: 3,
            category: "featured",
            image: t3ChatImage,
            name: "T3 Chat Clone",
            description: [
                "An AI-powered chat application inspired by T3 Chat, built with Next.js and TypeScript. Features include an interactive chat interface, conversation management, AI model selection through OpenRouter, dynamic chat pages, and a responsive sidebar with customizable themes. Uses Better Auth for authentication and Neon PostgreSQL with Prisma for database management.",
            ],
            skills: [
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "shadcn/ui",
                "OpenRouter",
                "Better Auth",
                "Prisma",
                "PostgreSQL",
            ],
            github: "https://github.com/theonlydayo/T3-chat",
            live: "https://t3-chat-ten.vercel.app",
        },

        {
            id: 4,
            category: "featured",
            image: dreamsLmsImage,
            name: "Dreams LMS",
            description: [
                "A learning management system designed to provide an interactive platform for managing courses, learning materials, and educational activities.",
            ],
            skills: [
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Express.js",
                "PostgreSQL",
            ],
            github: "https://github.com/theonlydayo/dreamlms-ui",
            live: "https://dreamlms-ui.vercel.app",
        },

        {
            id: 5,
            category: "featured",
            image: jobPilotImage,
            name: "Job Pilot",
            description: [
                "A job search platform designed to simplify the job-hunting process. Features include dynamic job listings, debounced search, advanced filtering by location, salary, job type and workplace type, pagination, and dedicated pages for job discovery and company information.",
            ],
            skills: [
                "JavaScript",
                "TypeScript",
                "HTML",
                "CSS",
                "Webpack",
                "REST API",
            ],
            github: "https://github.com/theonlydayo/job-pilot",
            live: "https://job-pilot-61t8.onrender.com",
        },

        {
            id: 6,
            category: "other",
            name: "LeetCode Clone",
            description: [
                "A LeetCode-inspired coding platform built with Next.js, featuring user authentication, coding problem libraries, an interactive code editor, code submission and execution, solution tracking, user profiles, and coding progress statistics.",
            ],
            skills: ["Next.js", "TypeScript", "Tailwind CSS"],
            github: "https://github.com/theonlydayo/leetcode",
            live: "https://leetcode-nu-hazel.vercel.app",
        },

        {
            id: 7,
            category: "other",
            name: "Idea Drop",
            description: [
                "A modern idea-sharing platform built with React and TypeScript, featuring user authentication, idea creation and management, image uploads, detailed idea pages, tags, API integration, and persistent MongoDB storage.",
            ],
            skills: [
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Strapi",
                "MongoDB",
            ],
            github: "https://github.com/theonlydayo/idea-drop-ui",
            live: "https://idea-drop-ui-eosin.vercel.app",
        },

        {
            id: 8,
            category: "other",
            name: "The Friendly Dev",
            description: [
                "A responsive developer portfolio and blog website built with React Router v7 and Tailwind CSS, featuring dynamic project filtering, sorting and pagination, a Strapi-powered blog, dynamic routing, API integration, and environment-based configuration.",
            ],
            skills: ["React", "React Router", "Tailwind CSS", "Strapi"],
            github: "https://github.com/theonlydayo/friendly-dev-frontend",
            live: "https://friendly-dev-frontend-peach.vercel.app",
        },

        {
            id: 9,
            category: "other",
            name: "Ambient Sound Mixer",
            description: [
                "A responsive ambient sound mixer built with HTML, Tailwind CSS, and JavaScript, featuring customizable sound mixing, volume controls, presets, sleep timers, dark/light themes, localStorage persistence, and offline audio playback.",
            ],
            skills: ["HTML", "JavaScript", "Tailwind CSS"],
            github: "https://github.com/theonlydayo/ambient-sound-mixer",
            live: "https://ambient-sound-mixer.onrender.com",
        },

        {
            id: 10,
            category: "other",
            name: "Flixx App",
            description: [
                "A movie and TV show discovery app built with vanilla JavaScript and the TMDB API, featuring popular movies and shows, detailed information pages, search with pagination, and a Swiper slider for movies currently in theaters.",
            ],
            skills: ["HTML", "CSS", "JavaScript", "TMDB API", "Swiper"],
            github: "https://github.com/theonlydayo/flixx-app",
            live: "https://flixx-app-8zjj.onrender.com",
        },

        {
            id: 11,
            category: "other",
            name: "Crypto Dash",
            description: [
                "A responsive cryptocurrency dashboard built with React, featuring real-time cryptocurrency data, search functionality, market information, and API integration using the CoinGecko API.",
            ],
            skills: ["React", "JavaScript", "CSS", "CoinGecko API"],
            github: "https://github.com/theonlydayo/crypto-dash",
            live: "https://crypto-dash-spat.onrender.com",
        },

        {
            id: 12,
            category: "other",
            name: "Lumina Creative",
            description: [
                "A modern landing page for a creative agency, featuring clean typography, responsive layouts, and engaging visuals. Designed to deliver a polished user experience across desktop, tablet, and mobile devices.",
            ],
            skills: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/theonlydayo/lumina-creative",
            live: "https://lumlnacreative.netlify.app",
        },

        {
            id: 13,
            category: "other",
            name: "Weather Dashboard",
            description: [
                "A responsive weather dashboard that displays real-time weather conditions and a 5-day forecast. Built with a clean, modern interface focused on usability, responsive layouts, and an intuitive user experience.",
            ],
            skills: ["HTML", "CSS", "JavaScript", "Weather API"],
            github: "https://github.com/theonlydayo/weather-dashboard",
            live: "https://weather-dashboard-mqyt.onrender.com",
        },

        {
            id: 14,
            category: "other",
            name: "Tracalorie",
            description: [
                "A responsive calorie tracking application that allows users to log meals, track calorie intake, and record workouts. The project showcases state management, DOM manipulation, responsive design, and dynamic data updates.",
            ],
            skills: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/theonlydayo/tracalorie",
            live: "https://tracalorie-app.onrender.com",
        },

        {
            id: 15,
            category: "other",
            name: "GitHub Finder",
            description: [
                "A responsive GitHub user search app built with React and TypeScript, featuring GitHub API integration, user search and filtering, autocomplete suggestions, recent search history with localStorage, and efficient data fetching with TanStack Query.",
            ],
            skills: ["React", "TypeScript", "TanStack Query", "GitHub API"],
            github: "https://github.com/theonlydayo/github-finder",
            live: "https://app-github-finder.onrender.com",
        },

        {
            id: 16,
            category: "other",
            name: "Shopping List",
            description: [
                "A simple and responsive shopping list application that allows users to add, remove, and manage items with ease. Built with a clean interface to demonstrate DOM manipulation, event handling, and interactive JavaScript functionality.",
            ],
            skills: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/theonlydayo/shopping-list",
            live: "https://dayo-shopping-list.netlify.app",
        },

        {
            id: 17,
            category: "other",
            name: "Random Quote Generator",
            description: [
                "A responsive random quote generator that retrieves and displays inspirational quotes from an external API. The project showcases API integration, asynchronous JavaScript, DOM manipulation, and responsive design.",
            ],
            skills: ["HTML", "CSS", "JavaScript", "REST API"],
            github: "https://github.com/theonlydayo/quote-generator",
            live: "https://quote-generator-emhe.onrender.com",
        },

        {
            id: 18,
            category: "other",
            name: "Bono Landing Form",
            description: [
                "A responsive landing page with a modern contact form, built using semantic HTML and CSS. The project emphasizes clean design, accessibility, and an intuitive user experience across all screen sizes.",
            ],
            skills: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/theonlydayo/landing-form",
            live: "https://landing-form.onrender.com",
        },
    ],
};

export default data;
