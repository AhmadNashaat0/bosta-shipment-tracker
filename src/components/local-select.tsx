import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { locals } from "@/i18n/locals";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";

export function LocalSelect() {
  const { i18n } = useTranslation();
  const handleLanguageChange = useCallback(
    (language: string) => {
      i18n.changeLanguage(language);
      localStorage.setItem("language", language);
    },
    [i18n]
  );

  return (
    <Select
      value={i18n.language}
      onValueChange={handleLanguageChange}
      dir={i18n.dir(i18n.language)}
    >
      <SelectTrigger className="w-[65px] px-0 shadow-none border-none ring-none focus:outline-none focus:ring-0">
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
  );
}
