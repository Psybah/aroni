import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { motion } from 'framer-motion';
import Scene3D from '@/components/Scene3D';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useEffect } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Custom CSS for swiper styling
const swiperStyles = `
  .products-swiper .swiper-button-next,
  .products-swiper .swiper-button-prev {
    color: #db5e00 !important;
    font-weight: bold;
    width: 44px;
    height: 44px;
    margin-top: -22px;
  }

  .products-swiper .swiper-button-next:after,
  .products-swiper .swiper-button-prev:after {
    font-size: 20px;
  }

  .products-swiper .swiper-pagination-bullet {
    background: #cbd5e1 !important;
    opacity: 1;
    width: 12px;
    height: 12px;
  }

  .products-swiper .swiper-pagination-bullet-active {
    background: #db5e00 !important;
  }

  .products-swiper .swiper-pagination {
    bottom: 0 !important;
  }

  @media (max-width: 768px) {
    .products-swiper .swiper-button-next,
    .products-swiper .swiper-button-prev {
      display: none;
    }
  }
`;

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
      { 
        name: 'Cultivator', 
        description: 'Advanced soil cultivation equipment for optimal crop bed preparation',
        image: '/products/cultivator.png'
      },
      { 
        name: 'Tine Weeder', 
        description: 'Precision tine weeding system for effective weed control',
        image: '/products/tine.png'
      },
      { 
        name: 'Watch Tower', 
        description: 'Agricultural surveillance and monitoring tower structure',
        image: '/products/tower.jpeg'
      },
      { 
        name: 'Grain Distribution Bin', 
        description: 'Efficient grain storage and distribution system for agricultural operations',
        image: '/products/image.png'
      }
    ]
  }
};

const Products = () => {
  useEffect(() => {
    // Inject custom styles
    const styleElement = document.createElement('style');
    styleElement.textContent = swiperStyles;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

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
                className="relative"
              >
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={24}
                  slidesPerView={1}
                  navigation={true}
                  pagination={{ 
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet !bg-brand-orange',
                    bulletActiveClass: 'swiper-pagination-bullet-active !bg-brand-orange'
                  }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 3,
                    },
                  }}
                  className="products-swiper !pb-12"
                >
                  {category.items.map((item, i) => (
                    <SwiperSlide key={i}>
                      <motion.div 
                        variants={itemVariants}
                        className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:border-brand-orange transition-colors group hover:shadow-lg h-full"
                      >
                        {/* Display image if available (for agricultural products) */}
                        {item.image && (
                          <div className="h-48 bg-gray-100 overflow-hidden">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        
                        <div className="p-6">
                          <div className="flex items-start mb-2">
                            <Check className="text-brand-orange w-5 h-5 mt-1 mr-2 flex-shrink-0" />
                            <h3 className="text-xl font-semibold text-brand-blue">{item.name}</h3>
                          </div>
                          <p className="text-gray-600 ml-7">{item.description}</p>
                        </div>
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>
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
