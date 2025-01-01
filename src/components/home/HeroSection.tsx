'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
      <Image
        src="/hero-background.jpg"
        alt="Professional Photography Background"
        fill
        priority
        quality={90}
        className="object-cover object-center scale-105"
        sizes="100vw"
      />
      
      {/* Content */}
      <div className="relative w-full z-20 pt-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg max-w-5xl mx-auto leading-tight">
            Capturing Life's Most Beautiful Moments
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
            Professional photography services for weddings, portraits, and events
          </p>
          
          <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto">
            Based in Istanbul, available worldwide. Let's create timeless memories together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#portfolio"
              className="px-8 py-4 text-lg bg-white text-black hover:bg-white/90 rounded-full transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl min-w-[200px]"
            >
              View Portfolio
            </a>
            
            <a
              href="#contact"
              className="px-8 py-4 text-lg border-2 border-white text-white hover:bg-white/10 rounded-full transform hover:-translate-y-0.5 transition-all duration-300 min-w-[200px]"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-8 h-14 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/60 rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
}
