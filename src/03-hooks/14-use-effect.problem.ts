import { useEffect } from "react";

export const useTimeout = (timerMs: number) => {
  useEffect(() => {
    const id = setTimeout(() => {
      console.log("Done!");

      return () => {
        clearTimeout(id);
      };
    }, timerMs);
  }, [timerMs]);
};
