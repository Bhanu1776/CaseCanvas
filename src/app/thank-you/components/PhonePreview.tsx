'use client';

import Spinner from '@/components/Loaders/Spinner';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/lib/utils';
import { CaseColor } from '@prisma/client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const PhonePreview = ({
  croppedImageUrl,
  color,
}: {
  croppedImageUrl: string;
  color: CaseColor;
  // color: $Enums.CaseColor;   //* We can get the types in this way too!
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [renderedDimensions, setRenderedDimensions] = useState({
    height: 0,
    width: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  const handleResize = () => {
    if (!ref.current) return;
    const { width, height } = ref.current.getBoundingClientRect();
    setRenderedDimensions({ width, height });
  };

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);

  let caseBackgroundColor = 'bg-zinc-950';
  if (color === 'blue') caseBackgroundColor = 'bg-rose-950';
  if (color === 'rose') caseBackgroundColor = 'bg-rose-950';

  return (
    <AspectRatio ref={ref} ratio={3000 / 2001} className="relative">
      <div
        className="absolute z-20 scale-[1.0352]" // Scale will ensure that image will be never bigger than parent image
        style={{
          left:
            renderedDimensions.width / 2 -
            renderedDimensions.width / (1216 / 121), // We are using ratios because, even if the screen size changes we want our image should look intact
          top: renderedDimensions.height / 6.22,
        }}
      >
        {isLoading && <Spinner />}
        <Image
          width={renderedDimensions.width / (3000 / 637)}
          className={cn(
            'phone-skew relative z-20 select-none rounded-b-[10px] rounded-t-[15px] md:rounded-b-[20px] md:rounded-t-[30px]',
            caseBackgroundColor,
          )}
          src={croppedImageUrl}
          alt="user image"
          height="1000"
          onLoad={() => setIsLoading(false)}
        />
      </div>

      <div className="relative z-40 h-full w-full">
        <img
          alt="phone"
          src="/clearphone.png"
          className="pointer-events-none h-full w-full select-none rounded-md antialiased"
        />
      </div>
    </AspectRatio>
  );
};

export default PhonePreview;
