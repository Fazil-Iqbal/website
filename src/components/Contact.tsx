"use client";

import { motion } from "motion/react";
import { Mail, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { SectionHeading } from "@/components/ui/section-heading";

const contactLinks = [
  {
    icon: <Mail size={22} />,
    label: "Email",
    value: "fazbal05@gmail.com",
    href: "mailto:fazbal05@gmail.com",
  },
  {
    icon: <LinkedInIcon size={22} />,
    label: "LinkedIn",
    value: "linkedin.com/in/fazbal05",
    href: "https://linkedin.com/in/fazbal05",
  },
  {
    icon: <GitHubIcon size={22} />,
    label: "GitHub",
    value: "github.com/Fazil-Iqbal",
    href: "https://github.com/Fazil-Iqbal",
  },
  {
    icon: <Phone size={22} />,
    label: "Phone",
    value: "+1 (814) 409-8941",
    href: "tel:+18144098941",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Contact" subtitle="Get in touch" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl"
        >
          <div className="glass rounded-2xl p-8 text-center sm:p-12">
            <h3 className="mb-3 text-2xl font-semibold">
              Let&apos;s work together
            </h3>
            <p className="mb-10 text-[var(--muted-foreground)]">
              I&apos;m currently looking for internship and full-time
              opportunities in ML engineering, data science, and AI product
              development. Feel free to reach out!
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Phone" ? "_blank" : undefined}
                  rel={
                    link.label !== "Phone"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-light group flex items-center gap-4 rounded-xl p-4 text-left transition-all hover:border-[var(--primary)]/20 hover:bg-white/5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] transition-colors group-hover:bg-[var(--primary)]/20">
                    {link.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted-foreground)]">
                      {link.label}
                    </p>
                    <p className="truncate text-sm font-medium text-[var(--foreground)]">
                      {link.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
