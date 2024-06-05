import { Examples } from '@/app/(Home)/(Examples)/page';
import HeroSection from '@/app/(Home)/(Hero)/page';
import Testimonials from '@/app/(Home)/(Testimonials)/page';
import Working from '@/app/(Home)/(Working)/page';

export default function Home() {
  return (
    <div className="bg-slate-50">
      <HeroSection />
      <Testimonials />
      <Examples />
      <Working />
    </div>
  );
}
