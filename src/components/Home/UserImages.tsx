import Image from 'next/image';

export const userImages = [
  '/users/user-1.png',
  '/users/user-2.png',
  '/users/user-3.png',
  '/users/user-4.jpg',
  '/users/user-3.png',
];

export const UserImage = ({ src, alt }: { src: string; alt: string }) => (
  <Image
    src={src}
    alt={alt}
    className="inline-block size-10 select-none rounded-full ring-2 ring-slate-100"
    width={1000}
    height={1000}
    placeholder="blur"
    blurDataURL={src}
  />
);
