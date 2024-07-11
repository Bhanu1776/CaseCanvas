'use client';

import { initializeGA } from '@/utils/google-analytics';
import { useEffect } from 'react';

export default function GoogleAnalytics() {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initializeGA();
      window.GA_INITIALIZED = true;
    }
  }, []);
  return null;
}
