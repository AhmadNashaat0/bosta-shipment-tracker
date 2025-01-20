import { Stepper } from "../stepper-timeline";

export function ShipmentDetails() {
  return (
    <div className="relative border rounded-md">
      <div className="p-4 border-b">
        <p className="text-xs test-muted-foreground">ORDER #{12132465}</p>
        <h2 className="text-3xl font-bold">Arriving by Sun Nov. 13</h2>
        <p className="text-sm">
          Your order is expected to arrive within 2 -3 working days.
        </p>
      </div>
      <div className="py-5">
        <div className="px-4 sm:px-0 sm:w-2/3 sm:mx-auto">
          <Stepper />
        </div>
      </div>
    </div>
  );
}
