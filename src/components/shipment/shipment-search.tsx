import { cn } from "@/utils";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";

export function ShipmentSearch({ className }: { className?: string }) {
  return (
    <div className={cn("hidden sm:block w-full", className)}>
      <form className={cn("flex w-full max-w-md items-center mx-auto")}>
        <Input
          className={cn("rounded-r-none rounded-l-lg h-16 bg-background")}
          type="search"
          placeholder="Tracking No."
        />
        <Button
          type="submit"
          className={cn("rounded-l-none rounded-r-lg  h-16 py-0")}
        >
          <SearchIcon className="w-24 h-24" />
        </Button>
      </form>
    </div>
  );
}
