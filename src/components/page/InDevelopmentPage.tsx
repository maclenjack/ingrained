import NavPage from '@/components/page/nav-page/NavPage';
import React from 'react';

export default function InDevelopmentPage() {
  return (
    <NavPage>
      <p className="text-slate-800 text-3xl p-10">
        Page is currently in development, please check in later.
      </p>
    </NavPage>
  );
}
