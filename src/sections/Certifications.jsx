import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import Section, { SectionTitle } from '../components/Section';
import { certifications } from '../data';

const issuerColors = {
  Udemy:      'bg-purple-100 text-purple-700 border-purple-200',
  HackerRank: 'bg-green-100 text-green-700 border-green-200',
  SkillRack:  'bg-orange-100 text-orange-700 border-orange-200',
  NPTEL:      'bg-blue-100 text-blue-700 border-blue-200',
};

export default function Certifications() {
  return (
    <Section id="certifications" stripe>
      <SectionTitle title="Certifications" subtitle="Credentials Earned" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((c, i) => (
          <motion.div key={c.name}
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            whileHover={{ y: -5 }}
            className="card p-5 flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-200/60" style={{ background: 'linear-gradient(135deg, #1D4ED8, #0EA5E9)' }}>
              <FiAward size={22} className="text-white" />
            </div>
            <div>
              <p className="font-bold text-base text-black leading-snug mb-2">{c.name}</p>
              <span className={`text-sm font-bold px-2.5 py-1 rounded-full border ${issuerColors[c.issuer] || 'bg-blue-100 text-blue-700 border-blue-200'}`}>
                {c.issuer}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
