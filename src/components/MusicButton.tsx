"use client";
import { useState, useRef } from "react";

export default function MusicButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [song, setSong] = useState<{
    title: string;
    artist: string;
    duration: number;
    audio_url: string;
    cover_url: string;
  } | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isFading, setIsFading] = useState(false);
  const isChainingRef = useRef(false);

  const playSong = async () => {
    const res = await fetch("/api/radio");
    const data = await res.json();
    setSong(data);
    const startPoint = isChainingRef.current
      ? 0
      : Math.floor(Math.random() * (data.duration - 40)) + 20;
    const newAudio = new Audio(data.audio_url);
    newAudio.currentTime = startPoint;
    newAudio.onended = () => {
      isChainingRef.current = true;
      playSong();
    };
    await newAudio.play();
    setAudio(newAudio);
    setIsPlaying(true);
    setShowToast(true);
    setTimeout(() => setIsFading(true), 3500);
    setTimeout(() => {
      setShowToast(false);
      setIsFading(false);
    }, 4000);
  };

  const handleClick = async () => {
    if (isPlaying && audio) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
      setAudio(null);
    } else {
      playSong();
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className="cursor-pointer hover:scale-105 transition-all duration-200"
      >
        <img src="/icons/music-button.svg" alt="Radio" />
      </button>
      {showToast && song && (
        <div
          className={`fixed top-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-80 text-white px-6 py-3 rounded-lg flex items-center gap-4 z-50 ${isFading ? "animate-fadeOut" : "animate-slideDown"}`}
        >
          {song.cover_url && (
            <img
              src={song.cover_url}
              alt={song.title}
              className="w-20 h-20 rounded-lg object-cover"
            />
          )}
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
              Now Playing
            </p>
            <p className="font-bold text-xl">{song.title}</p>
            <p className="text-sm text-gray-300">{song.artist}</p>
          </div>
        </div>
      )}
    </div>
  );
}
