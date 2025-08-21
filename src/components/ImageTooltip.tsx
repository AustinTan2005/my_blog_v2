import { useState } from "react";
import Image from "next/image";

const ImageTooltip = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);

    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
        setPosition({
            x: e.clientX + 10,
            y: e.clientY + 10
        });
    };

    return (
        <div className="bg-white rounded-lg shadow-lg mb-20 overflow-hidden">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                    <div
                        className="relative w-full h-64 md:h-full min-h-full"
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setVisible(true)}
                        onMouseLeave={() => setVisible(false)}
                    >
                        <Image
                            src="/pfp.svg"
                            fill
                            className="object-cover rounded-l-lg"
                            alt="Austin Tan"
                            loading="lazy"
                        />
                        {visible && (
                            <div
                                className="fixed z-50 bg-black text-white px-2 py-1 rounded text-sm pointer-events-none"
                                style={{ left: `${position.x}px`, top: `${position.y}px` }}
                            >
                                Art by ArtStation (Pinterest)
                            </div>
                        )}
                    </div>
                </div>

                <div className="md:w-2/3 p-6">
                    <h1 className="text-3xl font-bold mb-4 text-gray-900">Austin Tan</h1>
                    <h5 className="text-lg text-gray-700 mb-4">
                        Hello everyone, hope y&#39;all are having a fantastic day
                    </h5>

                    <h5 className="text-lg text-gray-700 mb-4">
                        I&#39;m Austin — a passionate software engineer and storyteller. With a
                        background in design, front-end development, and creative writing,
                        I love bringing ideas to life — from interactive applications to
                        character-driven narratives.
                    </h5>

                    <h5 className="text-lg text-gray-700 mb-4">
                        I&#39;m constantly learning, building, and pushing myself to create things that connect with
                        people and spark creativity through innovation.
                    </h5>

                    <div className="flex gap-3">
                        <a
                            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded transition-colors text-center gap-2"
                            href="mailto:jakettm6799@gmail.com"
                        >
                            <i className="fa-solid fa-envelope"></i> Contact Me
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ImageTooltip;