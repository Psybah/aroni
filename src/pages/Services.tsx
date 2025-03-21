
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { motion } from 'framer-motion';
import Scene3D from '@/components/Scene3D';
import { ArrowRight, Droplet, Wind, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Services = () => {
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
                  Tailored Engineering <span className="text-brand-orange">Solutions</span> for Industry
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-gray-100 text-base md:text-lg max-w-xl"
                >
                  We provide comprehensive engineering solutions designed to meet your specific operational needs and challenges.
                </motion.p>
              </div>
              <div className="w-full lg:w-1/2 h-[250px] sm:h-[300px] flex justify-center">
                <Scene3D variant="page" />
              </div>
            </div>
          </div>
        </section>

        {/* Hydraulic & Pneumatic Systems */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2"
              >
                <div className="rounded-full bg-brand-blue/10 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-4 md:mb-6">
                  <Droplet className="w-6 h-6 md:w-8 md:h-8 text-brand-blue" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-brand-blue mb-3 md:mb-4">Hydraulic & Pneumatic Systems</h2>
                <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
                  We offer precision-engineered fluid power solutions that drive industrial efficiency.
                </p>
                
                <div className="mb-6 md:mb-8 space-y-4 md:space-y-6">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-brand-blue mb-1 md:mb-2">Custom Hydraulic Systems</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Our hydraulic solutions are designed for superior power transmission, load handling, and system control, making them ideal for industrial and agricultural applications.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-brand-blue mb-1 md:mb-2">Pneumatic Automation</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      We develop air-powered systems that improve production speeds, reduce energy costs, and ensure smooth operation in manufacturing and industrial processes.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-brand-blue mb-1 md:mb-2">Process Optimisation</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Our expertise in fluid mechanics and automation helps businesses enhance performance and reduce inefficiencies in their existing systems.
                    </p>
                  </div>
                </div>
                
                <Button asChild className="bg-brand-orange hover:bg-brand-orange/90 text-white font-medium text-sm md:text-base">
                  <Link to="/get-started">
                    Get Quote <ArrowRight className="ml-1 w-3 h-3 md:ml-2 md:w-4 md:h-4" />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2 mt-6 lg:mt-0"
              >
                <img 
                  src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Hydraulic Systems" 
                  className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover rounded-lg shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Fabrication & Manufacturing */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2 lg:order-2"
              >
                <div className="rounded-full bg-brand-blue/10 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-4 md:mb-6">
                  <Wind className="w-6 h-6 md:w-8 md:h-8 text-brand-blue" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-brand-blue mb-3 md:mb-4">Fabrication & Manufacturing</h2>
                <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
                  Our in-house fabrication facility ensures high-quality agricultural and industrial equipment production.
                </p>
                
                <div className="mb-6 md:mb-8 space-y-4 md:space-y-6">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-brand-blue mb-1 md:mb-2">01 Agricultural Equipment</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      We manufacture durable, high-performance ploughs, threshers, flat-bed dryers, and irrigation systems to meet the demands of modern farming.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-brand-blue mb-1 md:mb-2">02 Industrial Machinery</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Our fabrication team produces custom components and complete machinery that integrate seamlessly into industrial production lines.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-brand-blue mb-1 md:mb-2">03 Component Fabrication</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      We design and produce high-precision mechanical parts, ensuring compatibility and performance in critical systems.
                    </p>
                  </div>
                </div>
                
                <Button asChild className="bg-brand-orange hover:bg-brand-orange/90 text-white font-medium text-sm md:text-base">
                  <Link to="/get-started">
                    Get Quote <ArrowRight className="ml-1 w-3 h-3 md:ml-2 md:w-4 md:h-4" />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2 lg:order-1 mt-6 lg:mt-0"
              >
                <img 
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Fabrication & Manufacturing" 
                  className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover rounded-lg shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Consulting & Training */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2"
              >
                <div className="rounded-full bg-brand-blue/10 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-4 md:mb-6">
                  <Users className="w-6 h-6 md:w-8 md:h-8 text-brand-blue" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-brand-blue mb-3 md:mb-4">Consulting & Training</h2>
                <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
                  We help businesses improve efficiency through engineering consulting, skills training, and operational support.
                </p>
                
                <div className="mb-6 md:mb-8 space-y-4 md:space-y-6">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-brand-blue mb-1 md:mb-2">01 Technical Advisory</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      We provide custom engineering strategies that address unique operational challenges and optimise system performance.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-brand-blue mb-1 md:mb-2">02 Workforce Training</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Our training programs are designed to equip engineers and technicians with hands-on expertise in fluid mechanics, automation, and industrial process engineering.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-brand-blue mb-1 md:mb-2">03 Long-Term Maintenance & Support</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Our clients benefit from ongoing maintenance, technical support, and system upgrades, ensuring maximum efficiency.
                    </p>
                  </div>
                </div>
                
                <Button asChild className="bg-brand-orange hover:bg-brand-orange/90 text-white font-medium text-sm md:text-base">
                  <Link to="/get-started">
                    Get Quote <ArrowRight className="ml-1 w-3 h-3 md:ml-2 md:w-4 md:h-4" />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2 mt-6 lg:mt-0"
              >
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Consulting & Training" 
                  className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover rounded-lg shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-brand-blue">One Size Doesn't Fit All. Get Engineering Solutions Designed for Your Needs</h2>
            <p className="max-w-3xl mx-auto mb-6 md:mb-10 text-gray-700 text-sm md:text-base">
              Your business is unique—so should your equipment be. We create tailored engineering systems that optimise efficiency, reduce costs, and drive business growth.
            </p>
            <Button asChild className="bg-brand-orange hover:bg-brand-orange/90 text-white px-4 md:px-6 py-2 md:py-3 rounded-md text-sm md:text-lg font-medium">
              <Link to="/get-started">
                Get in Touch
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="+234 000 0000" accountName="Aroni Engineering" />
    </div>
  );
};

export default Services;
