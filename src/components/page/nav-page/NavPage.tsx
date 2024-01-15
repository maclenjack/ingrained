import React, { ReactNode } from 'react';
import Nav from './Nav';

export default function NavPage({ children } : { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-amber-50 w-full">
      <Nav />
      <main className="flex justify-center w-full">
        {children}
      </main>
    </div>
  );
}
