import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Palette } from 'lucide-react';

import ProjectImage from '../components/ProjectImage';

const servicesData = [
  {
    id: 'windows',
    title: "NorthLux Windows",
    defaultSrc: "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?auto=format&fit=crop&q=80&w=1200",
    storageKey: "saved_window_img",
    description: "Our window systems are engineered for the extreme Canadian climate. While we specialize in high-contrast modern black, we provide a full spectrum of architectural colors and finishes to match any vision.",
    features: ["Triple-Pane Efficiency", "Custom Architectural Colors", "Institutional Precision"]
  },
  {
    id: 'doors',
    title: "NorthLux Entry Doors",
    defaultSrc: "https://images.unsplash.com/photo-1506377585622-bedcbb027afc?auto=format&fit=crop&q=80&w=1200",
    storageKey: "saved_door_img",
    description: "Architectural entry systems that combine high-security cores with minimalist design. From oversized pivot doors to modern steel systems, we redefine your home's first impression.",
    features: ["Smart Lock Integration", "Thermal Break Technology", "High-Security Standards"]
  },
  {
    id: 'garage',
    title: "NorthLux Garage Doors",
    defaultSrc: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&q=80&w=1200",
    storageKey: "saved_garage_img",
    description: "Transform your garage into a high-end studio or showroom. Our high-lift tracks and full-view glass panels bring industrial modern aesthetics to residential properties.",
    features: ["Tempered Safety Glass", "Silent Drive Systems", "Weather-Tight Seals"]
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <div className="flex items-center gap-3 text-brand-gold mb-4">
            <Palette size={24} />
            <span className="font-black uppercase tracking-[0.3em] text-sm">Design Philosophy</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase">Modern <br /> Transformations</h1>
          <p className="text-xl text-brand-slate max-w-3xl">
            We specialize in complete exterior modernization. While we are the GTA's authority on the "Modern Black" aesthetic, our engineering standards apply to a full range of contemporary styles and colors.
          </p>
        </div>

        <div className="space-y-32">
          {servicesData.map((service, index) => {
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`service-section ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 w-full">
                  <ProjectImage 
                    defaultSrc={service.defaultSrc}
                    storageKey={service.storageKey}
                    alt={service.title}
                    className="aspect-video"
                  />
                </div>
                <div className="flex-1 space-y-8">
                  <span className="text-brand-gold font-black tracking-[0.3em] uppercase text-sm">0{index + 1} / Service</span>
                  <h2 className="text-4xl font-black uppercase">{service.title}</h2>
                  <p className="text-lg text-brand-slate leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 gap-4">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3 font-bold uppercase tracking-widest text-xs">
                        <div className="w-2 h-2 bg-brand-gold" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                    Inquire Now <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
