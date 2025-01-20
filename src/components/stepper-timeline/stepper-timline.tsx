import { cn } from "@/utils";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";

type TimelineStep = {
  title: string;
  description?: string;
  status?: "completed" | "current" | "pending";
};

type TimelineProps = {
  currentStep: number;
  orientation?: "horizontal" | "vertical";
  className?: string;
};

const steps: TimelineStep[] = [
  {
    title: "Picked Up",
  },
  {
    title: "Processing",
  },
  {
    title: "Out for Delivery",
  },
  {
    title: "Delivered",
  },
];

export function StepperTimeline({
  currentStep,
  orientation = "horizontal",
  className,
}: TimelineProps) {
  const isVertical = orientation === "vertical";
  const { t } = useTranslation("ShipmentDetails");

  return (
    <div
      className={cn(
        "w-full flex",
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
                index <= currentStep && "border-solid border-blue-400",
                isVertical
                  ? cn(
                      "ltr:left-[7px] rtl:right-[7px] -top-[16px] h-full border-l-2 border-r-0 border-t-0 border-b-0",
                      index === steps.length - 1 && "h-1/2",
                      index === 0 && "h-1/2 top-[12px]"
                    )
                  : cn(
                      "hidden sm:block top-[8px] h-px w-full border-b-2 border-l-0 border-r-0 border-t-0",
                      index === steps.length - 1 && "w-1/2",
                      index === 0 && "w-1/2 right-0 rtl:left-0 rtl:right-auto"
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
                index <= currentStep
                  ? "border-blue-400 bg-blue-400 text-white"
                  : step.status === "current"
                  ? "border-primary bg-background"
                  : "border-muted bg-background"
              )}
            >
              {index <= currentStep ? <Check className="h-3 w-3" /> : null}
            </div>

            {/* Content */}
            <div
              className={cn(
                "flex min-w-0 flex-col sm:text-center",
                isVertical ? "mt-0 ltr:ml-4 rtl:mr-4" : "mt-1"
              )}
            >
              <span
                className={cn(
                  "text-sm font-medium",
                  index <= currentStep || step.status === "current"
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {t(step.title)}
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
