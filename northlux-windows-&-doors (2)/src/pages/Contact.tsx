import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, CheckCircle2, Loader2 } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.target as HTMLFormElement);

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
        setStatus('success');
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (error) {
      console.error("Form Error:", error);
      alert("There was an error sending your inquiry. Please try again.");
      setStatus('idle');
    }
  };

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h1 className="text-5xl font-black mb-8">Get Your Modernization Quote</h1>
            <p className="text-xl text-brand-slate mb-12">
              Ready to increase your property value? Contact our GTA modernization specialists today for a detailed consultation.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6">
                <div className="bg-brand-black text-white p-4">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-brand-slate">Call Us</div>
                  <div className="text-xl font-bold">647-451-6961</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="bg-brand-black text-white p-4">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-brand-slate">Email Us</div>
                  <div className="text-xl font-bold">quotes@northlux.ca</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="bg-brand-black text-white p-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-brand-slate">Showroom</div>
                  <div className="text-xl font-bold italic text-brand-gold">Coming Soon</div>
                </div>
              </div>
            </div>

            </div>

          <div className="bg-brand-black p-8 md:p-12 text-white shadow-2xl">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle2 size={64} className="text-brand-gold mx-auto mb-6" />
                <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">Inquiry Received</h2>
                <p className="text-white/80 leading-relaxed mb-8 text-sm md:text-base">
                  Project details received. We are reviewing your architectural requirements. As a firm committed to York Region safety standards, we confirm all site visits and installations strictly adhere to our engineered anchor point tie-off protocols.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="py-4 px-8 border border-white/20 text-white font-black uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-brand-black transition-all duration-300"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="access_key" value="f4b1f685-79d5-4fd8-b056-06daabceca74" />
                <input type="hidden" name="subject" value="New Modernization Inquiry - NorthLux" />
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-white/60">Full Name</label>
                  <input required name="Customer Name" type="text" className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-brand-gold transition-colors" placeholder="Jane Smith" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-white/60">Email Address</label>
                    <input required name="Email Address" type="email" className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-brand-gold transition-colors" placeholder="jane@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-white/60">Phone Number</label>
                    <input required name="Phone Number" type="tel" className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-brand-gold transition-colors" placeholder="(647) 451-6961" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-white/60">Service Interest</label>
                  <select name="Service Requested" className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-brand-gold transition-colors appearance-none">
                    <option className="bg-brand-black">NorthLux Windows</option>
                    <option className="bg-brand-black">NorthLux Entry Doors</option>
                    <option className="bg-brand-black">NorthLux Garage Doors</option>
                    <option className="bg-brand-black">Full Exterior Package</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-white/60">Message</label>
                  <textarea required name="Project Details/Notes" rows={4} className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-brand-gold transition-colors" placeholder="Tell us about your project..."></textarea>
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
                    "Send Inquiry"
                  )}
                </button>
              </form>
            )}

            <div className="mt-12 p-8 border border-white/10 bg-white/5">
              <h3 className="text-sm font-black uppercase tracking-widest mb-4 text-brand-gold">Service Area</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                NorthLux proudly serves the Greater Toronto Area (GTA), including Toronto, Mississauga, Brampton, Vaughan, Markham, and Richmond Hill.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
