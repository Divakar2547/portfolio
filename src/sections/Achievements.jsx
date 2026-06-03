import { motion } from 'framer-motion';
import { FiGithub, FiStar, FiBox, FiZap } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import Section, { SectionTitle } from '../components/Section';
import { achievements, personal } from '../data';

const icons = [FiStar, FiBox, FiZap];

export default function Achievements() {
  return (
    <Section id="achievements">
      <SectionTitle title="Achievements" subtitle="My Milestones" />

      {/* Big stat cards */}
      <div className="grid sm:grid-cols-3 gap-6 mb-16">
        {achievements.map(({ value, label }, i) => {
          const Icon = icons[i];
          return (
            <motion.div key={label}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.12 }}
              className="relative card p-8 text-center overflow-hidden">
              {/* BG shape */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-blue-50 opacity-60" />
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-300/40" style={{ background: 'linear-gradient(135deg, #1D4ED8, #0EA5E9)' }}>
                <Icon size={24} className="text-white" />
              </div>
              <p className="text-5xl font-black gt mb-1">{value}</p>
              <p className="text-black text-base font-bold">{label}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Coding profiles */}
      <h3 className="text-2xl font-black text-black text-center mb-8">Coding Profiles</h3>
      <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">

        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="card p-7 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-200/50">
            <SiLeetcode size={32} className="text-white" />
          </div>
          <h4 className="text-2xl font-bold text-black mb-1">LeetCode</h4>
          <p className="text-black text-base font-semibold mb-5">73+ Problems Solved</p>
          <a href={personal.leetcode} target="_blank" rel="noreferrer"
            className="inline-block px-7 py-2.5 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold text-sm shadow hover:scale-105 transition-transform">
            View Profile →
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="card p-7 text-center">
          <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-slate-300/50">
            <FiGithub size={32} className="text-white" />
          </div>
          <h4 className="text-2xl font-bold text-black mb-1">GitHub</h4>
          <p className="text-black text-base font-semibold mb-5">Repos · Contributions · Projects</p>
          <a href={personal.github} target="_blank" rel="noreferrer"
            className="inline-block px-7 py-2.5 rounded-full bg-slate-800 text-white font-bold text-sm shadow hover:scale-105 transition-transform">
            View GitHub →
          </a>
        </motion.div>
      </div>
    </Section>
  );
}
