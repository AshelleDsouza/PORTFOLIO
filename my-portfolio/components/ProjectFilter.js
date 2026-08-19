"use client";

import { useState } from "react";

export default function ProjectFilter({ onFilterChange }) {
  const [category, setCategory] = useState("All");

  const handleSelectChange = (e) => {
    const val = e.target.value;
    setCategory(val);
    if (onFilterChange) {
      onFilterChange(val);
    }
  };

  return (
    <div className="mb-8 flex flex-col items-center justify-center">
      <div className="flex flex-wrap items-center gap-3">
        <label htmlFor="category-select" className="text-xs font-semibold uppercase tracking-wider text-gray-400">
          Filter Projects:
        </label>
        <select
          id="category-select"
          value={category}
          onChange={handleSelectChange}
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white focus:outline-none focus:border-accent-red cursor-pointer transition-all duration-300"
        >
          <option value="All" className="bg-[#08080c] text-white">All Projects</option>
          <option value="Web" className="bg-[#08080c] text-white">Web Development</option>
          <option value="AI" className="bg-[#08080c] text-white">AI & ML</option>
          <option value="Mobile" className="bg-[#08080c] text-white">Mobile Apps</option>
          <option value="Design" className="bg-[#08080c] text-white">Graphic Design</option>
        </select>
      </div>
      <p className="mt-3 text-xs font-mono text-rose-400 font-semibold tracking-wider uppercase">
        Selected Category: {category}
      </p>
    </div>
  );
}
