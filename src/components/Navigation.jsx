import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navigation = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Start', to: 'home' },
    { name: 'Gefühlsbarometer', to: 'gefuehlsbarometer' },
    { name: 'Angebot', to: 'angebot' },
    { name: 'Über mich', to: 'ueber-mich' },
    { name: 'Erfahrungen', to: 'erfahrungen' },
    { name: 'Kontakt', to: 'kontakt' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/95 backdrop-blur-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="home" 
            smooth={true} 
            duration={500}
            className="cursor-pointer"
          >
            <div className="flex items-center space-x-2">
              <svg 
                width="40" 
                height="40" 
                viewBox="0 0 100 100" 
                className="fill-gold"
              >
                <circle cx="50" cy="50" r="45" fill="none" stroke="#B8860B" strokeWidth="2"/>
                <text 
                  x="50" 
                  y="50" 
                  textAnchor="middle" 
                  dominantBaseline="middle" 
                  className="text-2xl font-bold fill-gold"
                >
                  CC
                </text>
              </svg>
              <span className="text-gold font-serif text-xl hidden sm:block">
                Coach Chris
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-white hover:text-gold transition-colors cursor-pointer text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="buchen"
              smooth={true}
              duration={500}
              offset={-80}
              className="bg-gold text-black px-6 py-2 rounded-full font-semibold hover:bg-dark-gold transition-all hover:scale-105 cursor-pointer"
            >
              Jetzt buchen
            </Link>
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
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-white hover:text-gold transition-colors cursor-pointer py-2"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="buchen"
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setMobileMenuOpen(false)}
                className="block bg-gold text-black px-6 py-3 rounded-full font-semibold text-center"
              >
                Jetzt buchen
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
