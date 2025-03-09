
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, PresentationControls } from '@react-three/drei';
import { Wrench, Users, History, Award, Target, Globe } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Suspense, useRef } from 'react';
import Scene3D from '@/components/Scene3D';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-r from-brand-blue to-blue-900 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092335878-2d9ff86ca6dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center mix-blend-overlay"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
                >
                  Our Story of <span className="text-brand-orange">Engineering Excellence</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-gray-100 text-base md:text-lg max-w-xl"
                >
                  For over two decades, Aroni Engineering has been at the forefront of Nigeria's engineering landscape, 
                  delivering innovative solutions that drive industrial progress across West Africa.
                </motion.p>
              </div>
              <div className="w-full lg:w-1/2 h-[300px] md:h-[400px]">
                <Scene3D variant="page" />
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-blue mb-4">
                Our <span className="text-brand-orange">Journey</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From humble beginnings to becoming Nigeria's leading engineering services provider.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center md:items-start text-center md:text-left"
              >
                <div className="bg-brand-blue/10 p-4 rounded-full mb-4">
                  <History className="w-8 h-8 text-brand-blue" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-brand-blue mb-2">Founded in 1998</h3>
                <p className="text-gray-600">
                  Established by a team of visionary engineers with a mission to transform Nigeria's industrial landscape through cutting-edge engineering solutions.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center md:items-start text-center md:text-left"
              >
                <div className="bg-brand-blue/10 p-4 rounded-full mb-4">
                  <Target className="w-8 h-8 text-brand-blue" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-brand-blue mb-2">Expanding Horizons</h3>
                <p className="text-gray-600">
                  By 2005, we had established offices in major Nigerian cities and began extending our services to neighboring West African countries.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col items-center md:items-start text-center md:text-left"
              >
                <div className="bg-brand-blue/10 p-4 rounded-full mb-4">
                  <Award className="w-8 h-8 text-brand-blue" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-brand-blue mb-2">Industry Recognition</h3>
                <p className="text-gray-600">
                  Our commitment to excellence has earned us prestigious accolades, including the Nigerian Engineering Excellence Award for three consecutive years.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col items-center md:items-start text-center md:text-left"
              >
                <div className="bg-brand-blue/10 p-4 rounded-full mb-4">
                  <Globe className="w-8 h-8 text-brand-blue" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-brand-blue mb-2">Today & Tomorrow</h3>
                <p className="text-gray-600">
                  With over 200 employees and a portfolio of 1000+ successful projects, we continue to innovate and lead the engineering services sector in West Africa.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
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
                Our <span className="text-brand-orange">Leadership Team</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Meet the visionaries driving our mission to transform industries through engineering excellence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Chukwudi Aroni",
                  position: "Founder & CEO",
                  bio: "With 30+ years in engineering, Chukwudi's vision and leadership have established Aroni as Nigeria's premier engineering firm.",
                  seed: "chukwudi"
                },
                {
                  name: "Folake Adeyemi",
                  position: "Chief Operations Officer",
                  bio: "Folake oversees all operations, ensuring efficient delivery of services while maintaining our high quality standards.",
                  seed: "folake"
                },
                {
                  name: "Ibrahim Mohammed",
                  position: "Technical Director",
                  bio: "A mechanical engineering expert with vast experience in hydraulic systems implementation across various industries.",
                  seed: "ibrahim"
                },
                {
                  name: "Ngozi Okonkwo",
                  position: "Head of Innovation",
                  bio: "Leading our R&D initiatives, Ngozi ensures Aroni remains at the cutting edge of engineering technology.",
                  seed: "ngozi"
                }
              ].map((member, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-64 bg-gray-100 flex items-center justify-center">
                    <img 
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.seed}`} 
                      alt={member.name} 
                      className="w-40 h-40"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-brand-blue mb-1">{member.name}</h3>
                    <p className="text-brand-orange font-medium mb-3">{member.position}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-blue mb-4">
                Our <span className="text-brand-orange">Core Values</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The principles that guide our approach and define our company culture.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 p-8 rounded-lg text-center hover:bg-brand-blue hover:text-white transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white">
                  <Wrench className="w-8 h-8 text-white group-hover:text-brand-orange" />
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-3 group-hover:text-white">Excellence</h3>
                <p className="text-gray-600 group-hover:text-gray-200">
                  We consistently deliver solutions that exceed expectations, setting the industry standard for quality and reliability.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-50 p-8 rounded-lg text-center hover:bg-brand-blue hover:text-white transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white">
                  <Users className="w-8 h-8 text-white group-hover:text-brand-orange" />
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-3 group-hover:text-white">Collaboration</h3>
                <p className="text-gray-600 group-hover:text-gray-200">
                  We work closely with our clients, understanding their unique needs to create tailored engineering solutions.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gray-50 p-8 rounded-lg text-center hover:bg-brand-blue hover:text-white transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white">
                  <Target className="w-8 h-8 text-white group-hover:text-brand-orange" />
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-3 group-hover:text-white">Innovation</h3>
                <p className="text-gray-600 group-hover:text-gray-200">
                  We embrace the latest technologies and methodologies, continuously evolving to stay ahead in a dynamic industry.
                </p>
              </motion.div>
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
