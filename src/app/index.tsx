import "@/i18n";
import Provider from "./provider";
import { Header } from "@/components/header";
import { useTranslation } from "react-i18next";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorPage } from "@/components/error/errorPage";
import { lazy } from "react";

const ShipmentPage = lazy(() => import("@/features/shipment/ShipmentPage"));

export function App() {
  const { i18n } = useTranslation();
  return (
    <Provider>
      <main dir={i18n.dir(i18n.language)}>
        <Header />
        <ErrorBoundary fallback={<ErrorPage />}>
          <ShipmentPage />
        </ErrorBoundary>
      </main>
    </Provider>
  );
}
