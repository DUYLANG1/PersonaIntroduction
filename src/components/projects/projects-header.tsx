import { AnimationLottie } from "@/components/common/animation-lottie-lazy";
import { Calendar } from "lucide-react";

interface PageHeaderProps {
  title: string;
  description: string;
  lottieIcon?: string;
  stats?: {
    count: number;
    label: string;
    dateRange?: string;
  };
}

export function ProjectsHeader({
  title,
  description,
  lottieIcon,
  stats,
}: PageHeaderProps) {
  return (
    <div className="text-center mb-20 animate-base animate-fade-up-active">
      <h1 className="text-5xl font-bold mb-6 flex items-center justify-center gap-4">
        <span className="bg-linear-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
          {title}
        </span>
        {lottieIcon && (
          <span className="inline-block w-12 h-12">
            <AnimationLottie
              src={lottieIcon}
              width={48}
              loop
              className="pointer-events-none select-none"
            />
          </span>
        )}
      </h1>
      <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
        {description}
      </p>

      {stats && (
        <div className="flex items-center justify-center gap-8 mt-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span>
              {stats.count} {stats.label}
            </span>
          </div>
          {stats.dateRange && (
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{stats.dateRange}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
