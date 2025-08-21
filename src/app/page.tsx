"use client";

import {Suspense} from "react";
import FlipCard from "@/components/FlipCard";
import ImageTooltip from "@/components/ImageTooltip";
import Link from "next/link";
import Image from "next/image";


function IndexPage() {
    return (
        <>
            <nav
                id="navbar-example2"
                className="fixed top-0 left-0 right-0 bg-gray-200 bg-opacity-75 backdrop-blur-sm px-3 py-2 z-50"
            >
                <div className="flex items-center justify-between">
                    <Link className="flex items-center" href="/">
                        <Image
                            src="/jake.svg"
                            alt="Logo"
                            width={50}
                            height={48}
                            className="inline-block"
                            priority
                        />
                    </Link>
                    <ul className="flex space-x-4">
                        <li>
                            <a className="px-3 py-2 text-black rounded-md hover:bg-gray-300 transition-colors"
                               href="#scrollspyHeading1">
                                My Work
                            </a>
                        </li>
                        <li>
                            <a className="px-3 py-2 text-black rounded-md hover:bg-gray-300 transition-colors"
                               href="#scrollspyHeading2">
                                About Me
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div
                className="px-5"
                style={{background: "transparent"}}
                tabIndex={0}
            >
                <h1 className="text-4xl font-bold scroll-mt-20 mt-10" id="scrollspyHeading1">
                    My Work
                </h1>
                <div className="flex justify-center items-center">
                    <FlipCard
                        title="Jake - The Amalgam Hero"
                        series="Series #1"
                        frontImage="/jake.svg"
                        description={`Jake has always felt invisible — bullied, orphaned, and left in darkness. On the edge of giving up, he climbs a skyscraper, to see the sunset one last time before ending it all.
                            But as he steps off, time halts.
                            He awakens in a sunlit field — silent, surreal, and still.
                            From that moment on, he's given a chance to change everything.`}
                        link="/stories/Book1"
                        buttonText="Read"
                    />
                </div>

                <h1 className="mt-20 scroll-mt-20 mb-4 text-4xl font-bold" id="scrollspyHeading2">
                    About Me
                </h1>
                <Suspense fallback={<div className="text-center">Loading...</div>}>
                    <ImageTooltip/>
                </Suspense>
            </div>

            <footer className="bg-white text-black w-full py-3">
                <div className="flex items-center justify-center gap-3">
                    <span className="m-0">
                        ©Copyright {new Date().getFullYear()} - AmalgamVerse. All Rights
                        Reserved.
                    </span>
                </div>
            </footer>
        </>
    );
}

export default IndexPage;