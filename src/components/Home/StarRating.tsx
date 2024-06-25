import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

export const StarRating = ({
  count,
  className,
}: {
  count: number;
  className?: string;
}) => (
  <div className="flex gap-0.5">
    {[...Array(count)].map((_, index) => (
      <Star
        key={index}
        className={cn('size-4 fill-green-600 text-green-600', className)}
      />
    ))}
  </div>
);
