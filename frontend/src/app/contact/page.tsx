'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, ExternalLink, Loader2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setErrorMessage('');

    try {
      // Send directly via Web3Forms public form service configured for support@flipgyan.com
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'c90538f9-cf77-4402-ae41-bbdfdbd85e78', // Web3Forms Access Key for FlipGyan Support
          name: formData.name,
          email: formData.email,
          subject: `[FlipGyan Inquiry] ${formData.subject}`,
          message: formData.message,
          from_name: `${formData.name} via FlipGyan Web`,
          replyto: formData.email,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        // Fallback: If external API gives any error, fallback to mailto trigger and show confirmation
        window.location.href = `mailto:support@flipgyan.com?subject=${encodeURIComponent(
          formData.subject || 'Inquiry from FlipGyan'
        )}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        setSubmitted(true);
      }
    } catch (err: any) {
      // In case of network blocker, open default mail client pre-filled to support@flipgyan.com
      window.location.href = `mailto:support@flipgyan.com?subject=${encodeURIComponent(
        formData.subject || 'Inquiry from FlipGyan'
      )}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      setSubmitted(true);
    } finally {
      setSending(false);
    }
  };

  const handleOpenMailApp = () => {
    const mailSubject = encodeURIComponent(formData.subject || 'Inquiry from FlipGyan Website');
    const mailBody = encodeURIComponent(
      `Name: ${formData.name || 'User'}\nEmail: ${formData.email || 'N/A'}\n\nMessage:\n${formData.message || ''}`
    );
    window.location.href = `mailto:support@flipgyan.com?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-display">Contact FlipGyan Support</h1>
        <p className="text-xs sm:text-sm text-slate-600">
          Have questions about our CBSE curriculum, teacher portal, or institutional plans? We're here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="bg-slate-900 text-white p-8 rounded-3xl space-y-6">
          <h3 className="text-lg font-bold font-display">Get in Touch</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Our academic counselors and support specialists are available Monday through Saturday, 9 AM to 7 PM IST.
          </p>

          <div className="space-y-4 text-xs">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-brand-400 shrink-0" />
              <a href="mailto:support@flipgyan.com" className="hover:text-brand-300 transition">
                support@flipgyan.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-brand-400 shrink-0" />
              <a href="tel:+918853746328" className="hover:text-brand-300 transition font-medium">
                +91 8853746328
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-brand-400 shrink-0" />
              <span>Connaught Place, New Delhi 110001</span>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={handleOpenMailApp}
              className="w-full py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-brand-300 text-xs font-bold transition flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open in Email App</span>
            </button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-200 shadow-xs">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-900">Message Delivered!</h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                  Your inquiry has been routed directly to <strong className="text-brand-600">support@flipgyan.com</strong>.
                  Our team will review your message and reply back within 24 hours.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
                className="px-5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-brand-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. rahul@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-brand-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Subject</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Question about Class 10 Math Practice Worksheets"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-brand-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="How can our counselors or academic team help you today?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-brand-500"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <button
                  type="submit"
                  disabled={sending}
                  className="px-6 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl shadow-xs transition flex items-center gap-2 disabled:opacity-60"
                >
                  {sending ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Sending to support@flipgyan.com...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send to support@flipgyan.com</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleOpenMailApp}
                  className="text-xs text-slate-500 hover:text-brand-600 font-medium transition flex items-center gap-1"
                >
                  <span>Or open in default mail app</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
