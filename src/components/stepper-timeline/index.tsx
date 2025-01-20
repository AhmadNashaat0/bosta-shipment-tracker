import { StepperTimeline } from "./stepper-timline";

const status: Record<string, number> = {
  "Received at warehouse": 1,
  "في محطة الوصول": 1,
  "Out for delivery": 2,
  "جاري تسليم الأوردر": 2,
  Delivered: 3,
  "تم تسليم الشحنة": 3,
};

export function Stepper({ state }: { state: string }) {
  if (!(state in status)) {
    return;
  }
  return (
    <>
      <StepperTimeline className="hidden sm:flex" currentStep={status[state]} />
      <StepperTimeline
        className="block sm:hidden"
        orientation="vertical"
        currentStep={status[state]}
      />
    </>
  );
}
