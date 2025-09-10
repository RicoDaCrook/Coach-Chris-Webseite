import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  
  // Placeholder WhatsApp number - replace when real number is available
  const whatsappNumber = '+491234567890';
  const message = 'Hallo Coach Chris, ich würde gerne ein Erstgespräch vereinbaren.';
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => setShowTooltip(true), 1000);
      setTimeout(() => setShowTooltip(false), 5000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
          {showTooltip && (
            <div className="bg-black text-white px-4 py-2 rounded-lg shadow-lg text-sm animate-pulse">
              Schreib mir auf WhatsApp!
            </div>
          )}
          
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            aria-label="WhatsApp Chat öffnen"
          >
            <MessageCircle size={28} fill="white" />
          </a>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;
