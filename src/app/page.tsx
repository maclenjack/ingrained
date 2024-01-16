import React from 'react';
import Image from 'next/image';
import Page from '@/components/page/Page';
import HomeLink, { HomeLinkContainer } from '@/components/HomeLink';
import SocialIcons from '@/components/SocialIcons';
import logo from '../../public/logo.png';

export default function Home() {
  return (
    <Page>
      <div className="box-border flex flex-col items-center h-auto p-10 py-20 w-full max-w-screen-xl">
        <Image className="h-auto" src={logo} alt="logo" width={550} priority />
        <SocialIcons size="large" />
        <div className="flex lg:flex-row flex-col justify-around items-center flex-grow w-full lg:max-w-none max-w-sm gap-20 my-10">
          <HomeLinkContainer bgColor="bg-orange-300">
            <HomeLink
              href="about-me"
              title="about me"
              description="Learn more about me and what I stand for."
            />
          </HomeLinkContainer>
          <HomeLinkContainer>
            <HomeLink
              className="basis-1/2 bg-violet-300 w-full rounded"
              href="shop"
              title="shop all"
              description="Explore all my pieces available be that paintings, jewellery or even t-shirts."
            />
            <HomeLink
              className="basis-1/2 bg-pink-300 w-full rounded"
              href="commissions"
              title="commissions"
              description="Discover your options to order a custom piece of artwork."
            />
          </HomeLinkContainer>
          <HomeLinkContainer
            bgColor="bg-lime-300"
          >
            <HomeLink
              href="portfolio"
              title="portfolio"
              description="Explore all the pieces I have created as my time as an artist."
            />
          </HomeLinkContainer>
        </div>
      </div>
    </Page>
  );
}
