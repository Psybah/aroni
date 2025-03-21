
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Scene3D from '@/components/Scene3D';
import ContactForm from '@/components/ContactForm';

const GetStarted = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-12 md:py-24 bg-gradient-to-r from-brand-blue to-blue-900">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
                >
                  Let's Build Something <span className="text-brand-orange">Exceptional</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-gray-100 text-base md:text-lg max-w-xl"
                >
                  Have a project in mind? Speak with our team to explore precision-engineered solutions for your business.
                </motion.p>
              </div>
              <div className="w-full lg:w-1/2 h-[250px] sm:h-[300px] flex justify-center">
                <Scene3D variant="page" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-12 md:py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Contact Information */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/3"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-brand-blue mb-4 md:mb-6">
                  Get in <span className="text-brand-orange">Touch</span>
                </h2>
                
                <div className="space-y-6 md:space-y-8">
                  <div className="flex items-start">
                    <div className="bg-brand-blue/10 p-2 md:p-3 rounded-full mr-3 md:mr-4">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base md:text-lg text-brand-blue mb-1">Our Headquarters</h3>
                      <p className="text-sm md:text-base text-gray-600">
                        15 Engineering Avenue<br />
                        Victoria Island, Lagos<br />
                        Nigeria
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-blue/10 p-2 md:p-3 rounded-full mr-3 md:mr-4">
                      <Phone className="w-5 h-5 md:w-6 md:h-6 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base md:text-lg text-brand-blue mb-1">Phone</h3>
                      <p className="text-sm md:text-base text-gray-600">
                        Main: +234 123 4567<br />
                        Support: +234 765 4321
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-blue/10 p-2 md:p-3 rounded-full mr-3 md:mr-4">
                      <Mail className="w-5 h-5 md:w-6 md:h-6 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base md:text-lg text-brand-blue mb-1">Email</h3>
                      <p className="text-sm md:text-base text-gray-600">
                        Info: info@aroniengineering.com<br />
                        Support: support@aroniengineering.com
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Contact Form */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-2/3"
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Process Steps */}
        <section className="py-12 md:py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-10 md:mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-brand-blue mb-4 md:mb-6">
                Our <span className="text-brand-orange">Process</span>
              </h2>
              <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
                From consultation to implementation, we ensure a smooth, transparent experience.
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-brand-blue/20 -ml-px"></div>
                
                {/* Steps */}
                <div className="space-y-10 md:space-y-0">
                  {/* Step 1 */}
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative flex items-start md:flex-row-reverse md:mb-16"
                  >
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-brand-blue text-white absolute left-0 md:left-1/2 -ml-4 md:-ml-4 mt-1.5 z-10">
                      1
                    </div>
                    <div className="pl-12 md:pl-0 md:pr-12 md:w-1/2">
                      <h3 className="text-lg md:text-xl font-bold text-brand-blue mb-2">Initial Consultation</h3>
                      <p className="text-sm md:text-base text-gray-600">
                        We discuss your engineering needs, challenges, and goals to understand the scope of your project.
                      </p>
                    </div>
                  </motion.div>
                  
                  {/* Step 2 */}
                  <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="relative flex items-start mt-10 md:mt-0 md:mb-16"
                  >
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-brand-blue text-white absolute left-0 md:left-1/2 -ml-4 md:-ml-4 mt-1.5 z-10">
                      2
                    </div>
                    <div className="pl-12 md:w-1/2">
                      <h3 className="text-lg md:text-xl font-bold text-brand-blue mb-2">Solution Design</h3>
                      <p className="text-sm md:text-base text-gray-600">
                        Our engineering team develops a custom solution tailored to your specific requirements.
                      </p>
                    </div>
                  </motion.div>
                  
                  {/* Step 3 */}
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative flex items-start md:flex-row-reverse mt-10 md:mt-0 md:mb-16"
                  >
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-brand-blue text-white absolute left-0 md:left-1/2 -ml-4 md:-ml-4 mt-1.5 z-10">
                      3
                    </div>
                    <div className="pl-12 md:pl-0 md:pr-12 md:w-1/2">
                      <h3 className="text-lg md:text-xl font-bold text-brand-blue mb-2">Implementation</h3>
                      <p className="text-sm md:text-base text-gray-600">
                        We fabricate and install your custom-engineered solution with precision and attention to detail.
                      </p>
                    </div>
                  </motion.div>
                  
                  {/* Step 4 */}
                  <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="relative flex items-start mt-10 md:mt-0"
                  >
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-brand-blue text-white absolute left-0 md:left-1/2 -ml-4 md:-ml-4 mt-1.5 z-10">
                      4
                    </div>
                    <div className="pl-12 md:w-1/2">
                      <h3 className="text-lg md:text-xl font-bold text-brand-blue mb-2">Ongoing Support</h3>
                      <p className="text-sm md:text-base text-gray-600">
                        We provide maintenance, training, and continued support to ensure optimal performance.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="+234 000 0000" accountName="Aroni Engineering" />
    </div>
  );
};

export default GetStarted;
