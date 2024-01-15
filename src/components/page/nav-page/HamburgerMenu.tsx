import React, { useState } from 'react';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AriaModal from 'react-aria-modal';
import SocialIcons from '@/components/SocialIcons';
import HomeLink from '@/components/HomeLink';

export default function HamburgerMenu() {
  const [active, setActive] = useState(false);

  if (!active) {
    return (
      <button type="button" aria-label="open hamburger menu" onClick={() => setActive(true)}>
        <FontAwesomeIcon className="text-orange-300 text-3xl" icon={faBars} />
      </button>
    );
  }

  return (
    <AriaModal dialogClass="w-full h-screen !flex justify-end" titleText="hamburger menu" onExit={() => setActive(false)}>
      <div className="flex flex-col gap-5 w-2/3 max-w-screen-md h-full bg-amber-50 shadow rounded-l text-slate-800 p-5">
        <div className="flex justify-center items-start flex-wrap">
          <span className="w-full flex justify-end text-slate-600 text-xl md:text-2xl">
            <button type="button" aria-label="exit" onClick={() => setActive(false)}>
              <FontAwesomeIcon icon={faX} />
            </button>
          </span>
          <SocialIcons size="large" />
        </div>
        <div className="flex flex-col justify-around items-center gap-10 h-full">
          <HomeLink
            className="basis-1/5 bg-orange-300 w-full rounded max-w-screen-sm"
            href="about-me"
            title="about me"
          />
          <HomeLink
            className="basis-1/5 bg-violet-300 w-full rounded max-w-screen-sm"
            href="shop"
            title="shop all"
          />
          <HomeLink
            className="basis-1/5 bg-pink-300 w-full rounded max-w-screen-sm"
            href="commissions"
            title="commissions"
          />
          <HomeLink
            className="basis-1/5 bg-lime-300 w-full rounded max-w-screen-sm"
            href="portfolio"
            title="portfolio"
          />
        </div>
      </div>
    </AriaModal>
  );
}
