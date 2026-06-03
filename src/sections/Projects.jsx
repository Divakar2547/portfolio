import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCode } from 'react-icons/fi';
import Section, { SectionTitle } from '../components/Section';
import { projects } from '../data';

const headers = [
  { emoji: '🏫' },
  { emoji: '🚗' },
  { emoji: '🤖' },
];

export default function Projects() {
  return (
    <Section id="projects" stripe>
      <SectionTitle title="Featured Projects" subtitle="What I've Built" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {projects.map((p, i) => (
          <motion.div key={p.title}
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.12 }}
            whileHover={{ y: -8 }}
            className="card flex flex-col overflow-hidden">

            {/* Visual header */}
            <div className={`bg-gradient-to-br ${p.color ?? headers[i]?.bg} h-36 flex items-center justify-center relative overflow-hidden`}>
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
              <span className="text-6xl drop-shadow-xl">{headers[i]?.emoji}</span>
              <div className="absolute top-3 right-3">
                <FiCode className="text-white/60" size={20} />
              </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-2xl font-bold text-black mb-2 leading-snug">{p.title}</h3>
              <p className="text-black text-base font-semibold leading-relaxed mb-4">{p.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tech.map(t => (
                  <span key={t} className="pill text-sm font-bold">{t}</span>
                ))}
              </div>

              <ul className="space-y-1.5 mb-6 flex-1">
                {p.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-black text-base font-semibold">
                    <span className="w-2 h-2 rounded-full bg-primaryLight shrink-0" />{f}
                  </li>
                ))}
              </ul>

              <div className="flex gap-3 mt-auto">
                <a href={p.demo}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-gradient-to-r ${p.color ?? headers[i]?.bg} text-white text-sm font-bold hover:opacity-90 transition shadow`}>
                  <FiExternalLink size={13} /> Demo
                </a>
                <a href={p.github}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-full border-2 border-blue-200 text-primary text-sm font-bold hover:border-primary hover:bg-blue-50 transition">
                  <FiGithub size={13} /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
