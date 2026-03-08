"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Telescope, Briefcase, Bot, Globe } from "lucide-react";

const highlights = [
  {
    icon: Telescope,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    text: "Building AI-powered trading systems & restaurant management platforms",
  },
  {
    icon: Briefcase,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    text: "Full-Stack Developer with React, Next.js, Laravel, Node.js",
  },
  {
    icon: Bot,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    text: "AI/ML enthusiast creating intelligent automation systems",
  },
  {
    icon: Globe,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    text: "Experienced with POS integrations (Clover), QR systems, and real-time apps",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-100 dark:bg-[#0d0d1a]"
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-semibold text-sm tracking-widest uppercase">
            About Me
          </span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-black text-white">
            Who I <span className="gradient-text">Am</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — bio */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-8 space-y-5">
              <p className="text-slate-300 text-lg leading-relaxed">
                Hey there! I&apos;m{" "}
                <span className="text-white font-semibold">Eslam Awod</span>, a
                passionate full-stack developer who loves turning complex
                problems into elegant digital solutions. I specialize in
                building scalable web applications and AI-powered systems that
                deliver real value.
              </p>
              <p className="text-slate-400 leading-relaxed">
                My journey spans across the entire stack — from crafting
                pixel-perfect UIs with{" "}
                <span className="text-indigo-400">React</span> and{" "}
                <span className="text-indigo-400">Next.js</span>, to
                architecting robust backends with{" "}
                <span className="text-purple-400">Laravel</span> and{" "}
                <span className="text-purple-400">Node.js</span>. I thrive at
                the intersection of software engineering and artificial
                intelligence.
              </p>
              <p className="text-slate-400 leading-relaxed">
                When I&apos;m not coding, I&apos;m exploring the latest in
                AI/ML, contributing to open-source projects, or experimenting
                with algorithmic trading strategies. I believe great software is
                built with both technical excellence and a deep understanding of
                user needs.
              </p>
            </div>
          </motion.div>

          {/* Right — highlights */}
          <div className="space-y-4">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                  className={`glass-card rounded-xl p-5 border ${item.border} flex items-start gap-4 hover:scale-[1.02] transition-transform duration-200`}
                >
                  <div
                    className={`${item.bg} ${item.border} border rounded-lg p-2.5 flex-shrink-0`}
                  >
                    <Icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
