'use client';
import Spinner from '@/components/Spinner';
import Image from 'next/image';
import React, { useState } from 'react';

interface NextImageProps {
  imageUrl: string;
}

const MyNextImage: React.FC<NextImageProps> = ({ imageUrl }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative h-full w-full">
      {isLoading && <Spinner />}
      <Image
        src={imageUrl}
        alt="your image"
        layout="fill"
        objectFit="cover"
        className="pointer-events-none"
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
};

export default MyNextImage;
