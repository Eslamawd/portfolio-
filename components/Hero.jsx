"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, ChevronRight } from "lucide-react";

const TYPING_WORDS = [
  "Full-Stack Developer",
  "AI Enthusiast",
  "React & Next.js Expert",
  "Laravel Developer",
  "Problem Solver",
];

function useTypingEffect(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];

    if (!deleting && charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), speed);
      return () => clearTimeout(t);
    }

    if (!deleting && charIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }

    if (deleting && charIndex > 0) {
      const t = setTimeout(() => setCharIndex((c) => c - 1), speed / 2);
      return () => clearTimeout(t);
    }

    if (deleting && charIndex === 0) {
      setDeleting(false);
      setWordIndex((w) => (w + 1) % words.length);
    }
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    setDisplay(current.slice(0, charIndex));
  }, [charIndex, wordIndex, words]);

  return display;
}

export default function Hero() {
  const typed = useTypingEffect(TYPING_WORDS);
  const [imageReady, setImageReady] = useState(true);
  const profilePhotoSrc = "/profile.jpg";

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl animate-pulse delay-500" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45 }}
          className="mx-auto mb-6"
        >
          <div className="mx-auto w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-br from-indigo-500 via-cyan-500 to-purple-600 shadow-xl shadow-indigo-500/30">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-slate-900 flex items-center justify-center">
              {imageReady ? (
                <img
                  src={profilePhotoSrc}
                  alt="Eslam profile"
                  className="w-full h-full object-cover"
                  onError={() => setImageReady(false)}
                />
              ) : (
                <span className="text-xl font-bold text-slate-700 dark:text-slate-200">
                  EA
                </span>
              )}
            </div>
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Open to opportunities
        </motion.div>

        {/* Greeting */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight"
        >
          Hi, I&apos;m <span className="gradient-text">Eslam</span>{" "}
          <span className="inline-block animate-[float_3s_ease-in-out_infinite]">
            👋
          </span>
        </motion.h1>

        {/* Typing effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl sm:text-3xl font-semibold text-indigo-400 mb-6 h-10"
        >
          {typed}
          <span className="border-r-2 border-indigo-400 ml-0.5 animate-pulse">
            &nbsp;
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Passionate full-stack developer with expertise in{" "}
          <span className="text-indigo-400 font-medium">
            React, Next.js, Laravel,
          </span>{" "}
          and <span className="text-purple-400 font-medium">Node.js</span>. I
          build modern web applications and AI-powered systems that solve
          real-world problems.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <button
            onClick={() => scrollTo("#projects")}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-lg hover:shadow-lg hover:shadow-indigo-500/30 hover:scale-105 transition-all duration-200"
          >
            View Projects
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-white font-semibold text-lg hover:bg-white/5 hover:border-indigo-500/50 hover:scale-105 transition-all duration-200"
          >
            Contact Me
          </button>
        </motion.div>

        {/* GitHub link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center"
        >
          <a
            href="https://github.com/Eslamawd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-sm"
          >
            <Github className="w-4 h-4" />
            github.com/Eslamawd
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs font-medium">Scroll down</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
