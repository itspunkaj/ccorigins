'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Megaphone, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AuroraBackground } from '@/components/ui/aurora-background';

const LandingPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      rotate: 6,
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };



  const arrowVariants = {
    hover: {
      x: 4,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AuroraBackground>
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background gradient animation */}
      <motion.div 
        className="absolute inset-0  t pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10"
      >
        {/* Company Logo/Header */}
        <motion.header 
          variants={itemVariants}
          className="mb-16 text-center"
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-extrabold text-yellow-400 mb-4"
            animate={{ 
              opacity: [1, 0.8, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            YourCompany
          </motion.h1>
          <motion.p 
            className="text-white/80 text-lg md:text-xl max-w-2xl"
            variants={itemVariants}
          >
            Where creativity meets excellence in advertising and interior design
          </motion.p>
        </motion.header>

        {/* Choice Cards Container */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full"
          variants={containerVariants}
        >
          
          {/* Advertisement Services Card */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="group"
          >
            <Link href="/advertising">
              <motion.div 
                className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-100 
                           flex flex-col items-center text-center cursor-pointer h-full
                           hover:border-yellow-400 hover:shadow-yellow-400/25 hover:shadow-2xl"
                whileHover={{
                  boxShadow: "0 25px 50px -12px rgba(250, 204, 21, 0.25)"
                }}
              >
                
                {/* Icon */}
                <motion.div 
                  className="text-yellow-400 mb-6"
                  variants={iconVariants}
                >
                  <Megaphone size={64} className="mx-auto" />
                </motion.div>
                
                {/* Content */}
                <motion.h2 
                  className="text-3xl font-bold text-black mb-4 group-hover:text-yellow-600 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  Advertisement Services
                </motion.h2>
                <motion.p 
                  className="text-gray-600 mb-8 text-lg leading-relaxed"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  Creative campaigns that drive results and amplify your brand's voice
                </motion.p>
                
                {/* Button */}
                <motion.div className="mt-auto">
                  <Button

                  >
                    Explore Our Campaigns
                    <motion.div variants={arrowVariants}>
                      <ArrowRight size={18} />
                    </motion.div>
                  </Button>
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>

          {/* Interior Design Services Card */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="group"
          >
            <Link href="/interior-design">
              <motion.div 
                className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-100 
                           flex flex-col items-center text-center cursor-pointer h-full
                           hover:border-yellow-400 hover:shadow-yellow-400/25 hover:shadow-2xl"
                whileHover={{
                  boxShadow: "0 25px 50px -12px rgba(250, 204, 21, 0.25)"
                }}
              >
                
                {/* Icon */}
                <motion.div 
                  className="text-yellow-400 mb-6"
                  variants={iconVariants}
                >
                  <Home size={64} className="mx-auto" />
                </motion.div>
                
                {/* Content */}
                <motion.h2 
                  className="text-3xl font-bold text-black mb-4 group-hover:text-yellow-600 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  Interior Design
                </motion.h2>
                <motion.p 
                  className="text-gray-600 mb-8 text-lg leading-relaxed"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  Beautiful spaces, perfectly designed to reflect your unique style
                </motion.p>
                
                {/* Button */}
                <motion.div className="mt-auto">
                  <Button
                  >
                    View Our Projects
                    <motion.div variants={arrowVariants}>
                      <ArrowRight size={18} />
                    </motion.div>
                  </Button>
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
    </AuroraBackground>
  );
};

export default LandingPage;
