
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

  const mainNavItems = [
    {
      label: 'Home',
      path: '/'
    },
    {
      label: 'About Us',
      path: '/about'
    },
    {
      label: 'Services',
      path: '/services'
    },
    {
      label: 'Products',
      path: '/products'
    },
    {
      label: 'Industries',
      path: '/industries'
    },
    {
      label: 'Projects',
      path: '/projects'
    },
    {
      label: 'Get Started',
      path: '/get-started'
    }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <motion.div
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              transition={{
                duration: 0.5
              }}
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
          <nav className="hidden md:flex items-center space-x-6">
            {mainNavItems.map(item => (
              <Link
                key={item.label}
                to={item.path}
                className={`font-medium transition-colors hover:text-brand-orange ${scrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {item.label}
              </Link>
            ))}
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
            initial={{
              opacity: 0,
              height: 0
            }}
            animate={{
              opacity: 1,
              height: 'auto'
            }}
            exit={{
              opacity: 0,
              height: 0
            }}
            transition={{
              duration: 0.3
            }}
            className="md:hidden bg-white/90 backdrop-blur-md rounded-b-lg shadow-lg mt-2"
          >
            <div className="flex flex-col py-4">
              {mainNavItems.map(item => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="py-2 px-4 text-gray-800 hover:text-brand-orange hover:bg-gray-100/50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
