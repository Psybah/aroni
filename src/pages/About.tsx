import { motion } from 'framer-motion';
import { Wrench, Users, Shield, Leaf, ArrowUpCircle, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Scene3D from '@/components/Scene3D';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 md:pt-24 pb-12 md:pb-24 bg-gradient-to-r from-brand-blue to-blue-900">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
                >
                  Global <span className="text-brand-orange">Excellence</span>, Locally Crafted
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-gray-100 text-base md:text-lg max-w-xl"
                >
                  Aroni was founded to bridge the gap in Nigeria's engineering sector, providing locally manufactured solutions that meet international quality standards. With 90% of agricultural and industrial equipment imported, we saw the opportunity to build a stronger local industry through expertise, innovation, and technical excellence.
                </motion.p>
              </div>
              <div className="w-full lg:w-1/2 h-[350px] md:h-[400px] flex justify-center items-center">
                <Scene3D variant="page" />
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-blue mb-6">
                Our <span className="text-brand-orange">Expertise</span> in Action
              </h2>
              <p className="text-gray-700 max-w-3xl mx-auto text-lg">
                We specialise in fluid mechanics, industrial automation, and precision fabrication—delivering solutions for businesses that demand efficiency, durability, and reliability.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 p-8 rounded-lg text-center"
              >
                <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Wrench className="w-8 h-8 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-3">Fluid Mechanics</h3>
                <p className="text-gray-600">
                  We engineer hydraulic and pneumatic systems that deliver precise power and control for industrial applications.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-50 p-8 rounded-lg text-center"
              >
                <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-3">Industrial Automation</h3>
                <p className="text-gray-600">
                  Our automation solutions streamline production processes and improve operational efficiency.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gray-50 p-8 rounded-lg text-center"
              >
                <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-3">Precision Fabrication</h3>
                <p className="text-gray-600">
                  We create high-quality components and complete systems built to exacting specifications.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-blue mb-4">
                Our <span className="text-brand-orange">Values</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mb-6">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-3">Engineering Excellence</h3>
                <p className="text-gray-600">
                  Every product meets international standards.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-3">Local Empowerment</h3>
                <p className="text-gray-600">
                  Supporting Nigeria's industries through skilled manpower development.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-3">Integrity & Transparency</h3>
                <p className="text-gray-600">
                  Ethical, straightforward business practices.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mb-6">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-3">Sustainability & Efficiency</h3>
                <p className="text-gray-600">
                  Smart engineering to maximise performance and longevity.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 md:col-span-2 lg:col-span-1"
              >
                <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mb-6">
                  <ArrowUpCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-3">Continuous Innovation</h3>
                <p className="text-gray-600">
                  Advancing Nigeria's engineering sector through technology.
                </p>
              </motion.div>
            </div>

            <div className="text-center">
              <Button asChild className="bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-5 rounded-md text-base">
                <Link to="/contact">
                  Book a Free Consultative Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="+234 000 0000" accountName="Aroni Engineering" />
    </div>
  );
};

export default About;
