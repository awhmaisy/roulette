"use client";

import Link from 'next/link';

export default function Sleep() {
    return (
        <div className="h-screen w-screen flex items-center justify-center bg-white font-['Times_New_Roman'] overflow-hidden">
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center">
                <Link href="/" className="hover:italic transition-colors underline">I want to go home, when can I go home?</Link>
            </div>
            <div className="w-[300px]">
                <div className="text-left leading-none">
                    <p>
                        Eat it
                    </p>
                </div>
            </div>
        </div>
    );
}
