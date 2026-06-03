import { motion } from 'framer-motion';

export default function Section({ id, children, alt = false }) {
  return (
    <motion.section id={id}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`py-28 px-4 ${alt ? 'bg-section' : 'bg-section2'}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </motion.section>
  );
}

export function SectionTitle({ label, title }) {
  return (
    <div className="text-center mb-16">
      <span className="pill mb-5 inline-block">{label}</span>
      <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">{title}</h2>
      <div className="title-bar" />
    </div>
  );
}
