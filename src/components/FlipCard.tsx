"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

interface FlipCardProps {
    title: string;
    series: string;
    description: string;
    link: string;
    buttonText: string;
    frontImage: string;
}

const FlipCard: React.FC<FlipCardProps> = ({
                                               title,
                                               series,
                                               description,
                                               link,
                                               buttonText,
                                               frontImage,
                                           }) => {
    const router = useRouter();
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="w-80 h-96 mb-5 cursor-pointer perspective-1000"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <div className={`relative w-full h-full duration-700 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                {/* FRONT SIDE */}
                <div className="absolute inset-0 w-full h-full bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center backface-hidden">
                    {frontImage && (
                        <div className="relative w-48 h-48 mb-4">
                            <Image
                                src={frontImage}
                                alt={title}
                                fill
                                className="object-contain rounded-lg"
                                loading="lazy"
                            />
                        </div>
                    )}
                    <h5 className="text-xl font-bold text-gray-900 mb-2">{title}</h5>
                    <p className="text-md text-gray-600">{series}</p>
                </div>

                {/* BACK SIDE */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg shadow-lg p-6 flex flex-col justify-between text-center backface-hidden rotate-y-180">
                    <div className="flex-1 flex items-center justify-center">
                        <p className="text-gray-800 text-sm leading-6 font-medium">
                            {description}
                        </p>
                    </div>
                    <button
                        className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 transform hover:scale-105"
                        onClick={(e) => {
                            e.stopPropagation();
                            console.log("Navigating to:", link);
                            router.push(link);
                        }}
                    >
                        {buttonText}
                    </button>
                </div>
            </div>

            <style jsx>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                
                .preserve-3d {
                    transform-style: preserve-3d;
                }
                
                .backface-hidden {
                    backface-visibility: hidden;
                }
                
                .rotate-y-180 {
                    transform: rotateY(180deg);
                }
            `}</style>
        </div>
    );
};

export default FlipCard;