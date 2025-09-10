import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ChevronDown } from 'lucide-react';

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
          {/* Main Headline */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6"
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

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link
              to="buchen"
              smooth={true}
              duration={500}
              className="group relative px-8 py-4 bg-gold text-black font-semibold rounded-full cursor-pointer overflow-hidden hover:scale-105 transition-transform"
            >
              <span className="relative z-10">Kostenloses Erstgespräch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-dark-gold to-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Link>
            
            <Link
              to="gefuehlsbarometer"
              smooth={true}
              duration={500}
              className="px-8 py-4 border-2 border-gold text-gold font-semibold rounded-full cursor-pointer hover:bg-gold hover:text-black transition-all"
            >
              Wie geht es mir?
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-gold">6+</div>
              <div className="text-sm">Jahre Erfahrung</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold">100+</div>
              <div className="text-sm">Menschen begleitet</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold">24h</div>
              <div className="text-sm">Antwortzeit</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-gold" size={32} />
      </motion.div>
    </div>
  );
};

export default Hero;
