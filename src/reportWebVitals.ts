import type { Metric } from 'web-vitals';

type PerfEntryHandler = (metric: Metric) => void;

const reportWebVitals = (onPerfEntry?: PerfEntryHandler): void => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
      onCLS(onPerfEntry);
      onINP(onPerfEntry);  // Replaces onFID
      onFCP(onPerfEntry);
      onLCP(onPerfEntry);
      onTTFB(onPerfEntry);
    }).catch((error) => {
      console.error('Error loading web-vitals', error);
    });
  }
};

export default reportWebVitals;