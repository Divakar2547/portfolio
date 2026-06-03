import { motion } from 'framer-motion';
import { FiBookOpen } from 'react-icons/fi';
import Section, { SectionTitle } from '../components/Section';
import { education } from '../data';

export default function Education() {
  return (
    <Section id="education">
      <SectionTitle title="Education" subtitle="Academic Journey" />
      <div className="max-w-3xl mx-auto relative pl-8">
        {/* Vertical line */}
        <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-sky to-blue-300 rounded-full" />

        <div className="space-y-8">
          {education.map((e, i) => (
            <motion.div key={e.school}
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className="relative">
              <div className="timeline-dot" />
              <div className="card p-6 hover:border-primary/40">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow" style={{ background: 'linear-gradient(135deg, #1D4ED8, #0EA5E9)' }}>
                      <FiBookOpen className="text-white" size={18} />
                    </div>
                    <h3 className="text-2xl font-bold text-black leading-tight">{e.school}</h3>
                  </div>
                  <span className="pill text-sm font-bold whitespace-nowrap">{e.period}</span>
                </div>
                <p className="text-black text-base font-semibold mb-2 pl-13">{e.degree}</p>
                <span className="inline-block pl-13 text-base font-bold text-primary">{e.score}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
