import { StepperTimeline } from "./stepper-timline";

const status: Record<string, number> = {
  "Received at warehouse": 2,
  "في محطة الوصول": 2,
  "Out for delivery": 3,
  "جاري تسليم الأوردر": 3,
  Delivered: 4,
  "تم تسليم الشحنة": 4,
};

export function Stepper({
  state,
  dates,
}: {
  state: string;
  dates: Record<string, string | undefined>;
}) {
  return (
    <>
      <StepperTimeline
        className="hidden sm:flex"
        currentStep={status[state] ? status[state] : dates.pucked ? 1 : 0}
        dates={dates}
      />
      <StepperTimeline
        className="block sm:hidden"
        orientation="vertical"
        currentStep={status[state] ? status[state] : dates.pucked ? 1 : 0}
        dates={dates}
      />
    </>
  );
}
