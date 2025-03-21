import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { motion } from 'framer-motion';
import Scene3D from '@/components/Scene3D';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const productsData = {
  pneumatic: {
    title: 'Pneumatic Spares & Accessories',
    items: [
      { name: 'Pneumatic Actuators', description: 'High-quality actuators for precise movement control' },
      { name: 'Cylinders', description: 'Durable pneumatic cylinders for various industrial applications' },
      { name: 'Valves and Solenoids', description: 'Precise control valves for pneumatic systems' },
      { name: 'Air Preparation Units', description: 'Filters, regulators, and lubricators for air quality' },
      { name: 'Fittings, Connectors and Hoses', description: 'Complete range of pneumatic connection solutions' }
    ]
  },
  hydraulic: {
    title: 'Hydraulic Spares & Accessories',
    items: [
      { name: 'Hydraulic Cylinders', description: 'Single and double-action cylinders for heavy-duty applications' },
      { name: 'Hydraulic Pumps', description: 'Efficient and reliable hydraulic power generation' },
      { name: 'Connectors', description: 'Secure and leak-free hydraulic connections' },
      { name: 'Pressure Hoses', description: 'High-pressure rated hoses for hydraulic systems' },
      { name: 'Multi-directional Manifolds', description: 'Custom manifold blocks for complex hydraulic circuits' }
    ]
  },
  agricultural: {
    title: 'Agricultural Tools and Implements',
    items: [
      { name: 'Tine Weeders', description: 'Effective weed control implements for agricultural use' },
      { name: 'Cultivators', description: 'Soil preparation and weed control equipment' },
      { name: 'Flat Bed Dryers', description: 'Post-harvest grain and crop drying solutions' },
      { name: 'Ridgers', description: 'Precision ridge-forming implements for row crops' }
    ]
  }
};

const Products = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

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
                  Our <span className="text-brand-orange">Products</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-gray-100 text-base md:text-lg max-w-xl"
                >
                  High-quality pneumatic parts, hydraulic components, and agricultural implements for various industrial applications.
                </motion.p>
              </div>
              <div className="w-full lg:w-1/2 h-[350px] md:h-[400px] flex justify-center items-center">
                <Scene3D variant="page" />
              </div>
            </div>
          </div>
        </section>

        {/* Products Sections */}
        {Object.entries(productsData).map(([key, category], index) => (
          <section key={key} id={key} className={`py-16 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12 text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">{category.title}</h2>
                <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
              </motion.div>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {category.items.map((item, i) => (
                  <motion.div 
                    key={i} 
                    variants={itemVariants}
                    className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:border-brand-orange transition-colors"
                  >
                    <div className="flex items-start mb-2">
                      <Check className="text-brand-orange w-5 h-5 mt-1 mr-2 flex-shrink-0" />
                      <h3 className="text-xl font-semibold text-brand-blue">{item.name}</h3>
                    </div>
                    <p className="text-gray-600 ml-7">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="py-16 bg-brand-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Need Custom Products?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              We provide customized solutions tailored to your specific requirements. Contact our team to discuss your needs.
            </p>
            <Link 
              to="/contact" 
              className="bg-brand-orange hover:bg-brand-orange/90 text-white font-medium py-3 px-8 rounded-md inline-block"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="+234 000 0000" accountName="Aroni Engineering" />
    </div>
  );
};

export default Products;
