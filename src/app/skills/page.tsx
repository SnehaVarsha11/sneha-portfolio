'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiPython, SiJavascript, 
  SiTypescript, SiAmazonwebservices, SiGooglecloud, 
  SiDocker, SiKubernetes, SiMongodb, SiPostgresql, SiTensorflow,
  SiFastapi, SiSpringboot, SiGraphql, SiGithub
} from 'react-icons/si';
import { RiJavaLine } from 'react-icons/ri';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { BsCodeSlash, BsDatabaseGear } from 'react-icons/bs';
import { HiOutlineCloud } from 'react-icons/hi';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  category: string;
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'ai', name: 'AI & ML' },
    { id: 'cloud', name: 'Cloud & DevOps' }
  ];
  
  const skills: Skill[] = [
    { name: 'Java', level: 90, icon: <RiJavaLine size={24} />, category: 'backend' },
    { name: 'Spring Boot', level: 85, icon: <SiSpringboot size={24} />, category: 'backend' },
    { name: 'REST APIs', level: 85, icon: <BsCodeSlash size={24} />, category: 'backend' },
    { name: 'SQL', level: 85, icon: <BsDatabaseGear size={24} />, category: 'backend' },
    { name: 'MySQL', level: 80, icon: <SiPostgresql size={24} />, category: 'backend' },
    { name: 'PostgreSQL', level: 75, icon: <SiPostgresql size={24} />, category: 'backend' },
    { name: 'MongoDB', level: 70, icon: <SiMongodb size={24} />, category: 'backend' },
    { name: 'JUnit', level: 75, icon: <BsCodeSlash size={24} />, category: 'backend' },
    { name: 'Postman', level: 80, icon: <BsCodeSlash size={24} />, category: 'backend' },
    { name: 'Docker', level: 70, icon: <SiDocker size={24} />, category: 'cloud' },
    { name: 'Git', level: 75, icon: <SiGithub size={24} />, category: 'cloud' },
    { name: 'Python', level: 60, icon: <SiPython size={24} />, category: 'backend' },
    { name: 'JavaScript', level: 60, icon: <SiJavascript size={24} />, category: 'backend' },
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'frontend': return <SiReact className="mr-2" />;
      case 'backend': return <BsCodeSlash className="mr-2" />;
      case 'ai': return <GiArtificialIntelligence className="mr-2" />;
      case 'cloud': return <HiOutlineCloud className="mr-2" />;
      default: return null;
    }
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-jarvis-dark-500 text-white relative font-display overflow-x-hidden z-10 pt-16"
    >
      <section className="py-20 sm:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-jarvis-blue-500 animate-pulse-glow leading-tight text-center"
          >
            Skills
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 flex justify-center flex-wrap gap-2"
          >
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "primary" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className="flex items-center"
              >
                {getCategoryIcon(category.id)}
                {category.name}
              </Button>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 15px rgba(25, 118, 255, 0.5)'
                }}
                className="bg-jarvis-dark-400 rounded-lg p-4 shadow-jarvis-glow border border-jarvis-blue-500/30"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-jarvis-blue-500">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-display text-jarvis-blue-300">
                    {skill.name}
                  </h3>
                </div>
                
                <div className="relative h-3 bg-jarvis-dark-600 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-jarvis-blue-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.05, ease: 'easeOut' }}
                  />
                </div>
                
                <div className="mt-2 flex justify-between text-xs text-gray-400">
                  <span>0%</span>
                  <span className="text-jarvis-blue-500 font-semibold">{skill.level}%</span>
                  <span>100%</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 flex justify-center"
          >
            <motion.div
              animate={{ boxShadow: '0 0 10px rgba(25, 118, 255, 0.3), 0 0 20px rgba(0, 212, 255, 0.3)' }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
            >
              <Button
                variant="secondary"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 12px rgba(25, 118, 255, 0.5), 0 0 24px rgba(0, 212, 255, 0.3)',
                  backgroundColor: '#00b7eb',
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/contact'}
              >
                Hire Me
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}