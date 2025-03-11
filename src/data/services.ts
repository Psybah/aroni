import { Droplet, Wind, Tractor, Settings, Wrench, Users } from 'lucide-react';

export const services = [
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
    icon: Wrench,
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
