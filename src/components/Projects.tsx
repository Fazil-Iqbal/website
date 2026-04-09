"use client";

import { motion } from "motion/react";
import { ExternalLink, Bot, Eye, BarChart3, Cpu } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const projects = [
  {
    title: "LLM-Powered Recommendation Engine",
    description:
      "Collaborative filtering and NLP-enhanced recommendation pipeline built on 500K+ user ratings. Integrated via AWS SageMaker with 30% optimized inference latency.",
    tags: ["Python", "PyTorch", "AWS SageMaker", "NLP"],
    icon: <Bot size={24} />,
    accent: "var(--primary)",
  },
  {
    title: "AI Object Detection Optimization",
    description:
      "Enhanced YOLO-based detection models with architectural improvements and TensorRT acceleration. Reduced inference latency by 40% while improving recall on complex scenes.",
    tags: ["YOLO", "TensorRT", "Computer Vision", "Python"],
    icon: <Eye size={24} />,
    accent: "var(--accent)",
  },
  {
    title: "E-Commerce Analytics Dashboard",
    description:
      "Full-stack dashboard for real-time sales analytics with API-driven data retrieval pipelines for scalable reporting workflows.",
    tags: ["Vue.js", "Node.js", "GraphQL", "PostgreSQL"],
    icon: <BarChart3 size={24} />,
    accent: "var(--primary)",
  },
  {
    title: "Autonomous Robotics",
    description:
      "Led firmware development for autonomous robots at Penn State's Robotics Competition Club. Implemented IMU sensor fusion, PID drone control, and BLE integration.",
    tags: ["C++", "RISC-V", "Embedded", "Sensor Fusion"],
    icon: <Cpu size={24} />,
    accent: "var(--accent)",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Projects" subtitle="What I've built" />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass group relative overflow-hidden rounded-2xl p-6 transition-all hover:border-white/15 sm:p-8"
            >
              {/* Subtle glow on hover */}
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: project.accent }}
              />

              <div className="relative">
                <div className="mb-5 flex items-center justify-between">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{
                      background: `color-mix(in srgb, ${project.accent} 15%, transparent)`,
                    }}
                  >
                    <span style={{ color: project.accent }}>
                      {project.icon}
                    </span>
                  </div>
                  <ExternalLink
                    size={16}
                    className="text-[var(--muted-foreground)] opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </div>

                <h3 className="mb-3 text-lg font-semibold">{project.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-[var(--muted-foreground)]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/6 bg-white/5 px-2.5 py-1 text-xs text-[var(--muted-foreground)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
