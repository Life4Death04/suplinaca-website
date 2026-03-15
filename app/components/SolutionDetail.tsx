"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import ContactFormSection from './ContactFormSection';

interface SolutionItem {
  name: string;
  items?: string[];
  description?: string;
  image?: string;
}

interface SolutionDetailProps {
  title: string;
  solutions: SolutionItem[];
}

export default function SolutionDetail({ title, solutions }: SolutionDetailProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return (
    <section className="py-16 px-4 bg-white">
      {/* Hidden image preloader */}
      <div className="hidden">
        {solutions.map((solution, index) => 
          solution.image ? (
            <Image
              key={`preload-${index}`}
              src={solution.image}
              alt=""
              width={400}
              height={300}
              priority
            />
          ) : null
        )}
      </div>
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-8 text-gray-900"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>
        
        {/* Two Column Grid: Left = solution content, Right = contact form */}
        <div className="flex flex-wrap lg:flex-nowrap">
          {/* Left Column - Solution List */}
          <div className="space-y-12 mr-8 flex-1">
            {/* Text List in Two Columns */}
            <motion.div 
              className="grid grid-cols-2 gap-x-6 gap-y-2 mb-12 border-t border-b py-4 border-gray-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {solutions.map((solution, index) => (
                <div key={index}>
                  <p className="text-gray-700 font-medium mb-1">{solution.name}</p>
                  {solution.items && solution.items.map((item, itemIndex) => (
                    <p key={itemIndex} className="text-gray-600 text-sm">{item}</p>
                  ))}
                </div>
              ))}
            </motion.div>

            {/* Orange Button Cards - Expandable */}
            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {solutions.map((solution, index) => (
                <div key={index}>
                  <button
                    onClick={() => toggleExpanded(index)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-md text-left transition-colors shadow-md hover:shadow-lg flex justify-between items-center"
                  >
                    {solution.name}
                    <motion.svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {expandedIndex === index && solution.description && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="bg-white border border-gray-200 rounded-md mt-2 p-6 flex flex-col md:flex-row gap-6">
                          {/* Image */}
                          {solution.image && (
                            <div className="md:w-1/3 flex-shrink-0">
                              <div className="relative h-48 md:h-full rounded-md overflow-hidden">
                                <Image
                                  src={solution.image}
                                  alt={solution.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            </div>
                          )}
                          
                          {/* Description */}
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                              {solution.name}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                              {solution.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.div 
            className="lg:sticky lg:top-24 self-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <ContactFormSection />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
