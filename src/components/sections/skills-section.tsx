import { AnimationLottie } from "../common/animation-lottie-lazy";
import { SkillsMarquee } from "./skills-marquee";
import { AnimateIn } from "../common/animate-in";

import { SectionHeader } from "@/components/common/section-header";

export function SkillsSection() {
  return (
    <section id="skills" className="py-12 md:pb-16 lg:pb-20 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <AnimationLottie
            src="/assets/lottie/skills.json"
            className="w-full max-w-xs md:max-w-xl mx-auto"
            width="10%"
            loop
          />
          <SectionHeader title="Skills" />
        </AnimateIn>

        <SkillsMarquee />
      </div>
    </section>
  );
}
