import { useEffect } from "react";

export function useKeyPressed(handler, listenCapturing = true) {
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") {
        handler();
      }
    }
    document.addEventListener("keydown", handleKey, true);
    return () => document.removeEventListener("keydown", handleKey, true);
  }, [handler, listenCapturing]);
}
