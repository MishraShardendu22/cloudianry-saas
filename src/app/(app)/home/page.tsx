"use client";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import VideoCard from "@/components/VideoCard";
import { Video } from "../../types/index";

function Home() {
    const [videos, setVideos] = useState<Video[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchVideos = useCallback(async () => {
        try {
            const response = await axios.get("/api/videos");
            if (Array.isArray(response.data)) {
                setVideos(response.data);
            } else {
                throw new Error("Unexpected response format");
            }
        } catch (err) {
            console.error(err);
            setError("Failed to fetch videos");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchVideos();
    }, [fetchVideos]);

    const handleDownload = useCallback((url: string, title: string) => {
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${title}.mp4`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, []);

    if (loading) {
        return <div className="text-indigo-300">Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4 bg-gray-900 text-purple-200">
            <h1 className="text-2xl font-bold mb-4">Videos</h1>
            {error && <div className="text-red-500">{error}</div>}
            {videos.length === 0 ? (
                <div className="text-center text-lg text-gray-500">
                    No videos available
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {videos.map((video) => (
                        <VideoCard
                            key={video.id}
                            video={video}
                            onDownload={handleDownload}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;
