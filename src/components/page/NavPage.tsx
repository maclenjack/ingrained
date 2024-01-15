import React, { ReactNode } from 'react';
import Nav from './Nav';

export default function Page({ children } : { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-amber-50">
      <Nav />
      <main className="flex justify-center w-full flex-grow-0">
        {children}
      </main>
    </div>
  );
}
