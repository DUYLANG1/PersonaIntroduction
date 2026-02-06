import { experiences } from "@/lib/data";
import { Briefcase } from "lucide-react";
import { AnimationLottie } from "@/components/common/animation-lottie-lazy";
import { GlowCard } from "../common/glow-card";
import { AnimateIn } from "../common/animate-in";

import { SectionHeader } from "../common/section-header";

export function ExperienceSection() {
  return (
    <section className="py-12 md:py-20 lg:py-20" id="experience">
      <AnimateIn>
        <SectionHeader
          title="Experience"
          icon={Briefcase}
          className="max-w-3xl mx-auto"
        />
      </AnimateIn>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        <AnimationLottie
          src="/assets/lottie/experience.json"
          className="hidden md:block w-full max-w-sm md:max-w-md lg:max-w-lg"
          width={420}
          loop
        />
        <div className="flex flex-col gap-4 md:gap-6">
          {experiences.map((experience, index) => (
            <GlowCard key={experience.id}>
              <AnimateIn delay={index * 100}>
                <div className="p-5 md:p-6 relative z-10">
                  <p className="text-xs md:text-sm gradient-text-secondary font-semibold mb-2">
                    {experience.period}
                  </p>
                  <h3 className="text-base md:text-lg font-semibold mb-1 group-hover:gradient-text-primary transition-all duration-300">
                    {experience.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {experience.company}
                  </p>
                  {experience.current && (
                    <span className="inline-block text-xs px-3 py-1 rounded-full bg-gradient-accent text-primary-foreground font-medium glow-secondary">
                      Current
                    </span>
                  )}
                </div>
              </AnimateIn>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
