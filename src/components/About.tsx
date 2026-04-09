"use client";

import { motion } from "motion/react";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="About Me" subtitle="Who I am" />

        <div className="grid gap-8 md:grid-cols-2">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-8"
          >
            <p className="mb-6 leading-relaxed text-[var(--muted-foreground)]">
              I&apos;m a Computer Engineering student at Penn State with a deep
              passion for machine learning, data analytics, and AI product
              development. I love building things that learn from data &mdash;
              from forecasting models and recommendation engines to real-time
              analytics dashboards.
            </p>
            <p className="leading-relaxed text-[var(--muted-foreground)]">
              My experience spans research labs, internships, and personal
              projects where I&apos;ve worked with time-series ML pipelines,
              geospatial analysis, embedded systems, and LLM-powered
              applications. I&apos;m always looking for the next challenge.
            </p>
          </motion.div>

          {/* Education card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--primary)]/10">
                <GraduationCap size={20} className="text-[var(--primary)]" />
              </div>
              <h3 className="text-lg font-semibold">Education</h3>
            </div>

            <h4 className="mb-1 text-base font-medium">
              The Pennsylvania State University
            </h4>
            <p className="mb-4 text-sm text-[var(--primary)]">
              B.S. Computer Engineering
            </p>

            <div className="mb-6 flex flex-wrap gap-4 text-sm text-[var(--muted-foreground)]">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} /> State College, PA
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} /> Expected May 2026
              </span>
            </div>

            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[var(--muted-foreground)]">
                Relevant Courses
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Machine Learning",
                  "Data Structures",
                  "Algorithms",
                  "Probability & Stats",
                  "Computer Architecture",
                  "Software Engineering",
                ].map((course) => (
                  <span
                    key={course}
                    className="rounded-full border border-white/6 bg-white/5 px-3 py-1 text-xs text-[var(--muted-foreground)]"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
