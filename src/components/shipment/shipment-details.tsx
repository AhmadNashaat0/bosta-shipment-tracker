import { useTranslation } from "react-i18next";
import { Stepper } from "../stepper-timeline";
import { Shipment } from "./types";
import { format } from "date-fns";
import { ar } from "date-fns/locale";

export function ShipmentDetails({ shipment }: { shipment: Shipment }) {
  const { t } = useTranslation("ShipmentDetails");
  return (
    <div className="relative border rounded-md">
      <div className="p-4 border-b flex flex-col gap-1">
        <p className="text-xs test-muted-foreground">
          {t("ORDER")} <span className="rtl:hidden ltr:inline">#</span>
          {shipment.TrackingNumber}
          <span className="rtl:inline ltr:hidden">#</span>
        </p>
        <h2 className="text-3xl font-bold">{shipment.CurrentStatus.state}</h2>
        {shipment.TransitEvents && (
          <p className="text-sm">
            {shipment.TransitEvents[shipment.TransitEvents.length - 1].state}{" "}
            {format(shipment.CurrentStatus.timestamp, "EEEE, MMMM d, yyyy", {
              locale: ar,
            })}
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
