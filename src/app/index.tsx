import "@/i18n";
import Provider from "./provider";
import { ShipmentPage } from "@/components/shipment";
import { Header } from "@/components/header";
import { useTranslation } from "react-i18next";

export function App() {
  const { i18n } = useTranslation();
  return (
    <Provider>
      <main dir={i18n.dir(i18n.language)}>
        <Header />
        <ShipmentPage />
      </main>
    </Provider>
  );
}
