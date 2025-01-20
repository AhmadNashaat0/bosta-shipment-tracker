export type Event = {
  state: string;
  code: string;
  timpestamp: string;
  exceptionCode?: string;
  msg?: string;
};

export type Shipment = {
  CurrentStatus: Event;
  TransitEvents: Event[];
};
