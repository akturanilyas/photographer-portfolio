import ContactSection from '../components/home/ContactSection';
import HeroSection from '../components/home/HeroSection';
import ModernCarousel from '../components/home/ModernCarousel';

export default function Home() {
  return (
    <main className='flex flex-col w-full'>
      <div id='home'>
        <HeroSection />
      </div>
      <div id='portfolio'>
        <ModernCarousel />
      </div>
      <div id='contact'>
        <ContactSection />
      </div>
    </main>
  );
}
