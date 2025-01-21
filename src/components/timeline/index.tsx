import { useMemo, useState } from "react";
import { Circle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils";
import { Event } from "../shipment/types";
import { format } from "date-fns";
import { ar, enUS } from "date-fns/locale";
import { useTranslation } from "react-i18next";

type TrackingEvent = {
  date: string;
  events: Event[];
};

function prepareTrackingDetails(trackingDetails: Event[]) {
  const result: TrackingEvent[] = [];
  let prevDate: string;
  trackingDetails.map((trackingDetail) => {
    const date = trackingDetail.timestamp.slice(0, 10);
    if (date === prevDate) {
      result[result.length - 1].events.push(trackingDetail);
    } else {
      prevDate = date;
      result.push({ date, events: [trackingDetail] });
    }
  });
  result.reverse();
  return result.map((event) => ({ ...event, events: event?.events.reverse() }));
}

export default function TrackingTimeline({
  trackingDetails,
}: {
  trackingDetails: Event[];
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullData = useMemo(
    () => prepareTrackingDetails(trackingDetails),
    [trackingDetails]
  );
  const displayData = isExpanded ? fullData : fullData.slice(0, 1);

  return (
    <div>
      <div className="flex flex-col gap-6">
        {displayData.map((day) => (
          <TrackingEvent event={day} key={day.date} />
        ))}
      </div>

      {fullData.length > 1 && (
        <Button
          variant="ghost"
          className="w-full mt-4 flex items-center gap-2"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          More
          <ChevronDown
            className={cn(
              "w-4 h-4 transition-transform",
              isExpanded && "rotate-180"
            )}
          />
        </Button>
      )}
    </div>
  );
}

function TrackingEvent({ event }: { event: TrackingEvent }) {
  const { i18n } = useTranslation();

  return (
    <div className="relative">
      <div className="relative ltr:pl-6 rtl:pr-6">
        <Circle
          className="w-3 h-3 text-muted-foreground shrink-0 absolute ltr:left-0 rtl:right-0 top-1.5"
          fill="currentColor"
        />
        <div className="sm:font-medium">
          {format(event.date, "EEEE, MMMM d, yyyy", {
            locale: i18n.language === "ar" ? ar : enUS,
          })}
        </div>
      </div>

      <div className="relative flex flex-col gap-4 py-4 ">
        <div className="absolute h-full ltr:left-[6px] rtl:right-[6px] border-l-2 top-0" />
        {event.events.map((event) => (
          <div
            key={event.timestamp}
            className={cn(
              "flex flex-col gap-1 border rounded-lg p-4 ltr:ml-6 rtl:mr-6"
            )}
          >
            <div className="text-sm">{event.state}</div>
            <div className="text-sm text-muted-foreground">
              {format(event.timestamp, "hh:mm a", {
                locale: i18n.language === "ar" ? ar : enUS,
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
