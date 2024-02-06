'use client';

import { DIGITAL_PRODUCTS } from '@/config';
import { useState } from 'react';
import NavItem from './NavItem';

function NavItems() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const isAnyOpen = activeIndex !== null;

  return (
    <div className=' flex h-full gap-4'>
      {DIGITAL_PRODUCTS.map((product, i) => {
        function handleOpen() {
          if (activeIndex === i) {
            setActiveIndex(null);
          } else {
            setActiveIndex(i);
          }
        }

        return <NavItem key={product.value} />;
      })}
    </div>
  );
}

export default NavItems;
