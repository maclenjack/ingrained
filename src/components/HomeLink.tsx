'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type HomeLinkContainerProps = {
  bgColor?: string,
  children: ReactNode
};

type HomeLinkProps = {
  className?: string,
  href: string,
  title: string,
  description?: string
};

export function HomeLinkContainer({ bgColor = '', children }: HomeLinkContainerProps) {
  return (
    <div className={`flex flex-col gap-20 basis-1/3 h-full rounded max-w-full ${bgColor}`}>
      {children}
    </div>
  );
}

export default function HomeLink({
  className = '', href, title, description = ''
}: HomeLinkProps) {
  const pathname = usePathname();

  if (pathname != null && pathname.includes(href)) return null;

  return (
    <Link href={href} className={`flex flex-col justify-center h-full p-10 lg:px-10 rounded shadow ${className}`}>
      <h1 className="flex justify-center items-center basis-1/2 text-slate-800 text-2xl md:text-4xl text-center p-4">
        {title}
      </h1>
      {
        description && (
          <p className="flex justify-center basis-1/2 text-slate-600 text-lg text-center p-4">
            {description}
          </p>
        )
      }
    </Link>
  );
}
