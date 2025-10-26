import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, Heart, Brain, Feather, Sun, Sparkles } from 'lucide-react';

const highlights = [
  {
    title: 'Beruhige dein Nervensystem',
    description: 'Geführte Atemübungen & Grounding-Techniken bringen dich in wenigen Minuten zurück in deine Mitte.',
    icon: Heart
  },
  {
    title: 'Sortiere deine Gedanken',
    description: 'Schritt-für-Schritt-Reflexion, die dir hilft, klar zu sehen, was du heute wirklich brauchst.',
    icon: Brain
  },
  {
    title: 'Aktiviere deine innere Stärke',
    description: 'Mini-Tools für Alltagssituationen, um handlungsfähig zu bleiben – auch wenn die Gefühle Wellen schlagen.',
    icon: Sun
  }
];

const kitInsights = [
  'Sanfter Einstieg mit Atem- und Körperübungen',
  'Reflexionssheets zum Sortieren deiner Gedanken',
  'SOS-Tools für akute Trigger & schlaflose Nächte',
  'Kontaktliste für schnelle Hilfe & nächste Schritte'
];

const FirstAidKit = () => {
  return (
    <div className="relative py-20 px-4 bg-gradient-to-b from-black via-dark-gray/80 to-black">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-gold/40 bg-gold/10 text-gold text-sm uppercase tracking-[0.2em]">
            <Sparkles size={16} /> Neues Freebie
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mt-6 mb-4">
            Dein <span className="text-gold">Erste-Hilfe-Kit</span> nach der Trennung
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Ein liebevoll gestaltetes PDF (2 Seiten, 88 KB) mit sofort einsetzbaren Übungen für Körper, Kopf und Herz.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="relative overflow-hidden bg-gradient-to-br from-dark-gray/90 via-black/80 to-dark-gray/70 border border-gold/30 rounded-3xl p-10 shadow-xl shadow-black/30">
              <div className="absolute -top-20 -right-20 w-56 h-56 bg-gold/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-32 -left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl"></div>

              <div className="relative">
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gold/20 text-gold">
                    <Heart size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">Soforthilfe für dein Herz</h3>
                    <p className="text-gray-400 text-sm">PDF-Download mit liebevollen Impulsen, Ritualen & Tools</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {highlights.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="bg-black/40 border border-gold/20 rounded-2xl p-5 flex flex-col gap-3"
                      >
                        <Icon size={22} className="text-gold" />
                        <h4 className="text-white font-semibold text-lg">{item.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a
                    href="/Coach-Chris-Erste-Hilfe-Kit.pdf"
                    download
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gold text-black font-semibold hover:bg-dark-gold transition-transform hover:-translate-y-0.5"
                  >
                    <FileDown size={20} /> Erste-Hilfe-Kit downloaden
                  </a>
                  <span className="text-gray-500 text-sm">Sofort verfügbar · Kein Formular nötig</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="h-full bg-dark-gray/70 border border-gold/20 rounded-3xl p-8 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <Feather size={24} className="text-gold" />
                <h3 className="text-xl font-semibold text-white">Das erwartet dich</h3>
              </div>

              <ul className="space-y-4">
                {kitInsights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-gray-300 leading-relaxed">
                    <span className="mt-1 text-gold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto bg-black/40 border border-gold/30 rounded-2xl p-6">
                <h4 className="text-gold font-semibold mb-2">Bonus: Dein nächster Schritt</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Wenn du nach dem Kit tiefer einsteigen möchtest: Im kostenlosen Erstgespräch schauen wir, welche Begleitung dich jetzt wirklich weiterbringt.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FirstAidKit;
