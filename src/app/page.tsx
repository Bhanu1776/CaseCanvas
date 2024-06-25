import { Examples } from '@/components/Home/Examples';
import HeroSection from '@/components/Home/HeroSection';
import Testimonials from '@/components/Home/Testimonials';
import Working from '@/components/Home/Working';

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
