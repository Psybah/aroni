
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] md:h-screen flex items-center bg-gray-900 overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)', 
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-brand-orange rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 py-12 md:py-0">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 leading-tight">
              Engineering solutions that keep your business{' '}
              <span className="text-brand-orange">running</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-base md:text-xl text-gray-200 mb-6 md:mb-8">
              Eliminate costly downtime and inefficiencies with our high-performance hydraulic and pneumatic systems. Built locally, crafted for durability, and engineered to meet international standards.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 md:gap-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button asChild className="bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-5 rounded-md text-base md:text-lg">
              <Link to="/contact">
                Book a Call
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="text-brand-blue hover:bg-white/50 px-6 py-5 rounded-md text-base md:text-lg">
              <Link to="/services">
                Explore Our Services
              </Link>
            </Button>
          </motion.div>

          <motion.div
            className="flex items-center mt-8 md:mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex -space-x-3 md:-space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-white overflow-hidden bg-gray-200 p-0.5">
                  <div className="w-full h-full rounded-full overflow-hidden bg-brand-orange/20">
                    <img 
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 20}`} 
                      alt={`Client ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="ml-3 md:ml-4">
              <p className="font-medium text-white text-sm md:text-base">Trusted by 100+ companies</p>
              <p className="text-xs md:text-sm text-gray-300">Across Nigeria and West Africa</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
