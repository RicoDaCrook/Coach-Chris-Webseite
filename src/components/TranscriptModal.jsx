import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Check, Info } from 'lucide-react';

const TranscriptModal = ({ isOpen, onClose, sessionType }) => {
  const [consent, setConsent] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = () => {
    if (consent) {
      setConfirmed(true);
      // Hier würde die Info an SimplyBook.me oder Backend gesendet
      setTimeout(() => {
        onClose();
        setConsent(false);
        setConfirmed(false);
      }, 2000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-dark-gray rounded-2xl p-8 max-w-md w-full border border-gold/20"
            onClick={(e) => e.stopPropagation()}
          >
            {!confirmed ? (
              <>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-serif text-gold flex items-center gap-2">
                    <FileText size={28} />
                    Transkript-Service
                  </h3>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-black/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                      <Info size={18} className="text-gold" />
                      Was ist der Transkript-Service?
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Auf Wunsch können deine Coaching-Sessions aufgezeichnet und als Text-Transkript 
                      zur Verfügung gestellt werden. So kannst du wichtige Erkenntnisse später nachlesen.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-white">Deine Vorteile:</h4>
                    <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
                      <li>Alle wichtigen Punkte zum Nachlesen</li>
                      <li>Keine wichtigen Details vergessen</li>
                      <li>Fortschritte dokumentiert</li>
                      <li>100% vertraulich - nur für dich</li>
                    </ul>
                  </div>

                  <div className="bg-gold/10 border border-gold/30 rounded-lg p-4">
                    <p className="text-sm text-gray-300">
                      <strong className="text-gold">Hinweis:</strong> Die Aufzeichnung erfolgt nur mit deiner 
                      ausdrücklichen Zustimmung vor jeder Session. Du kannst jederzeit ablehnen.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-1 w-5 h-5 rounded bg-dark-gray border-gold text-gold focus:ring-gold"
                    />
                    <span className="text-gray-300 text-sm">
                      Ich möchte den Transkript-Service nutzen und stimme zu, dass meine Sessions 
                      aufgezeichnet werden können. Ich kann vor jeder Session entscheiden.
                    </span>
                  </label>

                  <div className="flex gap-4">
                    <button
                      onClick={onClose}
                      className="flex-1 px-6 py-3 border border-gray-600 text-gray-400 rounded-full hover:border-gray-400 hover:text-white transition-all"
                    >
                      Später entscheiden
                    </button>
                    <button
                      onClick={handleConfirm}
                      disabled={!consent}
                      className={`flex-1 px-6 py-3 rounded-full font-semibold transition-all ${
                        consent 
                          ? 'bg-gold text-black hover:bg-dark-gold' 
                          : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      Service aktivieren
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Check size={40} className="text-white" />
                </motion.div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Transkript-Service aktiviert!
                </h3>
                <p className="text-gray-300">
                  Du wirst vor jeder Session gefragt, ob du eine Aufzeichnung wünschst.
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TranscriptModal;
