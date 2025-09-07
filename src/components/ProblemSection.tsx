import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Zap, Shield, TrendingDown } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Platform Fragmentation",
      description: "200+ fragmented platforms create operational blind spots",
      metric: "200+ Platforms"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Attribution Breakdown",
      description: "iOS 14.5+ and cookie deprecation disrupted tracking",
      metric: "40% Signal Loss"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Fraud & Invalid Traffic",
      description: "Sophisticated bots drain budgets faster than detection",
      metric: "$26.8B Quarterly"
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Systematic Waste",
      description: "Structural inefficiencies compound at scale",
      metric: "37.8% Waste Rate"
    }
  ];

  const floatingElements = [
    { x: "5%", y: "15%", size: "w-2 h-2", delay: 0, duration: 8 },
    { x: "85%", y: "10%", size: "w-3 h-3", delay: 1, duration: 6 },
    { x: "10%", y: "75%", size: "w-2 h-2", delay: 2, duration: 7 },
    { x: "80%", y: "80%", size: "w-2 h-2", delay: 0.5, duration: 9 },
    { x: "50%", y: "5%", size: "w-1 h-1", delay: 1.5, duration: 5 },
    { x: "75%", y: "45%", size: "w-2 h-2", delay: 2.5, duration: 8 }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50 overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size} bg-gradient-to-br from-purple-300 to-indigo-400 rounded-full opacity-20`}
          style={{ left: element.x, top: element.y }}
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.2, 0.35, 0.2],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: element.duration,
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
          <div className="inline-flex items-center px-4 py-2 bg-purple-50 border border-purple-200 text-purple-700 rounded-full text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Industry Challenge
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-slate-900">$1.2T Market,</span>
            <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">$400B+ Annual Waste</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Digital advertising suffers from structural inefficiencies that compound at enterprise scale.
          </p>
        </motion.div>

        {/* Problem Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-xl p-6 h-full border border-slate-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-50 rounded-lg text-purple-600 group-hover:bg-purple-100 group-hover:text-purple-700 transition-colors duration-300">
                    {problem.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {problem.title}
                  </h3>
                </div>
                
                <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                  {problem.description}
                </p>
                
                <div className="inline-flex items-center px-3 py-1 bg-purple-50 text-purple-700 rounded-md text-sm font-medium">
                  {problem.metric}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm"
        >
          <div className="text-center">
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">The Solution Gap</h3>
                <p className="text-slate-600 text-sm">Where Campaxe steps in</p>
              </div>
            </div>
            
            <p className="text-slate-600 max-w-xl mx-auto">
              Traditional media buying lacks the intelligence layer needed for real-time oversight, 
              creating the perfect opportunity for AI-powered intervention.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;