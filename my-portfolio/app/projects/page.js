import ProjectsListClient from "@/components/ProjectsListClient";

// Fetch projects from JSONPlaceholder API (SSR Component)
async function getRawProjects() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 3600 }, // Cache on server, revalidate every hour
  });
  
  if (!res.ok) {
    throw new Error("Failed to fetch project data from API");
  }
  
  return res.json();
}

// Local mapping schema to overlay realistic data onto JSONPlaceholder records
const projectMetadata = {
  1: {
    title: "Bank Management System",
    category: "Web",
    tags: ["Python", "MySQL", "OOP"],
    github: "https://github.com/AshelleDsouza",
    description: "A digital bank management system developed in Python and MySQL to streamline secure account handling, customer onboarding, and transaction tracking.",
  },
  2: {
    title: "Creative Brand Identity Pack",
    category: "Design",
    tags: ["Canva", "Branding", "Layouts"],
    github: "",
    description: "A comprehensive graphic design branding pack including brochures, posters, name cards, and catalogues designed using Canva for corporate identity alignment.",
  },
  3: {
    title: "Predictive Analytics Module",
    category: "AI",
    tags: ["Python", "Scikit-Learn", "Pandas"],
    github: "https://github.com/AshelleDsouza",
    description: "An artificial intelligence and machine learning model that processes student data to predict academic outcomes and visualize learning trajectories.",
  },
  4: {
    title: "Mobile Task Manager App",
    category: "Mobile",
    tags: ["React Native", "Expo", "Firebase"],
    github: "https://github.com/AshelleDsouza",
    description: "A cross-platform mobile task planner with database syncing, real-time push alerts, and interactive project dashboard lists.",
  },
  5: {
    title: "Responsive Portfolio Website",
    category: "Web",
    tags: ["Next.js", "Tailwind CSS", "React"],
    github: "https://github.com/AshelleDsouza",
    description: "A personal portfolio built using Next.js, featuring glassmospheric CSS design, server-side data fetching, and fluid responsiveness.",
  },
  6: {
    title: "Labyrinth Club Web Portal",
    category: "Web",
    tags: ["JavaScript", "CSS3", "HTML5"],
    github: "https://github.com/AshelleDsouza",
    description: "An interactive web directory built for the Christ University CS Club association, listing events, members, and hackathon schedules.",
  },
  7: {
    title: "Adobe Hackathon Prototype",
    category: "AI",
    tags: ["Python", "OpenAI", "FastAPI"],
    github: "https://github.com/AshelleDsouza",
    description: "A smart assistant prototype built during the Adobe Hackathon, integrating OpenAI API to automate task dispatching and problem analysis.",
  },
  8: {
    title: "Symphony Club Singing Registry",
    category: "Mobile",
    tags: ["Flutter", "Dart", "SQLite"],
    github: "https://github.com/AshelleDsouza",
    description: "A database mobile application for coordinating singer event registrations, vocal ranges, and song track listings for the Symphony club.",
  },
  9: {
    title: "Diplomat Coding Event Portal",
    category: "Web",
    tags: ["Express.js", "Node.js", "MongoDB"],
    github: "https://github.com/AshelleDsouza",
    description: "A student portal for managing registrations, judging rubrics, scheduling, and participant interaction for the annual Diplomat programming contest.",
  },
  10: {
    title: "TechCentrix Magazine Catalog",
    category: "Design",
    tags: ["Canva", "Creative Design", "Graphics"],
    github: "",
    description: "A collection of stylized digital layouts, magazines, brochures, and catalogs designed for print media, maintaining high typographic quality and branding alignment.",
  },
};

export default async function ProjectsPage() {
  const posts = await getRawProjects();

  // Map JSONPlaceholder posts to realistic portfolio entries
  const mappedProjects = posts.slice(0, 10).map((post) => {
    const meta = projectMetadata[post.id] || {
      title: post.title,
      category: "Web",
      tags: ["Web", "API"],
      github: "https://github.com/AshelleDsouza",
      description: post.body,
    };
    return {
      id: post.id,
      title: meta.title,
      description: meta.description || post.body,
      category: meta.category,
      tags: meta.tags,
      github: meta.github,
    };
  });

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      {/* Page Header */}
      <div className="mb-16 text-center">
        <h1 className="text-sm font-bold uppercase tracking-widest text-accent-red">Selected Works</h1>
        <p className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">My Projects</p>
        <p className="mt-4 text-xs text-gray-500 font-mono">
          Demonstrating Next.js Server Component API fetching from jsonplaceholder
        </p>
      </div>

      {/* Client List Container */}
      <ProjectsListClient rawProjects={mappedProjects} />
    </div>
  );
}
