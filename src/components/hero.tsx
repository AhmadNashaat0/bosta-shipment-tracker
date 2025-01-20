import pinIconPng from "/pin-icon.png";

export function Hero() {
  return (
    <section className="">
      <div className="container py-10 flex flex-col items-center gap-4">
        <img src={pinIconPng} alt="pin icon" className="w-64" />
        <h2 className="text-4xl font-extrabold">Track Your Order</h2>
      </div>
    </section>
  );
}
