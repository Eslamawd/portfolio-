'use client';

import { Github, Heart, Code2 } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#070710] border-t border-white/5 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo / name */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <Code2 className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-bold text-white">Eslam</span>
          </div>

          {/* Copyright */}
          <p className="text-slate-500 text-sm text-center">
            &copy; {year} Eslam. All rights reserved. &nbsp;|&nbsp; Built with{' '}
            <span className="text-indigo-400 font-medium">Next.js</span> &amp;{' '}
            <span className="text-indigo-400 font-medium">TailwindCSS</span>{' '}
            <Heart className="inline w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </p>

          {/* GitHub */}
          <a
            href="https://github.com/Eslamawd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
