import React from 'react';
import NavPage from '@/components/page/NavPage';
import Image from 'next/image';

export default function AboutMe() {
  return (
    <NavPage>
      <div className="flex flex-row justify-around items-center gap-20 w-full max-w-screen-xl px-20 py-10">
        <Image className="object-cover bg-orange-300 p-6" src="/about-me.jpg" alt="Picture of the artist" width={1085 / 3} height={2048 / 3} />
        <div className="h-full flex flex-col justify-between py-5">
          <h1 className=" text-xl font-bold text-slate-800">about me</h1>
          <h2 className="text-8xl text-orange-500">Diannella Thomas</h2>
          <p className="text-slate-800">
            New Zealand Artist born and raised in Wellington.
            <br />
            <br />
            My artwork celebrates the beauty of the simple things in life. I want to make people smile when they see
            something that I&apos;ve created. I focus of creating work based on nature, the human body and the precious
            animals that live along with us. I am to show the beauty that&apos;s ingrained in everything.
          </p>
        </div>
      </div>
    </NavPage>
  );
}
