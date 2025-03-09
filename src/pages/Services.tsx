
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { motion } from 'framer-motion';
import { ArrowRight, Droplet, Wind, Tractor, Settings, Wrench, Users, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'hydraulic',
    title: 'Hydraulic Solutions',
    description: 'Advanced hydraulic systems for industrial machinery with precision control and high-performance output.',
    image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    icon: Droplet,
    features: [
      'Hydraulic Power Units (HPU)',
      'Hydraulic Cylinders & Actuators',
      'Hydraulic Valves & Controls',
      'Hydraulic Pumps & Motors',
      'Custom Hydraulic Systems',
      'Hydraulic System Integration'
    ]
  },
  {
    id: 'pneumatic',
    title: 'Pneumatic Systems',
    description: 'Efficient pneumatic technology for automation and power transmission with clean and reliable operation.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    icon: Wind,
    features: [
      'Pneumatic Cylinders & Actuators',
      'Air Compressors & Vacuum Pumps',
      'Pneumatic Valves & Controls',
      'Air Treatment Units',
      'Pneumatic Tools & Accessories',
      'Custom Pneumatic Systems'
    ]
  },
  {
    id: 'agricultural',
    title: 'Agricultural Equipment',
    description: 'Specialized agricultural machinery and implements designed for Nigerian farming conditions.',
    image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    icon: Tractor,
    features: [
      'Irrigation Systems',
      'Crop Processing Equipment',
      'Harvesting Machinery',
      'Planting & Seeding Equipment',
      'Tractors & Implements',
      'Livestock Management Systems'
    ]
  },
  {
    id: 'maintenance',
    title: 'Maintenance Services',
    description: 'Preventive and corrective maintenance programs to maximize equipment uptime and lifespan.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    icon: Settings,
    features: [
      'Preventive Maintenance Programs',
      'Equipment Inspection & Testing',
      'Fluid Analysis & Monitoring',
      'System Performance Optimization',
      'On-site Maintenance Services',
      'Maintenance Training Programs'
    ]
  },
  {
    id: 'repairs',
    title: 'Repair & Rebuilding',
    description: 'Expert repair services for hydraulic cylinders, pumps, motors, and pneumatic components.',
    image: 'https://images.unsplash.com/photo-1580901368919-7738efb0f87e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    icon: Wrench, // Changed from Tool to Wrench
    features: [
      'Hydraulic Cylinder Repair',
      'Pump & Motor Rebuilding',
      'Valve Reconditioning',
      'Component Testing & Certification',
      'Emergency Repair Services',
      'In-shop & On-site Repairs'
    ]
  },
  {
    id: 'consulting',
    title: 'Engineering Consulting',
    description: 'Technical consulting services for system design, troubleshooting, and efficiency optimization.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    icon: Users,
    features: [
      'System Design & Engineering',
      'Technical Problem Solving',
      'Energy Efficiency Consulting',
      'Process Optimization',
      'Equipment Selection Assistance',
      'Technical Training & Knowledge Transfer'
    ]
  }
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main>
        <section className="pt-32 pb-20 bg-brand-blue text-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-gray-200">
                Comprehensive engineering solutions tailored to meet the specific needs of various industries throughout Nigeria.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {services.map((service) => (
                <motion.div 
                  key={service.id} 
                  className="bg-white rounded-lg shadow-xl overflow-hidden service-card"
                  variants={itemVariants}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-blue/60 flex items-center justify-center">
                      <service.icon className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-brand-blue">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-brand-blue mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="w-5 h-5 text-brand-orange shrink-0 mr-2" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link 
                      to={`/services/${service.id}`} 
                      className="inline-flex items-center bg-brand-blue hover:bg-brand-blue/90 text-white font-medium py-2 px-5 rounded-md"
                    >
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton phoneNumber="+234 000 0000" accountName="Aroni Engineering" />
    </div>
  );
};

export default Services;
