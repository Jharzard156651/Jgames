/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GameCard from './components/GameCard';
import GameView from './components/GameView';
import gamesData from './data/games.json';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedGame, setSelectedGame] = useState(null);

  const filteredGames = useMemo(() => {
    return gamesData.filter((game) => {
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          game.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          game.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = activeCategory === 'All' || game.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const featuredGame = gamesData[0];

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-[#00FF41]/30">
      <Navbar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        {!searchQuery && activeCategory === 'All' && (
          <Hero featuredGame={featuredGame} onPlay={setSelectedGame} />
        )}

        <div className="mb-24">
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-12 border-b-2 border-white/10 pb-4">
            <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter text-white uppercase">
              {searchQuery || activeCategory !== 'All' ? 'Probe Results' : 'The Library'}
            </h2>
            <div className="text-white/20 text-xs font-mono tracking-widest uppercase">
              Found {filteredGames.length} active_nodes
            </div>
          </div>

          {filteredGames.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredGames.map((game) => (
                <GameCard 
                  key={game.id} 
                  game={game} 
                  onClick={() => setSelectedGame(game)} 
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-32 border-4 border-dashed border-white/5 bg-white/[0.02]">
              <p className="text-white/20 text-xl font-mono uppercase tracking-[0.5em]">No data found at this node</p>
              <button 
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="mt-8 bg-white text-black px-8 py-3 text-sm font-black uppercase italic skew-badge hover:bg-[#00FF41] transition-colors"
              >
                Reset Connection
              </button>
            </div>
          )}
        </div>
      </main>

      <footer className="border-t-4 border-white py-20 px-8 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="flex flex-col max-w-sm">
             <h3 className="text-5xl font-black italic text-white mb-6">Nexus<br/>Systems</h3>
             <p className="text-white/40 text-xs font-mono uppercase tracking-widest leading-relaxed">
               Secure high-performance entertainment protocols since 20XX. All rights reserved by the collective.
             </p>
          </div>
          
          <div className="grid grid-cols-2 gap-16">
            <div>
              <h4 className="text-white/20 font-mono text-[10px] uppercase tracking-[0.5em] mb-6">Directory</h4>
              <ul className="space-y-3 text-white/50 text-xs font-black uppercase italic">
                <li className="hover:text-[#00FF41] cursor-pointer transition-colors">Games_Lib</li>
                <li className="hover:text-[#00FF41] cursor-pointer transition-colors">New_Nodes</li>
                <li className="hover:text-[#00FF41] cursor-pointer transition-colors">Trending_v2</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white/20 font-mono text-[10px] uppercase tracking-[0.5em] mb-6">Support</h4>
              <ul className="space-y-3 text-white/50 text-xs font-black uppercase italic">
                <li className="hover:text-[#00FF41] cursor-pointer transition-colors">Submit_Data</li>
                <li className="hover:text-[#00FF41] cursor-pointer transition-colors">Report_Bug</li>
                <li className="hover:text-[#00FF41] cursor-pointer transition-colors">Privacy_Prot</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-white/10 text-[9px] font-mono tracking-[0.6em] uppercase">
            <p>© 2026 NEXUS SYSTEMS INDUSTRIES // BUILD_8842</p>
            <p>Connection Status: EXTREMELY SECURE</p>
        </div>
      </footer>

      <GameView 
        game={selectedGame} 
        onClose={() => setSelectedGame(null)} 
      />
    </div>
  );
}
