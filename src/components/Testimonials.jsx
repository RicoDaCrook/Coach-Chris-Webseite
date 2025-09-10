import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Vincenzo A.',
      age: 34,
      situation: 'Nach 12 Jahren Ehe getrennt',
      text: 'Coach Chris hat mir geholfen, aus dem dunkelsten Tal meines Lebens herauszufinden. Seine strukturierte Herangehensweise hat mir den Halt gegeben, den ich brauchte.',
      rating: 5,
      highlight: 'Strukturierte Herangehensweise'
    },
    {
      name: 'Michael K.',
      age: 41,
      situation: 'Plötzliche Trennung',
      text: 'Ich war völlig verloren. In nur 8 Sessions hat Chris mir geholfen, wieder Boden unter den Füßen zu bekommen und sogar gestärkt aus der Krise hervorzugehen.',
      rating: 5,
      highlight: 'Schnelle Stabilisierung'
    },
    {
      name: 'Anonym',
      age: 29,
      situation: 'Toxische Beziehung beendet',
      text: 'Die Klarheit, die ich durch das Coaching gewonnen habe, ist unbezahlbar. Ich verstehe jetzt meine Muster und kann bewusst neue Wege gehen.',
      rating: 5,
      highlight: 'Klarheit gewonnen'
    },
    {
      name: 'Thomas B.',
      age: 38,
      situation: 'Scheidung mit Kindern',
      text: 'Chris hat mir nicht nur bei der Trennung geholfen, sondern auch dabei, ein besserer Vater zu bleiben. Seine praktischen Tipps waren Gold wert.',
      rating: 5,
      highlight: 'Praktische Lösungen'
    },
    {
      name: 'Julia R.',
      age: 45,
      situation: 'Nach 20 Jahren neu anfangen',
      text: 'Mit 45 nochmal neu anfangen? Chris hat mir gezeigt, dass es möglich ist. Heute bin ich glücklicher als je zuvor in meiner Ehe.',
      rating: 5,
      highlight: 'Neuanfang geschafft'
    },
    {
      name: 'Julian H.',
      age: 36,
      situation: 'Betrogen worden',
      text: 'Der Vertrauensbruch hat mich zerstört. Chris hat mir geholfen, wieder zu vertrauen - vor allem mir selbst. Seine empathische Art ist einzigartig.',
      rating: 5,
      highlight: 'Vertrauen wiedergewonnen'
    },
    {
      name: 'Anonym',
      age: 31,
      situation: 'On-Off-Beziehung beendet',
      text: 'Endlich raus aus dem Teufelskreis! Das Coaching war die beste Investition in mich selbst. Klare Empfehlung!',
      rating: 5,
      highlight: 'Teufelskreis durchbrochen'
    },
    {
      name: 'Robert S.',
      age: 52,
      situation: 'Späte Trennung',
      text: 'Ich dachte, mit über 50 ist es zu spät für einen Neuanfang. Chris hat mir das Gegenteil bewiesen. Professionell und menschlich top!',
      rating: 5,
      highlight: 'Mut zum Neustart'
    },
    {
      name: 'Anonym',
      age: 27,
      situation: 'Erste große Trennung',
      text: 'Als Young Professional war die Trennung ein Schock. Chris hat mir geholfen, Beruf und Privatleben wieder in Balance zu bringen.',
      rating: 5,
      highlight: 'Balance gefunden'
    },
    {
      name: 'Martin P.',
      age: 43,
      situation: 'Überraschende Trennung',
      text: 'Von 100 auf 0. Chris war mein Anker in stürmischen Zeiten. Seine 24h Erreichbarkeit hat mir unglaublich geholfen.',
      rating: 5,
      highlight: '24h Unterstützung'
    },
    {
      name: 'Orkun S.',
      age: 39,
      situation: 'Trennung nach Affäre',
      text: 'Schuld, Scham, Schmerz - ich hatte alles. Chris hat mir geholfen, mir selbst zu verzeihen und nach vorne zu schauen.',
      rating: 5,
      highlight: 'Selbstvergebung'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="py-20 px-4 bg-gradient-to-b from-dark-gray to-black">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Über <span className="text-gold">100 Menschen</span> begleitet
          </h2>
          <p className="text-gray-400 text-lg">
            Echte Geschichten, echte Veränderungen
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-dark-gray/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gold/20"
            >
              <Quote className="text-gold/20 mb-4" size={48} />
              
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                "{testimonials[currentIndex].text}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <h4 className="font-semibold text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400 text-sm">
                      {testimonials[currentIndex].age} Jahre
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">
                    {testimonials[currentIndex].situation}
                  </p>
                  <div className="flex mt-2">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="text-gold fill-gold" size={16} />
                    ))}
                  </div>
                </div>
                
                <div className="hidden md:block">
                  <span className="px-4 py-2 bg-gold/10 text-gold rounded-full text-sm">
                    {testimonials[currentIndex].highlight}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-dark-gray rounded-full p-2 hover:bg-gold hover:text-black transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-dark-gray rounded-full p-2 hover:bg-gold hover:text-black transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-gold w-8' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-gold">100+</div>
            <div className="text-gray-400 text-sm">Klienten begleitet</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold">95%</div>
            <div className="text-gray-400 text-sm">Erfolgsquote</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold">5.0</div>
            <div className="text-gray-400 text-sm">Durchschnittsbewertung</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold">24h</div>
            <div className="text-gray-400 text-sm">Antwortzeit</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials.jsx;
