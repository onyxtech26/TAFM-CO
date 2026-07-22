/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  CheckCircle2, 
  Navigation,
  Globe2,
  Clock 
} from 'lucide-react';
import { FIRM_INFO } from '../data';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Form state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!name.trim()) tempErrors.name = "Your name is required";
    if (!phone.trim()) tempErrors.phone = "Phone number is required";
    if (!email.trim()) {
      tempErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Enter a valid email address";
    }
    if (!subject.trim()) tempErrors.subject = "Subject is required";
    if (!message.trim()) tempErrors.message = "Message details are required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setName('');
        setPhone('');
        setEmail('');
        setSubject('');
        setMessage('');
        setErrors({});
      }, 4000);
    }
  };

  // Pre-configured WhatsApp redirection
  const handleWhatsAppRedirect = () => {
    const encodedMsg = encodeURIComponent(FIRM_INFO.whatsapp.message);
    window.open(`https://wa.me/${FIRM_INFO.whatsapp.number}?text=${encodedMsg}`, '_blank');
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-transparent border-t border-neutral-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header (Inverted to Black) */}
        <div className="text-center md:text-left mb-16 md:mb-20 max-w-3xl" id="contact-header">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 justify-center md:justify-start mb-3"
          >
            <div className="h-[1px] w-10 bg-luxury-gold" />
            <span className="font-sans text-xs tracking-[0.4em] text-luxury-gold uppercase font-bold">
              Contact Directory
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 mb-6"
          >
            Connect With Our Chambers
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[1.5px] bg-luxury-gold mb-6 mx-auto md:mx-0"
          />
        </div>

        {/* Contact Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start" id="contact-grid">
          
          {/* Left Column: Direct Directories & Interactive Map */}
          <div className="lg:col-span-5 space-y-8" id="contact-directories">
            
            {/* Firm info cards (Glass Layout in White-theme) */}
            <div className="glass p-8 rounded-xs space-y-6 relative border-t-2 border-l-0 border-r-0 border-b-0 border-t-luxury-gold shadow-md">
              
              <div className="flex flex-col mb-4">
                <span className="font-serif text-lg font-bold text-neutral-900 tracking-widest uppercase">
                  TETUAN AMIN FIRDAUS
                </span>
                <span className="font-sans text-xs tracking-[0.3em] text-luxury-gold font-bold uppercase mt-1">
                  MASHUDI & CO.
                </span>
              </div>

              <div className="h-[1px] bg-neutral-200 w-full" />

              {/* Physical Address */}
              <div className="flex gap-4 items-start text-left">
                <div className="p-2 bg-gold-600/10 border border-gold-600/20 text-luxury-gold rounded-xs shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-xs font-bold text-neutral-900 uppercase tracking-wider mb-1.5">Registered Office</span>
                  <a 
                    href={`https://maps.google.com/?q=${encodeURIComponent('22 Lorong Berjaya Permai 30 Kempadang Kuantan Pahang')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="group/addr text-left"
                  >
                    <address className="font-sans text-xs text-neutral-700 hover:text-luxury-gold transition-colors not-italic leading-relaxed font-light">
                      {FIRM_INFO.address.line1}<br />
                      {FIRM_INFO.address.line2}<br />
                      {FIRM_INFO.address.line3}<br />
                      {FIRM_INFO.address.city} {FIRM_INFO.address.state}
                    </address>
                    <span className="inline-flex items-center gap-1.5 font-sans text-[10px] text-luxury-gold hover:text-gold-700 transition-colors uppercase font-bold mt-2.5">
                      <Navigation className="w-3 h-3 animate-pulse" />
                      Launch Navigation
                    </span>
                  </a>
                </div>
              </div>

              {/* Direct Telephone Numbers */}
              <div className="flex gap-4 items-start text-left">
                <div className="p-2 bg-gold-600/10 border border-gold-600/20 text-luxury-gold rounded-xs shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="font-serif text-xs font-bold text-neutral-900 uppercase tracking-wider mb-0.5">Telephone Directory</span>
                  {FIRM_INFO.contacts.map((contact, idx) => (
                    <a 
                      key={idx} 
                      href={contact.url}
                      className="font-sans text-xs text-neutral-700 hover:text-luxury-gold transition-colors font-medium flex items-center gap-1.5"
                    >
                      {contact.value}
                      <span className="text-[10px] text-neutral-500 font-sans italic">({contact.label})</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Electronic Mail */}
              <div className="flex gap-4 items-start text-left">
                <div className="p-2 bg-gold-600/10 border border-gold-600/20 text-luxury-gold rounded-xs shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-xs font-bold text-neutral-900 uppercase tracking-wider mb-1">Corporate Inbox</span>
                  <a 
                    href={`mailto:${FIRM_INFO.email}`}
                    className="font-sans text-xs text-neutral-700 hover:text-luxury-gold transition-colors font-semibold"
                  >
                    {FIRM_INFO.email}
                  </a>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex gap-4 items-start text-left">
                <div className="p-2 bg-gold-600/10 border border-gold-600/20 text-luxury-gold rounded-xs shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-xs font-bold text-neutral-900 uppercase tracking-wider mb-1">Chamber Hours</span>
                  <p className="font-sans text-xs text-neutral-700 font-light">
                    Monday – Friday: 9:00 AM – 5:30 PM<br />
                    <span className="text-[10px] text-luxury-gold/90 font-semibold">Weekends & Public Holidays: By appointment only</span>
                  </p>
                </div>
              </div>

            </div>

            {/* Interactive Location Map Container */}
            <div className="glass p-6 rounded-xs relative group shadow-sm" id="chambers-map-widget">
              <div className="flex items-center justify-between mb-3 border-b border-neutral-200 pb-3">
                <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-luxury-gold" />
                  <span className="font-serif text-xs font-bold text-neutral-900 uppercase tracking-wider">Chambers Geography</span>
                </div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent('22 Lorong Berjaya Permai 30 Kempadang Kuantan Pahang')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 font-sans text-[10px] text-luxury-gold hover:text-gold-700 transition-colors uppercase font-bold"
                >
                  <Navigation className="w-3 h-3" />
                  Google Maps
                </a>
              </div>

              {/* Styled Mock light Map Screen */}
              <div className="relative w-full h-[180px] bg-white border border-neutral-200 rounded-xs overflow-hidden flex flex-col items-center justify-center text-center shadow-inner">
                
                {/* Abstract Line / grid design representing map vectors */}
                <div className="absolute inset-0 opacity-[0.2] pointer-events-none"
                     style={{
                       backgroundImage: 'radial-gradient(circle, #c9a227 1px, transparent 1px), linear-gradient(0deg, transparent 24px, rgba(201,162,39,0.1) 25px, transparent 26px)',
                       backgroundSize: '32px 32px, 25px 25px'
                     }}
                />

                {/* Simulated courthouse marker */}
                <div className="relative z-10 flex flex-col items-center">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="w-10 h-10 rounded-full bg-gold-600/10 border border-luxury-gold flex items-center justify-center shadow-md shadow-neutral-200/50 mb-3"
                  >
                    <MapPin className="w-5 h-5 text-luxury-gold" />
                  </motion.div>
                  
                  <span className="font-serif text-[11px] text-neutral-900 tracking-wide font-bold">Tetuan Amin Firdaus Mashudi & Co.</span>
                  <span className="font-sans text-[8.5px] text-neutral-500 uppercase tracking-widest mt-0.5">Kempadang, Kuantan, Pahang</span>
                </div>

                {/* Quick Map Action Button Overlay */}
                <div className="absolute bottom-3 right-3 z-10">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent('22 Lorong Berjaya Permai 30 Kempadang Kuantan Pahang')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1.5 bg-neutral-100 hover:bg-luxury-gold hover:text-black border border-neutral-300 rounded-xs text-[9px] font-sans font-bold text-neutral-800 uppercase tracking-widest transition-colors shadow-sm"
                  >
                    Launch Navigation
                  </a>
                </div>

              </div>
            </div>

            {/* Direct WhatsApp Quick-Chat Button */}
            <button
              onClick={handleWhatsAppRedirect}
              className="w-full py-4 bg-emerald-600/10 hover:bg-emerald-600/15 border border-emerald-500/30 hover:border-emerald-500 text-emerald-700 font-sans text-xs font-bold uppercase tracking-[0.2em] rounded-xs transition-all duration-300 flex items-center justify-center gap-3 shadow-md group cursor-pointer"
              id="whatsapp-chat-button"
            >
              <MessageCircle className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform duration-500" />
              Chat on WhatsApp Now
            </button>

          </div>

          {/* Right Column: Interactive Consultation Inquiry Form */}
          <div className="lg:col-span-7" id="contact-form-column">
            
            <div className="glass p-8 md:p-10 rounded-xs relative border-l-2 border-l-luxury-gold shadow-sm">
              
              <div className="text-left border-b border-neutral-200 pb-4 mb-8">
                <h3 className="font-serif text-lg text-neutral-900 font-bold tracking-wide">
                  Transmit Legal Dossier
                </h3>
                <p className="font-sans text-xs text-neutral-600 font-light mt-1">
                  Fill out our priority communication channel. Confidentiality is fully assured.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="priority-inquiry-form"
                    onSubmit={handleInquirySubmit}
                    className="space-y-6 text-left"
                  >
                    
                    {/* Input Row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="font-sans text-[10px] tracking-wider text-neutral-700 uppercase font-semibold block mb-2">
                          Your Full Name <span className="text-luxury-gold">*</span>
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className={`w-full px-4 py-3 bg-white border rounded-xs text-neutral-900 font-sans text-xs focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/50 transition-all ${
                            errors.name ? 'border-red-500' : 'border-neutral-300'
                          }`}
                          placeholder="e.g. Ahmad bin Ibrahim"
                        />
                        {errors.name && <span className="text-[10px] text-red-500 font-sans mt-1 block font-medium">{errors.name}</span>}
                      </div>

                      <div>
                        <label className="font-sans text-[10px] tracking-wider text-neutral-700 uppercase font-semibold block mb-2">
                          Telephone Directory <span className="text-luxury-gold">*</span>
                        </label>
                        <input
                          type="text"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className={`w-full px-4 py-3 bg-white border rounded-xs text-neutral-900 font-sans text-xs focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/50 transition-all ${
                            errors.phone ? 'border-red-500' : 'border-neutral-300'
                          }`}
                          placeholder="e.g. 0102520859"
                        />
                        {errors.phone && <span className="text-[10px] text-red-500 font-sans mt-1 block font-medium">{errors.phone}</span>}
                      </div>
                    </div>

                    {/* Input Row 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="font-sans text-[10px] tracking-wider text-neutral-700 uppercase font-semibold block mb-2">
                          Email Address <span className="text-luxury-gold">*</span>
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className={`w-full px-4 py-3 bg-white border rounded-xs text-neutral-900 font-sans text-xs focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/50 transition-all ${
                            errors.email ? 'border-red-500' : 'border-neutral-300'
                          }`}
                          placeholder="e.g. ahmad@gmail.com"
                        />
                        {errors.email && <span className="text-[10px] text-red-500 font-sans mt-1 block font-medium">{errors.email}</span>}
                      </div>

                      <div>
                        <label className="font-sans text-[10px] tracking-wider text-neutral-700 uppercase font-semibold block mb-2">
                          Legal Dossier Subject <span className="text-luxury-gold">*</span>
                        </label>
                        <input
                          type="text"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          className={`w-full px-4 py-3 bg-white border rounded-xs text-neutral-900 font-sans text-xs focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/50 transition-all ${
                            errors.subject ? 'border-red-500' : 'border-neutral-300'
                          }`}
                          placeholder="e.g. Real estate purchase / Business compliance"
                        />
                        {errors.subject && <span className="text-[10px] text-red-500 font-sans mt-1 block font-medium">{errors.subject}</span>}
                      </div>
                    </div>

                    {/* Inquiry Message Text */}
                    <div>
                      <label className="font-sans text-[10px] tracking-wider text-neutral-700 uppercase font-semibold block mb-2">
                        Particulars of Inquiry <span className="text-luxury-gold">*</span>
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={5}
                        className={`w-full px-4 py-3 bg-white border rounded-xs text-neutral-900 font-sans text-xs focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/50 transition-all resize-none ${
                          errors.message ? 'border-red-500' : 'border-neutral-300'
                        }`}
                        placeholder="Please detail your legal situation, timeline, and requested remedy..."
                      />
                      {errors.message && <span className="text-[10px] text-red-500 font-sans mt-1 block font-medium">{errors.message}</span>}
                    </div>

                    {/* Ethical disclaimer and submit */}
                    <div className="space-y-4 pt-4 border-t border-neutral-200">
                      <p className="font-sans text-[10px] text-neutral-500 leading-relaxed font-light">
                        By submitting this inquiry, you agree that Tetuan Amin Firdaus Mashudi & Co. may contact you in response to your request. Your submittal is processed in compliance with the Personal Data Protection Act (PDPA) 2010 of Malaysia.
                      </p>

                      <button
                        type="submit"
                        className="w-full py-4 gold-gradient text-black font-bold text-sm uppercase tracking-widest hover:scale-[1.01] transition-transform duration-300 cursor-pointer shadow-md"
                      >
                        Transmit Dossier Now
                      </button>
                    </div>

                  </motion.form>
                ) : (
                  <motion.div
                    key="inquiry-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <CheckCircle2 className="w-16 h-16 text-luxury-gold mb-6 animate-pulse" />
                    
                    <h3 className="font-serif text-2xl text-neutral-900 font-bold tracking-wide mb-3">
                      Dossier Received
                    </h3>
                    
                    <p className="font-sans text-sm text-neutral-600 leading-relaxed font-light max-w-sm mb-6">
                      Your inquiry has been catalogued in our secure registry. Muhammad Amin Firdaus Bin Mashudi will personally address your submission within 24 business hours.
                    </p>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2 bg-neutral-100 border border-luxury-gold/20 hover:border-luxury-gold text-neutral-800 font-sans text-[10px] font-bold uppercase tracking-wider rounded-xs transition-colors"
                    >
                      Draft New Transmission
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
