
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Scene3D from './Scene3D';

const CTASection = () => {
  return (
    <section className="py-20 cta-gradient text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            className="lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Elevate Your <span className="text-brand-orange">Engineering Solutions?</span>
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-xl">
              Contact us today to discuss your project requirements. Our expert team is ready to provide tailored solutions that meet your specific needs and exceed your expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-6 rounded-md text-lg">
                <Link to="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="text-brand-blue hover:bg-white/50 px-6 py-5 rounded-md text-base md:text-lg">
                <Link to="/projects">
                  View Our Projects
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Scene3D />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
