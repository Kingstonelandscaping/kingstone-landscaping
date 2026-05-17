interface CalendlyInlineWidgetOptions {
  url: string;
  parentElement: HTMLElement;
  prefill?: Record<string, string>;
  utm?: Record<string, string>;
}

interface Calendly {
  initInlineWidget: (options: CalendlyInlineWidgetOptions) => void;
}

interface Window {
  Calendly?: Calendly;
  gtag?: (...args: unknown[]) => void;
  dataLayer?: unknown[];
}
