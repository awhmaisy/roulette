"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function About() {
    return (
        <div className="h-screen w-screen flex items-center justify-center bg-white font-['Times_New_Roman'] overflow-hidden">
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center">
                <Link href="/" className="hover:italic transition-colors underline">I want to go home, when can I go home?</Link>
            </div>
            <div className="w-[300px]">
                <div className="text-left leading-none">
                    <p>
                        12 hoodies will be produced for the Azura dev team. If you are a civilian, you&apos;ll be able to purchase market-maker goods eventually. That is, if you beat everyone else to the 200-unit limited run.
                    </p>
                    <br />
                    <p>
                        Want to be prematurely generous? We just might take a bribe.
                    </p>
                </div>
                <Image
                    src="/SEAL-DECLASSED-02.png"
                    alt="Circle Background"
                    width={300}
                    height={400}
                    className="pt-5 pb-14"
                />
            </div>
        </div>
    );
}
