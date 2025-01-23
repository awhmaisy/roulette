"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function Gunpoint() {
    return (
        <div className="h-screen w-screen flex items-center justify-center bg-white font-['Times_New_Roman'] overflow-hidden">
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center">
                <Link href="/" className="hover:italic transition-colors underline">I want to go home, when can I go home?</Link>
            </div>
            <div className="w-[300px]">
                <div className="text-left leading-none">
                    <p>I hope you know that I was held against my will to utilize color. I am displacing my soul from my material body to use color.</p>
                    <br />
                    <p>Proudly sponsored by Noveske. Featuring the 10.5&quot; Gen III Shorty 300BLK AEG Rifle.</p>
                </div>
                <Image
                    src="/BL-GREEN.png"
                    alt="Circle Background"
                    width={300}
                    height={400}
                    className="pt-5 pb-14"
                />
            </div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                <Image
                    src="/NOVESKE.png"
                    alt="Gun Image"
                    width={400}
                    height={400}
                />
            </div>
        </div>
    );
}
