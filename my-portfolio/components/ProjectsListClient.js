"use client";

import { useState } from "react";
import ProjectFilter from "./ProjectFilter";
import ProjectCard from "./ProjectCard";

export default function ProjectsListClient({ rawProjects = [] }) {
  const [filter, setFilter] = useState("All");

  const filteredProjects = rawProjects.filter((project) => {
    if (filter === "All") return true;
    return project.category === filter;
  });

  return (
    <div className="animate-fade-in-up">
      {/* Interactive Filter */}
      <ProjectFilter onFilterChange={setFilter} />

      {/* Grid of Projects */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 text-gray-500 font-mono text-sm border border-dashed border-white/10 rounded-2xl">
          No projects found in this category.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
