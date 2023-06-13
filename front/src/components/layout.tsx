import React, { ReactNode } from 'react';
import { Header } from './header';
import { Footer } from './footer';

type Props = {
  children: ReactNode;
  bgColorHeader?: boolean;
};

export const Layout = ({ children, bgColorHeader }: Props) => {
  return (
    <div className="w-full">
      <Header bgColor={bgColorHeader} />
      <section>{children}</section>
      <Footer />
    </div>
  );
};
