
import { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import WhatsAppButton from '@/components/WhatsAppButton';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Box, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        
        {/* Introduction Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-16 md:py-24 bg-white"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-brand-blue">
                Craft, with <span className="text-brand-orange">Excellence</span>
              </h2>
              <p className="text-gray-700 text-base md:text-lg mb-8 leading-relaxed">
                Aroni is redefining Nigeria's engineering landscape. We design and manufacture high-quality, precision-engineered solutions for hydraulic systems, pneumatic systems, and industrial automation, ensuring efficiency, durability, and long-term performance. Our locally crafted solutions meet global standards, supporting industries in agriculture, manufacturing, and industrial processing.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Challenges Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-brand-blue">
                Your Engineering <span className="text-brand-orange">Challenges, Solved</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <div className="bg-brand-blue/10 p-4 rounded-full inline-flex mb-6">
                  <Clock className="w-8 h-8 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-blue">Equipment Downtime?</h3>
                <p className="text-gray-600">
                  We deliver reliable, high-performance systems built for longevity.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <div className="bg-brand-blue/10 p-4 rounded-full inline-flex mb-6">
                  <Box className="w-8 h-8 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-blue">Dependence on Imports?</h3>
                <p className="text-gray-600">
                  Our locally manufactured solutions reduce costs and improve availability.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <div className="bg-brand-blue/10 p-4 rounded-full inline-flex mb-6">
                  <Settings className="w-8 h-8 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-blue">Need customisation?</h3>
                <p className="text-gray-600">
                  We design bespoke engineering systems that align with your business needs.
                </p>
              </motion.div>
            </div>

            <div className="text-center mt-12">
              <Button asChild className="bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-5 rounded-md text-base">
                <Link to="/contact">
                  Book a Free Consultative Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Engineering Solutions Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-16 md:py-24 bg-white"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-brand-blue">
                Engineering Solutions That Work. <span className="text-brand-orange">Today, Tomorrow, Always.</span>
              </h2>
              <p className="text-gray-700 text-base md:text-lg mb-8 leading-relaxed">
                Invest in systems that don't just perform—they last. Our locally manufactured solutions combine precision, durability, and smart design to solve your toughest engineering challenges.
              </p>
              <div className="flex justify-center gap-4 flex-wrap mb-8">
                <span className="bg-gray-100 py-2 px-4 rounded-full text-brand-blue font-medium">Engineering Design</span>
                <span className="bg-gray-100 py-2 px-4 rounded-full text-brand-blue font-medium">Fabrication & Manufacturing</span>
                <span className="bg-gray-100 py-2 px-4 rounded-full text-brand-blue font-medium">Consulting & Training</span>
              </div>
            </div>
          </div>
        </motion.div>

        <ServicesSection />
        
        {/* Explore Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-brand-blue">
                Explore Our <span className="text-brand-orange">Expertise</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                <h3 className="text-xl font-bold mb-3 text-brand-blue">Industries</h3>
                <p className="text-gray-600 mb-6">
                  Solutions tailored to the Agriculture and Manufacturing sectors.
                </p>
                <Link to="/industries" className="text-brand-orange font-medium hover:underline inline-flex items-center">
                  Learn More <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                <h3 className="text-xl font-bold mb-3 text-brand-blue">Projects</h3>
                <p className="text-gray-600 mb-6">
                  Case studies showcasing successful implementations.
                </p>
                <Link to="/projects" className="text-brand-orange font-medium hover:underline inline-flex items-center">
                  Learn More <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                <h3 className="text-xl font-bold mb-3 text-brand-blue">Contact Us</h3>
                <p className="text-gray-600 mb-6">
                  Get in touch for custom-engineered solutions.
                </p>
                <Link to="/contact" className="text-brand-orange font-medium hover:underline inline-flex items-center">
                  Learn More <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
        
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="+234 000 0000" accountName="Aroni Engineering" />
    </div>
  );
};

export default Index;
