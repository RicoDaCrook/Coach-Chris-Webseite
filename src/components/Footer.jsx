import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Instagram, Youtube, Mail, Shield, FileText, Code } from 'lucide-react';
import logo from '../assets/logo.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  const quickLinks = [
    { name: 'Start', to: 'home' },
    { name: 'Angebot', to: 'angebot' },
    { name: 'Über mich', to: 'ueber-mich' },
    { name: 'Termin buchen', to: 'buchen' }
  ];

  const services = [
    'Kostenloses Erstgespräch - 30 Min',
    'Einzelstunde - 60 Min',
    'Intensiv-Session - 90 Min',
    'SOS-AKUTHILFE - 3 Sessions',
    'NEUSTART-PROGRAMM - 8 Sessions',
    'VIP-TRANSFORMATION - 12 Sessions'
  ];

  // Agency tracking function
  const handleAgencyClick = () => {
    if (window.gtag) {
      window.gtag('event', 'agency_link_click', {
        'event_category': 'portfolio',
        'event_label': 'Coach Chris Beratung',
        'from_page': location.pathname
      });
    }
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
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
                className="w-10 h-10 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-gold hover:text-black transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.youtube.com/@CoachChrisBeratung"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-gold hover:text-black transition-all"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a
                href="mailto:kontakt@coachchrisberatung.de"
                className="w-10 h-10 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-gold hover:text-black transition-all"
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
              {isLandingPage ? (
                quickLinks.map((link) => (
                  <li key={link.to}>
                    <ScrollLink
                      to={link.to}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      className="text-gray-400 hover:text-gold transition-colors cursor-pointer text-sm"
                    >
                      {link.name}
                    </ScrollLink>
                  </li>
                ))
              ) : (
                <li>
                  <RouterLink
                    to="/"
                    className="text-gray-400 hover:text-gold transition-colors text-sm"
                  >
                    Zur Startseite
                  </RouterLink>
                </li>
              )}
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

          {/* Contact & Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Impressum</h4>
            <div className="text-gray-400 text-sm space-y-1">
              <p>Coach Chris Beratung</p>
              <p>Marcus Zöllmann</p>
              <p>Schmidenerstr. 210B</p>
              <p>70374 Stuttgart</p>
              <p className="mt-2">USt-IdNr: DE355627905</p>
              <a href="mailto:kontakt@coachchrisberatung.de" className="hover:text-gold transition-colors">
                kontakt@coachchrisberatung.de
              </a>
            </div>
            
            <div className="mt-4 space-y-2">
              <RouterLink 
                to="/datenschutz" 
                className="text-gray-400 hover:text-gold transition-colors text-sm flex items-center gap-2"
              >
                <Shield size={14} />
                Datenschutz
              </RouterLink>
              <RouterLink 
                to="/agb" 
                className="text-gray-400 hover:text-gold transition-colors text-sm flex items-center gap-2"
              >
                <FileText size={14} />
                AGB
              </RouterLink>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
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

        {/* Bottom Bar mit Agency Credit */}
        <div className="pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Coach Chris Beratung. Alle Rechte vorbehalten.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
              <p className="text-gray-500 flex items-center gap-1">
                Mit Hingabe für Menschen in Veränderung erstellt
              </p>
              {/* VIDEONEERS CREDIT */}
              <a 
                href="https://videoneers.de"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleAgencyClick}
                data-agency-link
                className="text-gray-600 hover:text-gold transition-colors flex items-center gap-1 group"
              >
                <Code size={14} className="group-hover:rotate-12 transition-transform" />
                Website by Videoneers
              </a>
            </div>
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
