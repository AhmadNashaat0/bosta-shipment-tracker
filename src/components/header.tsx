import { cn } from "@/utils";
import ThemeSwitch from "./theme-switch";
// import bostaArabicLogo from "/bosta-arabic-logo.svg";
import bostaEnglishLogo from "/bosta-english-logo.svg";

export function Header() {
  return (
    <header className="container w-full py-3 flex justify-between items-center">
      {/* <img src={bostaArabicLogo} className=cn() alt="bosta logo" /> */}
      <img src={bostaEnglishLogo} className={cn()} alt="bosta logo" />
      <ThemeSwitch />
    </header>
  );
}
