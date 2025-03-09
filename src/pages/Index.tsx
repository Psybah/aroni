
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

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-12 md:py-20 bg-white"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 md:gap-12">
              <div className="w-full lg:w-1/2">
                <img 
                  src="/engineers.jpg" 
                  alt="Engineering Excellence" 
                  className="w-full h-full object-cover rounded-lg shadow-xl"
                />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-brand-blue">
                  Nigeria's Premier <span className="text-brand-orange">Engineering Partner</span>
                </h2>
                <p className="text-gray-700 text-sm md:text-base mb-6 md:mb-8">
                  With over 25 years of experience, Aroni Engineering Services has established itself as the leader in providing hydraulic, pneumatic, and agricultural solutions across Nigeria and West Africa.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div className="bg-gray-50 p-4 md:p-6 rounded-lg border border-gray-200">
                    <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-brand-blue">Industry Expertise</h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      Specialized knowledge across manufacturing, agriculture, construction, and oil & gas sectors.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 md:p-6 rounded-lg border border-gray-200">
                    <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-brand-blue">Quality Assurance</h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      ISO certified processes ensuring the highest standards in all our engineering solutions.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 md:p-6 rounded-lg border border-gray-200">
                    <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-brand-blue">Local Support</h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      Nationwide service network providing prompt and efficient technical support.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 md:p-6 rounded-lg border border-gray-200">
                    <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-brand-blue">Innovation</h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      Cutting-edge technology and continuous improvement in engineering practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <StatsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="+234 000 0000" accountName="Aroni Engineering" />
    </div>
  );
};

export default Index;
