import { ShoppingCart, Search } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-400" />
          <span className="font-semibold text-gray-900">MarketFlow</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#explore" className="hover:text-gray-900">Explore</a>
          <a href="#categories" className="hover:text-gray-900">Categories</a>
          <a href="#featured" className="hover:text-gray-900">Featured</a>
          <a href="#sellers" className="hover:text-gray-900">Sellers</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex items-center gap-2 rounded-lg border border-black/10 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
            <Search className="h-4 w-4" />
            <span>Search</span>
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-3 py-2 text-sm hover:bg-gray-800">
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline">Cart</span>
          </button>
        </div>
      </div>
    </header>
  );
}
