import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold"
            >
              <img 
                src={scrolled ? "/logo.png" : "/header.png"} 
                alt="Aroni Engineering Logo" 
                className={`h-12 transition-all duration-300 ${!scrolled && ''}`}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['home', 'services', 'about', 'projects', 'contact'].map((item) => (
              <Link 
                key={item}
                to={item === 'home' ? '/' : `/${item}`}
                className={`font-medium transition-colors hover:text-brand-orange ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
            <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white ml-4 flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +234 000 0000
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl focus:outline-none"
          >
            {isOpen ? (
              <X className={`${scrolled ? 'text-brand-blue' : 'text-white'}`} />
            ) : (
              <Menu className={`${scrolled ? 'text-brand-blue' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 backdrop-blur-md rounded-b-lg shadow-lg mt-2"
          >
            <div className="flex flex-col py-4">
              {['home', 'services', 'about', 'projects', 'contact'].map((item) => (
                <Link
                  key={item}
                  to={item === 'home' ? '/' : `/${item}`}
                  className="py-2 px-4 text-gray-800 hover:text-brand-orange hover:bg-gray-100/50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}
              <div className="mt-4 px-4">
                <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white w-full flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  +234 000 0000
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
