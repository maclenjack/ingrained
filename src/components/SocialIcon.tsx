import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type SocialIconProps = { size?: string, icon: IconProp };

export default function SocialIcon({ size, icon }: SocialIconProps) {
  return <FontAwesomeIcon icon={icon} className={`text-orange-300 ${size || 'text-4xl'}`} />;
}

SocialIcon.defaultProps = { size: '' };
