import { StarRating } from '@/app/(Home)/(Hero)/components/StarRating';
import {
  UserImage,
  userImages,
} from '@/app/(Home)/(Hero)/components/UserImages';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Phone from '@/components/Phone';
import { Check } from 'lucide-react';
import Image from 'next/image';

const FEATURES = [
  'High-quality, durable material',
  '5 year print guarantee',
  'Modern Iphone models supported',
];

const HeroSection = () => {
  return (
    <section>
      <MaxWidthWrapper className="pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-3 lg:gap-x-0 lg:pb-52 lg:pt-24 xl:gap-x-8 xl:pt-32">
        <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
          <div className="relative mx-auto flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="absolute -top-20 left-0 hidden w-28 lg:block">
              <Image
                src="/snake-1.png"
                alt="Logo"
                className="w-full"
                width="1000"
                height="1000"
              />
            </div>

            {/* //* Title */}
            <h1 className="relative mt-16 w-fit text-balance text-5xl font-bold !leading-tight tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
              Your Image on a&nbsp;
              <span className="bg-green-600 px-2 text-white">Custom</span>
              &nbsp;Phone Case
            </h1>

            {/* //* Description */}
            <p className="mt-8 max-w-prose text-balance text-center text-lg md:text-wrap lg:pr-10 lg:text-left">
              Capture your favorite memories with your own,&nbsp;
              <span className="font-semibold">one-of-one</span> phone case.
              CaseCanvas allows you to protect your memories, not just your
              phone case.
            </p>

            {/* //* Features */}
            <ul className="mt-8 flex flex-col items-center space-y-2 text-left font-medium sm:items-start">
              <div className="space-y-2">
                {FEATURES.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-1.5 text-left"
                  >
                    <Check className="size-5 shrink-0 text-green-600" />
                    {feature}
                  </li>
                ))}
              </div>
            </ul>

            {/* //* Overall Reviews */}
            <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:items-start">
              <div className="flex -space-x-4">
                {userImages.map((src, index) => (
                  <UserImage key={index} src={src} alt="user image" />
                ))}
              </div>
              <div className="flex flex-col items-center justify-between sm:items-start">
                <StarRating count={5} />
                <p>
                  <span className="font-semibold">1.250</span> happy customers
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* //* Right side of the hero section - Phone Image */}
        <div className="col-span-full mt-32 flex h-fit w-full justify-center px-8 sm:px-16 md:px-0 lg:col-span-1 lg:mx-0 lg:mt-20">
          <div className="relative md:max-w-xl">
            <Image
              src="/your-image.png"
              className="absolute -top-20 left-56 hidden w-40 select-none sm:block lg:hidden lg:w-52 xl:block"
              alt="Your Image"
              width="1000"
              height="1000"
            />
            <Image
              src="/line.png"
              className="absolute -bottom-6 -left-6 w-20 select-none"
              alt="Line"
              width="1000"
              height="1000"
            />
            <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HeroSection;
