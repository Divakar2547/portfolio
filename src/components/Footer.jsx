import { FiLinkedin, FiGithub, FiHeart, FiArrowUp } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { personal } from '../data';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-3xl font-black mb-1">{personal.name}</h3>
            <p className="text-blue-200 text-base font-bold">Full Stack Developer</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-3">
              {[
                { Icon: FiLinkedin, href: personal.linkedin, label: 'LinkedIn' },
                { Icon: FiGithub,   href: personal.github,   label: 'GitHub'   },
                { Icon: SiLeetcode, href: personal.leetcode,  label: 'LeetCode' },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                  className="w-11 h-11 rounded-2xl bg-white/10 hover:bg-white/25 flex items-center justify-center transition-all hover:scale-110">
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <a href="#" className="w-11 h-11 rounded-2xl bg-white/10 hover:bg-white/25 flex items-center justify-center transition-all hover:scale-110" aria-label="Back to top">
              <FiArrowUp size={18} />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/20 flex items-center justify-center gap-1.5 text-blue-200 text-sm">
          <span>© 2026 {personal.name}. All Rights Reserved.</span>
          <span>·</span>
          <span className="flex items-center gap-1">Made with <FiHeart className="text-red-300" size={14} /> in India</span>
        </div>
      </div>
    </footer>
  );
}
