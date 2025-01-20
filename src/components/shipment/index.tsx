import { useSearchParams } from "@/utils/useSearchParams";
import { ShipmentDetails } from "./shipment-details";
import { ShipmentHero } from "./shipment-hero";
import { ShipmentSearch } from "./shipment-search";
import { TrackingDetails } from "./tracking-details";
import { useShipment } from "./api/get-shipment";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { ErrorShipmentNotFound } from "../error/errorShipmentNotFound";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorPage } from "../error/errorPage";

export function ShipmentPage() {
  const { getSearchParam } = useSearchParams();
  const [trackNumber, setTrackNumber] = useState(getSearchParam("trackNumber"));

  const shipmentQuery = useShipment({
    trackNumber: trackNumber ?? "",
    queryConfig: {
      enabled: !!trackNumber,
    },
  });

  return (
    <>
      <ShipmentHero />
      <div className="container relative pt-12">
        <ShipmentSearch
          className="absolute left-0 right-0 -top-[30px] z-10"
          setTrackNumber={setTrackNumber}
        />
        {shipmentQuery.isLoading && (
          <div className="flex justify-center pt-12 ">
            <Loader2 className="animate-spin w-8 h-8" />
          </div>
        )}
        {shipmentQuery.isError && (
          <div className="flex justify-center pt-12">
            <ErrorShipmentNotFound />
          </div>
        )}
        {shipmentQuery?.data && !shipmentQuery.isError && (
          <ErrorBoundary fallback={<ErrorPage />}>
            <ShipmentDetails shipment={shipmentQuery.data} />
            {shipmentQuery.data.TransitEvents && (
              <TrackingDetails
                trackingDetails={shipmentQuery.data.TransitEvents}
              />
            )}
          </ErrorBoundary>
        )}
      </div>
    </>
  );
}
