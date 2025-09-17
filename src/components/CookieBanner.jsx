import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Shield, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieBanner = ({ onAccept }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [cookies, setCookies] = useState({
    necessary: true, // Immer aktiviert
    analytics: false,
    marketing: false
  });

  const handleAcceptAll = () => {
    setCookies({ necessary: true, analytics: true, marketing: true });
    // Google Analytics aktivieren
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted'
      });
    }
    onAccept();
  };

  const handleAcceptSelected = () => {
    // Google Analytics basierend auf Auswahl
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': cookies.analytics ? 'granted' : 'denied',
        'ad_storage': cookies.marketing ? 'granted' : 'denied'
      });
    }
    onAccept();
  };

  const handleRejectAll = () => {
    setCookies({ necessary: true, analytics: false, marketing: false });
    // Google Analytics deaktivieren
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied'
      });
    }
    onAccept();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="bg-black/95 backdrop-blur-md border border-gold/20 rounded-2xl p-6 sm:p-8 shadow-2xl">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <Cookie className="text-gold" size={32} />
                <h3 className="text-xl sm:text-2xl font-semibold text-white">Cookie-Einstellungen</h3>
              </div>
              <button
                onClick={handleRejectAll}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Banner schließen"
              >
                <X size={24} />
              </button>
            </div>

            {/* Main Content */}
            <div className="mb-6">
              <p className="text-gray-300 mb-4">
                Wir verwenden Cookies, um deine Erfahrung auf unserer Website zu verbessern. 
                Einige Cookies sind notwendig für den Betrieb der Website, während andere uns helfen, 
                die Website und deine Erfahrung zu verbessern.
              </p>
              
              {/* Cookie Types */}
              {!showDetails ? (
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gold/20 text-gold rounded-full text-sm">
                    <Shield size={14} className="inline mr-1" />
                    Notwendige Cookies
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                    <BarChart size={14} className="inline mr-1" />
                    Analyse-Cookies
                  </span>
                </div>
              ) : (
                <div className="space-y-4 mb-6">
                  {/* Necessary Cookies */}
                  <div className="bg-dark-gray/50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-gold flex items-center gap-2">
                          <Shield size={18} />
                          Notwendige Cookies
                        </h4>
                        <p className="text-sm text-gray-400 mt-1">
                          Diese Cookies sind für die Grundfunktionen der Website erforderlich.
                        </p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-2">Immer aktiv</span>
                        <input
                          type="checkbox"
                          checked={true}
                          disabled
                          className="w-5 h-5 rounded bg-gold border-gold cursor-not-allowed opacity-50"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="bg-dark-gray/50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-white flex items-center gap-2">
                          <BarChart size={18} />
                          Analyse-Cookies (Google Analytics)
                        </h4>
                        <p className="text-sm text-gray-400 mt-1">
                          Helfen uns zu verstehen, wie Besucher mit der Website interagieren.
                        </p>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={cookies.analytics}
                          onChange={(e) => setCookies({ ...cookies, analytics: e.target.checked })}
                          className="w-5 h-5 rounded bg-dark-gray border-gold text-gold focus:ring-gold cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="bg-dark-gray/50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-white flex items-center gap-2">
                          <BarChart size={18} />
                          Marketing-Cookies
                        </h4>
                        <p className="text-sm text-gray-400 mt-1">
                          Werden für zukünftige Werbezwecke verwendet (aktuell nicht aktiv).
                        </p>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={cookies.marketing}
                          onChange={(e) => setCookies({ ...cookies, marketing: e.target.checked })}
                          className="w-5 h-5 rounded bg-dark-gray border-gold text-gold focus:ring-gold cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Links */}
              <div className="flex flex-wrap gap-4 text-sm">
                <Link to="/datenschutz" className="text-gold hover:text-dark-gold transition-colors">
                  Datenschutzerklärung
                </Link>
                <Link to="/agb" className="text-gold hover:text-dark-gold transition-colors">
                  AGB
                </Link>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              {!showDetails ? (
                <>
                  <button
                    onClick={() => setShowDetails(true)}
                    className="flex-1 px-6 py-3 border border-gold text-gold rounded-full hover:bg-gold hover:text-black transition-all"
                  >
                    Einstellungen anpassen
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 px-6 py-3 bg-gold text-black rounded-full font-semibold hover:bg-dark-gold transition-all"
                  >
                    Alle akzeptieren
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleRejectAll}
                    className="flex-1 px-6 py-3 border border-gray-600 text-gray-400 rounded-full hover:border-gray-400 hover:text-white transition-all"
                  >
                    Nur notwendige
                  </button>
                  <button
                    onClick={handleAcceptSelected}
                    className="flex-1 px-6 py-3 bg-gold text-black rounded-full font-semibold hover:bg-dark-gold transition-all"
                  >
                    Auswahl speichern
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieBanner;
