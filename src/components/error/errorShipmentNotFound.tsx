import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useTranslation } from "react-i18next";

export function ErrorShipmentNotFound() {
  const { t, i18n } = useTranslation("ShipmentDetails");
  return (
    <Alert
      variant="destructive"
      dir={i18n.dir(i18n.language)}
      className="max-w-xl"
    >
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{t("error")}</AlertTitle>
      <AlertDescription>{t("errorNotFound")}</AlertDescription>
    </Alert>
  );
}
