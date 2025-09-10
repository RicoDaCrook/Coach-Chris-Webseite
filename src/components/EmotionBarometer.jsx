import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Cloud, Flame, Sun, HelpCircle, Smile } from 'lucide-react';

const EmotionBarometer = ({ onEmotionSelect }) => {
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [showResponse, setShowResponse] = useState(false);

  const emotions = [
    {
      id: 'verzweifelt',
      label: 'Verzweifelt',
      icon: Cloud,
      color: 'from-blue-600 to-blue-900',
      glow: 'shadow-blue-500/50',
      response: {
        title: 'Ich bin für dich da',
        message: 'In diesem Moment fühlt sich alles überwältigend an. Das ist okay und völlig normal. Lass uns gemeinsam einen ersten Schritt machen.',
        action: 'Sofort-Gespräch vereinbaren'
      }
    },
    {
      id: 'wuetend',
      label: 'Wütend',
      icon: Flame,
      color: 'from-red-600 to-red-900',
      glow: 'shadow-red-500/50',
      response: {
        title: 'Wut ist Energie',
        message: 'Deine Wut zeigt, dass dir etwas wichtig ist. Lass uns diese Energie in positive Veränderung umwandeln.',
        action: 'Energie kanalisieren'
      }
    },
    {
      id: 'verloren',
      label: 'Verloren',
      icon: HelpCircle,
      color: 'from-purple-600 to-purple-900',
      glow: 'shadow-purple-500/50',
      response: {
        title: 'Orientierung finden',
        message: 'Wenn alles unsicher scheint, brauchen wir neue Ankerpunkte. Gemeinsam finden wir deinen Kompass wieder.',
        action: 'Klarheit gewinnen'
      }
    },
    {
      id: 'hoffnungsvoll',
      label: 'Hoffnungsvoll',
      icon: Sun,
      color: 'from-amber-600 to-amber-900',
      glow: 'shadow-amber-500/50',
      response: {
        title: 'Der Wendepunkt',
        message: 'Hoffnung ist der erste Schritt zur Veränderung. Nutze diese Energie für deinen Neuanfang.',
        action: 'Momentum nutzen'
      }
    },
    {
      id: 'unsicher',
      label: 'Unsicher',
      icon: Heart,
      color: 'from-indigo-600 to-indigo-900',
      glow: 'shadow-indigo-500/50',
      response: {
        title: 'Klarheit gewinnen',
        message: 'Unsicherheit zeigt, dass du verschiedene Möglichkeiten siehst. Das ist eine Stärke, kein Problem.',
        action: 'Optionen erkunden'
      }
    },
    {
      id: 'erleichtert',
      label: 'Erleichtert',
      icon: Smile,
      color: 'from-green-600 to-green-900',
      glow: 'shadow-green-500/50',
      response: {
        title: 'Neue Freiheit',
        message: 'Erleichterung ist ein wichtiges Signal. Du hast eine schwere Last abgelegt. Jetzt können wir aufbauen.',
        action: 'Nächste Schritte planen'
      }
    }
  ];

  const handleEmotionClick = (emotion) => {
    setSelectedEmotion(emotion);
    setShowResponse(true);
    onEmotionSelect(emotion.id);
  };

  return (
    <div className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Wie fühlst du dich <span className="text-gold">gerade</span>?
          </h2>
          <p className="text-gray-400 text-lg">
            Klicke auf das Gefühl, das am besten zu dir passt
          </p>
        </motion.div>

        {/* Emotion Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {emotions.map((emotion, index) => {
            const Icon = emotion.icon;
            const isSelected = selectedEmotion?.id === emotion.id;
            
            return (
              <motion.div
                key={emotion.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => handleEmotionClick(emotion)}
                className={`relative cursor-pointer group ${isSelected ? 'z-10' : ''}`}
              >
                <div
                  className={`
                    p-6 rounded-2xl bg-gradient-to-br ${emotion.color}
                    transform transition-all duration-300
                    ${isSelected 
                      ? `scale-105 shadow-2xl ${emotion.glow} glow-effect` 
                      : 'hover:scale-105 hover:shadow-xl opacity-80 hover:opacity-100'
                    }
                  `}
                >
                  {/* Glow Effect for Selected */}
                  {isSelected && (
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${emotion.color} blur-xl opacity-50 -z-10`}></div>
                  )}
                  
                  <div className="flex flex-col items-center text-white">
                    <Icon size={40} className="mb-3" />
                    <span className="font-semibold">{emotion.label}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Response Section */}
        <AnimatePresence>
          {showResponse && selectedEmotion && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-dark-gray/50 backdrop-blur-sm rounded-2xl p-8 border border-gold/20"
            >
              <h3 className="text-2xl font-serif text-gold mb-4">
                {selectedEmotion.response.title}
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                {selectedEmotion.response.message}
              </p>
              <button
                onClick={() => document.getElementById('buchen').scrollIntoView({ behavior: 'smooth' })}
                className="bg-gold text-black px-6 py-3 rounded-full font-semibold hover:bg-dark-gold transition-all"
              >
                {selectedEmotion.response.action}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Local Glow Background Effect */}
      {selectedEmotion && (
        <div 
          className={`absolute inset-0 pointer-events-none opacity-20`}
          style={{
            background: `radial-gradient(circle at center, ${
              selectedEmotion.id === 'verzweifelt' ? 'rgba(37, 99, 235, 0.3)' :
              selectedEmotion.id === 'wuetend' ? 'rgba(220, 38, 38, 0.3)' :
              selectedEmotion.id === 'verloren' ? 'rgba(147, 51, 234, 0.3)' :
              selectedEmotion.id === 'hoffnungsvoll' ? 'rgba(245, 158, 11, 0.3)' :
              selectedEmotion.id === 'unsicher' ? 'rgba(99, 102, 241, 0.3)' :
              'rgba(34, 197, 94, 0.3)'
            } 0%, transparent 70%)`
          }}
        />
      )}
    </div>
  );
};

export default EmotionBarometer;
