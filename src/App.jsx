import React, { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import FilterBar from "./components/FilterBar";
import ProductGrid from "./components/ProductGrid";
import { products as allProducts } from "./data/products";

export default function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  // derive unique categories
  const categories = useMemo(() => {
    const set = new Set(allProducts.map((p) => p.category));
    return Array.from(set);
  }, []);

  // filtered + sorted products
  const visibleProducts = useMemo(() => {
    let out = [...allProducts];

    // search
    if (search.trim()) {
      const s = search.trim().toLowerCase();
      out = out.filter((p) => p.name.toLowerCase().includes(s));
    }

    // category
    if (category) {
      out = out.filter((p) => p.category === category);
    }

    // sort
    if (sort === "price-asc") {
      out.sort((a, b) => a.price - b.price);
    } else if (sort === "price-desc") {
      out.sort((a, b) => b.price - a.price);
    } else if (sort === "rating-desc") {
      out.sort((a, b) => b.rating - a.rating);
    } else if (sort === "rating-asc") {
      out.sort((a, b) => a.rating - b.rating);
    }

    return out;
  }, [search, category, sort]);

  function handleAddToCart(product) {
    // for assignment: log product name to console
    console.log("Add to cart:", product.name);
    // future: you could push to cart state or localStorage
    // show a small toast (not implemented) or update UI
    alert(`Added "${product.name}" (see console log)`);
  }

  function clearFilters() {
    setSearch("");
    setCategory("");
    setSort("");
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        <div>
          <h2 className="text-2xl font-bold">Products</h2>
          <p className="text-sm text-slate-500 mt-1">Search, filter by category and sort the products.</p>
        </div>

        <FilterBar
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          categories={categories}
          sort={sort}
          setSort={setSort}
          clearFilters={clearFilters}
        />

        <section>
          <div className="mb-4 text-sm text-slate-600">
            Showing <span className="font-semibold">{visibleProducts.length}</span> of <span className="font-semibold">{allProducts.length}</span>
          </div>
          <ProductGrid items={visibleProducts} onAddToCart={handleAddToCart} />
        </section>
      </main>

      <footer className="bg-white mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-slate-500">
          © {new Date().getFullYear()} Product List - Demo assignment
        </div>
      </footer>
    </div>
  );
}
