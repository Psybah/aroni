
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Oluwaseun Adebayo",
    position: "Operations Manager, Lagos Manufacturing Co.",
    content: "Aroni Engineering transformed our production line with their hydraulic solutions. The efficiency improvements exceeded our expectations, and their team's expertise was evident throughout the project.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=oluwaseun",
    rating: 5,
  },
  {
    id: 2,
    name: "Amina Ibrahim",
    position: "Farm Owner, Green Acres",
    content: "The agricultural equipment provided by Aroni Engineering has significantly improved our farming operations. Their understanding of local agricultural needs sets them apart from other providers.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=amina",
    rating: 5,
  },
  {
    id: 3,
    name: "Emmanuel Okafor",
    position: "Technical Director, Abuja Constructions",
    content: "We've been working with Aroni Engineering for over 5 years, and their pneumatic systems have been reliable and efficient. Their maintenance service is prompt and professional.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=emmanuel",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  return (
    <section className="py-12 md:py-20 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-brand-blue">
            What Our <span className="text-brand-orange">Clients Say</span>
          </h2>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-600">
            Don't just take our word for it — hear from some of our satisfied clients about their experience working with Aroni Engineering.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative overflow-hidden h-full">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div 
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="bg-white rounded-lg shadow-lg p-4 md:p-8 lg:p-10"
              >
                <div className="flex flex-col md:flex-row md:items-center mb-4 md:mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-3 md:mb-0 md:mr-4 mx-auto md:mx-0">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h4 className="text-lg font-bold text-brand-blue">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-600 text-sm md:text-base">{testimonials[currentIndex].position}</p>
                    <div className="flex mt-1 justify-center md:justify-start">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < testimonials[currentIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="text-gray-700 text-base md:text-lg italic text-center md:text-left">"{testimonials[currentIndex].content}"</blockquote>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-6 md:mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-brand-orange w-4 md:w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 md:-ml-4 lg:-ml-6 w-8 h-8 md:w-10 md:h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-brand-blue hover:text-brand-orange transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
          </button>

          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 md:-mr-4 lg:-mr-6 w-8 h-8 md:w-10 md:h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-brand-blue hover:text-brand-orange transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
