import React from "react";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-cyan-400 rounded flex items-center justify-center text-white font-bold">
            PL
          </div>
          <div>
            <h1 className="text-lg font-semibold">Product List</h1>
            <p className="text-sm text-slate-500">Browse, filter & sort products</p>
          </div>
        </div>

        <nav className="flex items-center gap-4">
          <a className="text-sm text-slate-600 hover:text-slate-900" href="#">Home</a>
          <a className="text-sm text-slate-600 hover:text-slate-900" href="#">Shop</a>
          <button className="text-sm bg-indigo-600 text-white px-3 py-1 rounded-md shadow-sm hover:bg-indigo-700">My Cart</button>
        </nav>
      </div>
    </header>
  );
}
