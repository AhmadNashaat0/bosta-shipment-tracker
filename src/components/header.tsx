import ThemeSwitch from "./theme-switch";
import bostaArabicLogo from "/bosta-arabic-logo.svg";
import bostaEnglishLogo from "/bosta-english-logo.svg";
import { LocalSelect } from "./local-select";
import { useTranslation } from "react-i18next";

export function Header() {
  const { i18n } = useTranslation();
  return (
    <header className="w-full bg-muted">
      <div className="container mx-auto py-3 flex justify-between items-center">
        {i18n.language === "ar" && (
          <img src={bostaArabicLogo} alt="bosta logo" />
        )}
        {i18n.language !== "ar" && (
          <img src={bostaEnglishLogo} alt="bosta logo" />
        )}
        <div className="flex gap-2 items-center">
          <ThemeSwitch />
          <LocalSelect />
        </div>
      </div>
    </header>
  );
}
