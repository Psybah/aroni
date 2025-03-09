
import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building, Award, Users, Clock } from 'lucide-react';

interface StatProps {
  icon: React.ElementType;
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

const Stat = ({ icon: Icon, value, label, suffix = '+', delay = 0 }: StatProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const increment = value / (duration / 16); // 60fps -> ~16ms per frame
      
      setTimeout(() => {
        let start = 0;
        const timer = setInterval(() => {
          start += increment;
          if (start >= value) {
            setCount(value);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
        
        return () => clearInterval(timer);
      }, delay);
    }
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay / 1000 }}
    >
      <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-brand-blue" />
      </div>
      <div className="text-4xl font-bold text-brand-blue mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-600 text-center">{label}</div>
    </motion.div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Stat 
              icon={Building} 
              value={150} 
              label="Projects Completed" 
              delay={0} 
            />
            <Stat 
              icon={Award} 
              value={25} 
              label="Years Experience" 
              delay={200} 
            />
            <Stat 
              icon={Users} 
              value={200} 
              label="Happy Clients" 
              delay={400} 
            />
            <Stat 
              icon={Clock} 
              value={98} 
              label="On-time Delivery" 
              suffix="%" 
              delay={600} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
