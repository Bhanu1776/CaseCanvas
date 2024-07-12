'use client';
import Spinner from '@/components/Loaders/Spinner';
import { usePathname } from 'next/navigation';

const loading = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname();

  const noLoadingRoutes = ['/', '/auth-callback', '/configure/preview'];

  if (noLoadingRoutes.includes(pathname)) {
    return null; // Do not render the loading component
  }
  return <Spinner />;
};

export default loading;
