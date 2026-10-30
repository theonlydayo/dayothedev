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
            image: "src/assets/images/outpost.png",
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
            github: "https://github.com/theonlydayo",
            live: "https://outpost-mocha-nine.vercel.app",
        },

        {
            id: 2,
            category: "featured",
            image: "src/assets/images/forge.png",
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
            github: "https://github.com/theonlydayo",
            live: "https://forge-henna-theta.vercel.app",
        },

        {
            id: 3,
            category: "featured",
            image: "src/assets/images/t3-chat.png",
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
            github: "https://github.com/theonlydayo",
            live: "https://t3-chat-ten.vercel.app",
        },

        {
            id: 4,
            category: "featured",
            image: "src/assets/images/dreams-lms.png",
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
            github: "https://github.com/theonlydayo",
            live: "https://dreamlms-ui.vercel.app",
        },

        {
            id: 5,
            category: "featured",
            image: "src/assets/images/job-pilot.png",
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
            github: "https://github.com/theonlydayo",
            live: "https://job-pilot-61t8.onrender.com",
        },
    ],
};

export default data;
