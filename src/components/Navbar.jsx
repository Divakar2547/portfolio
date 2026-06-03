import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { personal } from '../data';

const links = ['About', 'Skills', 'Projects', 'Education', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300
      ${scrolled ? 'bg-black/95 backdrop-blur-2xl nav-glow py-3' : 'bg-black py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="text-xl font-black text-white tracking-tight">DIVAKAR G</a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="relative px-4 py-2 text-white hover:text-blue-400 font-semibold text-sm transition-colors group">
              {l}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-400 rounded-full transition-all duration-300 group-hover:w-4/5" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href={personal.linkedin} target="_blank" rel="noreferrer" className="btn-outline text-sm py-2.5 px-5">LinkedIn</a>
          <a href="#contact" className="btn-primary text-sm py-2.5 px-6">Hire Me →</a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 border border-white/20 text-white">
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-black border-t border-white/10 px-6 pt-2 pb-5">
            {links.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
                className="block py-3 font-semibold text-white hover:text-blue-400 border-b border-white/10 last:border-0">{l}</a>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="btn-outline text-sm py-2.5 px-6 inline-flex justify-center">LinkedIn</a>
              <a href="#contact" className="btn-primary text-sm py-2.5 px-6 inline-flex justify-center">Hire Me →</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
