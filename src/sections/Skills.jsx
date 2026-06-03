import { motion } from 'framer-motion';
import Section, { SectionTitle } from '../components/Section';
import { skills } from '../data';

const palette = [
  { header: 'from-blue-600 to-blue-400',    badge: 'bg-blue-100 text-blue-700 border-blue-200'    },
  { header: 'from-indigo-600 to-blue-500',  badge: 'bg-indigo-100 text-indigo-700 border-indigo-200' },
  { header: 'from-indigo-600 to-blue-500',  badge: 'bg-indigo-100 text-indigo-700 border-indigo-200' },
  { header: 'from-blue-700 to-indigo-500',  badge: 'bg-blue-100 text-blue-800 border-blue-200'    },
  { header: 'from-cyan-600 to-sky-400',     badge: 'bg-cyan-100 text-cyan-700 border-cyan-200'    },
  { header: 'from-indigo-500 to-blue-400',  badge: 'bg-indigo-100 text-indigo-600 border-indigo-200' },
];

export default function Skills() {
  return (
    <Section id="skills">
      <SectionTitle title="My Skills" label="Tech Stack" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((g, i) => {
          const c = palette[i];
          return (
            <motion.div key={g.category}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(37,99,235,0.18)' }}
              className="card overflow-hidden border border-slate-200">
              {/* Gradient header band */}
              <div className={`bg-gradient-to-r ${c.header} px-6 py-5 flex items-center gap-3 border-b border-white/10`}>
                <span className="text-3xl">{g.icon}</span>
                <h3 className="text-2xl font-bold text-white">{g.category}</h3>
              </div>
              <div className="p-5 flex flex-wrap gap-2">
                {g.items.map(skill => (
                  <motion.span key={skill} whileHover={{ scale: 1.1 }}
                    className={`px-3 py-1.5 rounded-full text-base font-bold border ${c.badge} cursor-default`}>
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
