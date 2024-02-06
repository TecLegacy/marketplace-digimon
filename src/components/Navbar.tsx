import Icons from '@/components/Icons';
import Link from 'next/link';
import NavItems from './NavItems';

export default function Navbar() {
  return (
    <div className=' sticky inset-x-0 top-0  h-16 bg-white'>
      <header className='relative bg-white'>
        <div className=' border-3 bg-gray-200'>
          <div className=' flex h-16 items-center'>
            {/* TODO: mobile view */}

            <div className=' ml-4 flex lg:ml-0 '>
              <Link href={'/'}>
                <Icons.logo className=' h-10  w-10' />
              </Link>
            </div>

            <div className=' z-50 hidden lg:ml-8 lg:block lg:self-stretch '>
              <NavItems />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
