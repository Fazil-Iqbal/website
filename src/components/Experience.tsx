"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/section-heading";

const experiences = [
  {
    title: "Undergraduate Research Assistant",
    company: "Dept. of Architectural Engineering, Penn State",
    period: "Aug 2025 - Dec 2025",
    points: [
      "Built time-series ML pipeline to predict indoor building temperatures using ~500K HVAC sensor records",
      "Trained and compared Linear Regression (MAE: 0.71\u00b0C), XGBoost (MAE: 0.52\u00b0C), and LSTM (MAE: 0.48\u00b0C) architectures",
      "Conducted feature importance analysis identifying lag-1 temperature as dominant predictor (~52% importance)",
    ],
  },
  {
    title: "ML Intern \u2014 Geospatial Data Analyst",
    company: "Drawdown Scholars REU",
    period: "May 2023 - Aug 2023",
    points: [
      "Developed a diffusion-based probabilistic forecasting model (TimeGrad) to predict EV charging demand across 218 LA County census tracts",
      "Achieved \u226512% CRPS improvement over DeepAR baseline with 89% prediction interval coverage",
      "Integrated multi-source geospatial datasets (~384K records) using Pandas, xarray, and GeoPandas",
    ],
  },
  {
    title: "Tech Intern",
    company: "ASU Electronics Lab",
    period: "May 2024 - Aug 2024",
    points: [
      "Developed embedded systems for biomedical data collection using C++ and STM32",
      "Built Python-based data validation tools improving testing efficiency by 40%",
      "Collaborated cross-functionally on hardware/software integration and testing",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Experience" subtitle="Where I've worked" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-[var(--primary)] via-[var(--accent)] to-transparent md:left-8 md:block" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-8 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-[var(--primary)] bg-[var(--background)] md:left-8 md:block" />

                <div className="glass rounded-2xl p-6 sm:p-8">
                  <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{exp.title}</h3>
                      <p className="text-sm text-[var(--primary)]">
                        {exp.company}
                      </p>
                    </div>
                    <span className="mt-1 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[var(--muted-foreground)] sm:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-sm leading-relaxed text-[var(--muted-foreground)]"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
