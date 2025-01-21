import { cn } from "@/utils";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Check, Download, Loader2 } from "lucide-react";
import { useState } from "react";
import { generatePDF } from "@/utils/generatePDF";

export default function DownloadShipmentButton({
  setIsExpanded,
}: {
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [downloaded, setDownloaded] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleCopy = async () => {
    try {
      setIsExpanded(() => true);
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      generatePDF("shipmentInfo");
      setLoading(false);
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 1500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="disabled:opacity-100"
            onClick={handleCopy}
            aria-label={downloaded ? "Downloaded" : "Download PDF"}
            disabled={downloaded || loading}
          >
            <div
              className={cn(
                "transition-all",
                downloaded
                  ? "scale-100 opacity-100"
                  : "scale-0 opacity-0 absolute"
              )}
            >
              <Check
                className="stroke-emerald-500"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
            </div>
            <div
              className={cn(
                "transition-all",
                loading ? "scale-100 opacity-100" : "scale-0 opacity-0 absolute"
              )}
            >
              <Loader2
                className="animate-spin"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
            </div>
            <div
              className={cn(
                "transition-all",
                downloaded || loading
                  ? "scale-0 opacity-0 absolute"
                  : "scale-100 opacity-100"
              )}
            >
              <Download size={16} strokeWidth={2} aria-hidden="true" />
            </div>
          </Button>
        </TooltipTrigger>
        <TooltipContent className="px-2 py-1 text-xs">
          Click to download
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
