import { cn } from '@/lib/utils';
import { FC } from 'react';

interface MaxWidthWrapper {
  children: React.ReactNode;
  className?: string;
}

const MaxWidthWrapper: FC<MaxWidthWrapper> = ({ children, className }) => {
  return (
    <div
      className={cn(
        className,
        'mx-auto w-full max-w-screen-xl px-2.5 md:px-20'
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
