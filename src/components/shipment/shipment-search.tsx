import { cn } from "@/utils";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";
import { useSearchParams } from "@/utils/useSearchParams";
import { useTranslation } from "react-i18next";

export function ShipmentSearch({
  className,
  setTrackNumber,
}: {
  className?: string;
  setTrackNumber: (trackNumber: string) => void;
}) {
  const { getSearchParam, setSearchParam } = useSearchParams();
  const { t } = useTranslation();

  return (
    <div className={cn("w-full", className)}>
      <form
        className={cn("flex w-full max-w-md items-center mx-auto")}
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.target as HTMLFormElement);
          const trackNumber = formData.get("trackNumber");
          setSearchParam("trackNumber", trackNumber?.toString() || "");
          setTrackNumber(trackNumber?.toString() || "");
        }}
      >
        <Input
          className={cn(
            "md:text-md text-md rounded-r-none rounded-l-lg rtl:rounded-l-none rtl:rounded-r-lg h-12 sm:h-16 bg-background"
          )}
          type="search"
          placeholder={t("searchShipmentPlaceholder")}
          name="trackNumber"
          defaultValue={getSearchParam("trackNumber") || undefined}
        />
        <Button
          type="submit"
          size={"icon"}
          className={cn(
            "bg-accent-red hover:bg-accent-red/85 rounded-l-none rounded-r-lg rtl:rounded-l-lg rtl:rounded-r-none h-12 sm:h-16 px-6 [&_svg]:size-6"
          )}
        >
          <SearchIcon className="w-8 h-8 " />
        </Button>
      </form>
    </div>
  );
}
