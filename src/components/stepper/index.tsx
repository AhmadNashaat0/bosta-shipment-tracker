import { cn } from "@/utils";
import { Check } from "lucide-react";

interface TimelineStep {
  title: string;
  description?: string;
  status: "completed" | "current" | "pending";
}

interface TimelineProps {
  steps: TimelineStep[];
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function Stepper({
  steps,
  orientation = "horizontal",
  className,
}: TimelineProps) {
  const isVertical = orientation === "vertical";

  return (
    <div
      className={cn(
        "w-full",
        isVertical
          ? "flex flex-col space-y-4"
          : "flex flex-col space-y-8 sm:flex-row sm:space-x-8 sm:space-y-0",
        className
      )}
    >
      {steps.map((step, index) => (
        <div
          key={step.title}
          className={cn(
            "relative flex flex-1",
            isVertical ? "gap-4" : "flex-col"
          )}
        >
          {/* Connector Line */}
          {index !== steps.length - 1 && (
            <div
              className={cn(
                "absolute border-2 border-dashed border-muted",
                isVertical
                  ? "left-[15px] top-[30px] h-full border-l-2 border-r-0 border-t-0 border-b-0"
                  : "hidden sm:block top-[15px] h-px w-full border-b-2 border-l-0 border-r-0 border-t-0"
              )}
            />
          )}

          {/* Step Circle and Content */}
          <div
            className={cn("flex", isVertical ? "" : "flex-col items-center")}
          >
            {/* Circle */}
            <div
              className={cn(
                "relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2",
                step.status === "completed"
                  ? "border-primary bg-primary text-primary-foreground"
                  : step.status === "current"
                  ? "border-primary bg-background"
                  : "border-muted bg-background"
              )}
            >
              {step.status === "completed" ? (
                <Check className="h-4 w-4" />
              ) : null}
            </div>

            {/* Content */}
            <div
              className={cn(
                "flex min-w-0 flex-col",
                isVertical ? "mt-0 ml-4" : "mt-3"
              )}
            >
              <span
                className={cn(
                  "text-sm font-medium",
                  step.status === "completed" || step.status === "current"
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {step.title}
              </span>
              {step.description && (
                <span className="text-xs text-muted-foreground">
                  {step.description}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
