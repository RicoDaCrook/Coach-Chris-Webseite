import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import EmotionBarometer from './components/EmotionBarometer';
import Services from './components/Services';
import FirstAidKit from './components/FirstAidKit';
import About from './components/About';
import Testimonials from './components/Testimonials';
import BookingWidget from './components/BookingWidget';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookieBanner from './components/CookieBanner';

// Main Landing Page Component
function LandingPage() {
  const [emotionState, setEmotionState] = useState(null);
  
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

        <section id="erste-hilfe-kit">
          <FirstAidKit />
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
    </div>
  );
}

// Legal Page Layout Component
function LegalPageLayout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        {children}
      </div>
    </div>
  );
}

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [cookieConsent, setCookieConsent] = useState(
    localStorage.getItem('cookieConsent') === 'true'
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="relative">
        <Navigation scrolled={scrolled} />
        
        <Routes>
          {/* Main Landing Page */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Legal Pages */}
          <Route path="/datenschutz" element={
            <LegalPageLayout>
              <PrivacyPolicy />
            </LegalPageLayout>
          } />
          <Route path="/agb" element={
            <LegalPageLayout>
              <TermsOfService />
            </LegalPageLayout>
          } />
          
          {/* Redirect all other routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        
        <Footer />
        <WhatsAppButton />
        
        {/* Cookie Banner */}
        {!cookieConsent && (
          <CookieBanner onAccept={() => {
            setCookieConsent(true);
            localStorage.setItem('cookieConsent', 'true');
          }} />
        )}
      </div>
    </Router>
  );
}

export default App;
