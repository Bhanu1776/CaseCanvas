import TrackedLink from '@/components/Analytics/TrackedLink';
import MaxWidthWrapper from '@/components/other/MaxWidthWrapper';
import Phone from '@/components/other/Phone';
import { buttonVariants } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

const REASONS_TO_BUY = [
  'High-quality silicone material',
  'Scratch and fingerprint resistant coating',
  'Wireless charging compatible',
  '5 year print warranty',
];

const Working = () => {
  return (
    <section>
      <MaxWidthWrapper className="py-24">
        {/* //* Heading */}
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="order-1 mt-2 text-balance text-center text-5xl font-bold !leading-tight tracking-tight text-gray-900 md:text-6xl">
              Upload your photo and get&nbsp;
              <span className="relative bg-rose-600 px-2 text-white">
                your own case
              </span>
              &nbsp;now
            </h2>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="relative flex grid-cols-2 flex-col items-center gap-40 md:grid">
            {/* //* This part is really interesting, Here we played with an arrow how it should look on different devices */}
            <img
              src="/arrow.png"
              alt="arrow"
              className="absolute left-1/2 top-[25rem] z-10 -translate-x-1/2 -translate-y-1/2 rotate-90 select-none md:top-1/2 md:rotate-0"
            />

            <div className="relative h-80 w-full max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 md:h-full md:justify-self-end lg:rounded-2xl">
              <img
                src="/bhanu.jpg"
                alt="arrow"
                className="h-full w-full select-none rounded-md bg-white object-cover shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>

            <Phone className="w-60" imgSrc="/bhanu-phone.jpg" />
          </div>
        </div>

        <ul className="mx-auto mt-12 w-fit max-w-prose space-y-2 sm:text-lg">
          {REASONS_TO_BUY.map((feature, index) => (
            <ol key={index} className="list-inside list-disc">
              <li key={index} className="w-fit">
                <Check className="mr-1.5 inline h-5 w-5 text-rose-600" />
                {feature}
              </li>
            </ol>
          ))}

          <div className="flex justify-center">
            <TrackedLink
              className={buttonVariants({
                size: 'lg',
                className: 'mx-auto mt-8 select-none',
              })}
              href="/configure/upload"
              eventCategory="Button from Working section"
              eventAction="Click"
              eventLabel="Create case from Landing page"
            >
              Create your case now <ArrowRight className="ml-1.5 h-4 w-4" />
            </TrackedLink>
          </div>
        </ul>
      </MaxWidthWrapper>
    </section>
  );
};

export default Working;
