import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { locals } from "@/i18n/locals";
import { useCallback, useId } from "react";
import { useTranslation } from "react-i18next";

export function LocalSelect() {
  const id = useId();
  const { i18n } = useTranslation();
  const handleLanguageChange = useCallback(
    (language: string) => {
      i18n.changeLanguage(language);
      localStorage.setItem("language", language);
    },
    [i18n]
  );

  return (
    <>
      <Select
        value={i18n.language}
        onValueChange={handleLanguageChange}
        dir={i18n.dir(i18n.language)}
      >
        <SelectTrigger className="w-[65px] px-0 shadow-none border-none ring-none focus:outline-none focus:ring-0 hidden sm:flex">
          <SelectValue placeholder="" />
        </SelectTrigger>
        <SelectContent>
          {locals.map((local: any) => (
            <SelectItem key={local.code} value={local.code}>
              {local.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="flex flex-col justify-center sm:hidden">
        <input
          type="checkbox"
          name={id}
          id={id}
          className="peer sr-only"
          checked={i18n.language === "en"}
          onChange={() =>
            handleLanguageChange(i18n.language === "en" ? "ar" : "en")
          }
        />
        <label
          className="group relative inline-flex size-9 cursor-pointer items-center justify-center text-foreground text-sm px-6"
          htmlFor={id}
        >
          <div className="shrink-0 scale-0 opacity-0 transition-all peer-checked:group-[]:scale-100 peer-checked:group-[]:opacity-100 ">
            English
          </div>
          <div className="absolute shrink-0 scale-100 opacity-100 transition-all peer-checked:group-[]:scale-0 peer-checked:group-[]:opacity-0">
            Arabic
          </div>
        </label>
      </div>
    </>
  );
}
