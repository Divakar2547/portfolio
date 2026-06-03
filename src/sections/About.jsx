import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import Section, { SectionTitle } from '../components/Section';
import { about } from '../data';
import profilePhoto from '../assets/profile.jpeg';

export default function About() {
  return (
    <Section id="about" stripe>
      <SectionTitle title="About Me" subtitle="Who I Am" />
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* Avatar card */}
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex justify-center">
          <div className="relative">
            <div className="w-full max-w-[500px] aspect-square rounded-[2rem] p-1 shadow-2xl shadow-blue-300/40" style={{ background: 'linear-gradient(135deg, #1D4ED8, #2563EB, #0EA5E9)' }}>
              <div className="w-full h-full rounded-[2rem] overflow-hidden bg-white">
                <img src={profilePhoto} alt="profile.jpeg" className="w-full h-full object-cover object-center" loading="eager" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          {about.description.split('\n\n').map((p, i) => (
            <p key={i} className="text-black text-2xl leading-relaxed mb-6 font-semibold">{p}</p>
          ))}
          <div className="grid grid-cols-2 gap-3 mt-6">
            {about.highlights.map(item => (
              <div key={item} className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 border border-blue-100 shadow-sm">
                <FiCheckCircle className="text-primary shrink-0" size={18} />
                <span className="text-base font-bold text-black">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
