import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import emailjs from '@emailjs/browser';
import Section, { SectionTitle } from '../components/Section';
import { personal } from '../data';

const SERVICE_ID  = 'YOUR_SERVICE_ID';
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');
  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    setStatus('sending');
    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      from_name: form.name,
      from_email: form.email,
      subject:    form.subject,
      message:    form.message,
      to_email:   personal.email,
    }, PUBLIC_KEY)
      .then(() => { setStatus('success'); setForm({ name: '', email: '', subject: '', message: '' }); })
      .catch(() => setStatus('error'));
  };

  return (
    <Section id="contact" stripe>
      <SectionTitle title="Get In Touch" label="Let's Connect" />
      <div className="grid md:grid-cols-2 gap-10 items-start">

        {/* Left panel */}
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="space-y-6">

          <div className="card p-7 text-white" style={{ background: 'linear-gradient(135deg, #1D4ED8, #2563EB, #0EA5E9)' }}>
            <h3 className="text-2xl font-black mb-3">Let's Build Something Amazing Together!</h3>
            <p className="text-blue-100 text-base font-semibold leading-relaxed">
              I'm open to full-time roles, freelance projects, and collaboration. Reach out and let's talk!
            </p>
          </div>

          {[
            { Icon: FiPhone, label: personal.phone,  href: `tel:${personal.phone}`,      sub: 'Phone' },
            { Icon: FiMail,  label: personal.email,   href: `mailto:${personal.email}`,   sub: 'Email' },
          ].map(({ Icon, label, href, sub }) => (
            <a key={label} href={href} rel="noreferrer"
              className="card flex items-center gap-4 p-4 hover:border-primary group">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow" style={{ background: 'linear-gradient(135deg, #1D4ED8, #2563EB, #0EA5E9)' }}>
                <Icon size={18} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide">{sub}</p>
                <p className="text-black font-bold text-base group-hover:text-primary transition">{label}</p>
              </div>
            </a>
          ))}

          <div className="flex gap-3">
            {[
              { Icon: FiLinkedin, href: personal.linkedin, label: 'LinkedIn', cls: 'hover:bg-blue-600' },
              { Icon: FiGithub,   href: personal.github,   label: 'GitHub',   cls: 'hover:bg-slate-800' },
              { Icon: SiLeetcode, href: personal.leetcode,  label: 'LeetCode', cls: 'hover:bg-yellow-500' },
            ].map(({ Icon, href, label, cls }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-white border-2 border-blue-100 text-slate-600 font-semibold text-sm hover:text-white hover:border-transparent transition-all shadow ${cls}`}>
                <Icon size={18} /> {label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right form */}
        <motion.form initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          onSubmit={onSubmit}
          className="card p-8 space-y-4">
          <h3 className="text-2xl font-bold text-black mb-2">Send a Message</h3>
          {['name', 'email', 'subject'].map(f => (
            <input key={f} type={f === 'email' ? 'email' : 'text'} name={f}
              placeholder={f.charAt(0).toUpperCase() + f.slice(1)}
              value={form[f]} onChange={onChange} required
              className="w-full border-2 border-blue-100 rounded-xl px-4 py-3 text-base font-semibold text-black bg-blue-50/40 focus:outline-none focus:border-primary transition placeholder-slate-400" />
          ))}
          <textarea name="message" placeholder="Your Message" rows={5}
            value={form.message} onChange={onChange} required
            className="w-full border-2 border-blue-100 rounded-xl px-4 py-3 text-base font-semibold text-black bg-blue-50/40 focus:outline-none focus:border-primary transition placeholder-slate-400 resize-none" />
          <button type="submit" disabled={status === 'sending'} className="btn-blue w-full flex items-center justify-center gap-2">
            <FiSend /> {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' && <p className="text-green-600 font-semibold text-center">✅ Message sent successfully!</p>}
          {status === 'error'   && <p className="text-red-500 font-semibold text-center">❌ Failed to send. Please try again.</p>}
        </motion.form>
      </div>
    </Section>
  );
}
