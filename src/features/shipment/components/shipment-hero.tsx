import { useTranslation } from "react-i18next";
import pinIconPng from "/pin-icon.png";

export function ShipmentHero() {
  const { t } = useTranslation("hero");
  return (
    <div className="bg-muted">
      <div className="container pt-10 pb-16 flex flex-col items-center gap-2">
        <img
          src={pinIconPng}
          alt="pin icon"
          className="w-52 sm:w-64"
          loading="lazy"
        />
        <h2 className="text-3xl sm:text-4xl font-bold">{t("title")}</h2>
      </div>
    </div>
  );
}
