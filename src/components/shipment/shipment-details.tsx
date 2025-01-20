import { Stepper } from "../stepper-timeline";
import { Shipment } from "./types";

export function ShipmentDetails({ shipment }: { shipment: Shipment }) {
  return (
    <div className="relative border rounded-md">
      <div className="p-4 border-b flex flex-col gap-1">
        <p className="text-xs test-muted-foreground">
          ORDER #{shipment.TrackingNumber}
        </p>
        <h2 className="text-3xl font-bold">{shipment.CurrentStatus.state}</h2>
        {shipment.TransitEvents && (
          <p className="text-sm">
            {shipment.TransitEvents[shipment.TransitEvents.length - 1].state}{" "}
            {shipment.CurrentStatus.timestamp}
          </p>
        )}
      </div>
      <div className="pt-6 pb-10">
        <div className="px-4 sm:px-0 sm:w-2/3 sm:mx-auto">
          <Stepper state={shipment.CurrentStatus.state} />
        </div>
      </div>
    </div>
  );
}
