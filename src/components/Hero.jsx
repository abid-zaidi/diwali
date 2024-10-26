import React from 'react';
import ReactPlayer from 'react-player';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-8 overflow-hidden">
      {/* Background Video */}
      <ReactPlayer
        url="path/to/your/video.mp4"  // Replace with your actual video path
        playing
        loop
        muted
        controls={false}
        width="100%"
        height="100%"
        className="absolute inset-0 object-cover"
        config={{
          file: {
            attributes: {
              autoPlay: true,
              muted: true,
              playsInline: true,
              preload: 'auto',
            },
          },
        }}
      />

      {/* Overlay Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl font-bold mb-4">Collection</h1>
        <p className="text-xl mb-2">This Diwali, bring wealth and good fortune home.</p>
        <p className="text-2xl text-yellow-400 italic mb-6">Diya Collection</p>

        <div className="text-5xl font-extrabold text-white/40 mb-6">
          50% OFF
        </div>

        <button className="bg-yellow-400 text-black px-6 py-3 rounded hover:bg-white transition duration-300">
          Buy Now
        </button>
      </div>

      {/* Floating Lights */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(20)].map((_, index) => (
          <div
            key={index}
            className="absolute bg-yellow-400 rounded-full opacity-50 blur-xl"
            style={{
              width: `${Math.random() * 50 + 10}px`,
              height: `${Math.random() * 50 + 10}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 5 + 5}s infinite ease-in-out`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
