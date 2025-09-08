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
          {/* <div className="inline-flex items-center px-4 py-2 bg-indigo-50 border border-indigo-200 text-indigo-700 rounded-full text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Industry Challenge
          </div> */}
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Industry Challenge</span>
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

        {/* Solution Gap */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Solution Gap</h3>
            <p className="text-slate-600 mb-6">
              There is a solution gap because existing ad tech stacks are <span className="font-semibold text-purple-600">fragmented, reactive, and human-reliant</span> while 
              the market's complexity, fraud surface area, and privacy shifts accelerate faster than current tools can handle.
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <span className="font-medium text-slate-900">• Fragmentation across 200+ platforms</span>
              <span className="text-slate-600"> with inconsistent metrics creates decision latency, misallocation, and blind spots that a unified intelligence layer is meant to close.</span>
            </div>
            
            <div>
              <span className="font-medium text-slate-900">• Manual and reactive workflows</span>
              <span className="text-slate-600"> miss sub-daily pacing errors, undetected creative fatigue, and drift in performance, allowing waste to compound before interventions happen.</span>
            </div>
            
            <div>
              <span className="font-medium text-slate-900">• Legacy fraud filters</span>
              <span className="text-slate-600"> struggle against fast-evolving MFA sites and invalid traffic; without proactive anomaly scanning, budgets are drained before detection triggers.</span>
            </div>
            
            <div>
              <span className="font-medium text-slate-900">• A large share of waste</span>
              <span className="text-slate-600"> stems from routine human errors (missed end dates, wrong targeting, unmonitored changes), yet most stacks lack enforceable guardrails and alerting.</span>
            </div>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
            <p className="text-slate-700">
              <span className="font-medium text-purple-600">Structural shifts</span>—cookie deprecation, retail/CTV growth, and multi-channel convergence—demand privacy-first, 
              cross-channel orchestration that legacy point tools were not designed to deliver.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;