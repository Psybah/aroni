
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

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", path: "/" },
        { label: "About Us", path: "/about" },
        { label: "Services", path: "/services" },
        { label: "Products", path: "/products" },
        { label: "Industries", path: "/industries" },
        { label: "Projects", path: "/projects" },
        { label: "Contact Us", path: "/contact" }
      ]
    },
    {
      title: "Contact",
      links: [
        { label: "Wemabod Estate, Ikeja, Lagos", path: "#", icon: MapPin },
        { label: "+234 803 123 4567", path: "tel:+2348031234567", icon: Phone },
        { label: "info@aroni-engineering.com", path: "mailto:info@aroni-engineering.com", icon: Mail }
      ]
    }
  ];

  return (
    <footer className="bg-brand-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={childVariants} className="md:col-span-1">
            <img src="/header.png" alt="Aroni Engineering Logo" className="h-12" />
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

          {footerLinks.map((section, index) => (
            <motion.div key={index} variants={childVariants}>
              <h3 className="text-xl font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link to={link.path} className="text-gray-300 hover:text-brand-orange transition-colors flex items-center">
                      {link.icon && <link.icon className="mr-2" size={16} />}
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
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
