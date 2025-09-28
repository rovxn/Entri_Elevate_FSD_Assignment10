import React from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ items, onAddToCart }) {
  if (!items.length) {
    return (
      <div className="text-center py-16">
        <h3 className="text-lg font-semibold">No products match your search.</h3>
        <p className="text-sm text-slate-500 mt-2">Try different filters or clear search.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((p) => (
        <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}
