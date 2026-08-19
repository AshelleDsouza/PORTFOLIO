import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden">
      {/* Background Decorative PORTFOLIO Text */}
      <div className="pointer-events-none absolute top-12 left-1/2 z-0 -translate-x-1/2 text-[14vw] font-black uppercase tracking-widest text-white/[0.02] select-none font-sans">
        PORTFOLIO
      </div>

      {/* Hero Section */}
      <section className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center px-6 py-20 text-center md:py-32">
        <div className="animate-fade-in-up flex flex-col items-center">
          {/* Availability badge */}
          <div className="mb-6 flex items-center gap-2 rounded-full bg-accent-red/10 border border-accent-red/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-rose-400">
            <span className="h-2 w-2 rounded-full bg-accent-red animate-ping" />
            Available for Freelance & Projects
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl font-sans">
            Hello, I&apos;m <br />
            <span className="bg-gradient-to-r from-white via-rose-300 to-rose-500 bg-clip-text text-transparent font-black block mt-2">
              Ashelle Jeema Dsouza
            </span>
          </h1>

          <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-accent-red">
            MCA Student &bull; Web Developer &bull; Graphic Designer
          </p>

          <p className="mx-auto mt-6 max-w-xl text-base text-gray-400 leading-relaxed">
            I am a self-assured and dedicated student at Christ University. I blend my technical expertise in programming and databases with creative visual design to engineer premium digital experiences.
          </p>

          {/* Action buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-accent-red px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-accent-red-hover hover:scale-105 hover:shadow-[0_0_25px_rgba(225,29,72,0.5)]"
            >
              Explore Projects
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-white/5 border border-white/10 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white/10 hover:border-accent-red hover:scale-105"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-white/[0.05] pt-12 sm:grid-cols-4 w-full max-w-4xl text-left animate-fade-in-up delay-200">
          <div>
            <div className="text-4xl font-black text-white font-mono">10+</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mt-1">Academic Projects</div>
          </div>
          <div>
            <div className="text-4xl font-black text-white font-mono">1+</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mt-1">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-black text-white font-mono">5+</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mt-1">Hackathons & Wins</div>
          </div>
          <div>
            <div className="text-4xl font-black text-white font-mono">15+</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mt-1">Custom Designs</div>
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="relative z-10 w-full border-t border-white/[0.05] bg-gradient-to-b from-transparent to-[#050508]/40 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-sm font-bold uppercase tracking-widest text-accent-red">My Approach</h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Work Process</p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { num: "01", title: "Discover", desc: "Understanding the client, requirements, audience and constraints." },
              { num: "02", title: "Ideate", desc: "Brainstorming solutions, layouts, flowcharts, and wireframing." },
              { num: "03", title: "Design", desc: "Crafting modern glassmorphic visuals with Canva and Figma." },
              { num: "04", title: "Develop", desc: "Writing clean Next.js code, structuring databases, and scaling." },
              { num: "05", title: "Deliver", desc: "Rigorous testing, fine-tuning responsiveness, and launch." },
            ].map((step, idx) => (
              <div
                key={idx}
                className="group relative rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all duration-300 hover:border-accent-red/30 hover:bg-white/[0.04]"
              >
                <div className="mb-4 font-mono text-3xl font-black text-gray-700 transition-colors duration-300 group-hover:text-accent-red">
                  {step.num}
                </div>
                <h3 className="mb-2 text-base font-bold text-white transition-colors duration-300 group-hover:text-rose-300">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Bio Promo */}
      <section className="relative z-10 w-full bg-[#050508]/60 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent-red/10 text-accent-red mb-6 border border-accent-red/20">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl font-sans">
            &ldquo;Good design is not just how it looks, but how it works.&rdquo;
          </h2>
          <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-gray-500">
            - Steve Jobs / Ashelle Dsouza
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-rose-400 hover:text-white transition-colors duration-300"
            >
              Learn More About Me
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
