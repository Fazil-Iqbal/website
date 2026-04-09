"use client";

import { motion } from "motion/react";
import { ArrowDown, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { ShaderAnimation } from "./ui/shader-animation";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Shader background */}
      <div className="absolute inset-0 opacity-60">
        <ShaderAnimation />
      </div>
      {/* Dark overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,var(--background)_70%)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-[var(--muted-foreground)] backdrop-blur-sm"
        >
          <span className="h-2 w-2 rounded-full bg-[var(--primary)] animate-pulse" />
          Open to opportunities &mdash; Graduating May 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-7xl"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Fazil Farhan Iqbal</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[var(--muted-foreground)] sm:text-xl"
        >
          Computer Engineering student at{" "}
          <span className="text-[var(--foreground)]">Penn State</span>{" "}
          specializing in machine learning, data analytics, and AI product
          development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group rounded-full bg-[var(--primary)] px-7 py-3 text-sm font-medium text-[var(--primary-foreground)] transition-all hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm font-medium text-[var(--foreground)] backdrop-blur-sm transition-all hover:border-[var(--primary)]/30 hover:bg-white/10"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-5"
        >
          {[
            {
              icon: <GitHubIcon size={20} />,
              href: "https://github.com/Fazil-Iqbal",
              label: "GitHub",
            },
            {
              icon: <LinkedInIcon size={20} />,
              href: "https://linkedin.com/in/fazbal05",
              label: "LinkedIn",
            },
            {
              icon: <Mail size={20} />,
              href: "mailto:fazbal05@gmail.com",
              label: "Email",
            },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[var(--muted-foreground)] backdrop-blur-sm transition-all hover:border-[var(--primary)]/30 hover:text-[var(--primary)]"
            >
              {social.icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={20} className="text-[var(--muted-foreground)]" />
        </motion.div>
      </motion.a>
    </section>
  );
}
