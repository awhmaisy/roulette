"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const menuItems = [
    { text: "Love, Mei", href: "/about" },
    { text: "Gunpoint", href: "/gunpoint" },
    { text: "Sigil", href: "/sigil" },
    { text: "Code Monkey", href: "/pay" },
    { text: "Bedtime", href: "/sleep" }
  ];

  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      const delta = event.deltaY;
      const rotationSpeed = 0.2;
      setRotationAngle(prev => prev + delta * rotationSpeed);
    };

    let startY: number;

    const handleTouchStart = (event: TouchEvent) => {
      startY = event.touches[0].pageY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      event.preventDefault();
      const touch = event.touches[0];
      const deltaY = touch.pageY - startY;
      const rotationSpeed = 0.2;
      setRotationAngle(prev => prev + deltaY * rotationSpeed);
    };

    window.addEventListener('wheel', handleWheel);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);

    // Initial random rotation
    const initialScroll = Math.floor(Math.random() * (100000000000000 - 99999999999 + 1));
    setRotationAngle(initialScroll * 0.2);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-white font-['Times_New_Roman'] overflow-hidden">
      <div className="fixed top-8 left-1/2 -translate-x-1/2 flex flex-col items-center w-[300px]">
        <div className="text-left">
          <div className="leading-none">There is nothing here for you to see. There are many a-seasons that will pass, many a-seasons where the market will crash.</div>
        </div>
        <Image
          src="/BETTERLUCK2-2.png"
          alt="Circle Background" 
          width={300}
          height={400}
          className="pt-5 pb-14"
        />
      </div>
      <div className="absolute top-16 left-4 text-xl">
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] text-center">
        </div>
      </div>
      <div className="relative w-[300px] h-[300px] mt-20">
        {menuItems.map((item, index) => {
          const angle = (index * 360) / menuItems.length + rotationAngle;
          const radius = 120; // Reduced radius for smaller circle

          return (
            <a
              key={item.text}
              href={item.href}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 origin-center hover:text-gray-500 transition-colors text-center text-md"
              style={{
                transform: `rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)`,
              }}
            >
              {item.text}
            </a>
          );
        })}
      </div>
    </div>
  );
}
