import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Instagram, Youtube, Clock, MapPin, Phone } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    isAnonymous: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here would be the actual form submission logic
    toast.success('Nachricht gesendet! Ich melde mich innerhalb von 24h bei dir.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      isAnonymous: false
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="py-20 px-4 bg-gradient-to-b from-black to-dark-gray">
      <Toaster position="top-right" />
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Lass uns <span className="text-gold">sprechen</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Der erste Schritt ist oft der schwerste. Ich bin hier, um ihn mit dir zu gehen.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Anonymous Option */}
              <div className="flex items-center gap-3 p-4 bg-dark-gray/50 rounded-lg border border-gold/20">
                <input
                  type="checkbox"
                  id="anonymous"
                  name="isAnonymous"
                  checked={formData.isAnonymous}
                  onChange={handleInputChange}
                  className="w-5 h-5 rounded bg-dark-gray border-gold text-gold focus:ring-gold"
                />
                <label htmlFor="anonymous" className="text-gray-300 cursor-pointer">
                  Ich möchte anonym bleiben
                </label>
              </div>

              {!formData.isAnonymous && (
                <>
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-gray/50 border border-gray-700 rounded-lg focus:border-gold focus:outline-none text-white"
                      required={!formData.isAnonymous}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      E-Mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-gray/50 border border-gray-700 rounded-lg focus:border-gold focus:outline-none text-white"
                      required={!formData.isAnonymous}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-300 mb-2">
                      Telefon (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-gray/50 border border-gray-700 rounded-lg focus:border-gold focus:outline-none text-white"
                    />
                  </div>
                </>
              )}

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Deine Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-dark-gray/50 border border-gray-700 rounded-lg focus:border-gold focus:outline-none text-white resize-none"
                  placeholder="Erzähl mir, was dich bewegt..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gold text-black py-4 rounded-full font-semibold hover:bg-dark-gold transition-all hover:scale-105"
              >
                Nachricht senden
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Quick Contact */}
            <div className="bg-dark-gray/50 backdrop-blur-sm rounded-2xl p-8 border border-gold/20">
              <h3 className="text-2xl font-serif text-gold mb-6">Direkter Kontakt</h3>
              
              <div className="space-y-4">
                <a href="mailto:kontakt@coachchrisberatung.de" className="flex items-center gap-4 text-gray-300 hover:text-gold transition-colors">
                  <Mail className="text-gold" size={20} />
                  <span>kontakt@coachchrisberatung.de</span>
                </a>
                
                <div className="flex items-center gap-4 text-gray-300">
                  <MessageSquare className="text-gold" size={20} />
                  <span>WhatsApp: Siehe Button unten rechts</span>
                </div>
                
                <div className="flex items-center gap-4 text-gray-300">
                  <Clock className="text-gold" size={20} />
                  <span>Antwortzeit: Innerhalb von 24h</span>
                </div>
                
                <div className="flex items-center gap-4 text-gray-300">
                  <MapPin className="text-gold" size={20} />
                  <span>Deutschlandweit - Online Coaching</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-dark-gray/50 backdrop-blur-sm rounded-2xl p-8 border border-gold/20">
              <h3 className="text-2xl font-serif text-gold mb-6">Folge mir für Tipps</h3>
              
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/coachchrisberatung"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-gold/10 rounded-full hover:bg-gold hover:text-black transition-all"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://www.youtube.com/@CoachChrisBeratung"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-gold/10 rounded-full hover:bg-gold hover:text-black transition-all"
                >
                  <Youtube size={24} />
                </a>
              </div>
              
              <p className="text-gray-400 text-sm mt-4">
                Regelmäßige Impulse und Übungen für deinen Weg
              </p>
            </div>

            {/* Emergency Note */}
            <div className="bg-red-900/20 backdrop-blur-sm rounded-2xl p-6 border border-red-500/30">
              <h4 className="text-lg font-semibold text-red-400 mb-2">In akuten Krisen</h4>
              <p className="text-gray-300 text-sm mb-3">
                Bei akuten psychischen Krisen wende dich bitte an:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-400">
                  <span className="text-red-400">Telefonseelsorge:</span> 0800 111 0 111
                </li>
                <li className="text-gray-400">
                  <span className="text-red-400">Krisenchat:</span> krisenchat.de
                </li>
                <li className="text-gray-400">
                  <span className="text-red-400">Notarzt:</span> 112
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact.jsx;
