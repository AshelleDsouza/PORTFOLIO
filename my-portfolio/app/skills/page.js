import Link from "next/link";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: (
        <svg className="h-6 w-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: ["Python", "Java", "C++", "C", "JavaScript"],
    },
    {
      title: "Web Technologies",
      icon: (
        <svg className="h-6 w-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      skills: ["Next.js (React)", "Node.js", "Express.js", "HTML5", "CSS3 / Tailwind"],
    },
    {
      title: "Databases & Storage",
      icon: (
        <svg className="h-6 w-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      skills: ["MySQL", "MongoDB", "Cassandra", "Neo4j"],
    },
    {
      title: "DevOps & Tools",
      icon: (
        <svg className="h-6 w-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      skills: ["Docker", "Canva (Design)", "GitHub / Git", "VS Code", "MS Office Suite"],
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      {/* Page Header */}
      <div className="mb-16 text-center">
        <h1 className="text-sm font-bold uppercase tracking-widest text-accent-red">Capabilities</h1>
        <p className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Skills &amp; Toolkit</p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-2xl glass-panel-red p-6 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Header */}
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-red/10 border border-accent-red/20 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h2 className="text-xl font-bold text-white group-hover:text-rose-300 transition-colors">
                {category.title}
              </h2>
            </div>

            {/* Badges Container */}
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="rounded-full bg-white/5 border border-white/5 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-accent-red/10 hover:border-accent-red/35 hover:text-white transition-all duration-300"
                >
                  {skill}
                </div>
              ))}
            </div>

            {/* Decorative background glow */}
            <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-accent-red/5 blur-2xl group-hover:bg-accent-red/10 group-hover:scale-150 transition-all duration-500" />
          </div>
        ))}
      </div>

      {/* Work Philosophy banner */}
      <div className="mt-12 rounded-2xl border border-white/5 bg-white/[0.01] p-8 text-center max-w-3xl mx-auto">
        <h3 className="text-lg font-bold text-white mb-2">Graphic Design &amp; Creativity</h3>
        <p className="text-sm text-gray-400 leading-relaxed">
          My design background from TechCentrix lets me construct user interfaces that prioritize visual balance, accessibility, and high usability. By combining frontend logic with clean layouts, I develop web pages that stand out visually and perform efficiently.
        </p>
      </div>

      <div className="mt-16 text-center">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-full bg-accent-red px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white hover:bg-accent-red-hover transition-colors"
        >
          View Projects Page
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
