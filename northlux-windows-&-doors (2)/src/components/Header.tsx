import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Quote Auditor', path: '/quote-auditor' },
    { name: 'Modernization Audit', path: '/visual-audit' },
    { name: 'Safety', path: '/safety' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={cn(
        "sticky top-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-white/80 border-b border-black/5",
        isScrolled ? "py-3 shadow-md" : "py-5 shadow-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-black tracking-tighter flex items-center gap-2">
          <span className="text-brand-black">NORTHLUX</span>
          <span className="text-brand-gold">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-bold uppercase tracking-widest transition-colors text-brand-black hover:text-brand-gold",
                location.pathname === link.path && "text-brand-gold"
              )}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="tel:6474516961" 
            className="flex items-center gap-2 bg-brand-black text-white px-6 py-3 rounded-none font-bold text-sm tracking-widest hover:bg-brand-gold hover:text-brand-black transition-all"
          >
            <Phone size={16} />
            CALL NOW
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white/95 backdrop-blur-xl z-[100] flex flex-col items-center justify-center gap-8 md:hidden transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <button 
          className="absolute top-6 right-6 text-brand-black"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setIsMobileMenuOpen(false)}
            className={cn(
              "text-2xl font-black uppercase tracking-widest transition-colors",
              location.pathname === link.path ? "text-brand-gold" : "text-brand-black hover:text-brand-gold"
            )}
          >
            {link.name}
          </Link>
        ))}
        <a 
          href="tel:6474516961" 
          className="flex items-center gap-3 bg-brand-black text-white px-10 py-5 font-bold text-lg tracking-widest hover:bg-brand-gold hover:text-brand-black transition-all"
        >
          <Phone size={24} />
          CALL NOW
        </a>
      </div>
    </header>
  );
}
