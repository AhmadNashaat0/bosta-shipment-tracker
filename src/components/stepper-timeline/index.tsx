import { StepperTimeline } from "./stepper-timline";

export function Stepper() {
  const steps = [
    {
      title: "Picked Up",
      description: "Saturday Nov 10",
      status: "completed" as const,
    },
    {
      title: "Processing",
      status: "completed" as const,
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
      <StepperTimeline className="hidden sm:flex" steps={steps} />
      <StepperTimeline
        className="block sm:hidden"
        orientation="vertical"
        steps={steps}
      />
    </>
  );
}
