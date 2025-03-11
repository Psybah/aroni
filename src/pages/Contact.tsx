import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Scene3D from '@/components/Scene3D';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'Hydraulic Systems',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
        variant: "default",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: 'Hydraulic Systems',
      });
    }, 1500);
  };

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
                  Let's <span className="text-brand-orange">Connect</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-gray-100 text-base md:text-lg max-w-xl"
                >
                  Ready to transform your operations with our engineering expertise? 
                  Get in touch with our team to discuss your needs and discover tailored solutions.
                </motion.p>
              </div>
              <div className="w-full lg:w-1/2 h-[300px] flex justify-center">
                <Scene3D variant="page" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info & Form Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Contact Information */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/3"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-brand-blue mb-6">
                  Contact <span className="text-brand-orange">Information</span>
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-brand-blue/10 p-3 rounded-full mr-4">
                      <MapPin className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-brand-blue mb-1">Our Headquarters</h3>
                      <p className="text-gray-600">
                        15 Engineering Avenue<br />
                        Victoria Island, Lagos<br />
                        Nigeria
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-blue/10 p-3 rounded-full mr-4">
                      <Phone className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-brand-blue mb-1">Phone</h3>
                      <p className="text-gray-600">
                        Main: +234 123 4567<br />
                        Support: +234 765 4321
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-blue/10 p-3 rounded-full mr-4">
                      <Mail className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-brand-blue mb-1">Email</h3>
                      <p className="text-gray-600">
                        Info: info@aroniengineering.com<br />
                        Support: support@aroniengineering.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-blue/10 p-3 rounded-full mr-4">
                      <Clock className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-brand-blue mb-1">Working Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 1:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="font-semibold text-lg text-brand-blue mb-4">Regional Offices</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h4 className="font-medium text-brand-blue">Abuja Office</h4>
                      <p className="text-sm text-gray-600">7 Capital Way, Central District</p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h4 className="font-medium text-brand-blue">Port Harcourt Office</h4>
                      <p className="text-sm text-gray-600">23 Industrial Avenue, GRA</p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h4 className="font-medium text-brand-blue">Kano Office</h4>
                      <p className="text-sm text-gray-600">14 Commerce Road, Sabon Gari</p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h4 className="font-medium text-brand-blue">Accra Office</h4>
                      <p className="text-sm text-gray-600">5 Tech Boulevard, Airport City</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Contact Form */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-2/3"
              >
                <div className="bg-gray-50 rounded-xl p-6 md:p-10 shadow-md">
                  <h2 className="text-2xl md:text-3xl font-bold text-brand-blue mb-6">
                    Send Us a <span className="text-brand-orange">Message</span>
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                          placeholder="john@example.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                          placeholder="+234 123 4567890"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                          placeholder="Your Company Ltd."
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service of Interest *</label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        >
                          <option value="Hydraulic Systems">Hydraulic Systems</option>
                          <option value="Pneumatic Solutions">Pneumatic Solutions</option>
                          <option value="Agricultural Engineering">Agricultural Engineering</option>
                          <option value="Maintenance Services">Maintenance Services</option>
                          <option value="Custom Engineering">Custom Engineering</option>
                          <option value="Consulting">Consulting</option>
                        </select>
                      </div>
                      
                      <div className="md:col-span-2">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message *</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                          placeholder="Tell us about your project or inquiry..."
                        ></textarea>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button
                        type="submit"
                        className="bg-brand-orange hover:bg-brand-orange/90 text-white font-medium py-2 px-6 rounded-md flex items-center"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                            Processing...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-brand-blue mb-4">
                Visit Our <span className="text-brand-orange">Locations</span>
              </h2>
            </motion.div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-[400px] md:h-[500px] relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7512799574405!2d3.4245675!3d6.4280555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53269639cd7%3A0x5f6bf827cc787251!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1651391503277!5m2!1sen!2sng" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Aroni Engineering Headquarters Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="+234 000 0000" accountName="Aroni Engineering" />
    </div>
  );
};

export default Contact;
