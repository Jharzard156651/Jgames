import { motion } from 'motion/react';

export default function GameCard({ game, onClick }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.02 }}
      className="group relative bg-[#0a0a0a] border-2 border-white/10 p-4 transition-all cursor-pointer hover:border-white"
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-6">
        <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest leading-none">
          ID: {game.id.slice(0, 3)}
        </span>
        <div className="w-2 h-2 bg-[#00FF41]"></div>
      </div>

      <div className="mb-6 aspect-video overflow-hidden border border-white/5 grayscale group-hover:grayscale-0 transition-all duration-500">
        <img 
          src={game.thumbnail} 
          alt={game.title}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all"
        />
      </div>
      
      <div className="flex flex-col gap-1">
        <h3 className="text-3xl font-black uppercase italic leading-[0.9] text-white">
          {game.title}
        </h3>
        <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest truncate mt-2 leading-none">
          {game.category} System
        </p>
      </div>

      <button className="w-full py-2 bg-white text-black text-xs font-black uppercase mt-6 opacity-0 group-hover:opacity-100 transition-opacity skew-badge">
        Launch Session
      </button>
    </motion.div>
  );
}
