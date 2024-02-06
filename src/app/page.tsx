import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Button, buttonVariants } from '@/components/ui/button';
import { ArrowDownToLine, CheckCircle, Leaf } from 'lucide-react';
import Link from 'next/link';

const perks = [
  {
    name: 'Instant',
    Icon: ArrowDownToLine,
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit',
  },
  {
    name: 'guarantee',
    Icon: CheckCircle,
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit',
  },
  {
    name: 'Environment',
    Icon: Leaf,
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit',
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className=' mx-auto flex max-w-3xl flex-col items-center py-20 text-center'>
          <h1 className=' text-4xl font-bold tracking-tight  text-gray-900 sm:text-6xl'>
            Your digital market place{' '}
            <span className=' text-blue-600'>Digital Asset</span>
          </h1>
          <p className=' mt-6 max-w-prose text-lg  text-muted-foreground'>
            A digital marketplace connects buyers and sellers for efficient
            transactions, secure payments, and global showcasing of digital
            goods and services.
          </p>
          <div className=' mt-6 flex flex-col gap-4 sm:flex-row'>
            <Link href={'/products'} className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant={'ghost'}>Our quality &rarr;</Button>
          </div>
        </div>
        {/* TODO: List of products */}
      </MaxWidthWrapper>

      <section className='border-t border-gray-200 bg-gray-50'>
        <MaxWidthWrapper className='py-20'>
          <div className=' sm:grid-col-2 lg:grid-col-3 grid grid-cols-1 gap-y-12  sm:gap-x-6 lg:gap-x-8 lg:gap-y-0'>
            {/* Perks */}
            {perks.map(perk => (
              <div
                key={perk.name}
                className=' text-center md:flex md:items-start md:text-left lg:block lg:text-center'
              >
                {/* Icons */}
                <div className='flex justify-center md:flex-shrink-0'>
                  <div className=' flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-900 '>
                    {<perk.Icon className=' h-1/3 w-1/3' />}
                  </div>
                </div>

                {/* Perks info */}
                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                  <h3 className=' text-base font-medium text-gray-900 '>
                    {perk.name}
                  </h3>
                  <p className='mt-3 text-sm text-muted-foreground'>
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
