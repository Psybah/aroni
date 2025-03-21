
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Scene3D from '@/components/Scene3D';
import { Button } from '@/components/ui/button';
import CTASection from '@/components/CTASection';

// This will be replaced with actual projects when available
const projectCategories = [
  { id: 'industrial', label: 'Industrial' },
  { id: 'agricultural', label: 'Agricultural' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'maintenance', label: 'Maintenance' },
];

// Placeholder projects - will be replaced with actual case studies
const projects = [
  {
    id: 1,
    title: 'Automated Hydraulic System for Manufacturing Plant',
    category: 'industrial',
    location: 'Lagos, Nigeria',
    year: '2023',
    description: 'Designed and implemented a fully automated hydraulic system that increased production efficiency by 40% while reducing energy consumption by 25%.',
    imageSrc: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGh5ZHJhdWxpYyUyMHN5c3RlbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    featured: true,
  },
  {
    id: 2,
    title: 'Irrigation System for Large-Scale Farm',
    category: 'agricultural',
    location: 'Oyo State, Nigeria',
    year: '2022',
    description: 'Developed a sustainable irrigation system utilizing advanced pneumatic controls to optimize water usage across 500 hectares of farmland.',
    imageSrc: 'https://images.unsplash.com/photo-1632923078172-6d34ed3946a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aXJyaWdhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    featured: true,
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-r from-brand-blue to-blue-900">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
                >
                  Our <span className="text-brand-orange">Engineering Projects</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-gray-100 text-base md:text-lg max-w-xl"
                >
                  Case studies showcasing our successful implementations across various industries.
                </motion.p>
              </div>
              <div className="w-full lg:w-1/2 h-[300px] flex justify-center">
                <Scene3D variant="page" />
              </div>
            </div>
          </div>
        </section>

        {/* Content Coming Soon Message */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
                Case Studies <span className="text-brand-orange">Coming Soon</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-10">
                We're currently compiling detailed case studies of our successful project implementations. 
                Check back soon to explore our portfolio of engineering solutions across various industries.
              </p>
              <Button asChild className="bg-brand-orange hover:bg-brand-orange/90 text-white">
                <Link to="/contact">
                  Discuss Your Project Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-brand-blue to-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Have a <span className="text-brand-orange">Project in Mind?</span>
            </h2>
            <p className="text-gray-200 max-w-2xl mx-auto mb-8">
              Contact our engineering team to discuss your project requirements. We'll work with you to develop tailored solutions that meet your specific needs.
            </p>
            <Button asChild className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-6 rounded-md text-lg">
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
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

export default Projects;
