import { useQuery, queryOptions } from "@tanstack/react-query";
import { api } from "@/lib/api-client";
import { Shipment } from "../type";
import { QueryConfig } from "@/lib/react-query";

export const getShipment = ({
  trackNumber,
}: {
  trackNumber: string;
}): Promise<Shipment> => {
  return api.get(`shipments/track/${trackNumber}`);
};

export const getShipmentQueryOptions = (trackNumber: string) => {
  return queryOptions({
    queryKey: ["shipments", trackNumber],
    queryFn: () => getShipment({ trackNumber }),
  });
};

type UseShipmentOptions = {
  trackNumber: string;
  queryConfig?: QueryConfig<typeof getShipmentQueryOptions>;
};

export const useShipment = ({
  trackNumber,
  queryConfig,
}: UseShipmentOptions) => {
  return useQuery({
    ...getShipmentQueryOptions(trackNumber),
    ...queryConfig,
  });
};
