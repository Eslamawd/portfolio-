'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Mail, Send, User, MessageSquare } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real deployment, integrate with EmailJS, Formspree, or a backend endpoint.
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a14]">
      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-semibold text-sm tracking-widest uppercase">
            Get in Touch
          </span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-black text-white">
            Let&apos;s Work <span className="gradient-text">Together</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
          <p className="mt-6 text-slate-400 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you. Send me a
            message and let&apos;s create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left — form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="glass-card rounded-2xl border border-white/5 p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-64 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-4">
                    <Send className="w-7 h-7 text-green-400" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                  <p className="text-slate-400">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      <User className="inline w-4 h-4 mr-1 text-indigo-400" />
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      <Mail className="inline w-4 h-4 mr-1 text-indigo-400" />
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      <MessageSquare className="inline w-4 h-4 mr-1 text-indigo-400" />
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-[1.02] transition-all duration-200"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right — social links */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl border border-white/5 p-8">
              <h3 className="text-white font-bold text-xl mb-2">Find me on</h3>
              <p className="text-slate-400 text-sm mb-6">
                Check out my work, projects, and contributions.
              </p>

              <a
                href="https://github.com/Eslamawd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-indigo-500/10 transition-colors">
                  <Github className="w-6 h-6 text-slate-300 group-hover:text-indigo-400 transition-colors" />
                </div>
                <div>
                  <p className="text-white font-semibold">GitHub</p>
                  <p className="text-slate-500 text-sm">github.com/Eslamawd</p>
                </div>
              </a>
            </div>

            {/* Info card */}
            <div className="glass-card rounded-2xl border border-indigo-500/20 p-8 bg-gradient-to-br from-indigo-500/5 to-purple-500/5">
              <h3 className="text-white font-bold text-xl mb-3">Let&apos;s Build Something</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Whether you have a startup idea, need a full-stack web app, or want to integrate
                AI into your product — I&apos;m ready to help bring your vision to life.
              </p>
              <div className="mt-5 flex items-center gap-2 text-indigo-400 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for freelance & full-time roles
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
