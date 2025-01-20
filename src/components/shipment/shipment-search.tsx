import { cn } from "@/utils";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";
import { useSearchParams } from "@/utils/useSearchParams";

export function ShipmentSearch({
  className,
  setTrackNumber,
}: {
  className?: string;
  setTrackNumber: (trackNumber: string) => void;
}) {
  const { getSearchParam, setSearchParam } = useSearchParams();
  return (
    <div className={cn("hidden sm:block w-full", className)}>
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
            "rounded-r-none rounded-l-lg rtl:rounded-l-none rtl:rounded-r-lg h-16 bg-background"
          )}
          type="search"
          placeholder="Tracking No."
          name="trackNumber"
          defaultValue={getSearchParam("trackNumber") || undefined}
        />
        <Button
          type="submit"
          className={cn(
            "rounded-l-none rounded-r-lg rtl:rounded-l-lg rtl:rounded-r-none h-16 py-0"
          )}
        >
          <SearchIcon className="w-24 h-24" />
        </Button>
      </form>
    </div>
  );
}
