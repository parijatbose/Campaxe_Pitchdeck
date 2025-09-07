import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Brain, MessageCircle, ArrowRight, Shield, FileText } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Eye className="w-12 h-12" />,
      title: "Observe",
      subtitle: "Ingest Signals",
      description: "Connect to 200+ platforms and data sources. Our AI continuously monitors ad performance, spend patterns, fraud signals, and external factors like weather and events.",
      details: ["Platform APIs", "Bid stream data", "Creative performance", "External intelligence"]
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Analyze", 
      subtitle: "AI & Forensics",
      description: "Advanced ML models detect anomalies, predict outcomes, and identify optimization opportunities. Every decision is backed by explainable AI with full audit trails.",
      details: ["Pattern recognition", "Fraud detection", "Performance modeling", "Attribution analysis"]
    },
    {
      icon: <MessageCircle className="w-12 h-12" />,
      title: "Guide",
      subtitle: "Alerts & Actions",
      description: "Receive actionable insights through conversational AI. Get alerts, recommendations, and detailed explanations—all while maintaining human oversight and control.",
      details: ["Smart alerts", "Conversational queries", "Action recommendations", "Performance insights"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-slate-900">How </span>
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Campaxe Works</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Three simple steps to transform your media buying from reactive to predictive, 
            with complete transparency and human oversight.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Flowchart Steps */}
          <div className="relative mb-16">
            {/* Desktop Flowchart */}
            <div className="hidden lg:flex items-center justify-center">
              {steps.map((step, index) => (
                <React.Fragment key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex-1 max-w-sm"
                  >
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-purple-100">
                      {/* Step Number */}
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold mb-4">
                        {index + 1}
                      </div>
                      
                      <div className="text-purple-600 mb-4">
                        {step.icon}
                      </div>
                      
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-slate-900 mb-1">
                          {step.title}
                        </h3>
                        <p className="text-purple-600 font-semibold">
                          {step.subtitle}
                        </p>
                      </div>
                      
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center text-sm text-slate-500">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  {/* Arrow between steps */}
                  {index < steps.length - 1 && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-center mx-6"
                    >
                      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full p-3 shadow-lg">
                        <ArrowRight className="w-6 h-6 text-white" />
                      </div>
                    </motion.div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Mobile/Tablet Vertical Flow */}
            <div className="lg:hidden space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
                    {/* Step Number */}
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold mb-4">
                      {index + 1}
                    </div>
                    
                    <div className="text-purple-600 mb-4">
                      {step.icon}
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">
                        {step.title}
                      </h3>
                      <p className="text-purple-600 font-semibold">
                        {step.subtitle}
                      </p>
                    </div>
                    
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-500">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Vertical Arrow for mobile */}
                  {index < steps.length - 1 && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                      viewport={{ once: true }}
                      className="flex justify-center my-4"
                    >
                      <div className="bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full p-2 shadow-lg transform rotate-90">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Audit Log Demo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900">
                Immutable Audit Trail
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-4">
                  Every Action is Recorded
                </h4>
                <div className="space-y-3">
                  {[
                    { time: "14:32:15", action: "Fraud detection triggered", hash: "0x7f9a2b3c..." },
                    { time: "14:31:48", action: "Budget reallocation recommended", hash: "0x4e8d1a5f..." },
                    { time: "14:30:22", action: "Creative fatigue detected", hash: "0x9c6b7e2d..." },
                    { time: "14:28:56", action: "Performance threshold breach", hash: "0x2a5f8c1b..." }
                  ].map((log, index) => (
                    <div key={index} className="flex items-center justify-between bg-purple-50 rounded-lg p-3 border border-purple-100">
                      <div>
                        <div className="font-medium text-slate-900">{log.action}</div>
                        <div className="text-xs text-slate-500">{log.time} UTC</div>
                      </div>
                      <div className="text-xs font-mono text-purple-600 bg-white px-2 py-1 rounded border border-purple-200">
                        {log.hash}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-4">
                  Ask Campaxe Anything
                </h4>
                
                {/* Chatbot Interface Replica */}
                <div className="bg-white rounded-xl border border-purple-200 shadow-sm overflow-hidden">
                  {/* Chat Header */}
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h5 className="text-white font-semibold text-sm">Ask CAMP</h5>
                        <p className="text-purple-100 text-xs">AI Marketing Strategist</p>
                      </div>
                    </div>
                    <div className="bg-white/20 text-white text-xs px-2 py-1 rounded">
                      Auto
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="p-4 space-y-4 max-h-64 overflow-y-auto">
                    {/* Welcome Message */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Brain className="w-4 h-4 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <div className="bg-purple-50 rounded-lg p-3 text-sm">
                          <p className="text-slate-900 mb-2">👋 Welcome to CamPaxe AI! I'm your marketing strategist.</p>
                          <p className="text-slate-700 text-xs mb-3">💡 Quick help:</p>
                          <ul className="text-slate-600 text-xs space-y-1">
                            <li>• Campaign strategy</li>
                            <li>• Performance analysis</li>
                            <li>• Creative guidance</li>
                            <li>• Budget optimization</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* User Question */}
                    <div className="flex justify-end">
                      <div className="bg-purple-600 text-white rounded-lg p-3 max-w-xs text-sm">
                        Why did Campaign X performance drop yesterday?
                      </div>
                    </div>

                    {/* AI Response */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Brain className="w-4 h-4 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <div className="bg-gray-50 rounded-lg p-3 text-sm">
                          <p className="text-slate-900 mb-2">🔍 Analyzing campaign performance data...</p>
                          <p className="text-slate-700 mb-2">📊 Correlation detected with external factors:</p>
                          <ul className="text-slate-600 text-xs space-y-1 ml-3">
                            <li>• Weather: 40% increase in rainfall in target regions</li>
                            <li>• Competition: 3 new competitors launched similar campaigns</li>
                            <li>• Creative: CTR dropped 15% suggesting fatigue</li>
                          </ul>
                          <p className="text-purple-600 mt-2 font-medium">💡 Recommendation: Adjust geo-targeting and refresh creative assets</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Input Area */}
                  <div className="border-t border-purple-100 p-3">
                    <div className="flex gap-2 items-center">
                      <input 
                        type="text" 
                        placeholder="Ask about marketing..." 
                        className="flex-1 text-sm bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-purple-300"
                        disabled
                      />
                      <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg p-2 hover:opacity-90 transition-opacity">
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
                      <span>Mode: <span className="text-purple-600 font-medium">Auto</span></span>
                      <span className="text-purple-600 hover:text-purple-800 cursor-pointer">New Chat</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;