
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Droplet, Wind, Tractor, Settings, Wrench, Users } from 'lucide-react';

const services = [
  {
    id: 'hydraulic',
    title: 'Hydraulic Solutions',
    description: 'Advanced hydraulic systems for industrial machinery with precision control and high-performance output.',
    icon: Droplet,
    color: 'text-blue-500',
    bgColor: 'bg-blue-100',
  },
  {
    id: 'pneumatic',
    title: 'Pneumatic Systems',
    description: 'Efficient pneumatic technology for automation and power transmission with clean and reliable operation.',
    icon: Wind,
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-100',
  },
  {
    id: 'agricultural',
    title: 'Agricultural Equipment',
    description: 'Specialized agricultural machinery and implements designed for Nigerian farming conditions.',
    icon: Tractor,
    color: 'text-green-500',
    bgColor: 'bg-green-100',
  },
  {
    id: 'maintenance',
    title: 'Maintenance Services',
    description: 'Preventive and corrective maintenance programs to maximize equipment uptime and lifespan.',
    icon: Settings,
    color: 'text-purple-500',
    bgColor: 'bg-purple-100',
  },
  {
    id: 'repairs',
    title: 'Repair & Rebuilding',
    description: 'Expert repair services for hydraulic cylinders, pumps, motors, and pneumatic components.',
    icon: Wrench, // Changed from Tool to Wrench
    color: 'text-red-500',
    bgColor: 'bg-red-100',
  },
  {
    id: 'consulting',
    title: 'Engineering Consulting',
    description: 'Technical consulting services for system design, troubleshooting, and efficiency optimization.',
    icon: Users,
    color: 'text-amber-500',
    bgColor: 'bg-amber-100',
  },
];

const ServicesSection = () => {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-brand-blue">
            Our Specialized <span className="text-brand-orange">Services</span>
          </h2>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-600">
            We provide comprehensive engineering solutions tailored to meet the specific needs of various industries throughout Nigeria.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              className="service-card bg-white rounded-lg shadow-md overflow-hidden"
              variants={itemVariants}
            >
              <div className="p-4 md:p-6">
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full ${service.bgColor} flex items-center justify-center mb-4 md:mb-6`}>
                  <service.icon className={`w-6 h-6 md:w-8 md:h-8 ${service.color}`} />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-brand-blue">{service.title}</h3>
                <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">{service.description}</p>
                <Link 
                  to={`/services/${service.id}`} 
                  className="inline-flex items-center text-brand-orange font-medium text-sm md:text-base hover:underline"
                >
                  Learn More <ArrowRight className="ml-1 md:ml-2 w-3 h-3 md:w-4 md:h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-8 md:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/services" className="inline-flex items-center bg-brand-blue hover:bg-brand-blue/90 text-white font-medium py-2 px-6 md:py-3 md:px-8 rounded-md text-sm md:text-base">
            View All Services <ArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
