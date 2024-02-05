import { cn } from '@/lib/utils';
import { FC } from 'react';

interface MaxWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const MaxWrapper: FC<MaxWrapperProps> = ({ children, className }) => {
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

export default MaxWrapper;
