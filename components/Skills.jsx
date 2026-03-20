"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Monitor, Server, Database, Cpu } from "lucide-react";

const categories = [
  {
    title: "Frontend",
    icon: Monitor,
    color: "indigo",
    skills: [
      "React 19",
      "Next.js",
      "TailwindCSS 4",
      "Radix UI",
      "Framer Motion",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "purple",
    skills: ["Laravel", "Node.js", "PHP", "REST APIs", "Laravel Sanctum", "Redis", "REST API Design"],
  },
  {
    title: "Database & Tools",
    icon: Database,
    color: "cyan",
    skills: [
      "MySQL",
      "Git",
      "GitHub",
      "Vite",
      "PM2",
      "ESLint",
      "Axios",
      "Vercel",
    ],
  },
  {
    title: "Special",
    icon: Cpu,
    color: "emerald",
    skills: [
      "AI/ML Trading Algorithms",
      "Clover POS Integration",
      "QR Code Systems",
      "Real-Time Apps",
    ],
  },
];

const colorMap = {
  indigo: {
    border: "border-indigo-500/30",
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-400",
    tagBg: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
    headerBg: "from-indigo-500/10",
  },
  purple: {
    border: "border-purple-500/30",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
    tagBg: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    headerBg: "from-purple-500/10",
  },
  cyan: {
    border: "border-cyan-500/30",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
    tagBg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    headerBg: "from-cyan-500/10",
  },
  emerald: {
    border: "border-emerald-500/30",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    tagBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    headerBg: "from-emerald-500/10",
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#0a0a14]"
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-semibold text-sm tracking-widest uppercase">
            Tech Stack
          </span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-black text-white">
            Skills &amp; <span className="gradient-text">Tools</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-center text-sm leading-relaxed">
            2+ years of hands-on production experience across the full stack —
            from{" "}
            <span className="text-indigo-400"> Laravel APIs</span> and{" "}
            <span className="text-purple-400"> Next.js frontends</span> to{" "}
            <span className="text-cyan-400"> MySQL databases</span> and{" "}
            <span className="text-emerald-400"> AI/ML systems</span>.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map((cat, i) => {
            const colors = colorMap[cat.color];
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className={`glass-card rounded-2xl border ${colors.border} overflow-hidden hover:scale-[1.02] transition-transform duration-200`}
              >
                {/* Card header */}
                <div
                  className={`bg-gradient-to-r ${colors.headerBg} to-transparent px-6 py-5 border-b border-white/5 flex items-center gap-3`}
                >
                  <div className={`${colors.iconBg} rounded-lg p-2`}>
                    <Icon className={`w-5 h-5 ${colors.iconColor}`} />
                  </div>
                  <h3 className="text-white font-bold text-lg">{cat.title}</h3>
                </div>

                {/* Tags */}
                <div className="px-6 py-5 flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold border ${colors.tagBg} transition-all duration-200 hover:scale-105`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
