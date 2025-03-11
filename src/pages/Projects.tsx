import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Scene3D from '@/components/Scene3D';
import { Button } from '@/components/ui/button';

const projectCategories = [
  { id: 'industrial', label: 'Industrial' },
  { id: 'agricultural', label: 'Agricultural' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'maintenance', label: 'Maintenance' },
];

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
  {
    id: 3,
    title: 'Commercial Building Hydraulic Elevator System',
    category: 'commercial',
    location: 'Abuja, Nigeria',
    year: '2023',
    description: 'Engineered and installed high-efficiency hydraulic elevator systems for a 20-story commercial building, meeting international safety standards.',
    imageSrc: 'https://images.unsplash.com/photo-1567449303183-ae0d6ed1c13e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZWxldmF0b3J8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    featured: false,
  },
  {
    id: 4,
    title: 'Preventive Maintenance Program for Oil Refinery',
    category: 'maintenance',
    location: 'Port Harcourt, Nigeria',
    year: '2022',
    description: 'Implemented a comprehensive preventive maintenance program for hydraulic systems, reducing downtime by 60% and extending equipment lifespan.',
    imageSrc: 'https://images.unsplash.com/photo-1518709766631-a6a7f8c192cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b2lsJTIwcmVmaW5lcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    featured: false,
  },
  {
    id: 5,
    title: 'Custom Hydraulic Press for Auto Parts Manufacturer',
    category: 'industrial',
    location: 'Accra, Ghana',
    year: '2023',
    description: 'Designed and built a custom hydraulic press system with precision control systems, increasing production capacity by 35%.',
    imageSrc: 'https://images.unsplash.com/photo-1602922060416-0b8088170b7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHlkcmF1bGljJTIwcHJlc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    featured: false,
  },
  {
    id: 6,
    title: 'Agricultural Equipment Maintenance Training',
    category: 'agricultural',
    location: 'Kano, Nigeria',
    year: '2022',
    description: 'Developed and delivered a comprehensive training program for maintenance staff at a large agricultural cooperative, covering hydraulic and pneumatic systems.',
    imageSrc: 'https://images.unsplash.com/photo-1595872309519-8c921ed76a2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YWdyaWN1bHR1cmFsJTIwZXF1aXBtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    featured: false,
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
                  Explore our portfolio of successful engineering projects across various industries. 
                  From industrial automation to agricultural solutions, we deliver excellence in every project.
                </motion.p>
              </div>
              <div className="w-full lg:w-1/2 h-[300px] flex justify-center">
                <Scene3D variant="page" />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
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
                Featured <span className="text-brand-orange">Projects</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Highlighting our most innovative and impactful engineering solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {projects.filter(project => project.featured).map((project) => (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.imageSrc} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-brand-orange text-white text-sm font-medium py-1 px-3 rounded-full">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-brand-blue">{project.title}</h3>
                    </div>
                    <div className="flex gap-4 text-sm text-gray-500 mb-4">
                      <span>{project.location}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                    </div>
                    <p className="text-gray-600 mb-6">{project.description}</p>
                    <Button variant="outline" className="text-brand-blue border-brand-blue hover:bg-brand-blue hover:text-white">
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Projects */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-brand-blue mb-6">
                All <span className="text-brand-orange">Projects</span>
              </h2>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <Button variant="outline" className="bg-brand-blue text-white hover:bg-brand-blue/80 border-none">
                  All
                </Button>
                {projectCategories.map((category) => (
                  <Button key={category.id} variant="outline" className="text-brand-blue border-brand-blue hover:bg-brand-blue hover:text-white">
                    {category.label}
                  </Button>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.imageSrc} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-3 right-3 bg-brand-orange text-white text-xs font-medium py-1 px-2 rounded-full">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-5 flex-grow flex flex-col">
                    <div className="mb-2">
                      <h3 className="text-lg font-bold text-brand-blue line-clamp-2">{project.title}</h3>
                    </div>
                    <div className="flex gap-2 text-xs text-gray-500 mb-3">
                      <span>{project.location}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                    <Button variant="ghost" className="text-brand-blue hover:text-brand-orange mt-auto self-start">
                      View Project <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white">
                Load More Projects
              </Button>
            </div>
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
