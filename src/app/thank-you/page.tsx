import ThankYou from '@/app/thank-you/components/ThankYou';
import { Suspense } from 'react';

const page = () => {
  console.log('Hello');
  return (
    // We are using "useSearchParams" hook in the child component, that's the reason why we wrapped inside 'Suspense'
    <Suspense>
      <ThankYou />
    </Suspense>
  );
};

export default page;
