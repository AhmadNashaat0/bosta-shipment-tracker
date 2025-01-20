import { useSearchParams } from "@/utils/useSearchParams";
import { ShipmentDetails } from "./shipment-details";
import { ShipmentHero } from "./shipment-hero";
import { ShipmentSearch } from "./shipment-search";
import { TrackingDetails } from "./tracking-details";
import { useShipment } from "./api/get-shipment";
import { useState } from "react";

export function ShipmentPage() {
  const { getSearchParam } = useSearchParams();
  const [trackNumber, setTrackNumber] = useState(getSearchParam("trackNumber"));
  const shipmentQuery = useShipment({
    trackNumber: trackNumber ?? "",
    queryConfig: {
      enabled: !!trackNumber,
    },
  });

  console.log(shipmentQuery.data);

  return (
    <>
      <ShipmentHero />
      <div className="container relative pt-12">
        <ShipmentSearch
          className="absolute left-0 right-0 -top-[30px] z-10"
          setTrackNumber={setTrackNumber}
        />
        <ShipmentDetails />
        <TrackingDetails />
      </div>
    </>
  );
}
