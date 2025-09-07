import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Target, Shield } from 'lucide-react';

const SimpleWasteStory: React.FC = () => {
  const wasteStory = [
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Every Campaign Leaks",
      description: "Ad budgets drain through invisible cracks",
      stat: "37.8%",
      label: "Quarterly Waste Rate"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Detection Lags Behind",
      description: "Problems discovered weeks after damage is done",
      stat: "14 Days",
      label: "Average Detection Time"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Manual Oversight Fails",
      description: "Human monitoring can't match digital speed",
      stat: "200ms",
      label: "Ad Auction Speed"
    }
  ];

  const floatingElements = [
    { x: "8%", y: "20%", size: "w-2 h-2", delay: 0 },
    { x: "85%", y: "15%", size: "w-1 h-1", delay: 1 },
    { x: "12%", y: "75%", size: "w-2 h-2", delay: 2 },
    { x: "78%", y: "80%", size: "w-1 h-1", delay: 0.5 }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size} bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full opacity-20`}
          style={{ left: element.x, top: element.y }}
          animate={{ 
            y: [0, -12, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ 
            duration: 6,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="relative container mx-auto px-6">
        {/* Story Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-indigo-50 border border-indigo-200 text-indigo-700 rounded-full text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4 mr-2" />
            The Hidden Reality
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Where Ad Dollars
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Disappear
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            While campaigns run at machine speed, human oversight happens at human speed.
          </p>
        </motion.div>

        {/* Three-Step Story */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {wasteStory.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-indigo-300 transition-all duration-300 shadow-sm hover:shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6 text-indigo-600">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-4 border border-indigo-200">
                    <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-1">
                      {step.stat}
                    </div>
                    <div className="text-sm text-slate-600">
                      {step.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Simple Insight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm text-center"
          >
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                The Solution is Intelligence
              </h3>
              
              <p className="text-slate-600 leading-relaxed mb-6">
                What if campaigns could observe themselves? What if AI could spot waste 
                the moment it happens, not weeks later?
              </p>
              
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-full">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-slate-700 font-medium">
                  This is where <strong className="text-indigo-600">Campaxe</strong> changes everything
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SimpleWasteStory;