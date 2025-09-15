import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Shield, Rocket, Check, Star, Phone, MessageSquare, Gift } from 'lucide-react';

const Services = () => {
  const packages = [
    {
      id: 'sos',
      name: 'SOS-AKUTHILFE',
      icon: Shield,
      price: '297€',
      originalPrice: '387€',
      duration: '3 x 60 Minuten',
      description: 'Wenn alles zusammenbricht - Soforthilfe in der akuten Trennungsphase',
      features: [
        '30 Min kostenloses Erstgespräch',
        '3 Coaching-Sessions à 60 Minuten',
        'Online oder telefonisch',
        'WhatsApp: bis zu 2 Nachrichten/Woche',
        'Antwortzeit max. 24h (Mo-Fr)',
        'Krisenintervention & Stabilisierung'
      ],
      highlight: false,
      color: 'border-blue-500'
    },
    {
      id: 'neustart',
      name: 'NEUSTART-PROGRAMM',
      icon: Rocket,
      price: '897€',
      originalPrice: '1.192€',
      duration: '8 x 60 Minuten',
      description: 'Der komplette Weg durch die Trennung - von Schmerz zu neuem Selbst',
      features: [
        '30 Min kostenloses Erstgespräch',
        '8 Coaching-Sessions à 60 Minuten',
        'Online oder telefonisch',
        'WhatsApp: bis zu 1 Nachricht/Tag',
        'Antwortzeit max. 12h (Mo-Fr)',
        'Notfall-Hotline: 1x/Woche (10 Min)',
        'Hotline Mo-Fr 9-18 Uhr',
        'Alle Arbeitsblätter & Übungen'
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
      originalPrice: '3.240€',
      duration: (
        <span className="flex items-center justify-center gap-2">
          12 x <span className="text-2xl font-bold text-gold animate-pulse">90</span> Minuten
        </span>
      ),
      description: 'Premium 1:1 Begleitung mit erweiterten Sessions für deine vollständige Transformation',
      features: [
        '30 Min kostenloses Erstgespräch',
        '12 Premium-Sessions à 90 Minuten',
        'Online oder telefonisch',
        'WhatsApp: bis zu 3 Nachrichten/Tag',
        'Antwortzeit max. 6h (Mo-Fr)',
        'Notfall-Hotline: 2x/Woche (je 15 Min)',
        'Hotline Mo-Fr 9-18 Uhr',
        'Personalisiertes Workbook',
        'Aufzeichnungen aller Sessions',
        'Lifetime-Zugang zu allen Materialien'
      ],
      highlight: false,
      vip: true,
      color: 'border-gold'
    }
  ];

  const einzelStunden = [
    {
      name: 'Einzelstunde',
      duration: '60 Minuten',
      price: '149€',
      description: 'Für konkrete Themen'
    },
    {
      name: 'Intensiv-Session',
      duration: '90 Minuten',
      price: '199€',
      description: 'Tiefgehende Bearbeitung'
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
            Alle Pakete starten mit einem <span className="text-gold font-semibold">kostenlosen 30-Min Erstgespräch</span>.
            <br />
            <span className="text-sm">Empfohlen sind mindestens 3 Sessions für nachhaltige Veränderung.</span>
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
          <h3 className="text-2xl font-serif text-center mb-6 text-gray-300">Einzelstunden (ohne Erstgespräch)</h3>
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
                
                {pkg.vip && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-dark-gold to-gold text-black px-4 py-1 rounded-full text-sm font-semibold z-10 flex items-center gap-1 whitespace-nowrap">
                    <Star size={14} fill="black" />
                    PREMIUM 90 MIN
                    <Star size={14} fill="black" />
                  </div>
                )}
                
                <div className={`
                  h-full bg-dark-gray/50 backdrop-blur-sm rounded-2xl p-8 
                  border-2 ${pkg.color} ${pkg.highlight ? 'border-gold shadow-gold/20 shadow-2xl' : 'border-gray-700'}
                  hover:shadow-2xl transition-all duration-300 hover:scale-105
                  ${pkg.highlight ? 'bg-gradient-to-br from-dark-gray/80 to-dark-gray/40' : ''}
                  ${pkg.vip ? 'bg-gradient-to-br from-gold/10 to-dark-gray/40' : ''}
                `}>
                  <div className="text-center mb-6">
                    <Icon className="mx-auto mb-4 text-gold" size={48} />
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-gold">{pkg.price}</span>
                      <span className="text-gray-500 line-through">{pkg.originalPrice}</span>
                    </div>
                    <div className="text-sm text-gray-400">{pkg.duration}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        {feature.includes('WhatsApp') && <MessageSquare className="text-gold mr-2 mt-1 flex-shrink-0" size={16} />}
                        {feature.includes('Hotline') && <Phone className="text-gold mr-2 mt-1 flex-shrink-0" size={16} />}
                        {feature.includes('kostenloses') && <Gift className="text-gold mr-2 mt-1 flex-shrink-0" size={16} />}
                        {!feature.includes('WhatsApp') && !feature.includes('Hotline') && !feature.includes('kostenloses') && 
                          <Check className="text-gold mr-2 mt-1 flex-shrink-0" size={16} />
                        }
                        <span className={`text-sm ${feature.includes('90 Minuten') ? 'text-gold font-bold' : 'text-gray-300'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={() => document.getElementById('buchen').scrollIntoView({ behavior: 'smooth' })}
                    className={`
                      w-full py-3 rounded-full font-semibold transition-all
                      ${pkg.highlight 
                        ? 'bg-gold text-black hover:bg-dark-gold' 
                        : pkg.vip
                        ? 'bg-gradient-to-r from-gold to-dark-gold text-black hover:from-dark-gold hover:to-gold'
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

        {/* Payment Methods - MOBILE FIX */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-4">Sichere Zahlungsmethoden</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-gray-500">
            <span>PayPal</span>
            <span className="hidden sm:inline">•</span>
            <span>Klarna</span>
            <span className="hidden sm:inline">•</span>
            <span>Überweisung</span>
            <span className="hidden sm:inline">•</span>
            <span className="block sm:inline w-full sm:w-auto">Ratenzahlung möglich</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
