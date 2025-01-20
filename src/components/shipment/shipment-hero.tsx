import pinIconPng from "/pin-icon.png";

export function ShipmentHero() {
  return (
    <div className="bg-muted">
      <div className="container pt-10 pb-16 flex flex-col items-center gap-2">
        <img src={pinIconPng} alt="pin icon" className="w-64" />
        <h2 className="text-4xl font-extrabold">Track Your Order</h2>
      </div>
    </div>
  );
}
