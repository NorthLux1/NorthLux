import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, TrendingUp, Zap, Building2, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectImage from '../components/ProjectImage';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-black">
        <div className="absolute inset-0 z-0">
          <ProjectImage 
            defaultSrc="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920" 
            alt="Modern Architectural Fenestration Hero" 
            className="w-full h-full opacity-60 brightness-[0.6]"
            aspectRatio="h-full"
            storageKey="hero_image"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-black/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-gold font-bold tracking-[0.3em] uppercase mb-4"
          >
            GTA's Premier Modernization Firm
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-black mb-8 leading-tight"
          >
            MODERN <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-gold">AESTHETICS</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <Link to="/contact" className="btn-primary flex items-center gap-2">
              Get Your Modernization Quote <ArrowRight size={20} />
            </Link>
            <Link to="/visual-audit" className="btn-outline border-white text-white hover:bg-white hover:text-brand-black">
              Request Modernization Audit
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Certification & Compliance Row */}
      <section className="bg-white py-16 border-b border-black/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-slate opacity-40">Certified Industry Excellence</span>
        </div>
        <div className="relative">
          {/* Gradient Masks for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          
          <motion.div 
            className="flex items-center whitespace-nowrap w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {[...Array(2)].map((_, pairIndex) => (
              <React.Fragment key={pairIndex}>
                {[
                  { name: "CSA Certified", sub: "A440.2 Standard", icon: "CSA" },
                  { name: "ENERGY STAR®", sub: "2026 Compliant", icon: "STAR" },
                  { name: "WSIB Ontario", sub: "Fully Compliant", icon: "WSIB" },
                  { name: "Gold Seal", sub: "Project Excellence", icon: "GOLD" }
                ].map((badge, i) => (
                  <div key={`${pairIndex}-${i}`} className="flex items-center gap-4 group cursor-default pr-12 md:pr-24">
                    <div className="relative">
                      <div className="w-14 h-14 bg-brand-black flex items-center justify-center text-white font-black text-[10px] uppercase tracking-tighter group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-300 transform group-hover:rotate-12 animate-shimmer">
                        {badge.icon}
                      </div>
                      <div className="absolute -inset-1 border border-brand-gold/0 group-hover:border-brand-gold/50 transition-all duration-500 scale-110 opacity-0 group-hover:opacity-100" />
                    </div>
                    <div className="flex flex-col">
                      <div className="text-xs font-black uppercase tracking-widest text-brand-black group-hover:text-brand-gold transition-colors">{badge.name}</div>
                      <div className="text-[9px] uppercase tracking-widest text-brand-slate opacity-60">{badge.sub}</div>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Proven Track Record Section */}
      <section className="py-24 bg-brand-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 text-brand-gold mb-6">
                <Building2 size={32} />
                <span className="font-black uppercase tracking-[0.3em] text-sm">Institutional Authority</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">PROVEN TRACK <br /> RECORD</h2>
              <p className="text-xl text-white/60 mb-8 leading-relaxed">
                We don't just modernize homes; we build the infrastructure of the GTA. NorthLux specializes in large-scale structural projects for <span className="text-white font-bold">York Region</span> and the <span className="text-white font-bold">Toronto District School Board (TDSB)</span>.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="border-l-2 border-brand-gold pl-6">
                  <div className="text-3xl font-black mb-1">$600K - $2.1M</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-60">Project Value Range</div>
                </div>
                <div className="border-l-2 border-brand-gold pl-6">
                  <div className="text-3xl font-black mb-1">Institutional</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-60">Precision Standards</div>
                </div>
              </div>
              <p className="text-sm italic text-white/40">
                "Our experience in high-stakes institutional environments is why we bring a higher level of precision, safety, and structural integrity to every residential modernization we touch."
              </p>
            </motion.div>
            <div className="relative">
              <ProjectImage 
                defaultSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
                alt="Institutional Project Excellence" 
                className="w-full h-[600px]"
                aspectRatio="h-full"
                storageKey="institutional_image"
              />
              <div className="absolute -bottom-8 -left-8 bg-brand-gold text-brand-black p-8 hidden md:block">
                <Award size={48} className="mb-4" />
                <div className="font-black uppercase tracking-widest text-sm">Certified <br /> Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black mb-6">The $50k+ Equity Gain</h2>
              <p className="text-lg text-brand-slate mb-8 leading-relaxed">
                Upgrading to industrial-grade modern fenestration isn't just an aesthetic choice—it's a high-yield investment. GTA homeowners report an average property value increase of over $50,000 immediately following a NorthLux transformation.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: <TrendingUp className="text-brand-gold" />, text: "Instant Curb Appeal & Market Value Boost" },
                  { icon: <Zap className="text-brand-gold" />, text: "Triple-Pane Thermal Efficiency (Save 35% on Energy)" },
                  { icon: <ShieldCheck className="text-brand-gold" />, text: "Industrial-Grade Security Standards" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 font-bold uppercase tracking-wider text-sm">
                    {item.icon} {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative group cursor-pointer overflow-hidden">
              <div className="grid grid-cols-2 gap-2">
                <div className="relative">
                  <span className="absolute top-4 left-4 z-10 bg-brand-black text-white px-3 py-1 text-xs font-bold uppercase">Before</span>
                  <ProjectImage 
                    defaultSrc="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800" 
                    alt="Traditional Red Brick House Before Transformation" 
                    className="w-full h-[500px]"
                    aspectRatio="h-full"
                    storageKey="before_image"
                  />
                </div>
                <div className="relative">
                  <span className="absolute top-4 left-4 z-10 bg-brand-gold text-brand-black px-3 py-1 text-xs font-bold uppercase">After</span>
                  <ProjectImage 
                    defaultSrc="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&q=80&w=800" 
                    alt="Modern Black Frame Windows on Brick After Transformation" 
                    className="w-full h-[500px]"
                    aspectRatio="h-full"
                    storageKey="after_image"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-all flex items-center justify-center pointer-events-none">
                <div className="bg-white p-4 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="text-brand-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-brand-black py-20 text-white border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Equity Gain", value: "$50K+" },
            { label: "Installations", value: "1,200+" },
            { label: "Energy Savings", value: "35%" },
            { label: "Safety Rating", value: "100%" }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-4xl md:text-6xl font-black text-brand-gold mb-2">{stat.value}</div>
              <div className="text-xs uppercase tracking-[0.2em] opacity-60 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
