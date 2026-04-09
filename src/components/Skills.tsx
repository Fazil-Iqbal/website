"use client";

import { motion } from "motion/react";
import { Brain, Database, Cloud, BarChart3 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const skillCategories = [
  {
    title: "Programming & ML",
    icon: <Brain size={20} />,
    color: "var(--primary)",
    skills: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "Transformers",
      "HuggingFace",
      "LangChain",
      "RAG",
      "SQL",
    ],
  },
  {
    title: "Data & Analytics",
    icon: <Database size={20} />,
    color: "var(--accent)",
    skills: [
      "Pandas",
      "NumPy",
      "Data Pipelines",
      "Analytics Reporting",
      "Workflow Automation",
    ],
  },
  {
    title: "Cloud & Deployment",
    icon: <Cloud size={20} />,
    color: "var(--primary)",
    skills: ["AWS SageMaker", "Docker", "Git", "FastAPI"],
  },
  {
    title: "Visualization & Tools",
    icon: <BarChart3 size={20} />,
    color: "var(--accent)",
    skills: ["Streamlit", "Dashboards", "QGIS", "ArcGIS", "Weights & Biases"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Technical Skills" subtitle="What I work with" />

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass group rounded-2xl p-6 transition-all hover:border-white/15"
            >
              <div className="mb-5 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: `color-mix(in srgb, ${category.color} 15%, transparent)` }}
                >
                  <span style={{ color: category.color }}>{category.icon}</span>
                </div>
                <h3 className="font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/6 bg-white/5 px-3 py-1.5 text-sm text-[var(--muted-foreground)] transition-colors group-hover:text-[var(--foreground)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
