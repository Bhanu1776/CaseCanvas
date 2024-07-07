import { cn } from '@/lib/utils';
import Image from 'next/image';
import { HTMLAttributes } from 'react';

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        'pointer-events-none relative z-50 overflow-hidden',
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
        <Image
          src={imgSrc}
          className="min-h-full min-w-full object-cover"
          alt="overlaying phone image"
          width="1000"
          height="1000"
          placeholder="blur"
          blurDataURL={imgSrc}
        />
      </div>
    </div>
  );
};

export default Phone;
