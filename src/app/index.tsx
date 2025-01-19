import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import Provider from "./provider";
import { Timeline } from "@/components/timeline";
import { Stepper } from "@/components/stepper";

export function App() {
  return (
    <Provider>
      <div className="flex min-h-[100vh] flex-col items-center justify-center">
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <Timeline />
        <Stepper
          steps={[
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
              status: "pending" as const,
            },
            {
              title: "Delivered",
              status: "pending" as const,
            },
          ]}
        />
      </div>
    </Provider>
  );
}
