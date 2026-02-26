
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Shield, Calculator } from 'lucide-react';
import { AGENT_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'LIC Plans', path: '/plans' },
    { name: 'Claims', path: '/claims' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleCalculatorClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-blue-700" />
              <span className="text-xl font-bold tracking-tight text-blue-900">{AGENT_NAME} <span className="text-yellow-600">LIC</span></span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  isActive(link.path)
                    ? 'text-blue-700 border-b-2 border-blue-700'
                    : 'text-slate-600 hover:text-blue-700'
                } px-1 py-2 text-sm font-medium transition-colors`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={handleCalculatorClick}
              className="flex items-center text-slate-600 hover:text-blue-700 px-1 py-2 text-sm font-medium transition-colors"
            >
              <Calculator className="w-4 h-4 mr-1.5" />
              Calculator
            </button>
            <Link
              to="/contact"
              className="bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-800 transition-all shadow-md"
            >
              Get Consultation
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-700 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 pb-4 shadow-xl">
          <div className="px-2 pt-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 text-base font-medium rounded-md ${
                  isActive(link.path)
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-blue-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={handleCalculatorClick}
              className="flex items-center w-full px-3 py-4 text-base font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-blue-700"
            >
              <Calculator className="w-5 h-5 mr-3" />
              Maturity Calculator
            </button>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-blue-700 text-white px-3 py-3 rounded-md text-base font-semibold"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
