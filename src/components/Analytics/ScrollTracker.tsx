'use client';
import { trackScrollDepth } from '@/utils/google-analytics';
import { useEffect } from 'react';

const useScrollDepthTracking = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const winHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight,
      );
      const totalDocScrollLength = docHeight - winHeight;
      const scrollPostion = Math.floor(
        (scrollTop / totalDocScrollLength) * 100,
      );

      if (scrollPostion % 25 === 0) {
        trackScrollDepth(scrollPostion);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

const ScrollTrackerComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useScrollDepthTracking();

  return <>{children}</>;
};

export default ScrollTrackerComponent;
