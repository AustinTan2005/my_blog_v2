"use client";

import NavBar from "@/components/NavBar";
import { useEffect, useState } from "react";

interface Chapter {
    chapter: number;
    title: string;
    date: string;
    link: string;
}

interface ArcHeader {
    type: "arc";
    title: string;
}

interface ChapterEntry {
    type: "chapter";
    data: Chapter;
}

type Entry = ArcHeader | ChapterEntry;

function StoryPage() {
    const bookID = "Book1";
    const [entries, setEntries] = useState<Entry[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchChapters = async () => {
            setLoading(true);
            setError("");

            try {
                const res = await fetch(`/${bookID}.txt`);
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

                const text = await res.text();

                const parsed: Entry[] = text
                    .split("\n")
                    .map((line) => line.trim())
                    .filter(Boolean)
                    .map((line) => {
                        if (line.startsWith("ARC|")) {
                            return { type: "arc", title: line.split("|")[1] } as ArcHeader;
                        }
                        const [chapter, title, date, link] = line.split("|");
                        return {
                            type: "chapter",
                            data: { chapter: Number(chapter), title, date, link },
                        } as ChapterEntry;
                    });

                setEntries(parsed);
            } catch (err) {
                console.error("Failed to load chapter list:", err);
                setError("Failed to load chapters");
            } finally {
                setLoading(false);
            }
        };

        fetchChapters();
    }, []);

    const ArcDivider = ({ title }: { title: string }) => (
        <div className="flex items-center gap-4 py-4 px-2 mt-2">
            <div className="flex-1 h-px bg-gray-500" />
            <span className="text-gray-300 text-sm font-semibold tracking-widest uppercase whitespace-nowrap">
                {title}
            </span>
            <div className="flex-1 h-px bg-gray-500" />
        </div>
    );

    const ChapterRow = ({ chapter, title, date, link }: Chapter) => (
        <div
            className="w-full p-4 flex border-b border-gray-600 hover:text-gray-400 hover:underline cursor-pointer transition-colors"
            onClick={() => window.open(link, "_blank")}
        >
            <div className="flex-grow">
                Chapter {chapter}{title ? ` - ${title}` : ""}
            </div>
            <div className="text-right">{date}</div>
        </div>
    );

    const SkeletonRow = () => (
        <div className="w-full p-4 flex border-b border-gray-600">
            <div className="flex-grow">
                <div className="animate-pulse">
                    <div className="h-4 bg-gray-600 rounded w-2/3"></div>
                </div>
            </div>
            <div className="text-right">
                <div className="animate-pulse">
                    <div className="h-4 bg-gray-600 rounded w-20"></div>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <NavBar links={[{ label: "Home", href: "/" }]} />
            <div className="w-full px-5 pt-10">
                <div className="flex gap-5">
                    <div
                        className="backgroundCustom1 text-white flex-1 p-4 overflow-y-auto"
                        style={{ height: "calc(100vh - 175px)" }}
                    >
                        {loading ? (
                            <div>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <SkeletonRow key={index} />
                                ))}
                            </div>
                        ) : error ? (
                            <div className="text-center p-4 text-red-500">
                                <p>{error}</p>
                                <small>Make sure {bookID}.txt exists in the public folder</small>
                            </div>
                        ) : entries.length === 0 ? (
                            <div className="text-center p-4">
                                <p>No chapters found</p>
                            </div>
                        ) : (
                            entries.map((entry, idx) =>
                                entry.type === "arc" ? (
                                    <ArcDivider key={`arc-${idx}`} title={entry.title} />
                                ) : (
                                    <ChapterRow key={entry.data.chapter} {...entry.data} />
                                )
                            )
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default StoryPage;