import Link from "next/link";

export default function Achievements() {
  const achievements = [
    {
      title: "Core Committee Member &bull; Labyrinth",
      category: "Leadership",
      detail: "Departmental Computer Science association at CHRIST (Deemed to be University). Help organize technical conferences, event schedules, and student coding hackathons.",
      icon: (
        <svg className="h-6 w-6 text-accent-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Inter-College Coding Winner",
      category: "Competitions",
      detail: "Winner of multiple inter-collegiate programming contests. Recognized for rapid problem-solving, debugging capacity, and algorithmic efficiency.",
      icon: (
        <svg className="h-6 w-6 text-accent-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Hackathon Participant",
      category: "Innovation",
      detail: "Collaborated in various high-intensity events, including the Adobe Hackathon and the CHRIST University in-house hackathons, building solutions under tight timelines.",
      icon: (
        <svg className="h-6 w-6 text-accent-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Technical Conference Coordinator",
      category: "Coordination",
      detail: "Active technical organizer for the International Conference held at De Paul College in 2025. Handled event flow, on-ground technical systems, and speaker stages.",
      icon: (
        <svg className="h-6 w-6 text-accent-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Symphony Club In-Charge",
      category: "Cultural",
      detail: "Appointed head organizer for Symphony, the official singing club of De Paul College (2023-2025). Managed performance setups and led collegiate musical projects.",
      icon: (
        <svg className="h-6 w-6 text-accent-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
    },
    {
      title: "Cultural & Event Host Leadership",
      category: "Leadership",
      detail: "Served as Vice Cultural Head (2021-2022) and Cultural Head (2022-2023) at GIHS Dubai. Hosted multiple large-scale assemblies, AV setups, and annual coding events like Diplomat.",
      icon: (
        <svg className="h-6 w-6 text-accent-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      {/* Page Header */}
      <div className="mb-16 text-center">
        <h1 className="text-sm font-bold uppercase tracking-widest text-accent-red">Accolades &amp; Roles</h1>
        <p className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Achievements</p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {achievements.map((item, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-2xl glass-panel-red p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-[#140a0a]"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full bg-accent-red/10 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-rose-400 border border-accent-red/20">
                {item.category}
              </span>
              <div className="text-gray-400 group-hover:text-accent-red transition-colors duration-300">
                {item.icon}
              </div>
            </div>

            <h3 className="mb-2 text-base font-bold text-white transition-colors duration-300 group-hover:text-rose-300">
              {item.title}
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              {item.detail}
            </p>

            {/* Background glow hover */}
            <div className="absolute -bottom-12 -right-12 h-24 w-24 rounded-full bg-accent-red/5 blur-xl group-hover:bg-accent-red/10 transition-all duration-500" />
          </div>
        ))}
      </div>

      {/* Extracurricular summary */}
      <div className="mt-12 rounded-2xl border border-white/5 bg-white/[0.01] p-8 text-center max-w-2xl mx-auto">
        <h3 className="text-base font-bold text-white mb-2">Collaboration &amp; Ideation</h3>
        <p className="text-xs text-gray-400 leading-relaxed">
          Through event coordinating, technical club operations, and hackathons, I develop communication skills and technical problem-solving capabilities under real-world scenarios.
        </p>
      </div>

      <div className="mt-16 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-accent-red px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white hover:bg-accent-red-hover transition-colors"
        >
          Contact Me
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
