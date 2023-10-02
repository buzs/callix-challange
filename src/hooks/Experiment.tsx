import { useEffect, useState } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    google_optimize?: {
      get: (experimentId: string) => string;
    };
  }
}

// Source: https://dev.to/cloudx/use-google-optimize-in-react-web-for-ab-testing-45ok#
export const useExperiment = (experimentId: string) => {
  const [variant, setVariant] = useState<string>("0");

  useEffect(() => {
    const getVariant = async () => {
      if (window.dataLayer) {
        await window.dataLayer.push({
          event: "optimize.active",
        });
      }

      const intervalId = setInterval(() => {
        if (window.google_optimize) {
          setVariant(window.google_optimize.get(experimentId));
          clearInterval(intervalId);
        }
      }, 100);
    };

    getVariant().catch(console.error);
  }, [experimentId]);

  return variant;
};
