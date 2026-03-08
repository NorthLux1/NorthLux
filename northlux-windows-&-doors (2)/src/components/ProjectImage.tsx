import React from 'react';
import { cn } from '../lib/utils';

interface ProjectImageProps {
  defaultSrc: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  storageKey?: string;
}

export default function ProjectImage({ defaultSrc, alt, className, aspectRatio = "aspect-video", storageKey }: ProjectImageProps) {
  const [error, setError] = React.useState(false);
  const [previewSrc, setPreviewSrc] = React.useState<string | null>(null);
  const [triedDefault, setTriedDefault] = React.useState(false);

  // Load from storage if key provided
  React.useEffect(() => {
    if (storageKey) {
      const saved = localStorage.getItem(storageKey);
      if (saved) setPreviewSrc(saved);
    }
  }, [storageKey]);

  // Reset error state when source changes
  React.useEffect(() => {
    setError(false);
    setTriedDefault(false);
  }, [defaultSrc, previewSrc]);

  const handleImageError = () => {
    if (previewSrc && !triedDefault) {
      // If preview failed, try default
      setPreviewSrc(null);
      setTriedDefault(true);
    } else {
      setError(true);
    }
  };

  return (
    <div 
      className={cn(
        "relative overflow-hidden bg-gray-100 flex items-center justify-center group",
        aspectRatio,
        className
      )}
    >
      {!error ? (
        <img 
          src={previewSrc || defaultSrc} 
          alt={alt} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 locked-image"
          referrerPolicy="no-referrer"
          onError={handleImageError}
        />
      ) : (
        <div className="text-brand-slate/20 flex flex-col items-center">
          <span className="text-[10px] font-black uppercase tracking-widest">Image Unavailable</span>
        </div>
      )}
      <div className="absolute inset-0 bg-brand-gold/0 group-hover:bg-brand-gold/5 transition-colors pointer-events-none border-2 border-transparent group-hover:border-brand-gold/20" />
    </div>
  );
}
