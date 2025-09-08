import React from 'react';
import { motion } from 'framer-motion';
import { User, Building2, Users, Globe } from 'lucide-react';

const TargetAudience: React.FC = () => {
  const audiences = [
    {
      icon: <User className="w-6 h-6" />,
      title: "Individual Buyers",
      stat: "50M+",
      description: "Small advertisers seeking enterprise-grade AI capabilities for smarter budget management."
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Agencies",
      stat: "120K+",
      description: "Media agencies managing billions in ad spend, needing performance optimization at scale."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "In-House Teams",
      stat: "70%",
      description: "Fortune 500 companies with internal teams requiring unified intelligence layers."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Enterprises",
      stat: "1K+",
      description: "Top advertisers spending $300B+ annually, needing forensic-level auditing and automation."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-3 py-1 bg-indigo-50 border border-indigo-200 text-indigo-700 rounded-full text-sm font-medium mb-4">
            Our Market
          </div>
          
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            Who We 
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Serve</span>
          </h2>
          
          <p className="text-slate-600 max-w-2xl mx-auto">
            Empowering the entire media buying ecosystem with intelligent automation
          </p>
        </motion.div>

        {/* Audience Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 border border-slate-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center text-indigo-600 mr-3">
                  {audience.icon}
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {audience.stat}
                </div>
              </div>
              
              <h3 className="font-semibold text-slate-900 mb-2 text-sm">
                {audience.title}
              </h3>
              
              <p className="text-slate-600 text-xs leading-relaxed">
                {audience.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-6 border border-indigo-200 text-center"
        >
          <p className="text-slate-700 text-sm">
            <strong className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Campaxe</strong> empowers everyone in the media buying ecosystem—from 50M+ small advertisers to the top 1,000 global brands spending hundreds of billions each year.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TargetAudience;