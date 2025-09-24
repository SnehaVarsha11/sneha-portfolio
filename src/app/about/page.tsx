'use client';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import InteractiveResume from '@/components/InteractiveResume';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';
import Image from 'next/image';
import profileImage from '@/assets/images/nikhil.png';

export default function About() {
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
            About Me
          </motion.h1>
          
          <div className="flex flex-col lg:flex-row items-center gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1"
            >
              <h2 className="text-2xl font-display text-jarvis-blue-400 mb-4">Software Engineer</h2>
              <p className="text-base sm:text-lg text-gray-300 mb-4">
                Hi, I'm Sneha — a backend-focused Software Engineer experienced in building robust REST APIs and scalable services with Java and Spring Boot. I care about clean, reliable systems and clear, simple experiences.
              </p>
              <p className="text-base sm:text-lg text-gray-300 mb-6">
                I've worked on microservices, SQL performance tuning, and automated testing pipelines using JUnit and Postman. Currently pursuing my Master's in Computer Science at the University of Central Missouri.
              </p>
              
              <div className="mb-6">
                <h3 className="text-lg font-display text-jarvis-blue-400 mb-3">Experience & Education</h3>
                <div className="flex flex-wrap gap-4 items-center">
                  <div className="flex items-center gap-2 bg-jarvis-dark-600 px-3 py-2 rounded-lg">
                    <img src="https://logo.clearbit.com/wipro.com" alt="Wipro" className="w-6 h-6" />
                    <span className="text-sm text-gray-300">Wipro</span>
                  </div>
                  <div className="flex items-center gap-2 bg-jarvis-dark-600 px-3 py-2 rounded-lg">
                    <img src="https://logo.clearbit.com/ucmo.edu" alt="UCM" className="w-6 h-6" />
                    <span className="text-sm text-gray-300">UCM</span>
                  </div>
                  <div className="flex items-center gap-2 bg-jarvis-dark-600 px-3 py-2 rounded-lg">
                    <img src="https://logo.clearbit.com/vignan.ac.in" alt="Vignan's" className="w-6 h-6" />
                    <span className="text-sm text-gray-300">Vignan's</span>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Link href="mailto:nuthalapatisnehavarsha11@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="flex items-center">
                    Email
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/sneha-varsha-nuthalapati-b59aaa210" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="flex items-center">
                    <FaLinkedin className="mr-2" /> LinkedIn
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-display text-jarvis-blue-500 text-center mb-8">My Professional Journey</h2>
            <InteractiveResume />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-display text-jarvis-blue-500 text-center mb-8">Technical Philosophy</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-jarvis-dark-600 p-6 rounded-lg shadow-jarvis-glow border border-jarvis-blue-500/30">
                <h3 className="text-xl font-display text-jarvis-blue-400 mb-3">Clean Code Advocate</h3>
                <p className="text-sm text-gray-300">
                  I believe in writing maintainable, well-tested code that clearly communicates intent. 
                  My approach focuses on readability, simplicity, and robust architecture to build systems 
                  that can evolve with changing requirements.
                </p>
              </div>
              
              <div className="bg-jarvis-dark-600 p-6 rounded-lg shadow-jarvis-glow border border-jarvis-blue-500/30">
                <h3 className="text-xl font-display text-jarvis-blue-400 mb-3">User-Centered Design</h3>
                <p className="text-sm text-gray-300">
                  Technology should serve people, not the other way around. I prioritize intuitive interfaces,
                  accessibility, and performance to create applications that feel natural and responsive to users' needs.
                </p>
              </div>
              
              <div className="bg-jarvis-dark-600 p-6 rounded-lg shadow-jarvis-glow border border-jarvis-blue-500/30">
                <h3 className="text-xl font-display text-jarvis-blue-400 mb-3">AI Augmentation</h3>
                <p className="text-sm text-gray-300">
                  I see AI not as a replacement for human intelligence, but as a powerful tool to augment our capabilities.
                  My work focuses on creating AI-powered systems that enhance human productivity, creativity, and decision-making.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}