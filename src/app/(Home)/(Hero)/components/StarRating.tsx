import { Star } from 'lucide-react';

export const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {[...Array(count)].map((_, index) => (
      <Star key={index} className="size-4 fill-green-600 text-green-600" />
    ))}
  </div>
);
