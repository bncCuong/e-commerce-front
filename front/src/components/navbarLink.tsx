import Link from 'next/link';
import React from 'react';

type Props = {
  inMenu?: boolean;
  inFooter?: boolean;
  inHeader?: boolean;
};

export const NavbarLink = ({ inMenu, inFooter, inHeader }: Props) => {
  return (
    <div
      className={` ${inHeader && 'space-x-8'} ${
        inFooter && 'flex flex-col space-y-3'
      } ${
        inMenu &&
        'flex flex-col space-y-6 ml-4 space-x-0 text-lg font-bold text-black'
      }`}
    >
      <Link href="/store">Store</Link>
      <Link href="/mac">Mac</Link>
      <Link href="/ipad">iPad</Link>
      <Link href="/iphone">iPhone</Link>
      <Link href="/iphone">iPhone</Link>
      <Link href="/iphone">iPhone</Link>
      <Link href="/iphone">iPhone</Link>
      <Link href="/iphone">iPhone</Link>
      <Link href="/iphone">iPhone</Link>
      <Link href="/iphone">iPhone</Link>
    </div>
  );
};
