import { useQuery, queryOptions } from "@tanstack/react-query";
import { api } from "@/lib/api-client";
import { Shipment } from "../types";
import { QueryConfig } from "@/lib/react-query";
import { useTranslation } from "react-i18next";

export const getShipment = ({
  trackNumber,
  language,
}: {
  trackNumber: string;
  language: string;
}): Promise<Shipment> => {
  return api.get(`shipments/track/${trackNumber}`, {
    params: { lang: language },
  });
};

export const getShipmentQueryOptions = (
  trackNumber: string,
  language: string
) => {
  return queryOptions({
    queryKey: ["shipments", trackNumber, language],
    queryFn: () => getShipment({ trackNumber, language }),
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
  const { i18n } = useTranslation();
  return useQuery({
    ...getShipmentQueryOptions(trackNumber, i18n.language),
    ...queryConfig,
  });
};
