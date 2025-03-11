
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="bg-brand-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={childVariants}>
            <img src="/footer.png" alt="Aroni Engineering Logo" className="h-12 invert" />
            <p className="mb-4 text-gray-300">
              Providing expert hydraulic, pneumatic, and agricultural solutions across Nigeria with a commitment to excellence and innovation.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-brand-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-brand-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-brand-orange transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-brand-orange transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div variants={childVariants}>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-brand-orange transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-brand-orange transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-brand-orange transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-brand-orange transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-brand-orange transition-colors">Contact Us</Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={childVariants}>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 text-brand-orange shrink-0" size={20} />
                <span className="text-gray-300">123 Engineering Avenue, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-brand-orange shrink-0" size={20} />
                <span className="text-gray-300">+234 000 0000</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-brand-orange shrink-0" size={20} />
                <span className="text-gray-300">info@aroniengineeringservices.com</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Aroni Engineering Services. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
