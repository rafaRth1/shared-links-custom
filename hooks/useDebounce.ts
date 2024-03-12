import { useEffect, useState } from "react";

export const useDebounce = (initialValue: string, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(initialValue);

  useEffect(() => {
    const timer = setTimeout(
      () => setDebouncedValue(initialValue),
      delay || 2000
    );

    return () => clearTimeout(timer);
  }, [initialValue, delay]);

  return debouncedValue;
};
