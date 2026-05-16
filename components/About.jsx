"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Telescope, Briefcase, Bot, Globe } from "lucide-react";
import { useTranslations } from "next-intl";

const highlightIcons = [
  {
    icon: Telescope,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
  },
  {
    icon: Briefcase,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    icon: Bot,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  {
    icon: Globe,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const t = useTranslations("about");
  const highlights = t.raw("highlights");
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
            {t("sectionLabel")}
          </span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-black text-white">
            {t("title")}{" "}
            <span className="gradient-text">{t("titleHighlight")}</span>
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
                {t("bio1")}
              </p>
              <p className="text-slate-400 leading-relaxed">{t("bio2")}</p>
              <p className="text-slate-400 leading-relaxed">{t("bio3")}</p>
            </div>

            {/* Experience Stats */}
            <div className="glass-card rounded-2xl p-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    value: "6+",
                    label: t("stats.projects"),
                    color: "border-indigo-500/40",
                  },
                  {
                    value: "4+",
                    label: t("stats.years"),
                    color: "border-purple-500/40",
                  },
                  {
                    value: "4",
                    label: t("stats.stacks"),
                    color: "border-cyan-500/40",
                  },
                  {
                    value: "∞",
                    label: t("stats.problems"),
                    color: "border-emerald-500/40",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className={`rounded-xl border ${stat.color} bg-white/5 p-4 text-center`}
                  >
                    <p className="text-3xl font-black text-white">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — highlights */}
          <div className="space-y-4">
            {highlights.map((text, i) => {
              const item = highlightIcons[i];
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
                    {text}
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
