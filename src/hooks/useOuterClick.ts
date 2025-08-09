import { useEffect, useRef } from "react";

export function useOuterClick<T extends HTMLElement>(callback: () => void) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleCLickOuter = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleCLickOuter);
    return () => {
      document.removeEventListener("mousedown", handleCLickOuter);
    };
  }, [callback]);

  return ref;
}
