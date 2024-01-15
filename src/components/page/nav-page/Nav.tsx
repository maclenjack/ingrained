'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SocialIcons from '@/components/SocialIcons';
import HamburgerMenu from '@/components/page/nav-page/HamburgerMenu';

export default function Nav() {
  return (
    <nav className="flex justify-center z-50 w-full">
      <div className="flex flex-row justify-between w-full max-w-screen-2xl px-12 py-8">
        <Link className="max-md:hidden" href="/">
          <Image src="/logo.png" alt="logo" width={350} height={100} />
        </Link>
        <Link className="md:hidden" href="/">
          <Image src="/logo.png" alt="logo" width={200} height={100} />
        </Link>
        <span className="max-md:hidden flex items-center gap-6 ">
          <SocialIcons />
          <HamburgerMenu />
        </span>
        <span className="md:hidden flex items-center"><HamburgerMenu /></span>
      </div>
    </nav>
  );
}
