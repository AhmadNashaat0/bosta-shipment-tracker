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

export function StepperTimeline({
  steps,
  orientation = "horizontal",
  className,
}: TimelineProps) {
  const isVertical = orientation === "vertical";

  return (
    <div
      className={cn(
        "w-full flex bg-red-200",
        isVertical ? " flex-col" : " flex-row ",
        className
      )}
    >
      {steps.map((step, index) => (
        <div
          key={step.title}
          className={cn(
            "relative flex flex-1",
            isVertical ? "gap-4 h-12" : "flex-col"
          )}
        >
          {/* Connector Line */}
          {
            <div
              className={cn(
                "absolute border border-dashed border-grey-400",
                step.status === "completed" && "border-solid border-blue-400",
                isVertical
                  ? cn(
                      "left-[7px] -top-[16px] h-full border-l-2 border-r-0 border-t-0 border-b-0",
                      index === steps.length - 1 && "h-1/2",
                      index === 0 && "h-1/2 top-[12px]"
                    )
                  : cn(
                      "hidden sm:block top-[8px] h-px w-full border-b-2 border-l-0 border-r-0 border-t-0",
                      index === steps.length - 1 && "w-1/2",
                      index === 0 && "w-1/2 right-0"
                    )
              )}
            />
          }

          {/* Step Circle and Content */}
          <div
            className={cn("flex", isVertical ? "" : "flex-col items-center")}
          >
            {/* Circle */}
            <div
              className={cn(
                "relative flex h-4 w-4 shrink-0 items-center justify-center rounded-full border",
                step.status === "completed"
                  ? "border-blue-400 bg-primary text-primary-foreground"
                  : step.status === "current"
                  ? "border-primary bg-background"
                  : "border-muted bg-background"
              )}
            >
              {step.status === "completed" ? (
                <Check className="h-3 w-3" />
              ) : null}
            </div>

            {/* Content */}
            <div
              className={cn(
                "flex min-w-0 flex-col bg-green-300",
                isVertical ? "mt-0 ml-4" : "mt-1"
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
