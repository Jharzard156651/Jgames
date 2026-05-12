import { motion } from 'motion/react';
import { Play, TrendingUp } from 'lucide-react';

export default function Hero({ featuredGame, onPlay }) {
  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden border-4 border-white mb-16 group">
      <div className="absolute inset-0 grayscale contrast-125">
        <img 
          src={featuredGame.thumbnail} 
          alt={featuredGame.title}
          className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <div className="relative h-full flex flex-col justify-end p-8 md:p-16">
        <div className="mb-6">
          <span className="bg-white text-black text-xs font-black uppercase px-3 py-1 mb-4 inline-block">
            Trending Protocol
          </span>
          <h1 className="text-7xl md:text-[10rem] font-black italic tracking-tighter leading-[0.85] text-white uppercase drop-shadow-2xl">
            {featuredGame.title.split(' ')[0]}<br/>
            {featuredGame.title.split(' ')[1] || ''}
          </h1>
        </div>
        
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <p className="text-white/80 text-sm font-mono uppercase tracking-widest max-w-lg leading-relaxed bg-[#050505] p-4 border border-white/20">
            [DATA]: {featuredGame.description}
          </p>

          <button 
            onClick={() => onPlay(featuredGame)}
            className="bg-[#00FF41] hover:bg-white text-black px-12 py-6 text-xl font-black uppercase italic transition-all group/btn flex items-center gap-4 border-2 border-transparent hover:border-black active:scale-95"
          >
            Launch System
            <Play fill="currentColor" size={24} className="group-hover/btn:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
