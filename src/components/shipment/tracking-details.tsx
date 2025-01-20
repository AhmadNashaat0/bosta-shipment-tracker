import { memo } from "react";
import TrackingTimeline from "../timeline";
import { Event } from "./types";

export const TrackingDetails = memo(
  ({ trackingDetails }: { trackingDetails: Event[] }) => {
    return (
      <div className="py-10 flex flex-col gap-4">
        <h3 className="text-2xl font-semibold">Tracking Details</h3>
        <TrackingTimeline trackingDetails={trackingDetails} />
      </div>
    );
  }
);
