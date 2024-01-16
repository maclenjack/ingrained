import React from 'react';
import NavPage from '@/components/page/nav-page/NavPage';

export default function NotFound() {
  return (
    <NavPage>
      <p className="text-slate-800 text-3xl p-10">The page you were seeking could not be found!</p>
    </NavPage>
  );
}
