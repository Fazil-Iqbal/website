"use client";

import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function ProjectsShowcase() {
  return (
    <section className="relative overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[var(--primary)]">
              Featured Work
            </p>
            <h2 className="text-4xl font-bold text-[var(--foreground)] md:text-[4rem] md:leading-none">
              Building the Future <br />
              <span className="gradient-text">with ML & AI</span>
            </h2>
          </>
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1400&h=720&fit=crop&q=80"
          alt="AI and Machine Learning dashboard"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-center"
          draggable={false}
        />
      </ContainerScroll>
    </section>
  );
}
