"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });
  const [lastSubmission, setLastSubmission] = useState(null);

  // Input Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Validators
  const validateForm = () => {
    const newErrors = {};
    
    // Check Empty Fields
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address containing '@' and a domain.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    // Validate
    if (!validateForm()) {
      setStatus({ type: "error", message: "Please fill out all fields correctly." });
      return;
    }

    // Check for Duplicate Entries
    if (
      lastSubmission &&
      lastSubmission.name === formData.name &&
      lastSubmission.email === formData.email &&
      lastSubmission.subject === formData.subject &&
      lastSubmission.message === formData.message
    ) {
      setStatus({
        type: "error",
        message: "Duplicate message detected! You have already sent this exact message.",
      });
      return;
    }

    // Success Simulation
    setStatus({ type: "success", message: "Thank you! Your message has been sent successfully." });
    setLastSubmission({ ...formData });

    // Reset Form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      {/* Page Header */}
      <div className="mb-16 text-center">
        <h1 className="text-sm font-bold uppercase tracking-widest text-accent-red">Get in Touch</h1>
        <p className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Contact Me</p>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
        {/* Contact Info Cards */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-6">
            <h2 className="text-xl font-bold text-white mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-red/10 border border-accent-red/20 text-accent-red">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">Email Me</h3>
                  <a href="mailto:ashellejd@gmail.com" className="text-sm font-medium text-white hover:text-rose-400 transition-colors">
                    ashellejd@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-red/10 border border-accent-red/20 text-accent-red">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">Call Me</h3>
                  <span className="text-sm font-medium text-white">
                    +91 8951360820
                  </span>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-red/10 border border-accent-red/20 text-accent-red">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">Location</h3>
                  <p className="text-sm font-medium text-white leading-relaxed">
                    Udupi / Bangalore, Karnataka, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-6">
            <h3 className="text-sm font-bold text-white mb-4">Connect Online</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/AshelleDsouza"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-xs text-gray-300 hover:border-accent-red hover:text-white transition-all duration-300"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ashelle-dsouza-731586351/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-xs text-gray-300 hover:border-accent-red hover:text-white transition-all duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-7 rounded-2xl glass-panel-red p-8 relative">
          <h2 className="text-xl font-bold text-white mb-6">Send Me a Message</h2>

          {/* Status Message */}
          {status.message && (
            <div
              className={`mb-6 rounded-xl p-4 text-xs font-medium border ${
                status.type === "success"
                  ? "bg-emerald-950/20 border-emerald-500/30 text-emerald-400"
                  : "bg-rose-950/20 border-rose-500/30 text-rose-400"
              }`}
            >
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Ashelle Dsouza"
                className={`w-full rounded-xl bg-white/5 border px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-accent-red transition-colors ${
                  errors.name ? "border-rose-500" : "border-white/10"
                }`}
              />
              {errors.name && <p className="mt-1 text-xs text-rose-400">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                Your Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className={`w-full rounded-xl bg-white/5 border px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-accent-red transition-colors ${
                  errors.email ? "border-rose-500" : "border-white/10"
                }`}
              />
              {errors.email && <p className="mt-1 text-xs text-rose-400">{errors.email}</p>}
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Inquiry / Feedback"
                className={`w-full rounded-xl bg-white/5 border px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-accent-red transition-colors ${
                  errors.subject ? "border-rose-500" : "border-white/10"
                }`}
              />
              {errors.subject && <p className="mt-1 text-xs text-rose-400">{errors.subject}</p>}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className={`w-full rounded-xl bg-white/5 border px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-accent-red transition-colors ${
                  errors.message ? "border-rose-500" : "border-white/10"
                }`}
              />
              {errors.message && <p className="mt-1 text-xs text-rose-400">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-accent-red py-4 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-accent-red-hover hover:shadow-[0_0_20px_rgba(225,29,72,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
