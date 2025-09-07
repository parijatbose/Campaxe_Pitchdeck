import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Users, ArrowRight, CheckCircle, Target } from 'lucide-react';

const PDFBasedAdvantage: React.FC = () => {
  const differentiators = [
    {
      step: "1",
      title: "Coach-Not-Autopilot",
      description: "Human-in-control approach with transparent AI insights",
      icon: <Shield className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      step: "2", 
      title: "Transparent AI",
      description: "Explainable insights with clear reasoning behind every recommendation",
      icon: <Eye className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-600"
    },
    {
      step: "3",
      title: "200+ Integrations", 
      description: "Multi-platform reach across all major advertising platforms",
      icon: <Users className="w-6 h-6" />,
      color: "from-indigo-600 to-purple-600"
    }
  ];

  const validationPoints = [
    { source: "ANA 2025", stat: "$26.8B", label: "Wasted per quarter" },
    { source: "IAB Research", stat: "80%", label: "Marketers using AI by 2025" },
    { source: "Campaxe Pilots", stat: "18%", label: "Less waste" },
    { source: "Campaxe Pilots", stat: "22%", label: "Higher ROAS" }
  ];

  const marketContext = [
    { label: "Industry Size", value: "$1T+", detail: "Digital advertising market" },
    { label: "Annual Waste", value: "40%", detail: "Of global ad spend lost" },
    { label: "AI Adoption", value: "80%", detail: "By 2030 (Gartner)" }
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
          className="text-center mb-20"
        >
          {/* <div className="inline-flex items-center px-4 py-2 bg-indigo-50 border border-indigo-200 text-indigo-700 rounded-full text-sm font-medium mb-6">
            <Target className="w-4 h-4 mr-2" />
            Competitive Advantage
          </div> */}
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Why Campaxe
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Wins
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Built for the global operating system of media buying, unifying platforms and setting new standards.
          </p>
        </motion.div>

        {/* Market Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {marketContext.map((context, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {context.value}
              </div>
              <div className="font-semibold text-slate-900 mb-1">{context.label}</div>
              <div className="text-sm text-slate-600">{context.detail}</div>
            </div>
          ))}
        </motion.div>

        {/* Differentiators Flow */}
        <div className="max-w-5xl mx-auto mb-16">
          {/* Desktop Flow */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between">
              {differentiators.map((diff, index) => (
                <div key={index} className="flex items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className={`w-20 h-20 bg-gradient-to-br ${diff.color} rounded-2xl flex items-center justify-center text-white mb-4 mx-auto shadow-lg`}>
                      {diff.icon}
                    </div>
                    <div className={`w-8 h-8 bg-gradient-to-br ${diff.color} rounded-full flex items-center justify-center text-white text-sm font-bold mb-3 mx-auto`}>
                      {diff.step}
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2 max-w-32">
                      {diff.title}
                    </h3>
                    <p className="text-sm text-slate-600 max-w-32">
                      {diff.description}
                    </p>
                  </motion.div>
                  
                  {index < differentiators.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: (index * 0.2) + 0.3 }}
                      viewport={{ once: true }}
                      className="flex-1 flex justify-center mx-8"
                    >
                      <ArrowRight className="w-8 h-8 text-indigo-400" />
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Flow */}
          <div className="lg:hidden space-y-6">
            {differentiators.map((diff, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${diff.color} rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
                    {diff.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 mb-2">{diff.title}</h3>
                    <p className="text-slate-600 text-sm">{diff.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Validation Results Flowchart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm mb-16"
        >
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Proven Results & Industry Validation
          </h3>
          
          {/* Results Diagram */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {validationPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border-2 border-indigo-200 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {point.stat}
                  </div>
                  <div className="font-semibold text-slate-900 mb-1">
                    {point.label}
                  </div>
                  <div className="text-xs text-slate-500 bg-white rounded-md px-2 py-1 inline-block">
                    {point.source}
                  </div>
                </div>
                
                {/* Connection Lines */}
                {index < validationPoints.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-indigo-300"></div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Summary Arrow */}
          {/* <div className="text-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent mb-4"></div>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-semibold">
              <span>2025 = Perfect Market Timing</span>
            </div>
          </div> */}
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-full">
            <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-slate-700 font-medium">
              <strong className="text-indigo-600">2025 inflection point:</strong> Perfect timing for AI-driven media buying transformation
            </span>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default PDFBasedAdvantage;