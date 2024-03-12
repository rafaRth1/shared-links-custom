import React, { useCallback, useMemo } from "react";

/** Hook extracted from material-ui (useMediaQueryNew) https://github.com/mui/material-ui/blob/master/packages/mui-material/src/useMediaQuery/useMediaQuery.ts !!!!!*/

const maybeReactUseSyncExternalStore: undefined | any = (React as any)[
  "useSyncExternalStore" + ""
];

export function useMediaQueryNew(
  query: string,
  defaultMatches: boolean,
  matchMedia: typeof window.matchMedia | null,
  ssrMatchMedia: ((query: string) => { matches: boolean }) | null,
  noSsr: boolean
): boolean {
  const getDefaultSnapshot = useCallback(
    () => defaultMatches,
    [defaultMatches]
  );

  const getServerSnapshot = useMemo(() => {
    if (noSsr && matchMedia) {
      return () => matchMedia!(query).matches;
    }

    if (ssrMatchMedia !== null) {
      const { matches } = ssrMatchMedia(query);
      return () => matches;
    }

    return getDefaultSnapshot;
  }, [getDefaultSnapshot, query, ssrMatchMedia, noSsr, matchMedia]);

  const [getSnapshot, subscribe] = useMemo(() => {
    if (matchMedia === null) {
      return [getDefaultSnapshot, () => () => {}];
    }

    const mediaQueryList = matchMedia(query);

    return [
      () => mediaQueryList.matches,
      (notify: () => void) => {
        // TODO: Use `addEventListener` once support for Safari < 14 is dropped
        mediaQueryList.addListener(notify);
        return () => {
          mediaQueryList.removeListener(notify);
        };
      },
    ];
  }, [getDefaultSnapshot, matchMedia, query]);

  const match = maybeReactUseSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  return match;
}
