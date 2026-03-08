import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Loader2, MessageSquare } from 'lucide-react';

export default function VisualAudit() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [clientInfo, setClientInfo] = useState<{ code: string, name: string, address: string } | null>(null);

  const generateClientCode = (name: string) => {
    const prefix = name.replace(/[^a-zA-Z]/g, '').substring(0, 3).toUpperCase() || 'CUST';
    const random = Math.floor(1000 + Math.random() * 9000);
    return `NL-${prefix}-${random}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const name = formData.get('Customer Name') as string;
    const address = formData.get('Property Address') as string;
    const code = generateClientCode(name);
    
    // Add the code to the form data so it's sent to the business
    formData.append('Client Code', code);

    setStatus('loading');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Accept": "application/json",
        },
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        setClientInfo({ code, name, address });
        setStatus('success');
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (error: any) {
      console.error('Audit Error:', error);
      alert(error.message || 'There was an error submitting your audit. Please try again.');
      setStatus('idle');
    }
  };

  return (
    <div className="pt-32 pb-24 bg-brand-black min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-[clamp(2rem,6vw,4rem)] font-black mb-6 uppercase">Modernization Audit</h1>
          <p className="text-[clamp(1rem,2vw,1.25rem)] text-white/60 max-w-2xl mx-auto">
            Provide your property details below. Our design team will review your architectural requirements and prepare a comprehensive modernization brief.
          </p>
        </motion.div>

        <div className="bg-white text-brand-black p-8 md:p-12 shadow-2xl">
          {status === 'success' && clientInfo ? (
            <div className="text-center py-8">
              <CheckCircle2 size={64} className="text-brand-gold mx-auto mb-6" />
              <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-black mb-4 uppercase tracking-tight">Project Brief Received</h2>
              
              <div className="bg-brand-black text-white p-6 rounded-lg mb-8 max-w-md mx-auto">
                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2">Your Unique Client Code</p>
                <p className="text-3xl font-black text-brand-gold tracking-widest">{clientInfo.code}</p>
              </div>

              <div className="space-y-6 mb-10">
                <div className="bg-brand-cream p-6 border-l-4 border-brand-gold text-left">
                  <div className="flex items-center gap-3 mb-3 text-brand-black">
                    <MessageSquare size={20} className="text-brand-gold" />
                    <h3 className="font-black uppercase text-sm tracking-wider">Next Step: WhatsApp Photos</h3>
                  </div>
                  <p className="text-sm text-brand-slate leading-relaxed mb-4">
                    To expedite your modernization audit, please WhatsApp us photos of the project area. 
                    <span className="block mt-2 font-bold text-brand-black">
                      Please include your Client Code ({clientInfo.code}), Full Name, and Address in your message.
                    </span>
                  </p>
                  <a 
                    href={`https://wa.me/16470000000?text=${encodeURIComponent(`Hello NorthLux, my Client Code is ${clientInfo.code}. My name is ${clientInfo.name} and my address is ${clientInfo.address}. Here are the photos for my modernization audit:`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-3 px-6 bg-[#25D366] text-white font-black uppercase tracking-widest text-[10px] rounded hover:opacity-90 transition-opacity"
                  >
                    <MessageSquare size={16} /> Open WhatsApp
                  </a>
                </div>
              </div>

              <p className="text-[clamp(0.875rem,1.5vw,1rem)] text-brand-slate mb-8 leading-relaxed max-w-2xl mx-auto">
                We are reviewing your architectural requirements. As a firm committed to York Region safety standards, we confirm all site visits and installations strictly adhere to our engineered anchor point tie-off protocols.
              </p>
              
              <button 
                onClick={() => { setStatus('idle'); setClientInfo(null); }}
                className="text-xs font-black uppercase tracking-[0.2em] text-brand-slate hover:text-brand-black transition-colors"
              >
                Submit Another Audit
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <input type="hidden" name="access_key" value="f4b1f685-79d5-4fd8-b056-06daabceca74" />
              <input type="hidden" name="subject" value="New Modernization Audit - NorthLux" />
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
              <input type="hidden" name="Service Requested" value="Modernization Audit" />

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[clamp(0.6rem,1.2vw,0.75rem)] font-black uppercase tracking-widest">Full Name</label>
                  <input required name="Customer Name" type="text" className="w-full border-b-2 border-brand-black py-3 focus:outline-none focus:border-brand-gold transition-colors text-[clamp(0.875rem,1.5vw,1rem)]" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[clamp(0.6rem,1.2vw,0.75rem)] font-black uppercase tracking-widest">Email Address</label>
                  <input required name="Email Address" type="email" className="w-full border-b-2 border-brand-black py-3 focus:outline-none focus:border-brand-gold transition-colors text-[clamp(0.875rem,1.5vw,1rem)]" placeholder="john@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[clamp(0.6rem,1.2vw,0.75rem)] font-black uppercase tracking-widest">Property Address</label>
                <input required name="Property Address" type="text" className="w-full border-b-2 border-brand-black py-3 focus:outline-none focus:border-brand-gold transition-colors text-[clamp(0.875rem,1.5vw,1rem)]" placeholder="123 Bay St, Toronto, ON" />
              </div>

              <div className="space-y-2">
                <label className="text-[clamp(0.6rem,1.2vw,0.75rem)] font-black uppercase tracking-widest">Project Details/Notes</label>
                <textarea required name="Project Details/Notes" rows={6} className="w-full border-b-2 border-brand-black py-3 focus:outline-none focus:border-brand-gold transition-colors text-[clamp(0.875rem,1.5vw,1rem)]" placeholder="Tell us about your project goals, preferred styles, or specific areas of concern..."></textarea>
              </div>

              <button 
                disabled={status === 'loading'}
                className="w-full py-4 px-8 bg-gradient-to-r from-brand-gold to-[#D4AF37] text-brand-black font-black uppercase tracking-[0.2em] text-sm rounded-[6px] shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="animate-spin" /> Processing...
                  </>
                ) : (
                  "Request My Modernization Audit"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
