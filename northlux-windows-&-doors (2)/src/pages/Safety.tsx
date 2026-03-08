import React from 'react';
import { motion } from 'motion/react';
import { Shield, Anchor, CheckCircle, AlertTriangle, HardHat } from 'lucide-react';

import ProjectImage from '../components/ProjectImage';

export default function Safety() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 text-brand-gold mb-4">
            <HardHat size={24} />
            <span className="font-black uppercase tracking-[0.3em] text-sm">Institutional Standards</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase">Industrial Safety <br /> For Your Family Home</h1>
          <p className="text-xl text-brand-slate max-w-3xl">
            We bring the same rigorous safety protocols used in our multi-million dollar TDSB and York Region projects to your residential modernization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <ProjectImage 
              defaultSrc="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200"
              storageKey="persistent_safety_photo"
              alt="Professional Fall Protection Gear"
              className="w-full h-[600px]"
              aspectRatio="h-full"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-black mb-8 uppercase">Zero-Liability Policy</h2>
            <p className="text-lg text-brand-slate mb-8 leading-relaxed">
              At NorthLux, high-end craftsmanship is inseparable from institutional safety. Our "Zero-Liability" policy ensures that homeowners are never exposed to legal or financial risk during the modernization process.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="bg-brand-black text-white p-4 h-fit">
                  <Anchor size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-black mb-2 uppercase">Engineered Anchor Points</h3>
                  <p className="text-brand-slate">
                    For any work at height, our installers are mandated to tie off to engineered anchor points. We do not rely on temporary solutions; we ensure structural integrity before the first window is removed.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-brand-black text-white p-4 h-fit">
                  <Shield size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-black mb-2 uppercase">Institutional WSIB Coverage</h3>
                  <p className="text-brand-slate">
                    Every member of the NorthLux team is fully insured and covered by WSIB. We provide clearance certificates for every project, guaranteeing zero liability for the property owner.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-1 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-black text-white p-12 shadow-2xl"
          >
            <h2 className="text-3xl font-black mb-8 border-b border-white/20 pb-4 uppercase">Safety Protocol Checklist</h2>
            <ul className="space-y-6">
              {[
                "Mandatory Fall Protection Training (Working at Heights)",
                "Daily Site Safety Audits & Hazard Assessments",
                "Industrial-Grade Scaffolding & Lift Equipment",
                "Strict Adherence to Ontario OHSA Standards",
                "Zero-Tolerance PPE Compliance Policy"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle className="text-brand-gold shrink-0" size={24} />
                  <span className="font-bold uppercase tracking-wider text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 p-8 border-2 border-brand-gold bg-brand-gold/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-brand-gold text-brand-black px-4 py-1 text-[10px] font-black uppercase tracking-widest">Mandatory Protocol</div>
              <div className="flex items-center gap-4 mb-4 text-brand-gold">
                <AlertTriangle size={32} />
                <h3 className="text-2xl font-black uppercase tracking-tight">Safety Standards</h3>
              </div>
              <p className="text-white/80 italic mb-6 text-lg leading-relaxed">
                "Hiring uninsured or non-compliant contractors exposes you to massive legal and financial risk. NorthLux eliminates that risk entirely through institutionalized safety standards."
              </p>
              <div className="pt-6 border-t border-brand-gold/20">
                <div className="text-sm font-black uppercase tracking-[0.2em] text-brand-gold flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                  Our teams strictly adhere to industrial standards, ensuring every installer is tied off to an engineered anchor point when working at heights.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
