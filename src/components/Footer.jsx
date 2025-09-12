import React from 'react';
import { Link } from 'react-scroll';
import { Instagram, Youtube, Mail, Shield, FileText, Heart } from 'lucide-react';
import logo from '../assets/logo.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Start', to: 'home' },
    { name: 'Angebot', to: 'angebot' },
    { name: 'Über mich', to: 'ueber-mich' },
    { name: 'Termin buchen', to: 'buchen' }
  ];

  const services = [
    'Schnupperstunde - 60 Min',
    'Intensiv-Session - 90 Min',
    'SOS-AKUTHILFE - 3 Sessions',
    'NEUSTART-PROGRAMM - 8 Sessions',
    'VIP-TRANSFORMATION - 12 Sessions'
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section - NUR LOGO OHNE TEXT */}
          <div>
            <div className="mb-4">
              <img src={logo} alt="Coach Chris Logo" className="h-10 w-auto" />
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Dein Begleiter für Klarheit, Struktur und Neuanfang nach der Trennung.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/coachchrisberatung"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-gray rounded-full flex items-center justify-center hover:bg-gold hover:text-black transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.youtube.com/@CoachChrisBeratung"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-gray rounded-full flex items-center justify-center hover:bg-gold hover:text-black transition-all"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a
                href="mailto:kontakt@coachchrisberatung.de"
                className="w-10 h-10 bg-dark-gray rounded-full flex items-center justify-center hover:bg-gold hover:text-black transition-all"
                aria-label="E-Mail"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-gray-400 hover:text-gold transition-colors cursor-pointer text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Angebote</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-gray-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal - MIT IMPRESSUM DATEN */}
          <div>
            <h4 className="text-white font-semibold mb-4">Impressum</h4>
            <div className="text-gray-400 text-sm space-y-1">
              <p>Coach Chris Beratung</p>
              <p>Schmidenerstr. 210B</p>
              <p>70374 Stuttgart</p>
              <p className="mt-2">USt-IdNr: DE355627905</p>
              <a href="mailto:kontakt@coachchrisberatung.de" className="hover:text-gold transition-colors">
                kontakt@coachchrisberatung.de
              </a>
            </div>
            
            <div className="mt-4 space-y-2">
              <a href="#datenschutz" className="text-gray-400 hover:text-gold transition-colors text-sm flex items-center gap-2">
                <Shield size={14} />
                Datenschutz
              </a>
              <a href="#agb" className="text-gray-400 hover:text-gold transition-colors text-sm flex items-center gap-2">
                <FileText size={14} />
                AGB
              </a>
            </div>
          </div>
        </div>

        {/* Payment Methods - MOBILE FIX */}
        <div className="py-6 border-t border-gray-800 mb-6">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-gray-500 text-sm">
            <span>Sichere Zahlungsmethoden:</span>
            <span className="text-gray-400">PayPal</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-gray-400">Klarna</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-gray-400">Kreditkarte</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-gray-400">Überweisung</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-gray-400 block sm:inline w-full sm:w-auto text-center sm:text-left">
              Ratenzahlung möglich
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Coach Chris Beratung. Alle Rechte vorbehalten.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              Made with <Heart size={14} className="text-gold" fill="#B8860B" /> für Menschen in Veränderung
            </p>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-gray-600 text-xs">
          <span className="flex items-center gap-1">
            <Shield size={14} className="text-gold" />
            SSL-Verschlüsselt
          </span>
          <span className="hidden sm:inline">•</span>
          <span>DSGVO-Konform</span>
          <span className="hidden sm:inline">•</span>
          <span>6+ Jahre Erfahrung</span>
          <span className="hidden sm:inline">•</span>
          <span>100+ zufriedene Klienten</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
