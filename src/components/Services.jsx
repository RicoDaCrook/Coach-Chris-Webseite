import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Shield, Rocket, Check, Star } from 'lucide-react';

const Services = () => {
  const packages = [
    {
      id: 'sos',
      name: 'SOS-AKUTHILFE',
      icon: Shield,
      price: '297€',
      originalPrice: '447€',
      duration: '3 x 90 Minuten',
      description: 'Wenn alles zusammenbricht - Soforthilfe in der akuten Trennungsphase',
      features: [
        '3 intensive Sessions à 90 Minuten',
        'WhatsApp-Support für 2 Wochen',
        'Krisenintervention & Stabilisierung',
        'Erste konkrete Schritte',
        'Notfall-Hotline'
      ],
      highlight: false,
      color: 'border-blue-500'
    },
    {
      id: 'neustart',
      name: 'NEUSTART-PROGRAMM',
      icon: Rocket,
      price: '997€',
      originalPrice: '1.192€',
      duration: '8 x 90 Minuten',
      description: 'Der komplette Weg durch die Trennung - von Schmerz zu neuem Selbst',
      features: [
        '8 Sessions à 90 Minuten',
        'WhatsApp-Support für 8 Wochen (Mo-Fr)',
        '2 Notfall-Calls (je 15 Min)',
        'Alle Arbeitsblätter & Übungen',
        'Persönlicher Transformationsplan',
        'E-Mail Support zwischen Sessions'
      ],
      highlight: true,
      popular: true,
      color: 'border-gold'
    },
    {
      id: 'vip',
      name: 'VIP-TRANSFORMATION',
      icon: Star,
      price: '2.497€',
      originalPrice: '1.788€',
      duration: '12 x 90 Minuten',
      description: 'Intensive 1:1 Begleitung für deine vollständige Transformation',
      features: [
        '12 Sessions à 90 Minuten',
        'Täglicher WhatsApp-Support (Mo-Fr, Antwort in 4h)',
        'Unbegrenzte Notfall-Calls',
        'Personalisiertes Workbook',
        'Zugang zum Online-Portal',
        'Aufzeichnungen aller Sessions',
        'Lifetime-Zugang zu allen Materialien'
      ],
      highlight: false,
      color: 'border-purple-500'
    }
  ];

  const einzelStunden = [
    {
      name: 'Schnupperstunde',
      duration: '60 Minuten',
      price: '99€',
      description: 'Zum Kennenlernen'
    },
    {
      name: 'Intensiv-Session',
      duration: '90 Minuten',
      price: '149€',
      description: 'Für akute Themen'
    }
  ];

  return (
    <div className="py-20 px-4 bg-gradient-to-b from-black to-dark-gray">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Finde deinen <span className="text-gold">Weg</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Wähle das Paket, das zu deiner Situation passt. 
            <span className="text-gold font-semibold"> Empfohlen sind mindestens 3 Sessions für nachhaltige Veränderung.</span>
          </p>
        </motion.div>

        {/* Einzelstunden */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-serif text-center mb-6 text-gray-300">Einzelstunden</h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
            {einzelStunden.map((stunde, index) => (
              <motion.div
                key={stunde.name}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-gray/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-gold/50 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-white">{stunde.name}</h4>
                  <Clock className="text-gold" size={20} />
                </div>
                <p className="text-gray-400 text-sm mb-3">{stunde.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{stunde.duration}</span>
                  <span className="text-xl font-bold text-gold">{stunde.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Packages */}
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative group ${pkg.highlight ? 'md:-mt-4' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold text-black px-4 py-1 rounded-full text-sm font-semibold z-10">
                    BELIEBTESTE WAHL
                  </div>
                )}
                
                <div className={`
                  h-full bg-dark-gray/50 backdrop-blur-sm rounded-2xl p-8 
                  border-2 ${pkg.color} ${pkg.highlight ? 'border-gold shadow-gold/20 shadow-2xl' : 'border-gray-700'}
                  hover:shadow-2xl transition-all duration-300 hover:scale-105
                  ${pkg.highlight ? 'bg-gradient-to-br from-dark-gray/80 to-dark-gray/40' : ''}
                `}>
                  <div className="text-center mb-6">
                    <Icon className="mx-auto mb-4 text-gold" size={48} />
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-gold">{pkg.price}</span>
                      <span className="text-gray-500 line-through">{pkg.originalPrice}</span>
                    </div>
                    <p className="text-sm text-gray-400">{pkg.duration}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="text-gold mr-2 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={() => document.getElementById('buchen').scrollIntoView({ behavior: 'smooth' })}
                    className={`
                      w-full py-3 rounded-full font-semibold transition-all
                      ${pkg.highlight 
                        ? 'bg-gold text-black hover:bg-dark-gold' 
                        : 'bg-transparent border border-gold text-gold hover:bg-gold hover:text-black'
                      }
                    `}
                  >
                    Paket wählen
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-4">Sichere Zahlungsmethoden</p>
          <div className="flex flex-wrap justify-center gap-6 text-gray-500">
            <span>PayPal</span>
            <span>•</span>
            <span>Klarna</span>
            <span>•</span>
            <span>Überweisung</span>
            <span>•</span>
            <span>Ratenzahlung möglich</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services.jsx;
