import React from "react";

export default function FilterBar({
  search,
  setSearch,
  category,
  setCategory,
  categories,
  sort,
  setSort,
  clearFilters
}) {
  return (
    <div className="bg-white p-4 rounded-md card-shadow">
      <div className="max-w-6xl mx-auto flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex-1 flex gap-3 items-center">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products by name..."
            className="w-full md:w-72 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-3 py-2 border rounded-md"
          >
            <option value="">All categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-3 py-2 border rounded-md"
          >
            <option value="">Sort by</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
            <option value="rating-desc">Rating: High → Low</option>
            <option value="rating-asc">Rating: Low → High</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={clearFilters}
            className="text-sm px-3 py-2 rounded-md border hover:bg-slate-50"
          >
            Clear
          </button>
          <div className="text-sm text-slate-500">Showing results</div>
        </div>
      </div>
    </div>
  );
}
