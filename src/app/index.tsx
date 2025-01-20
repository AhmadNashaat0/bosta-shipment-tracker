import "@/i18n";
import Provider from "./provider";
import { ShipmentPage } from "@/components/shipment";
import { Header } from "@/components/header";

export function App() {
  return (
    <Provider>
      <Header />
      <ShipmentPage />
    </Provider>
  );
}
