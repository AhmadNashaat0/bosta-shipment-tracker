import Provider from "./provider";
import { Stepper } from "@/components/stepper-timeline";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";

export function App() {
  return (
    <Provider>
      <Header />
      <Hero />
      <Stepper />
    </Provider>
  );
}
