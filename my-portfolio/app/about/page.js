import Link from "next/link";

export default function About() {
  const education = [
    {
      institution: "CHRIST (Deemed to be University)",
      degree: "Master of Computer Applications (MCA)",
      period: "2026 - Present",
      details: "Focusing on Full-Stack Development (FSD), advanced database architectures, and cloud systems. Active Core Committee Member of Labyrinth (CS Departmental Association).",
    },
    {
      institution: "Shri Guru School of Data Analytics & AI",
      degree: "AI and Machine Learning Specialization",
      period: "2024 - 2026",
      details: "Hands-on certification covering neural networks, predictive algorithms, and extensive Python modules.",
    },
    {
      institution: "Depaul College, Mysore",
      degree: "Bachelor of Computer Application (BCA)",
      period: "2023 - 2026",
      details: "First-class graduate majoring in Computer Science. Appointed singing club in-charge for Symphony.",
    },
    {
      institution: "Gulf Indian High School, Dubai",
      degree: "Higher Secondary Examination (Science & CS)",
      period: "2019 - 2022",
      details: "Studied core mathematics, physics, and programming foundations. Served as Vice Cultural Head (2021-2022) and Cultural Head (2022-2023).",
    },
  ];

  const experience = [
    {
      company: "TechCentrix",
      role: "Graphic Designer",
      period: "2024 - 2025",
      points: [
        "Designed creative assets including magazines, brochures, name cards, and event posters using Canva.",
        "Maintained strict visual standards, layouts, branding guidelines, and aesthetic cohesion for various clients.",
        "Iterated design revisions based on feedback, improving overall conversion and brand perception.",
      ],
    },
    {
      company: "BYJU'S",
      role: "Sales Promoter",
      period: "2023",
      points: [
        "Conducted field marketing inside commercial outlets, engaging parents/students to raise awareness of ed-tech solutions.",
        "Collected lead registration metrics using company assets, assisting sales funnels.",
        "Exercised client communications, negotiation skills, and educational service pitches.",
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      {/* Page Header */}
      <div className="mb-12 text-center">
        <h1 className="text-sm font-bold uppercase tracking-widest text-accent-red">My Story</h1>
        <p className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">About Me</p>
      </div>

      {/* 1. Full-Width Profile Card */}
      <div className="mb-16 relative overflow-hidden rounded-2xl glass-panel-red p-8 md:p-10">
        <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-accent-red/10 blur-2xl" />
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 items-center">
          <div className="md:col-span-8">
            <h2 className="text-2xl font-bold text-white mb-4">Professional Profile</h2>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              I am Ashelle Jeema Dsouza, a Master in Computer Applications (MCA) student at CHRIST (Deemed to be University). I specialize in merging software engineering principles with aesthetic visual design.
            </p>
            <p className="text-sm text-gray-300 leading-relaxed">
              With a background in computer applications, graphic design, and artificial intelligence, I appreciate the intersections of structure, performance, and UI design. I enjoy creating modern web pages, optimizing MongoDB/MySQL databases, and organizing community and cultural events.
            </p>
          </div>
          
          <div className="md:col-span-4 rounded-xl border border-white/5 bg-white/[0.02] p-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-accent-red mb-3">Key Details</h3>
            <ul className="space-y-2.5 text-xs">
              <li className="flex flex-col border-b border-white/5 pb-2">
                <span className="text-gray-500 font-medium">Email</span>
                <a href="mailto:ashellejd@gmail.com" className="text-gray-300 hover:text-rose-400 font-semibold transition-colors mt-0.5">ashellejd@gmail.com</a>
              </li>
              <li className="flex flex-col border-b border-white/5 pb-2">
                <span className="text-gray-500 font-medium">Phone</span>
                <span className="text-gray-300 font-semibold mt-0.5">+91 8951360820</span>
              </li>
              <li className="flex flex-col">
                <span className="text-gray-500 font-medium">Location</span>
                <span className="text-gray-300 font-semibold mt-0.5">Karnataka, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 2. Parallel Timelines Grid */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* Left Column: Education */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2 border-b border-white/[0.05] pb-4">
            <svg className="h-6 w-6 text-accent-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
            Education History
          </h2>

          <div className="relative border-l-2 border-white/10 pl-6 space-y-8">
            {education.map((edu, idx) => (
              <div key={idx} className="relative group">
                {/* Bullet indicator */}
                <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#08080c] border-2 border-accent-red group-hover:scale-125 transition-transform" />
                
                <span className="text-xs font-semibold text-rose-400 font-mono">{edu.period}</span>
                <h3 className="text-lg font-bold text-white mt-1 group-hover:text-rose-300 transition-colors">
                  {edu.degree}
                </h3>
                <div className="text-xs text-gray-500 font-semibold">{edu.institution}</div>
                <p className="mt-2 text-xs text-gray-400 leading-relaxed">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Work Experience */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2 border-b border-white/[0.05] pb-4">
            <svg className="h-6 w-6 text-accent-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Professional Experience
          </h2>

          <div className="relative border-l-2 border-white/10 pl-6 space-y-8">
            {experience.map((exp, idx) => (
              <div key={idx} className="relative group">
                {/* Bullet indicator */}
                <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#08080c] border-2 border-accent-red group-hover:scale-125 transition-transform" />
                
                <span className="text-xs font-semibold text-rose-400 font-mono">{exp.period}</span>
                <h3 className="text-lg font-bold text-white mt-1 group-hover:text-rose-300 transition-colors">
                  {exp.role}
                </h3>
                <div className="text-xs text-gray-500 font-semibold mb-3">{exp.company}</div>
                <ul className="list-disc pl-4 text-xs text-gray-400 space-y-1.5 leading-relaxed">
                  {exp.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <Link
          href="/skills"
          className="inline-flex items-center gap-2 rounded-full bg-accent-red px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white hover:bg-accent-red-hover transition-colors"
        >
          Proceed to Skills
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
