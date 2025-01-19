import { DefaultOptions } from "@tanstack/react-query";

const STALE_TIME_IN_MINUTES = 1;

export const queryConfig = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 1000 * 60 * STALE_TIME_IN_MINUTES,
  },
} satisfies DefaultOptions;
