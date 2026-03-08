import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <Link to="/" className="text-3xl font-black tracking-tighter mb-6 block">
              NORTHLUX<span className="text-brand-gold">.</span>
            </Link>
            <p className="text-white/60 max-w-md text-lg leading-relaxed mb-8">
              GTA's leading modernization firm specializing in high-end black window transformations and architectural entry systems. Engineered for efficiency, designed for luxury.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-brand-gold hover:text-brand-black transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-black uppercase tracking-widest text-sm mb-6">Navigation</h4>
            <ul className="space-y-4 text-white/60 font-bold uppercase text-xs tracking-widest">
              <li><Link to="/" className="hover:text-brand-gold transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-brand-gold transition-colors">Services</Link></li>
              <li><Link to="/quote-auditor" className="hover:text-brand-gold transition-colors">Quote Auditor</Link></li>
              <li><Link to="/visual-audit" className="hover:text-brand-gold transition-colors">Visual Audit</Link></li>
              <li><Link to="/safety" className="hover:text-brand-gold transition-colors">Safety Policy</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-sm mb-6">Contact</h4>
            <ul className="space-y-4 text-white/60 font-bold uppercase text-xs tracking-widest">
              <li className="flex items-center gap-2">647.451.6961 <ArrowUpRight size={12} /></li>
              <li className="flex items-center gap-2">quotes@northlux.ca <ArrowUpRight size={12} /></li>
              <li>Toronto, ON</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
          <div>© 2026 NORTHLUX WINDOWS & DOORS. ALL RIGHTS RESERVED.</div>
        </div>
      </div>
    </footer>
  );
}
