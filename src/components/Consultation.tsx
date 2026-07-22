/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Clock, MessageSquare, CheckCircle2, X } from 'lucide-react';
import { SERVICES } from '../data';

export default function Consultation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [practice, setPractice] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Global listener to open consultation modal from Navbar
  useEffect(() => {
    const handleOpen = () => {
      setIsModalOpen(true);
    };
    window.addEventListener('open-consultation', handleOpen);
    return () => {
      window.removeEventListener('open-consultation', handleOpen);
    };
  }, []);

  const validateForm = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!name.trim()) tempErrors.name = "Full name is required";
    if (!phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\-\s]{8,15}$/.test(phone)) {
      tempErrors.phone = "Please enter a valid phone number";
    }
    if (!email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    if (!practice) tempErrors.practice = "Please select a practice area";
    if (!message.trim()) tempErrors.message = "Please describe your legal situation";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      // Clean form
      setTimeout(() => {
        setIsSubmitted(false);
        setIsModalOpen(false);
        setName('');
        setPhone('');
        setEmail('');
        setPractice('');
        setMessage('');
        setErrors({});
      }, 4000);
    }
  };

  return (
    <section id="consultation-cta" className="relative py-24 bg-transparent border-t border-neutral-100 overflow-hidden">
      
      {/* Decorative Gold Radial Beam */}
      <div className="absolute inset-0 bg-radial from-gold-600/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Call to Action Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-xs border border-luxury-gold/25 overflow-hidden shadow-xl bg-gradient-to-br from-neutral-50 via-white to-neutral-50 p-12 md:p-16 text-center"
        >
          {/* Internal corner lines for luxury drafting appearance */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-luxury-gold/40" />
          <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-luxury-gold/40" />
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-luxury-gold/40" />
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-luxury-gold/40" />

          {/* Subtitle Badge */}
          <span className="font-sans text-xs tracking-[0.4em] text-luxury-gold uppercase font-bold mb-4 inline-block">
            Confidential Legal Consultation
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-6">
            Facing A Legal Challenge?
          </h2>

          <p className="font-sans text-sm md:text-base text-neutral-600 leading-relaxed font-light max-w-2xl mx-auto mb-10">
            Speak with our legal team today and receive professional guidance tailored to your situation. We safeguard your data with standard-setting confidentiality.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-10 py-4 gold-gradient text-black font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform duration-300 inline-flex items-center gap-2.5 cursor-pointer shadow-md hover:shadow-luxury-gold/25"
            id="open-consultation-modal"
          >
            Request Consultation
          </button>
        </motion.div>

      </div>

      {/* Elegant consultation modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            id="consultation-modal"
          >
            {/* Modal Body Container (White-background with gold-border theme) */}
            <motion.div
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="relative w-full max-w-2xl bg-white p-8 rounded-xs overflow-hidden shadow-2xl border border-neutral-200 border-t-2 border-t-luxury-gold"
            >
              
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-black hover:bg-neutral-100 rounded-full transition-all focus:outline-none"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="consultation-form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="text-left border-b border-neutral-150 pb-4 mb-6">
                      <h3 className="font-serif text-xl text-neutral-900 font-bold tracking-wide">
                        Request Legal Consultation
                      </h3>
                      <p className="font-sans text-xs text-neutral-500 font-light mt-1">
                        Please provide essential details. Your information remains strictly private.
                      </p>
                    </div>

                    {/* Inputs Row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
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
                          Contact Number <span className="text-luxury-gold">*</span>
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

                    {/* Inputs Row 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
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
                          Practice Area <span className="text-luxury-gold">*</span>
                        </label>
                        <select
                          value={practice}
                          onChange={(e) => setPractice(e.target.value)}
                          className={`w-full px-4 py-3 bg-white border rounded-xs text-neutral-900 font-sans text-xs focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/50 transition-all appearance-none ${
                            errors.practice ? 'border-red-500' : 'border-neutral-300'
                          }`}
                        >
                          <option value="">Select Specialisation</option>
                          {SERVICES.map((serv) => (
                            <option key={serv.id} value={serv.title}>{serv.title}</option>
                          ))}
                        </select>
                        {errors.practice && <span className="text-[10px] text-red-500 font-sans mt-1 block font-medium">{errors.practice}</span>}
                      </div>
                    </div>

                    {/* Message Area */}
                    <div className="text-left">
                      <label className="font-sans text-[10px] tracking-wider text-neutral-700 uppercase font-semibold block mb-2">
                        Summary of your Legal Matter <span className="text-luxury-gold">*</span>
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        className={`w-full px-4 py-3 bg-white border rounded-xs text-neutral-900 font-sans text-xs focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/50 transition-all resize-none ${
                          errors.message ? 'border-red-500' : 'border-neutral-300'
                        }`}
                        placeholder="Briefly describe the timeline and essential facts..."
                      />
                      {errors.message && <span className="text-[10px] text-red-500 font-sans mt-1 block font-medium">{errors.message}</span>}
                    </div>

                    {/* Disclaimer */}
                    <div className="p-3.5 bg-gold-600/5 border border-gold-600/10 rounded-xs text-left">
                      <p className="font-sans text-[10px] text-neutral-600 leading-relaxed font-light">
                        <strong className="text-luxury-gold uppercase font-bold">Privacy Disclaimer:</strong> Submission of this form does not form an attorney-client relationship. All transmission of facts is protected under general legal professional privilege protocols.
                      </p>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-4 gold-gradient text-black font-sans text-xs font-bold uppercase tracking-widest rounded-xs transition-all duration-300 hover:scale-[1.01] cursor-pointer shadow-md"
                    >
                      Transmit Request Securely
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-screen"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <CheckCircle2 className="w-16 h-16 text-luxury-gold mb-6 animate-bounce" />
                    
                    <h3 className="font-serif text-2xl text-neutral-900 font-bold tracking-wide mb-3">
                      Transmission Confirmed
                    </h3>
                    
                    <p className="font-sans text-sm text-neutral-600 leading-relaxed max-w-sm font-light mb-6">
                      Thank you. Your consultation request has been encrypted and received. Advocate Muhammad Amin Firdaus will review your dossier and contact you shortly.
                    </p>

                    <div className="flex gap-4 p-4 bg-neutral-50 border border-luxury-gold/25 rounded-xs w-full max-w-sm text-left shadow-sm">
                      <Clock className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-sans text-xs font-bold text-neutral-900">Estimated Response Window</h4>
                        <p className="font-sans text-[11px] text-neutral-600 font-light mt-0.5">Within 24 business hours (Monday - Friday).</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
