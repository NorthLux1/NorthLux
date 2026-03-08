import React from 'react';
import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
  light?: boolean;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className, light = false, showTagline = false, size = 'md' }: LogoProps) {
  const sizes = {
    sm: { icon: 'w-8 h-6', text: 'text-sm', square: 'w-1 h-1' },
    md: { icon: 'w-12 h-10', text: 'text-xl', square: 'w-2 h-2' },
    lg: { icon: 'w-20 h-16', text: 'text-3xl', square: 'w-3 h-3' }
  };

  const currentSize = sizes[size];

  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      {/* Window Icon */}
      <svg 
        viewBox="0 0 100 80" 
        className={cn(currentSize.icon, "mb-1 text-brand-gold")}
        fill="none" 
        stroke="currentColor" 
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Left Pane (Perspective) */}
        <path d="M15 25 L45 20 V65 L15 75 Z" />
        <line x1="15" y1="50" x2="45" y2="42.5" />
        <line x1="30" y1="22.5" x2="30" y2="70" />
        
        {/* Right Pane (Open/Angled) */}
        <path d="M55 20 L85 10 V60 L55 75 Z" />
      </svg>
      
      <div className="flex flex-col items-center leading-[0.9]">
        <span className={cn(
          currentSize.text, 
          "font-black tracking-[0.05em] uppercase", 
          light ? "text-white" : "text-brand-black"
        )}>
          LUXEVIEW
        </span>
        <div className="flex items-center gap-1">
          <span className={cn(
            currentSize.text, 
            "font-black tracking-[0.05em] uppercase", 
            light ? "text-white" : "text-brand-black"
          )}>
            WINDOWS
          </span>
          <div className={cn(currentSize.square, "bg-brand-gold self-end mb-1")} />
        </div>
      </div>

      {showTagline && (
        <div className={cn(
          "mt-4 text-[10px] font-bold uppercase tracking-[0.25em]",
          light ? "text-white/40" : "text-brand-black/40"
        )}>
          EST. 2024 <span className="text-editorial lowercase italic text-brand-gold tracking-normal normal-case mx-2">Professional</span> Windows
        </div>
      )}
    </div>
  );
}
