import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Zap, MessageSquare, BarChart3, Activity } from 'lucide-react';

const CleanProductFeatures: React.FC = () => {
  const coreFeatures = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "AI Guardian",
      description: "Continuous monitoring spots fraud and anomalies before budget damage occurs",
      benefit: "Prevent losses"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Campaign Intelligence",
      description: "Smart alerts for pacing issues, creative fatigue, and performance drops",
      benefit: "Early warnings"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Unified Command",
      description: "Single dashboard governing 200+ platforms with complete transparency",
      benefit: "Total visibility"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Natural Insights",
      description: "Ask questions in plain English, get explainable AI recommendations",
      benefit: "Human-friendly"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Immutable Records",
      description: "Every decision and recommendation tracked in permanent audit trails",
      benefit: "Full accountability"
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Context Awareness",
      description: "External data correlation explains why performance shifts happen",
      benefit: "Smart analysis"
    }
  ];

  const floatingElements = [
    { x: "5%", y: "25%", size: "w-1 h-1", delay: 0 },
    { x: "90%", y: "20%", size: "w-2 h-2", delay: 1 },
    { x: "8%", y: "80%", size: "w-1 h-1", delay: 2 },
    { x: "85%", y: "75%", size: "w-2 h-2", delay: 0.5 }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size} bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full opacity-30`}
          style={{ left: element.x, top: element.y }}
          animate={{ 
            y: [0, -10, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 4,
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
            <Shield className="w-4 h-4 mr-2" />
            The Campaxe Advantage
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            AI That
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Watches & Learns
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Your campaigns get a 24/7 AI guardian that observes, alerts, and advises—but never acts without your approval.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {coreFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-xl p-6 h-full border border-slate-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600 group-hover:bg-indigo-100 transition-colors duration-300">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        {feature.title}
                      </h3>
                      <div className="inline-flex items-center px-2 py-1 bg-purple-50 text-purple-700 rounded-md text-xs font-medium mb-3">
                        {feature.benefit}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Philosophy Statement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border-2 border-indigo-200 shadow-sm"
          >
            <div className="text-center max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                "Show me why Campaign X is underperforming"
              </h3>
              
              <p className="text-slate-600 leading-relaxed mb-6">
                Ask Campaxe anything in natural language. Get clear, actionable insights backed by data 
                you can verify. Every recommendation comes with the reasoning behind it.
              </p>
              
              <div className="inline-flex items-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-lg">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <span className="text-sm font-medium text-slate-700">Always Explainable</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-lg">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm font-medium text-slate-700">Human in Control</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CleanProductFeatures;