import { useTranslation } from "react-i18next";

export function ErrorPage() {
  const { t } = useTranslation("ShipmentDetails");
  return (
    <div className="w-full h-40 flex items-center justify-center text-center flex-1">
      {t("errorPage")}
    </div>
  );
}
