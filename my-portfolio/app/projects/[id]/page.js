import Link from "next/link";

// Local mapping schema to maintain visual integrity between list page and detail page
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

export default async function ProjectDetails({ params }) {
  const { id } = await params;

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    return (
      <div className="mx-auto max-w-xl px-6 py-24 text-center">
        <h1 className="text-2xl font-black text-white">Project Not Found</h1>
        <p className="mt-4 text-sm text-gray-400">The requested project ID does not exist in the database.</p>
        <Link href="/projects" className="mt-8 inline-block rounded-full bg-accent-red px-6 py-3 text-xs font-bold uppercase tracking-wider text-white">
          Back to Projects
        </Link>
      </div>
    );
  }

  const post = await response.json();
  const meta = projectMetadata[post.id] || {
    title: post.title,
    category: "Web",
    tags: ["Web", "API"],
    github: "https://github.com/AshelleDsouza",
    description: post.body,
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      {/* Back link */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-400 hover:text-white transition-colors duration-300 mb-8"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Projects
      </Link>

      {/* Detail Card */}
      <div className="glass-panel-red rounded-3xl p-8 md:p-12 relative overflow-hidden">
        {/* Glow decoration */}
        <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-accent-red/10 blur-3xl" />
        
        {/* Category Header */}
        <div className="mb-4 flex items-center justify-between">
          <span className="rounded-full bg-accent-red/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-rose-400 border border-accent-red/20">
            {meta.category}
          </span>
          <span className="text-sm font-mono text-gray-500">Project Code #0{post.id}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-black tracking-tight text-white md:text-5xl leading-tight mb-6">
          {meta.title}
        </h1>

        {/* Technology Pills */}
        <div className="mb-8 flex flex-wrap gap-2">
          {meta.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg bg-white/5 border border-white/5 px-3.5 py-1.5 text-xs text-gray-300 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description Body */}
        <div className="border-t border-white/[0.05] pt-8">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3">Project Overview</h2>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            {meta.description || post.body}
          </p>
          <p className="text-xs text-gray-500 mt-6 leading-relaxed italic">
            Note: While the project descriptors are custom mapped to professional profiles, this route performs active runtime data fetching from jsonplaceholder with revalidate triggers.
          </p>
        </div>

        {/* Footer Actions */}
        {meta.github && (
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href={meta.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-accent-red px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white hover:bg-accent-red-hover hover:shadow-[0_0_20px_rgba(225,29,72,0.3)] transition-all duration-300"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
              </svg>
              View GitHub Repo
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
