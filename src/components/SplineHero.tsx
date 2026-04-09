"use client";

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "motion/react";

export default function SplineHero() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="w-full h-[500px] glass relative overflow-hidden">
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="#00e5ff"
            />

            <div className="flex h-full">
              {/* Left content */}
              <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
                <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[var(--primary)]">
                  Exploring AI
                </p>
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[var(--foreground)] to-[var(--muted-foreground)]">
                  Machine Learning
                  <br />& Beyond
                </h2>
                <p className="mt-4 text-[var(--muted-foreground)] max-w-lg leading-relaxed">
                  From time-series forecasting and geospatial analysis to
                  LLM-powered recommendation engines — I build intelligent
                  systems that learn from data and scale in production.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["PyTorch", "LangChain", "AWS SageMaker", "RAG"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/6 bg-white/5 px-3 py-1 text-xs text-[var(--muted-foreground)]"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Right content - 3D Scene */}
              <div className="flex-1 relative hidden md:block">
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
