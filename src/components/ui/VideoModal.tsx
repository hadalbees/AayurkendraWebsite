"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { siteConfig } from "@/lib/site";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  posterUrl?: string;
}

export default function VideoModal({
  isOpen,
  onClose,
  videoUrl = "/videos/founder.mp4",
  posterUrl = "/images/founder-thumbnail.png",
}: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Focus trap / prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      videoRef.current?.play().catch((err) => {
        console.log("Auto-play was prevented by browser policies:", err);
      });
    } else {
      document.body.style.overflow = "";
      videoRef.current?.pause();
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
      }
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-brown-dark rounded-2xl overflow-hidden shadow-2xl border border-white/10">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-ayur-green transition cursor-pointer"
          aria-label="Close video player"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player */}
        <div className="relative aspect-video w-full bg-black">
          <video
            ref={videoRef}
            controls
            autoPlay
            className="w-full h-full object-cover"
            poster={posterUrl}
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Info Strip */}
        <div className="p-5 bg-brown-dark text-white flex justify-between items-center">
          <div>
            <h3 className="font-serif text-lg font-semibold">{siteConfig.founder.name}</h3>
            <p className="text-xs text-cream-light/70">{siteConfig.founder.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
