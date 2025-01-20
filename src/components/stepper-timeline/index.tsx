import { StepperTimeline } from "./stepper-timline";

export function Stepper({ state }: { state: string }) {
  const steps = [
    {
      title: "Picked Up",
      description: "Saturday Nov 10",
      status: "completed" as const,
    },
    {
      title: "Processing",
      status: "current" as const,
    },
    {
      title: "Out for Delivery",
      status: "completed" as const,
    },
    {
      title: "Delivered",
      status: "completed" as const,
    },
  ];

  return (
    <>
      {state}
      <StepperTimeline className="hidden sm:flex" steps={steps} />
      <StepperTimeline
        className="block sm:hidden"
        orientation="vertical"
        steps={steps}
      />
    </>
  );
}
