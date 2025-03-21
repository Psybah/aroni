import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { motion } from 'framer-motion';
import Scene3D from '@/components/Scene3D';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CTASection from '@/components/CTASection';

const industriesData = [
  {
    id: 'agriculture',
    title: 'Agriculture',
    description: 'We help agribusinesses maximise productivity with custom-engineered machinery.',
    image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    services: [
      {
        title: 'Custom Agricultural Machinery', 
        description: 'Our locally manufactured equipment, including precision ploughs, cultivators, and threshers, is designed for Nigeria\'s unique farming conditions, improving efficiency and reducing costs.'
      },
      {
        title: 'Post-Harvest Processing Solutions', 
        description: 'We build custom processing plants, grain drying systems, and feed mills, helping agricultural businesses improve output quality and reduce post-harvest losses.'
      },
      {
        title: 'Sustainable Farming', 
        description: 'Our solutions are built to support long-term agricultural growth, integrating smart technology to enhance yield and efficiency.'
      }
    ]
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    description: 'We provide industrial automation, process optimisation, and fluid mechanics expertise.',
    image: './manufacture.jpg',
    services: [
      {
        title: 'Industrial Process Engineering', 
        description: 'We help manufacturers improve production line efficiency, reduce downtime, and optimise material usage for better cost savings.'
      },
      {
        title: 'Equipment Manufacturing', 
        description: 'Our locally fabricated industrial equipment is built to handle high-volume production demands, offering superior durability and operational reliability.'
      },
      {
        title: 'Automation & Control Systems', 
        description: 'We implement hydraulic and pneumatic-driven automation, allowing manufacturers to scale operations efficiently.'
      }
    ]
  }
];

const Industries = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 md:pt-24 pb-12 md:pb-24 bg-gradient-to-r from-brand-blue to-blue-900">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
                >
                  Solving Industry-Specific <span className="text-brand-orange">Engineering Challenges</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-gray-100 text-base md:text-lg max-w-xl"
                >
                  Specialized engineering solutions tailored for key industries in Nigeria and across West Africa.
                </motion.p>
              </div>
              <div className="w-full lg:w-1/2 h-[350px] md:h-[400px] flex justify-center items-center">
                <Scene3D variant="page" />
              </div>
            </div>
          </div>
        </section>

        {/* Industries Sections */}
        {industriesData.map((industry, index) => (
          <section 
            key={industry.id} 
            id={industry.id}
            className={`py-12 md:py-16 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
          >
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`w-full lg:w-1/2 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}
                >
                  <img 
                    src={industry.image} 
                    alt={industry.title} 
                    className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover rounded-lg shadow-xl"
                  />
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`w-full lg:w-1/2 mt-6 lg:mt-0 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-brand-blue mb-3 md:mb-4">{industry.title}</h2>
                  <p className="text-gray-700 mb-4 md:mb-6">{industry.description}</p>
                  
                  <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                    {industry.services.map((service, i) => (
                      <div key={i} className="border-l-4 border-brand-orange pl-3 md:pl-4">
                        <h3 className="text-lg md:text-xl font-semibold text-brand-blue mb-1 md:mb-2">
                          <span className="text-brand-orange font-normal mr-2">0{i+1}</span> 
                          {service.title}
                        </h3>
                        <p className="text-sm md:text-base text-gray-600">{service.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to="/get-started" 
                    className="bg-brand-blue hover:bg-brand-blue/90 text-white font-medium py-2 px-4 md:px-6 rounded-md inline-block text-sm md:text-base"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-brand-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Engineering Solutions That Work. Today, Tomorrow, Always.</h2>
            <p className="max-w-2xl mx-auto mb-6 md:mb-8 text-sm md:text-base">
              Reduce operational costs and reliance on imports with custom-engineered solutions tailored to your industry. 
              Aroni delivers durable, high-quality systems designed for maximum efficiency.
            </p>
            <Button asChild className="bg-brand-orange hover:bg-brand-orange/90 text-white font-medium py-2 md:py-3 px-6 md:px-8 rounded-md text-sm md:text-base">
              <Link to="/get-started">
                Book a Free Consultative Call
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
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

export default Industries;
