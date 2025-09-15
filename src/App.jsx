import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import EmotionBarometer from './components/EmotionBarometer';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import BookingWidget from './components/BookingWidget';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [emotionState, setEmotionState] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic background based on emotion
  const getEmotionBackground = () => {
    if (!emotionState) return 'bg-black';
    
    const emotionColors = {
      'verzweifelt': 'bg-gradient-to-br from-black via-gray-900 to-blue-950',
      'wütend': 'bg-gradient-to-br from-black via-gray-900 to-red-950',
      'verloren': 'bg-gradient-to-br from-black via-gray-900 to-purple-950',
      'hoffnungsvoll': 'bg-gradient-to-br from-black via-gray-900 to-amber-950',
      'unsicher': 'bg-gradient-to-br from-black via-gray-900 to-indigo-950',
      'erleichtert': 'bg-gradient-to-br from-black via-gray-900 to-green-950'
    };
    
    return emotionColors[emotionState] || 'bg-black';
  };

  return (
    <div className={`min-h-screen text-white transition-all duration-3000 overflow-x-hidden ${getEmotionBackground()}`}>
      {/* Animated Background Particles */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute w-2 h-2 bg-gold/20 rounded-full top-1/4 left-1/4 animate-float"></div>
        <div className="absolute w-3 h-3 bg-gold/10 rounded-full top-3/4 right-1/3 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute w-2 h-2 bg-gold/15 rounded-full bottom-1/4 left-1/2 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <Navigation scrolled={scrolled} />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="gefuehlsbarometer" className="relative">
          <EmotionBarometer onEmotionSelect={setEmotionState} />
        </section>
        
        <section id="angebot">
          <Services />
        </section>
        
        <section id="ueber-mich">
          <About />
        </section>
        
        <section id="erfahrungen">
          <Testimonials />
        </section>
        
        <section id="buchen">
          <BookingWidget />
        </section>
        
        <section id="kontakt">
          <Contact />
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
