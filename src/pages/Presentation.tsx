import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TitleSlide } from "@/components/presentation/TitleSlide";
import { ContextSlide } from "@/components/presentation/ContextSlide";
import { ArchitectureSlide } from "@/components/presentation/ArchitectureSlide";
import { AgentsOverviewSlide } from "@/components/presentation/AgentsOverviewSlide";
import { FeatureAnalyzerSlide } from "@/components/presentation/FeatureAnalyzerSlide";
import { PHPAnalystSlide } from "@/components/presentation/PHPAnalystSlide";
import { ReactGeneratorSlide } from "@/components/presentation/ReactGeneratorSlide";
import { ReviewerSlide } from "@/components/presentation/ReviewerSlide";
import { DotNetIntegratorSlide } from "@/components/presentation/DotNetIntegratorSlide";
import { AuditorSlide } from "@/components/presentation/AuditorSlide";
import { FeatureMigratorSlide } from "@/components/presentation/FeatureMigratorSlide";
import { ProcessSlide } from "@/components/presentation/ProcessSlide";
import { InnovationsSlide } from "@/components/presentation/InnovationsSlide";
import { ResultsSlide } from "@/components/presentation/ResultsSlide";
import { WorkflowSlide } from "@/components/presentation/WorkflowSlide";
import { LessonsLearnedSlide } from "@/components/presentation/LessonsLearnedSlide";
import { TechnologiesSlide } from "@/components/presentation/TechnologiesSlide";
import { FutureSlide } from "@/components/presentation/FutureSlide";
import { ConclusionSlide } from "@/components/presentation/ConclusionSlide";

const slides = [
  TitleSlide,
  ContextSlide,
  ArchitectureSlide,
  AgentsOverviewSlide,
  FeatureAnalyzerSlide,
  PHPAnalystSlide,
  ReactGeneratorSlide,
  ReviewerSlide,
  DotNetIntegratorSlide,
  AuditorSlide,
  FeatureMigratorSlide,
  ProcessSlide,
  InnovationsSlide,
  ResultsSlide,
  WorkflowSlide,
  LessonsLearnedSlide,
  TechnologiesSlide,
  FutureSlide,
  ConclusionSlide,
];

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
  };

  useState(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex flex-col">
      {/* Slide Container */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-6xl">
          <CurrentSlideComponent />
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-background/80 backdrop-blur-lg border border-border rounded-full px-6 py-3 shadow-lg">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="rounded-full"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "w-8 bg-primary"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <span className="text-sm text-muted-foreground font-medium min-w-[60px] text-center">
          {currentSlide + 1} / {slides.length}
        </span>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="rounded-full"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
