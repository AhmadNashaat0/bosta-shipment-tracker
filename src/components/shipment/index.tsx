import { ShipmentDetails } from "./shipment-details";
import { ShipmentHero } from "./shipment-hero";
import { ShipmentSearch } from "./shipment-search";
import { TrackingDetails } from "./tracking-details";

export function ShipmentPage() {
  return (
    <>
      <ShipmentHero />
      <div className="container relative pt-12">
        <ShipmentSearch className="absolute left-0 right-0 -top-[30px] z-10" />
        <ShipmentDetails />
        <TrackingDetails />
      </div>
    </>
  );
}
