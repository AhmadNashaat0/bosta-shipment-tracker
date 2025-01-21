export type Event = {
  state: string;
  code: string;
  timestamp: string;
  exceptionCode?: string;
  msg?: string;
};

export type Shipment = {
  TrackingNumber: string;
  CreateDate: string;
  CurrentStatus: Event;
  TransitEvents?: Event[];
  collectedFromBusiness?: string;
};
