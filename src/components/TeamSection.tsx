import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, ExternalLink } from 'lucide-react';

const SimpleTeamSection: React.FC = () => {
  const founders = [
    {
      name: "Dev",
      title: "Co-Founder",
      image: "/Images/Dev.jpg",
      bio: "Performance marketing veteran with deep expertise in eliminating advertising waste. Focused on building AI-powered solutions that turn inefficiencies into measurable ROI for brands and agencies worldwide.",
      linkedinUrl: "https://www.linkedin.com/in/deevay-rattan-puri-b12a10366/"
    },
    {
      name: "Aninda", 
      title: "Co-Founder",
      image: "/Images/aninda.jpg",
      bio: "AI and machine learning specialist dedicated to transforming digital advertising through intelligent automation. Passionate about creating systems that make every advertising dollar accountable and transparent.",
      linkedinUrl: "https://www.linkedin.com/in/aninda-sankar-sukla-67914271/"
    }
  ];

  const floatingElements = [
    { x: "8%", y: "20%", size: "w-1 h-1", delay: 0 },
    { x: "88%", y: "15%", size: "w-2 h-2", delay: 1 },
    { x: "12%", y: "85%", size: "w-1 h-1", delay: 2 }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size} bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full opacity-20`}
          style={{ left: element.x, top: element.y }}
          animate={{ 
            y: [0, -8, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 5,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Meet the
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Co-Founders
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Built by performance marketing and AI veterans dedicated to eliminating waste in the trillion-dollar advertising industry.
          </p>
        </motion.div>

        {/* Founders Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center">
                <div className="mb-6">
                  <img
                    src={founder.image}
                    alt={`${founder.name}, ${founder.title}`}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-indigo-100 shadow-lg"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {founder.name}
                </h3>
                
                <p className="text-indigo-600 font-semibold mb-4">
                  {founder.title}
                </p>
                
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                  {founder.bio}
                </p>

                <div className="flex justify-center">
                  <a
                    href={founder.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm"
                  >
                    <Linkedin size={16} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full Team Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a 
            href="https://www.campaxe.com/teams"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-slate-700 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-slate-200 hover:border-indigo-300 hover:text-indigo-600 transition-all duration-300 shadow-sm hover:shadow-lg"
          >
            <span>Meet the Full Team</span>
            <ExternalLink size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SimpleTeamSection;