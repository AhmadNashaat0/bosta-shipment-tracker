import { useQuery, queryOptions } from "@tanstack/react-query";
import { api } from "@/lib/api-client";

export const getShipment = ({
  trackNumber,
}: {
  trackNumber: string;
}): Promise<{ data: any }> => {
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
  queryConfig?: any;
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
