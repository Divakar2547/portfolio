import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiDownload, FiArrowRight } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { personal } from '../data';

const floaters = [
  { e: '⚛️', x: '6%',  y: '20%', d: 3.2 },
  { e: '☕',  x: '88%', y: '15%', d: 4.0 },
  { e: '🟢', x: '4%',  y: '72%', d: 3.6 },
  { e: '🍃', x: '90%', y: '65%', d: 2.8 },
  { e: '🎨', x: '20%', y: '88%', d: 3.4 },
  { e: '☁️', x: '72%', y: '82%', d: 4.2 },
  { e: '🔥', x: '50%', y: '6%',  d: 3.0 },
  { e: '🐳', x: '40%', y: '90%', d: 3.8 },
];

const stats = [
  { n: '73+', l: 'LeetCode Solved' },
  { n: '3+',  l: 'Projects Built' },
  { n: '10+', l: 'Tech Mastered' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden bg-hero-bg">

      {/* Big decorative circles */}
      <div className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-blue-200/60 to-sky-100/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full bg-gradient-to-tl from-blue-300/50 to-indigo-100/30 blur-3xl pointer-events-none" />

      {/* Floating icons */}
      {floaters.map(({ e, x, y, d }, i) => (
        <motion.span key={i}
          className="absolute text-2xl select-none pointer-events-none hidden lg:block"
          style={{ left: x, top: y }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: d, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}>
          {e}
        </motion.span>
      ))}

      <div className="relative z-10 text-center max-w-4xl w-full">

        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-primary font-semibold text-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Available for hire
        </motion.div>

        {/* Name */}
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }}
          className="text-6xl md:text-8xl font-black leading-none mb-4 text-black tracking-tight uppercase">
          DIVAKAR G
        </motion.h1>

        {/* Role */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
          style={{ background: 'linear-gradient(135deg, #1D4ED8, #2563EB, #0EA5E9)' }}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl text-white font-bold text-xl md:text-2xl mb-6 shadow-lg shadow-blue-300/40">
          ⚡ Full Stack Developer
        </motion.div>

        {/* Description */}
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
          className="text-black text-2xl leading-relaxed max-w-2xl mx-auto mb-10 font-semibold">
          {personal.description}
        </motion.p>

        {/* Buttons */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-10">
          <a href="#projects" className="btn-blue flex items-center gap-2">View Projects <FiArrowRight /></a>
          <a href="https://drive.google.com/file/d/1QHN-7w25mQsYxcWXWoNSLDBkpJve9TQH/view" target="_blank" rel="noreferrer" className="btn-outline flex items-center gap-2"><FiDownload /> Download Resume</a>
        </motion.div>

        {/* Social */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          className="flex justify-center gap-4 mb-14">
          {[
            { Icon: FiLinkedin, href: personal.linkedin, label: 'LinkedIn' },
            { Icon: FiGithub,   href: personal.github,   label: 'GitHub'   },
            { Icon: SiLeetcode, href: personal.leetcode,  label: 'LeetCode' },
          ].map(({ Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
              className="p-3.5 rounded-2xl bg-white border-2 border-blue-100 text-slate-500 hover:text-primary hover:border-primary hover:shadow-lg hover:shadow-blue-200/50 hover:-translate-y-1 transition-all duration-200 shadow">
              <Icon size={22} />
            </a>
          ))}
        </motion.div>

        {/* Stats bar */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}
          className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {stats.map(({ n, l }) => (
            <div key={l} className="bglass py-4 px-3 text-center">
              <p className="text-2xl font-black gt">{n}</p>
              <p className="text-base font-bold text-black mt-0.5">{l}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="#eff6ff"/>
        </svg>
      </div>
    </section>
  );
}
