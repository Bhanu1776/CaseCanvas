import { Icons } from '@/components/Home/Icons';
import { StarRating } from '@/components/Home/StarRating';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Check } from 'lucide-react';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <section className="grainy-dark bg-slate-100 py-24">
      <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
        <main className="flex flex-col items-center gap-4 sm:gap-6 lg:flex-row">
          <h2 className="order-1 mt-2 text-balance text-center text-5xl font-bold !leading-tight tracking-tight text-gray-900 md:text-6xl">
            What our
            <span className="relative px-2">
              customers
              <Icons.underline className="pointer-events-none absolute inset-x-0 -bottom-6 hidden text-rose-500 sm:block" />
            </span>
            say
          </h2>
          <Image
            src="/panda-love.png"
            className="order-0 -ml-4 w-32 select-none lg:order-2"
            alt="Logo"
            width="1000"
            height="1000"
            placeholder="blur"
            blurDataURL="/panda-love.png"
          />
        </main>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* //* First user review */}
          <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
            <div className="mb-2 flex gap-0.5">
              <StarRating count={5} className="size-5" />
            </div>
            <article className="text-lg leading-8">
              <p>
                "The case is sturdy and I’ve already received compliments on its
                design. I’ve had it for two and a half months, and the{' '}
                <span className="bg-slate-800 p-0.5 text-white">
                  image remains sharp and vibrant
                </span>
                . My previous case started to turn yellow after just a few
                weeks. I absolutely love this one."
              </p>
            </article>
            <div className="mt-2 flex gap-4">
              <Image
                className="h-12 w-12 select-none rounded-full object-cover"
                src="/users/user-1.png"
                alt="user"
                width="1000"
                height="1000"
                placeholder="blur"
                blurDataURL="/users/user-1.png"
              />
              <div className="flex flex-col">
                <p className="font-semibold">David</p>
                <div className="flex items-center gap-1.5 text-zinc-600">
                  <Check className="h-4 w-4 stroke-[3px] text-rose-600" />
                  <p className="text-sm">Verified Purchase</p>
                </div>
              </div>
            </div>
          </div>

          {/* //* second user review */}
          <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
            <div className="mb-2 flex gap-0.5">
              <StarRating count={5} className="size-5" />
            </div>
            <article className="text-lg leading-8">
              <p>
                “I usually carry my phone and keys in the same pocket, which
                caused severe scratches on all my previous cases. However, this
                one still{' '}
                <span className="bg-slate-800 p-0.5 text-white">
                  looks almost brand new after about six months
                </span>
                , with just a barely noticeable scratch on the corner. I’m
                really impressed with it.”
              </p>
            </article>
            <div className="mt-2 flex gap-4">
              <Image
                className="h-12 w-12 select-none rounded-full object-cover"
                src="/users/user-4.jpg"
                alt="user"
                width="1000"
                height="1000"
                placeholder="blur"
                blurDataURL="/users/user-4.jpg"
              />
              <div className="flex flex-col">
                <p className="font-semibold">Bunny</p>
                <div className="flex items-center gap-1.5 text-zinc-600">
                  <Check className="h-4 w-4 stroke-[3px] text-rose-600" />
                  <p className="text-sm">Verified Purchase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      <div className="pt-16">{/* <Reviews /> */}</div>
    </section>
  );
};

export default Testimonials;
