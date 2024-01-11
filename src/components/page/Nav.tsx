import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SocialIcons from '@/components/SocialIcons';

export default function Nav() {
  return (
    <nav className="flex justify-center z-50 w-full">
      <div className="flex flex-row justify-between w-full max-w-screen-2xl px-12 py-8">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={350} height={100} />
        </Link>
        <SocialIcons />
      </div>
    </nav>
  );
}
