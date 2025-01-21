import { memo } from "react";
import TrackingTimeline from "../../../components/timeline";
import { Event } from "../types";
import { useTranslation } from "react-i18next";

export const TrackingDetails = memo(
  ({
    trackingDetails,
    isExpanded,
    setIsExpanded,
  }: {
    trackingDetails: Event[];
    isExpanded: boolean;
    setIsExpanded: (isExpanded: boolean) => void;
  }) => {
    const { t } = useTranslation("ShipmentDetails");
    return (
      <div className="py-10 flex flex-col gap-4">
        <h3 className="text-xl sm:text-2xl font-semibold">
          {t("Tracking Details")}
        </h3>
        <TrackingTimeline
          trackingDetails={trackingDetails}
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
        />
      </div>
    );
  }
);
