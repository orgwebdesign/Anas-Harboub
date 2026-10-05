import React, { useRef, useState } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import brandCommercialVideo from '../assets/images/brand_design_system_commercial.mp4';
// New video asset: Brand_design_system_commercial_h…_20261004145515.mp4 (4.56 MB)

interface BrandCommercialVideoSectionProps {
  className?: string;
}

export const BrandCommercialVideoSection: React.FC<BrandCommercialVideoSectionProps> = ({
  className = '',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section className={`relative w-full py-12 sm:py-20 md:py-24 bg-[#0B0C0E] border-b border-white/10 overflow-hidden ${className}`}>
      {/* Title with 50% opacity positioned at top of section */}
      <div className="w-full px-4 sm:px-6 text-center mb-6 sm:mb-10 md:mb-12">
        <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-white/50 font-heading select-none">
          One Brand. One System. Omnipresent Impact.
        </h2>
      </div>

      {/* Video Container: Takes full screen width with black gradient on left and right */}
      <div className="relative w-full overflow-hidden flex items-center justify-center">
        {/* Left and Right Black Gradient Overlays (Center stays clear, adapted for mobile) */}
        <div
          className="absolute inset-0 pointer-events-none z-10 hidden sm:block"
          style={{
            background:
              'linear-gradient(90deg, #0B0C0E 0%, #0B0C0E 6%, rgba(11, 12, 14, 0.98) 12%, rgba(11, 12, 14, 0.8) 20%, rgba(11, 12, 14, 0.4) 28%, transparent 36%, transparent 64%, rgba(11, 12, 14, 0.4) 72%, rgba(11, 12, 14, 0.8) 80%, rgba(11, 12, 14, 0.98) 88%, #0B0C0E 94%, #0B0C0E 100%)',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none z-10 sm:hidden"
          style={{
            background:
              'linear-gradient(90deg, #0B0C0E 0%, transparent 12%, transparent 88%, #0B0C0E 100%)',
          }}
        />

        {/* Top and Bottom subtle soft edge blending into background */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              'linear-gradient(180deg, #0B0C0E 0%, transparent 6%, transparent 94%, #0B0C0E 100%)',
          }}
        />

        {/* Video Element */}
        <div
          className="relative w-full max-w-[1920px] mx-auto cursor-pointer"
          onClick={togglePlay}
        >
          <video
            ref={videoRef}
            src={brandCommercialVideo}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            className="w-full h-auto max-h-[85vh] object-cover block"
          />

          {/* Pause overlay icon if user pauses */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-xs z-20">
              <div className="w-16 h-16 rounded-full bg-[#C4D600] text-black flex items-center justify-center shadow-2xl">
                <Play className="w-7 h-7 fill-current translate-x-0.5" />
              </div>
            </div>
          )}

          {/* Floating Subtle Mute/Unmute & Play Control in corner */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-8 z-20 flex items-center gap-2 p-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 opacity-80 hover:opacity-100 transition-opacity">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
              title={isPlaying ? 'Pause' : 'Play'}
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current translate-x-0.5" />}
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleMute();
              }}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
              title={isMuted ? 'Unmute' : 'Mute'}
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5 text-gray-400" /> : <Volume2 className="w-3.5 h-3.5 text-[#C4D600]" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
