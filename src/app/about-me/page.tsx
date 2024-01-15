import React from 'react';
import NavPage from '@/components/page/NavPage';
import Image from 'next/image';

export default function AboutMe() {
  const getDescription = (hidden: boolean) => (
    <p className={`text-slate-800 ${hidden ? 'lg:hidden' : 'max-lg:hidden'}`}>
      New Zealand Artist born and raised in Wellington.
      <br />
      <br />
      My artwork celebrates the beauty of the simple things in life. I want to make people smile when they see
      something that I&apos;ve created. I focus of creating work based on nature, the human body and the precious
      animals that live along with us. I am to show the beauty that&apos;s ingrained in everything.
    </p>
  );

  return (
    <NavPage>
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row justify-around items-center gap-20 w-full max-w-screen-xl px-20 py-10">
          <Image
            className="object-cover bg-orange-300 p-6 rounded shadow"
            src="/about-me.jpg"
            alt="Picture of the artist"
            width={1085 / 3}
            height={2048 / 3}
          />
          <div className="h-full flex flex-col gap-5 lg:gap-0 justify-center lg:justify-between py-5">
            <h1 className="text-xl font-bold text-slate-800">about me</h1>
            <h2 className="text-6xl lg:text-8xl text-orange-500">Diannella Thomas</h2>
            {getDescription(false)}
          </div>
        </div>
        <span className="p-10">{getDescription(true)}</span>
      </div>
    </NavPage>
  );
}
