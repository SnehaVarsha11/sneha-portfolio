'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { 
  Briefcase, GraduationCap, Award, Filter, 
  Download, ExternalLink, Calendar, MapPin
} from 'lucide-react';
import Link from 'next/link';

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  skills: string[];
  category: string;
}

interface Education {
  id: string;
  degree: string;
  field: string;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
}

interface FilterOption {
  id: string;
  label: string;
}

export default function InteractiveResume() {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const filterOptions: FilterOption[] = [
    { id: 'all', label: 'All Experience' },
    { id: 'backend', label: 'Backend' }
  ];
  
  const experiences: Experience[] = [
    {
      id: 'wipro-se',
      title: 'Software Engineer',
      company: 'Wipro',
      location: 'Hyderabad, India',
      startDate: 'May 2022',
      endDate: 'Sep 2024',
      description: [
        'Engineered backend services using Java and Spring Boot, improving system scalability and reducing downtime across distributed microservices.',
        'Developed and optimized complex SQL queries and relational data models, enhancing data retrieval performance by 40%.',
        'Automated testing pipelines and integrated API validation workflows using JUnit, Postman, and Octane Pro Tool, reducing regression issues by 30%.',
        'Collaborated across agile teams to plan sprints and release production-ready software under tight deadlines.',
        'Improved system observability and debugging processes, reducing critical issue resolution time by 25%.'
      ],
      skills: ['Java', 'Spring Boot', 'REST APIs', 'SQL', 'JUnit', 'Postman', 'Agile'],
      category: 'backend'
    },
    {
      id: 'wipro-intern',
      title: 'Software Intern',
      company: 'Wipro',
      location: 'Hyderabad, India',
      startDate: 'Mar 2022',
      endDate: 'May 2022',
      description: [
        'Built and tested Spring Boot-based microservices for banking applications with a focus on REST API development and data integrity.',
        'Managed and queried relational databases with MySQL, improving backend data flows and responsiveness.',
        'Participated in integration testing for distributed systems, increasing reliability by 20%.',
        'Contributed to code reviews, documentation, and agile ceremonies to support rapid iteration.'
      ],
      skills: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'Integration Testing'],
      category: 'backend'
    }
  ];
  
  const education: Education[] = [
    {
      id: 'ucm',
      degree: 'Master of Science',
      field: 'Computer Science',
      school: 'University of Central Missouri',
      location: 'Warrensburg, MO',
      startDate: 'Aug 2024',
      endDate: 'May 2026',
      description: 'Graduate studies with focus on systems, algorithms, and software engineering.'
    },
    {
      id: 'vignan-nirula',
      degree: "Bachelor's of Technology",
      field: 'Computer Science & Engineering',
      school: 'Vignan’s Nirula Institute Of Technology & Science',
      location: 'Guntur, India',
      startDate: 'Aug 2018',
      endDate: 'Jul 2022',
      description: 'Undergraduate program emphasizing data structures, algorithms, and distributed systems.'
    }
  ];
    
    const filteredExperiences = activeFilter === 'all'
      ? experiences
      : experiences.filter(exp => exp.category === activeFilter);
  
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-2">
            <Button
              variant={activeTab === 'experience' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setActiveTab('experience')}
              className="flex items-center"
            >
              <Briefcase className="w-4 h-4 mr-2" />
              Experience
            </Button>
            <Button
              variant={activeTab === 'education' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setActiveTab('education')}
              className="flex items-center"
            >
              <GraduationCap className="w-4 h-4 mr-2" />
              Education
            </Button>
          </div>
          
          <Link href="/resume/SnehaVarsha_Nuthalapati_Software Engineering.pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="flex items-center">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </Link>
        </div>
        
        {activeTab === 'experience' && (
          <>
            <div className="mb-6 flex flex-wrap gap-2">
              <span className="text-sm text-gray-400 flex items-center mr-2">
                <Filter className="w-4 h-4 mr-1" /> Filter:
              </span>
              
              {filterOptions.map(option => (
                <Button
                  key={option.id}
                  variant={activeFilter === option.id ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setActiveFilter(option.id)}
                >
                  {option.label}
                </Button>
              ))}
            </div>
            
            <div className="relative border-l-2 border-jarvis-blue-500 ml-4 sm:ml-6 space-y-12">
              {filteredExperiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8"
                >
                  <span className="absolute -left-3 w-6 h-6 bg-jarvis-blue-500 rounded-full animate-pulse-glow" />
                  
                  <div className="bg-jarvis-dark-600 p-6 rounded-lg shadow-jarvis-glow border border-jarvis-blue-500/30">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                      <div className="flex items-center gap-3">
                        <img 
                          src={exp.company === 'Wipro' ? 'https://logo.clearbit.com/wipro.com' : ''} 
                          alt={exp.company} 
                          className="w-8 h-8 rounded"
                        />
                        <div>
                          <h3 className="text-xl font-display text-jarvis-blue-500">{exp.title}</h3>
                          <p className="text-gray-300 font-display text-lg">{exp.company}</p>
                        </div>
                      </div>
                      <div className="mt-2 sm:mt-0 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.startDate} - {exp.endDate}
                        </div>
                        <div className="flex items-center mt-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm">{item}</li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs font-display text-gray-200 bg-jarvis-dark-700 px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
        
        {activeTab === 'education' && (
          <div className="relative border-l-2 border-jarvis-blue-500 ml-4 sm:ml-6 space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8"
              >
                <span className="absolute -left-3 w-6 h-6 bg-jarvis-blue-500 rounded-full animate-pulse-glow" />
                
                <div className="bg-jarvis-dark-600 p-6 rounded-lg shadow-jarvis-glow border border-jarvis-blue-500/30">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src={edu.school === 'University of Central Missouri' ? 'https://logo.clearbit.com/ucmo.edu' : 
                             edu.school === 'Vignan\'s Nirula Institute Of Technology & Science' ? 'https://logo.clearbit.com/vignan.ac.in' : ''} 
                        alt={edu.school} 
                        className="w-8 h-8 rounded"
                      />
                      <div>
                        <h3 className="text-xl font-display text-jarvis-blue-500">{edu.degree} in {edu.field}</h3>
                        <p className="text-gray-300 font-display text-lg">{edu.school}</p>
                      </div>
                    </div>
                    <div className="mt-2 sm:mt-0 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.startDate} - {edu.endDate}
                      </div>
                      <div className="flex items-center mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                  
                  {edu.description && (
                    <p className="text-sm text-gray-300">{edu.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex justify-center"
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
      </motion.div>
    );
  }