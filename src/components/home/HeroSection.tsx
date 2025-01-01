'use client';

import Image from 'next/image';

export default function HeroSection() {
  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen w-screen -ml-[50vw] -mr-[50vw] left-1/2 right-1/2 flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10" />
      <Image
        src="/hero-background.jpg"
        alt="Professional Photography"
        fill
        className="object-cover object-center scale-110"
        priority
        quality={100}
      />
      
      <div className="relative w-full z-20">
        <div className="container mx-auto px-4 text-white md:text-left text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
            Capturing Life's Beautiful Moments
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-6 drop-shadow-md">
            Professional Photography Services
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl mb-12 max-w-3xl leading-relaxed drop-shadow-md opacity-90">
            Specializing in portrait, landscape, and event photography. 
            Let's create timeless memories together that will last for generations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => handleScroll('#portfolio')}
              className="px-8 py-3 text-lg bg-white text-black hover:bg-white/90 rounded-full transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Portfolio
            </button>
            
            <button
              onClick={() => handleScroll('#contact')}
              className="px-8 py-3 text-lg border-2 border-white hover:border-primary rounded-full hover:bg-white/10 transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
