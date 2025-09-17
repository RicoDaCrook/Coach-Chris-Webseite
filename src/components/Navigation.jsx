import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.svg';
import logoKlein from '../assets/logoklein.svg';

const Navigation = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  const navItems = [
    { name: 'Start', to: 'home' },
    { name: 'Gefühlsbarometer', to: 'gefuehlsbarometer' },
    { name: 'Angebot', to: 'angebot' },
    { name: 'Über mich', to: 'ueber-mich' },
    { name: 'Erfahrungen', to: 'erfahrungen' },
    { name: 'Kontakt', to: 'kontakt' },
  ];

  // Auf Legal Pages immer scrolled Style
  const navStyle = scrolled || !isLandingPage 
    ? 'bg-black/95 backdrop-blur-md py-4' 
    : 'bg-transparent py-6';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navStyle}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo - Links to home */}
          {isLandingPage ? (
            <ScrollLink 
              to="home" 
              smooth={true} 
              duration={500}
              className="cursor-pointer"
            >
              <img 
                src={logo} 
                alt="Coach Chris" 
                className="h-10 w-auto hidden sm:block"
              />
              <img 
                src={logoKlein} 
                alt="Coach Chris" 
                className="h-10 w-auto sm:hidden"
              />
            </ScrollLink>
          ) : (
            <RouterLink to="/" className="cursor-pointer">
              <img 
                src={logo} 
                alt="Coach Chris" 
                className="h-10 w-auto hidden sm:block"
              />
              <img 
                src={logoKlein} 
                alt="Coach Chris" 
                className="h-10 w-auto sm:hidden"
              />
            </RouterLink>
          )}

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {isLandingPage ? (
              <>
                {navItems.map((item) => (
                  <ScrollLink
                    key={item.to}
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-white hover:text-gold transition-colors cursor-pointer text-sm font-medium"
                  >
                    {item.name}
                  </ScrollLink>
                ))}
                <ScrollLink
                  to="buchen"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="bg-gold text-black px-6 py-2 rounded-full font-semibold hover:bg-dark-gold transition-all hover:scale-105 cursor-pointer"
                >
                  Jetzt buchen
                </ScrollLink>
              </>
            ) : (
              <>
                <RouterLink
                  to="/"
                  className="text-white hover:text-gold transition-colors text-sm font-medium"
                >
                  Zur Startseite
                </RouterLink>
                <RouterLink
                  to="/datenschutz"
                  className="text-white hover:text-gold transition-colors text-sm font-medium"
                >
                  Datenschutz
                </RouterLink>
                <RouterLink
                  to="/agb"
                  className="text-white hover:text-gold transition-colors text-sm font-medium"
                >
                  AGB
                </RouterLink>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gold"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md">
            <div className="px-4 py-4 space-y-4">
              {isLandingPage ? (
                <>
                  {navItems.map((item) => (
                    <ScrollLink
                      key={item.to}
                      to={item.to}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-white hover:text-gold transition-colors cursor-pointer py-2"
                    >
                      {item.name}
                    </ScrollLink>
                  ))}
                  <ScrollLink
                    to="buchen"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block bg-gold text-black px-6 py-3 rounded-full font-semibold text-center"
                  >
                    Jetzt buchen
                  </ScrollLink>
                </>
              ) : (
                <>
                  <RouterLink
                    to="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-white hover:text-gold transition-colors py-2"
                  >
                    Zur Startseite
                  </RouterLink>
                  <RouterLink
                    to="/datenschutz"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-white hover:text-gold transition-colors py-2"
                  >
                    Datenschutz
                  </RouterLink>
                  <RouterLink
                    to="/agb"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-white hover:text-gold transition-colors py-2"
                  >
                    AGB
                  </RouterLink>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
