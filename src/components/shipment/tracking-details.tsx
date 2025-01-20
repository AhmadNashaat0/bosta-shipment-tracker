import { memo } from "react";
import TrackingTimeline from "../timeline";
import { Event } from "./types";
import { useTranslation } from "react-i18next";

export const TrackingDetails = memo(
  ({ trackingDetails }: { trackingDetails: Event[] }) => {
    const { t } = useTranslation("ShipmentDetails");
    return (
      <div className="py-10 flex flex-col gap-4">
        <h3 className="text-2xl font-semibold">{t("Tracking Details")}</h3>
        <TrackingTimeline trackingDetails={trackingDetails} />
      </div>
    );
  }
);
