import { useTranslation } from "react-i18next";
import { Stepper } from "../../../components/stepper-timeline";
import { Shipment } from "../types";
import { format, addDays } from "date-fns";
import { ar, enUS } from "date-fns/locale";

export function ShipmentDetails({ shipment }: { shipment: Shipment }) {
  const { t, i18n } = useTranslation("ShipmentDetails");
  return (
    <div className="relative border rounded-md">
      <div className="p-4 border-b flex flex-col gap-1.5">
        <p className="text-xs test-muted-foreground">
          {t("ORDER")} <span className="rtl:hidden ltr:inline">#</span>
          {shipment.TrackingNumber}
          <span className="rtl:inline ltr:hidden">#</span>
        </p>
        <h2 className="text-xl sm:text-3xl font-bold">
          {shipment.CurrentStatus.state}
        </h2>
        {shipment.TransitEvents && (
          <>
            <p className="text-sm">
              {shipment.TransitEvents[shipment.TransitEvents.length - 1].state}{" "}
              <span className="text-accent-teal">
                {format(
                  shipment.CurrentStatus.timestamp,
                  "EEEE, MMMM d, yyyy",
                  {
                    locale: i18n.language === "ar" ? ar : enUS,
                  }
                )}
              </span>
            </p>
            {shipment.TransitEvents[shipment.TransitEvents.length - 1].msg && (
              <p className="text-sm">
                {shipment.TransitEvents[shipment.TransitEvents.length - 1].msg}
              </p>
            )}
          </>
        )}
        {shipment.PromisedDate &&
          ![45, 46].includes(shipment.CurrentStatus.code) &&
          addDays(shipment.CurrentStatus.timestamp, 0) <=
            addDays(shipment.PromisedDate, 2) && (
            <p className="text-sm">
              {t("expectedDate")} :{" "}
              <span className="text-accent-teal">
                {format(shipment.PromisedDate, "MMM d", {
                  locale: i18n.language === "ar" ? ar : enUS,
                })}
              </span>{" "}
              {t("to")}{" "}
              <span className="text-accent-teal">
                {format(addDays(shipment.PromisedDate, 2), "MMM d", {
                  locale: i18n.language === "ar" ? ar : enUS,
                })}
              </span>
            </p>
          )}
      </div>
      {![46].includes(shipment.CurrentStatus.code) && (
        <div className="pt-6 sm:py-7">
          <div className="px-4 sm:px-0 sm:w-4/5 lg:w-2/3 sm:mx-auto">
            <Stepper
              state={shipment.CurrentStatus.state}
              dates={{
                created: shipment.CreateDate,
                pucked: shipment.collectedFromBusiness,
                current: shipment.CurrentStatus.timestamp,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
