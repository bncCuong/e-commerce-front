import React, { ReactNode } from 'react';
import { Header } from './header';
import { Footer } from './footer';

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className="w-full">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
