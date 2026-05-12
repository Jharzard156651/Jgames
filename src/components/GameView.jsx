import { X, Maximize2, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function GameView({ game, onClose }) {
  if (!game) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black flex flex-col p-4 md:p-8"
      >
        <div className="flex items-center justify-between pb-6 border-b-4 border-white bg-black">
          <div className="flex items-center gap-6">
            <button 
              onClick={onClose}
              className="group flex flex-col items-center gap-1"
            >
              <X size={32} className="text-white hover:text-[#00FF41] transition-colors" />
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest hidden md:block">EXIT</span>
            </button>
            <div>
              <h2 className="text-4xl md:text-5xl font-black italic text-white leading-none uppercase">{game.title}</h2>
              <p className="text-[10px] font-mono text-white/40 uppercase tracking-[0.4em] mt-2">Active Connection // {game.id.toUpperCase()}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => {
                const iframe = document.querySelector('iframe');
                if (iframe) iframe.src = iframe.src;
              }}
              className="hidden md:flex border-2 border-white/20 px-6 py-2 text-white/60 hover:text-white hover:border-white transition-all text-xs font-black uppercase italic"
            >
              Reset Session
            </button>
            <button className="bg-[#00FF41] text-black px-8 py-3 text-sm font-black uppercase italic skew-badge hover:bg-white transition-colors">
              Toggle Fullscreen
            </button>
          </div>
        </div>

        <div className="flex-1 relative w-full bg-[#050505] mt-8 border-2 border-white/10 group overflow-hidden">
          <div className="absolute inset-0 bg-[#00FF41]/5 pointer-events-none opacity-20" />
          <iframe
            src={game.url}
            className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
            title={game.title}
            allowFullScreen
          />
        </div>
        
        <div className="mt-6 flex justify-between items-center text-[10px] font-mono tracking-[0.2em] uppercase opacity-40">
            <div>Node Status: Optimal</div>
            <div>[IFRAME_PROTOCOL_ACTIVE]</div>
            <div>Timestamp: {new Date().toLocaleTimeString()}</div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
