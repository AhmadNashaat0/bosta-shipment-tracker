import { useSearchParams } from "@/utils/useSearchParams";
import { ShipmentDetails } from "./components/shipment-details";
import { ShipmentHero } from "./components/shipment-hero";
import { ShipmentSearch } from "./components/shipment-search";
import { TrackingDetails } from "./components/tracking-details";
import { useShipment } from "./api/get-shipment";
import { Suspense, useState } from "react";
import { Loader2 } from "lucide-react";
import { ErrorShipmentNotFound } from "../../components/error/errorShipmentNotFound";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorPage } from "../../components/error/errorPage";

export default function ShipmentPage() {
  const { getSearchParam } = useSearchParams();
  const [trackNumber, setTrackNumber] = useState(getSearchParam("trackNumber"));
  const [isExpanded, setIsExpanded] = useState(false);

  const shipmentQuery = useShipment({
    trackNumber: trackNumber ?? "",
    queryConfig: {
      enabled: !!trackNumber,
    },
  });

  return (
    <>
      <ShipmentHero />
      <div className="container relative pt-16">
        <ShipmentSearch
          className="container absolute left-0 right-0 -top-[30px] z-10"
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
            <Suspense
              fallback={
                <div className="flex justify-center pt-12 ">
                  <Loader2 className="animate-spin w-8 h-8" />
                </div>
              }
            >
              <section
                id="shipmentInfo"
                className="bg-background animate-fade-up animate-duration-700"
              >
                <ShipmentDetails
                  shipment={shipmentQuery.data}
                  setIsExpanded={setIsExpanded}
                />
                {shipmentQuery.data.TransitEvents && (
                  <TrackingDetails
                    trackingDetails={shipmentQuery.data.TransitEvents}
                    isExpanded={isExpanded}
                    setIsExpanded={setIsExpanded}
                  />
                )}
              </section>
            </Suspense>
          </ErrorBoundary>
        )}
      </div>
    </>
  );
}
