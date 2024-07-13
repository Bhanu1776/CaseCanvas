import ReactGA from 'react-ga4';

const initializeGA = (): void => {
  ReactGA.initialize(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!);
};

const trackGAEvent = (
  category: string,
  action: string,
  label: string,
): void => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};

const handleGAclick = (
  category: string,
  action: string,
  label: string,
  onClick: () => void,
): void => {
  trackGAEvent(category, action, label);
  onClick();
};

const trackScrollDepth = (percentage: number): void => {
  ReactGA.event({
    category: 'Scroll Depth',
    action: `Scrolled to ${percentage}%`,
    label: window.location.pathname,
  });
};

export default initializeGA;
export { handleGAclick, initializeGA, trackGAEvent, trackScrollDepth };
