import { useState } from "react";
import { Circle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils";

interface TrackingEvent {
  date: string;
  events: {
    time: string;
    description: string;
    location?: string;
  }[];
}

const trackingData: TrackingEvent[] = [
  {
    date: "Monday, February 18, 2021",
    events: [
      {
        time: "2:42 PM",
        description:
          "The order has been created. When the merchant is ready, we will receive the shipment",
      },
      {
        time: "2:42 PM",
        description:
          "The order has been received at a warehouse in Bosta and is being prepared.",
        location: "Katameya, Cairo",
      },
    ],
  },
  {
    date: "Sunday, February 17, 2021",
    events: [
      {
        time: "2:42 PM",
        description: "The order is being delivered",
      },
      {
        time: "2:42 PM",
        description:
          "The delivery of the order has been postponed because we were unable to contact you by phone",
        location: "Katameya, Cairo",
      },
      {
        time: "2:42 PM",
        description:
          "The order has been received at a warehouse in Bosta and is being prepared.",
        location: "Katameya, Cairo",
      },
    ],
  },
  {
    date: "Saturday, February 16, 2021",
    events: [
      {
        time: "2:42 PM",
        description: "The order is being delivered",
      },
    ],
  },
];

export default function TrackingTimeline() {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayData = isExpanded ? trackingData : trackingData.slice(0, 1);

  return (
    <div>
      <div className="flex flex-col gap-6">
        {displayData.map((day) => (
          <TrackingEvent event={day} key={day.date} />
        ))}
      </div>

      {trackingData.length > 1 && (
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
  return (
    <div className="relative">
      <div className="relative ltr:pl-6 rtl:pr-6">
        <Circle
          className="w-3 h-3 text-muted-foreground shrink-0 absolute ltr:left-0 rtl:right-0 top-1.5"
          fill="currentColor"
        />
        <div className="font-medium">{event.date}</div>
      </div>

      <div className="relative flex flex-col gap-4 py-4 ">
        <div className="absolute h-full ltr:left-[6px] rtl:right-[6px] border-l-2 top-0" />
        {event.events.map((event) => (
          <div
            key={event.description}
            className={cn("border rounded-lg p-4 ltr:ml-6 rtl:mr-6")}
          >
            <div className="text-sm text-muted-foreground">{event.time}</div>
            <div className="mt-1">{event.description}</div>
            {event.location && (
              <div className="mt-1 text-sm text-muted-foreground">
                {event.location}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
