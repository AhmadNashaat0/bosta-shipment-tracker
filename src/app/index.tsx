import { ShipmentPage } from "@/components/shipment";
import Provider from "./provider";
import { Header } from "@/components/header";

export function App() {
  return (
    <Provider>
      <Header />
      <ShipmentPage />
    </Provider>
  );
}
