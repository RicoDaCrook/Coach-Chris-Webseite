import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, Feather } from 'lucide-react';

const FirstAidKit = () => {
  return (
    <div className="relative py-20 px-4 bg-gradient-to-b from-black via-dark-gray/70 to-black">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm uppercase tracking-[0.2em]">
            Sanfter Download
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mt-6 mb-4">
            Erste Hilfe für deinen Neuanfang
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ein einseitiges PDF mit ruhigen Impulsen, das dich nach einer Trennung wieder atmen lässt.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="relative overflow-hidden bg-gradient-to-br from-dark-gray/90 via-black/80 to-dark-gray/80 border border-gold/25 rounded-3xl p-8 md:p-12">
            <div className="absolute -top-24 -right-10 w-48 h-48 bg-gold/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -left-16 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>

            <div className="relative space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                    <Feather size={26} />
                  </div>
                  <p className="text-gray-300 text-base leading-relaxed max-w-md">
                    Eine kleine Soforthilfe, wenn alles zu viel wird – leicht verständlich, ruhig und wertschätzend.
                  </p>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">
                Nimm dir einen Moment in Stille, lies die Impulse und spüre nach. Das Kit ersetzt kein Coaching, schenkt dir aber einen achtsamen Anker für den ersten Schritt.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="/Coach-Chris-Erste-Hilfe-Kit.pdf"
                  download
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gold text-black font-semibold hover:bg-dark-gold transition-transform hover:-translate-y-0.5"
                >
                  <FileDown size={20} /> PDF herunterladen
                </a>
                <span className="text-gray-500 text-sm">Direkt verfügbar ohne Formular</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FirstAidKit;
