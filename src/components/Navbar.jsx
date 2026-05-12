import { Search, Gamepad2, Layers, TrendingUp, Info } from 'lucide-react';

const CATEGORIES = ["All", "Action", "Puzzle", "Arcade", "Casual", "Racing"];

export default function Navbar({ searchQuery, setSearchQuery, activeCategory, setActiveCategory }) {
  return (
    <nav className="sticky top-0 z-50 bg-[#050505]/95 border-b-4 border-white px-4 lg:px-8 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter leading-[0.8] uppercase select-none cursor-pointer">
            Nexus<br/><span className="text-[#00FF41]">Games</span>
          </h1>
          <p className="mt-2 text-[10px] font-mono tracking-[0.4em] uppercase opacity-40">Protocol v4.0.1 // UNBLOCKED</p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4 w-full md:w-auto">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative group flex-1 md:w-64">
              <input
                type="text"
                placeholder="PROBE DATABASE..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border-2 border-white/20 px-4 py-2 text-white placeholder:text-white/20 focus:outline-none focus:border-[#00FF41] transition-all font-mono text-xs uppercase"
              />
            </div>
            <div className="hidden lg:block bg-[#00FF41] text-black px-4 py-2 font-bold uppercase text-xs skew-x-[-12deg] whitespace-nowrap">
              2,408 Users Live
            </div>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`border-2 px-3 py-1 text-[10px] uppercase font-bold transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-white text-black border-white"
                    : "border-white/20 text-white/40 hover:border-white hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
