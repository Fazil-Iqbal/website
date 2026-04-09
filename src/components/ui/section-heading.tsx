"use client";

import { motion } from "motion/react";

export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-16 text-center"
    >
      <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[var(--primary)]">
        {subtitle}
      </p>
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
    </motion.div>
  );
}
