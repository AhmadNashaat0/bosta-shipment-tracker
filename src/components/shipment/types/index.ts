export type Event = {
  state: string;
  code: string;
  timestamp: string;
  exceptionCode?: string;
  msg?: string;
};

export type Shipment = {
  CurrentStatus: Event;
  TransitEvents?: Event[];
  TrackingNumber: string;
};
