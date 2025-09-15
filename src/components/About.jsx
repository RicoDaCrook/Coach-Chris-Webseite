import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';
import logoKlein from '../assets/logoklein.svg';

const About = () => {
  const stats = [
    { icon: Clock, label: 'Jahre Erfahrung', value: '6+' },
    { icon: Users, label: 'Menschen begleitet', value: '100+' },
    { icon: Award, label: 'Zertifizierungen', value: '5' },
    { icon: CheckCircle, label: 'Erfolgsquote', value: '95%' }
  ];

  // KEINE LIZENZPFLICHTIGEN BEGRIFFE
  const qualifications = [
    'Erfahrener Beziehungsberater',
    'Spezialist für Trennungsbewältigung',
    'Experte für Neuorientierung',
    'Coach für Persönlichkeitsentwicklung',
    'Krisenbegleiter'
  ];

  return (
    <div className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Dein Coach für <span className="text-gold">Klarheit</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif text-gold mb-6">
              Struktur. Orientierung. Handlungsfähigkeit.
            </h3>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Ich begleite Menschen in Trennungsprozessen mit klarem Fokus auf das, 
                was wirklich zählt: Wieder handlungsfähig werden und den nächsten Schritt gehen.
              </p>
              <p>
                Mein Schwerpunkt liegt auf der praktischen Trennungsbewältigung. 
                Keine endlosen Analysen der Vergangenheit – stattdessen entwickeln wir 
                gemeinsam konkrete Schritte für deine nächste Lebensphase.
              </p>
              <p>
                Mit strukturiertem Vorgehen und bewährten Methoden schaffe ich einen 
                sicheren Raum, in dem du Klarheit findest und neue Perspektiven entwickelst.
              </p>
            </div>

            {/* Qualifications */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gold mb-4">Qualifikationen</h4>
              <div className="flex flex-wrap gap-2">
                {qualifications.map((qual, index) => (
                  <motion.span
                    key={qual}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-dark-gray rounded-full text-sm text-gray-300 border border-gold/20"
                  >
                    {qual}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Stats & Visual - LOGOKLEIN STATT CC */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Logo statt CC Kreise */}
            <div className="relative mx-auto w-full max-w-md">
              <div className="aspect-square rounded-full bg-gradient-to-br from-gold/20 to-transparent p-8">
                <div className="h-full rounded-full bg-gradient-to-tr from-dark-gray to-black flex items-center justify-center">
                  {/* LOGOKLEIN mit Animation */}
                  <motion.img 
                    src={logoKlein} 
                    alt="Coach Chris" 
                    className="w-32 h-32 object-contain"
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gold/10 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gold/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-4 bg-dark-gray/50 rounded-lg backdrop-blur-sm border border-gold/10"
                  >
                    <Icon className="mx-auto mb-2 text-gold" size={24} />
                    <div className="text-2xl font-bold text-gold">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Bereit für deinen Neuanfang?
          </p>
          <button
            onClick={() => document.getElementById('buchen').scrollIntoView({ behavior: 'smooth' })}
            className="bg-gold text-black px-8 py-3 rounded-full font-semibold hover:bg-dark-gold transition-all hover:scale-105"
          >
            Kostenloses Erstgespräch vereinbaren
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
