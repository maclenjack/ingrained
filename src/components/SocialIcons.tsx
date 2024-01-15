import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagramSquare, faTiktok } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

type SocialIconProps = { size?: string, icon: IconProp };

function SocialIcon({
  size = '',
  icon
}: SocialIconProps) {
  return <FontAwesomeIcon icon={icon} className={`text-orange-300 ${size}`} />;
}

type SizeMap = {
  large: {
    email: string,
    instagram: string,
    tiktok: string
  },
  regular: {
    email: string,
    instagram: string,
    tiktok: string
  }
};

type SizeMapKey = keyof SizeMap;

type SocialIconsProps = { size?: SizeMapKey };

export default function SocialIcons({ size = 'regular' }: SocialIconsProps) {
  const sizeMap : SizeMap = {
    large: {
      email: 'text-3xl md:text-4xl',
      instagram: 'text-3xl md:text-4xl',
      tiktok: 'text-2xl md:text-3xl'
    },
    regular: {
      email: 'text-2xl md:text-3xl',
      instagram: 'text-2xl md:text-3xl',
      tiktok: 'text-xl md:text-2xl'
    }
  };

  return (
    <div className="flex flex-row justify-center items-center p-2 gap-8">
      <Link href="mailto:dianellart@gmail.com" aria-label="email me">
        <SocialIcon icon={faEnvelope} size={sizeMap[size].email} />
      </Link>
      <Link href="https://www.instagram.com/diannellart/" target="_blank" rel="noreferrer" aria-label="instagram">
        <SocialIcon icon={faInstagramSquare} size={sizeMap[size].email} />
      </Link>
      <Link href="/">
        <SocialIcon icon={faTiktok} size={sizeMap[size].tiktok} />
      </Link>
    </div>
  );
}
