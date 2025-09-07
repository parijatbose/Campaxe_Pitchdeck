import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, Monitor, Zap, Eye, BarChart3, Shield } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Budget Waste",
      description: "Global ad spend is expected to cross $1.2T by 2026, and with larger budgets comes bigger leakage, as billions are misallocated each quarter due to poor pacing.",
      stat: "$1.2T",
      label: "Global Ad Spend by 2026"
    },
    {
      icon: Monitor,
      title: "Complex Dashboards", 
      description: "Over 200 fragmented advertising platforms with inconsistent metrics confuse marketers and slow decisions, producing inefficiencies that drain resources.",
      stat: "200+",
      label: "Fragmented Platforms"
    },
    {
      icon: AlertTriangle,
      title: "Creative Fatigue",
      description: "Ads typically lose effectiveness within two or three weeks, but campaigns continue running unchecked, resulting in wasted impressions and declining performance.",
      stat: "2-3 Weeks",
      label: "Creative Effectiveness Loss"
    }
  ];

  const solutions = [
    {
      icon: Eye,
      title: "24×7 Monitoring",
      description: "Campaxe provides continuous always-on monitoring of campaigns, ensuring pacing is on track and budgets are reallocated dynamically to the highest-return areas.",
      stat: "24/7",
      label: "Continuous Monitoring"
    },
    {
      icon: BarChart3,
      title: "Unified Intelligence Layer",
      description: "Campaxe integrates data from over 200 platforms into one unified dashboard, simplifying complexity and surfacing insights that accelerate decisions.",
      stat: "1 Dashboard",
      label: "Unified View"
    },
    {
      icon: Zap,
      title: "Creative Performance Tracking",
      description: "Campaxe monitors creative health continuously in real time, detecting fatigue within weeks, sending refresh alerts promptly to avoid wasted impressions.",
      stat: "Real-time",
      label: "Fatigue Detection"
    }
  ];

  const floatingElements = [
    { x: "10%", y: "25%", size: "w-2 h-2", delay: 0 },
    { x: "85%", y: "20%", size: "w-1 h-1", delay: 1 },
    { x: "15%", y: "70%", size: "w-2 h-2", delay: 2 },
    { x: "80%", y: "75%", size: "w-1 h-1", delay: 0.5 }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-indigo-50 overflow-hidden">
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-indigo-50 border border-indigo-200 text-indigo-700 rounded-full text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4 mr-2" />
            The Challenge & Solution
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            From Problems to
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Intelligent Solutions
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Transforming advertising challenges into automated intelligence
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Problems Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center mr-4">
                  <AlertTriangle className="w-6 h-6 text-slate-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">The Challenges</h3>
              </div>
            </motion.div>
            
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center flex-shrink-0">
                      <problem.icon className="w-6 h-6 text-slate-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-slate-900 mb-3">
                        {problem.title}
                      </h4>
                      <p className="text-slate-600 leading-relaxed mb-4 text-sm">
                        {problem.description}
                      </p>
                      <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                        <div className="text-xl font-bold text-slate-700 mb-1">
                          {problem.stat}
                        </div>
                        <div className="text-xs text-slate-600">
                          {problem.label}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Solutions Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Campaxe Solutions</h3>
              </div>
            </motion.div>
            
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-200 hover:border-indigo-300 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-slate-900 mb-3">
                        {solution.title}
                      </h4>
                      <p className="text-slate-700 leading-relaxed mb-4 text-sm">
                        {solution.description.split('Campaxe').map((part, i) => 
                          i === 0 ? part : (
                            <React.Fragment key={i}>
                              <span className="font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                Campaxe
                              </span>
                              {part}
                            </React.Fragment>
                          )
                        )}
                      </p>
                      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-3 border border-indigo-200">
                        <div className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-1">
                          {solution.stat}
                        </div>
                        <div className="text-xs text-slate-600">
                          {solution.label}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Insight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm text-center mt-16 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            The Power of Intelligent Automation
          </h3>
          
          <p className="text-slate-600 leading-relaxed mb-6">
            While campaigns run at machine speed, traditional oversight happens at human speed. 
            Campaxe bridges this gap with AI that never sleeps.
          </p>
          
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-full">
            <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-slate-700 font-medium">
              This is where <strong className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Campaxe</strong> changes everything
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;