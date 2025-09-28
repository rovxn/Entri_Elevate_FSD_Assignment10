import React from "react";
import { Star } from "lucide-react";

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded-md overflow-hidden card-shadow flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-44 object-cover"
      />
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-slate-800">{product.name}</h3>
            <div className="text-xs text-slate-500">{product.category}</div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold">₹{product.price}</div>
            <div className="text-xs text-slate-500">incl. taxes</div>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <Star className="w-4 h-4 text-yellow-400" />
          <span className="text-sm font-medium">{product.rating}</span>
        </div>

        <div className="mt-4">
          <button
            onClick={() => onAddToCart(product)}
            className="w-full py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
