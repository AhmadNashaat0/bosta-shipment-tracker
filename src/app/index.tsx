import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import Provider from "./provider";
// import { Timeline } from "@/components/timeline";
import { Stepper } from "@/components/stepper-timeline";
import ThemeSwitch from "@/components/theme-switch";

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
        <ThemeSwitch />
        {/* <Timeline /> */}
        <Stepper />
      </div>
    </Provider>
  );
}
