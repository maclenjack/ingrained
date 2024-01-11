import React, { ReactNode } from 'react';

export default function Page({ children } : { children: ReactNode }) {
  return (
    <main className="flex justify-center min-h-screen bg-amber-50">
      {children}
    </main>
  );
}
