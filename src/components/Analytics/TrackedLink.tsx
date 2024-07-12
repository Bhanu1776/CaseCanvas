'use client';
import { handleGAclick } from '@/utils/google-analytics';
import Link, { LinkProps } from 'next/link';
import React from 'react';

interface TrackedLinkProps extends LinkProps {
  eventCategory: string;
  eventAction: string;
  eventLabel: string;
  className?: string;
  children: React.ReactNode;
}

const TrackedLink: React.FC<TrackedLinkProps> = ({
  eventCategory,
  eventAction,
  eventLabel,
  className,
  children,
  ...props
}) => {
  const handleClick = () => {
    handleGAclick(eventCategory, eventAction, eventLabel, () => {});
  };

  return (
    <Link {...props} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
};

export default TrackedLink;
