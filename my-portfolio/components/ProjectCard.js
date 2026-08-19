import Link from "next/link";

export default function ProjectCard({ project }) {
  const { id, title, description, category, tags = [], github } = project;

  return (
    <div className="group relative overflow-hidden rounded-2xl glass-panel-red p-6 transition-all duration-300 hover:-translate-y-1">
      {/* Glow highlight */}
      <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-accent-red/10 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-accent-red/20" />

      {/* Category badge */}
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full bg-accent-red/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-rose-400 border border-accent-red/20">
          {category}
        </span>
        <span className="text-xs text-gray-500 font-mono">#0{id}</span>
      </div>

      {/* Project content */}
      <h3 className="mb-2 text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-rose-400">
        {title}
      </h3>
      <p className="mb-5 text-sm text-gray-400 line-clamp-3 leading-relaxed">
        {description}
      </p>

      {/* Tag badges */}
      {tags.length > 0 && (
        <div className="mb-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-white/5 border border-white/5 px-2 py-0.5 text-xs text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Card buttons */}
      <div className="flex items-center justify-between border-t border-white/[0.05] pt-4 mt-auto">
        <Link
          href={`/projects/${id}`}
          className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-white hover:text-rose-400 transition-colors duration-300"
        >
          View Details
          <svg
            className="h-3.5 w-3.5 transform transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>

        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="View Github Repository"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
