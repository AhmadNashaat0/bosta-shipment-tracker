import { cn } from "@/utils";
import { format } from "date-fns";
import { ar, enUS } from "date-fns/locale";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";

type TimelineStep = {
  title: string;
  date?: string;
};

type TimelineProps = {
  currentStep: number;
  dates: Record<string, string | undefined>;
  orientation?: "horizontal" | "vertical";
  className?: string;
};

export function StepperTimeline({
  currentStep,
  dates,
  orientation = "horizontal",
  className,
}: TimelineProps) {
  const { t, i18n } = useTranslation("ShipmentDetails");

  const isVertical = orientation === "vertical";
  const steps: TimelineStep[] = [
    { title: "Shipment Created", date: dates.created },
    { title: "Picked Up", date: dates.pucked },
    {
      title: "Processing",
      date: currentStep === 2 ? dates.current : dates.pucked,
    },
    {
      title: "Out for Delivery",
      date: currentStep === 3 ? dates.current : undefined,
    },
    { title: "Delivered" },
  ];

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
                index <= currentStep && "border-solid border-accent-teal",
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
                  ? "border-accent-teal bg-accent-teal text-white "
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
                  index <= currentStep
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {t(step.title)}
              </span>
              {step.date && currentStep != 4 && index <= currentStep && (
                <span className="text-xs text-muted-foreground pt-1">
                  {format(step.date, "MMMM d, yyyy", {
                    locale: i18n.language === "ar" ? ar : enUS,
                  })}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
