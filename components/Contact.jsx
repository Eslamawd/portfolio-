"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Github,
  Mail,
  Linkedin,
  BriefcaseBusiness,
  MessageCircle,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const socialLinks = [
  {
    label: "Email",
    handle: "eeslamawood@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=eeslamawood@gmail.com",
    icon: Mail,
    hover: "group-hover:text-rose-500",
  },
  {
    label: "GitHub",
    handle: "github.com/Eslamawd",
    href: "https://github.com/Eslamawd",
    icon: Github,
    hover: "group-hover:text-indigo-400",
  },
  {
    label: "LinkedIn",
    handle: "linkedin.com/in/eslam-awd-9a7b42248",
    href: "https://www.linkedin.com/in/eslam-awd-9a7b42248/",
    icon: Linkedin,
    hover: "group-hover:text-sky-500",
  },
  {
    label: "Upwork",
    handle: "upwork.com/freelancers/eslama128",
    href: "https://www.upwork.com/freelancers/eslama128",
    icon: BriefcaseBusiness,
    hover: "group-hover:text-emerald-500",
  },
  {
    label: "WhatsApp",
    handle: "+20 111 021 5455",
    href: "https://wa.me/201110215455",
    icon: MessageCircle,
    hover: "group-hover:text-green-500",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#0a0a14]"
    >
      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
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
            Have a project in mind or want to collaborate? I&apos;d love to hear
            from you. Send me a message and let&apos;s create something amazing
            together.
          </p>
        </motion.div>

        <div className="grid gap-10">
          {/* Social links */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl border border-white/5 p-8">
              <h3 className="text-white font-bold text-xl mb-2">Find me on</h3>
              <p className="text-slate-400 text-sm mb-6">
                Check out my work, projects, and contributions.
              </p>

              <div className="space-y-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-200 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-indigo-500/10 transition-colors">
                        <Icon
                          className={`w-6 h-6 text-slate-300 transition-colors ${link.hover}`}
                        />
                      </div>
                      <div>
                        <p className="text-white font-semibold">{link.label}</p>
                        <p className="text-slate-500 text-sm">{link.handle}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Info card */}
            <div className="glass-card rounded-2xl border border-indigo-500/20 p-8 bg-gradient-to-br from-indigo-500/5 to-purple-500/5">
              <h3 className="text-white font-bold text-xl mb-3">
                Let&apos;s Build Something
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Whether you have a startup idea, need a full-stack web app, or
                want to integrate AI into your product — I&apos;m ready to help
                bring your vision to life.
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
