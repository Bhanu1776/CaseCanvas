'use client';
import PreviewLoader from '@/app/configure/preview/components/PreviewLoader';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { HTMLAttributes, useState } from 'react';

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={cn(
        'pointer-events-none relative z-50 overflow-hidden bg-[#181818]',
        className,
      )}
      {...props}
    >
      <Image
        src={dark ? '/phone-template-dark.png' : '/phone-template-white.png'}
        className="pointer-events-none z-50 select-none"
        alt="phone image"
        width="1000"
        height="1000"
        placeholder="blur"
        blurDataURL="/phone-template-white.png"
      />

      <div className="absolute inset-0 -z-10">
        {isLoading && <PreviewLoader />}
        <Image
          src={imgSrc}
          className={cn('min-h-full min-w-full object-cover', {
            'opacity-0': isLoading,
            'opacity-100': !isLoading,
            'transition-opacity duration-500': !isLoading,
          })}
          alt="overlaying phone image"
          width="1000"
          height="1000"
          placeholder="blur"
          blurDataURL={imgSrc}
          onLoadingComplete={() => setIsLoading(false)}
        />
      </div>
    </div>
  );
};

export default Phone;
