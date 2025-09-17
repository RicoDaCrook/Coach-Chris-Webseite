import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ChevronDown, Shield, Clock, X } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let time = 0;
    const colors = ['#B8860B', '#1A1A1A', '#2F2F2F'];
    
    // Paper Shader-like animation
    const animate = () => {
      time += 0.001;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);
        
        for (let x = 0; x < canvas.width; x++) {
          const y = Math.sin(x * 0.003 + time + i) * 100 * Math.sin(time + i) + 
                   canvas.height / 2 + i * 50;
          ctx.lineTo(x, y);
        }
        
        ctx.strokeStyle = colors[i] + '20';
        ctx.lineWidth = 2;
        ctx.stroke();
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 opacity-30"
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main Headline - MEHR ABSTAND AUF MOBILE */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6 mt-20 sm:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Wenn sich Wege{' '}
            <span className="text-gold inline-block animate-pulse">trennen</span>,
            <br />
            beginnt dein{' '}
            <motion.span 
              className="text-gold"
              animate={{ 
                opacity: [1, 0.7, 1],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              neuer Weg
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Ich begleite dich mit klarem Fokus auf Struktur, Orientierung und Handlungsfähigkeit 
            durch deine herausforderndste Zeit
          </motion.p>

          {/* CTA Buttons - ERSTGESPRÄCH PROMINENT */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {/* HAUPTBUTTON MIT BADGE */}
            <div className="relative">
              {/* KOSTENLOS BADGE */}
              <motion.div 
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-1.5 rounded-full text-xs font-bold z-10 shadow-lg"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [-2, 2, -2]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ⭐ 100% KOSTENLOS ⭐
              </motion.div>
              
              <Link
                to="buchen"
                smooth={true}
                duration={500}
                className="group relative px-12 py-6 bg-gradient-to-r from-gold to-dark-gold text-black font-bold rounded-full cursor-pointer overflow-hidden hover:scale-105 transition-all shadow-2xl hover:shadow-gold/50"
              >
                <span className="relative z-10 text-xl">
                  Kostenloses Erstgespräch
                  <span className="block text-sm font-normal mt-1 opacity-90">
                    30 Minuten • Unverbindlich • Heute noch Termine frei
                  </span>
                </span>
              </Link>
            </div>
            
            <Link
              to="gefuehlsbarometer"
              smooth={true}
              duration={500}
              className="px-8 py-4 border-2 border-gold/50 text-gold font-semibold rounded-full cursor-pointer hover:bg-gold hover:text-black transition-all"
            >
              Wie geht es mir?
            </Link>
          </motion.div>

          {/* TRUST-SIGNALE UNTER BUTTONS */}
          <motion.div
            className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <span className="flex items-center gap-2">
              <Shield size={16} className="text-gold" />
              100% vertraulich
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-gold" />
              Termine in 3-5 Tagen
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-2">
              <X size={16} className="text-gold" />
              Keine Verpflichtung
            </span>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-gold">6+</div>
              <div className="text-sm">Jahre Erfahrung</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold">100+</div>
              <div className="text-sm">Menschen begleitet</div>
            </div>
            <div className="text-center flex flex-col items-center sm:block">
              <div className="text-2xl font-bold text-gold">24h</div>
              <div className="text-sm">Antwortzeit</div>
              <motion.div 
                className="mt-2 sm:hidden"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ChevronDown className="text-gold/50" size={20} />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
