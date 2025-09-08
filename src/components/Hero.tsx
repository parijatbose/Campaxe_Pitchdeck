import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, TrendingUp, Shield, Target, BarChart3, DollarSign, AlertTriangle } from 'lucide-react';

const InvestorHero = () => {
  const [currentMetric, setCurrentMetric] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  const keyMetrics = [
    { 
      value: "$400B", 
      label: "Wasted Annually", 
      sublabel: "40% of $1T market",
      color: "from-purple-500 to-pink-500",
      icon: AlertTriangle
    },
    { 
      value: "18%", 
      label: "Waste Reduction", 
      sublabel: "Proven in pilots",
      color: "from-purple-500 to-pink-500",
      icon: TrendingUp
    },
    { 
      value: "22%", 
      label: "ROAS Uplift", 
      sublabel: "Real client results",
      color: "from-purple-500 to-pink-500",
      icon: BarChart3
    },
    { 
      value: "$1.2T", 
      label: "Market Size", 
      sublabel: "Growing 10.5% annually",
      color: "from-purple-500 to-pink-500",
      icon: DollarSign
    }
  ];

  const floatingElements = [
    { x: "10%", y: "20%", size: "w-3 h-3", delay: 0, duration: 6 },
    { x: "85%", y: "15%", size: "w-2 h-2", delay: 1, duration: 8 },
    { x: "15%", y: "70%", size: "w-4 h-4", delay: 2, duration: 7 },
    { x: "80%", y: "75%", size: "w-3 h-3", delay: 0.5, duration: 9 },
    { x: "45%", y: "10%", size: "w-2 h-2", delay: 1.5, duration: 5 },
    { x: "70%", y: "45%", size: "w-3 h-3", delay: 2.5, duration: 6 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentMetric((prev) => (prev + 1) % keyMetrics.length);
        setIsVisible(true);
      }, 200);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentData = keyMetrics[currentMetric];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Images/Campaxe-Idea-and-Market-Explainer.pdf';
    link.download = 'Campaxe-Idea-and-Market-Explainer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden flex items-center">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
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
            y: [0, -20, 0],
            opacity: [0.2, 0.4, 0.2],
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

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column - 7 columns */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Main Headline */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4"
              >
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                  <span className="block text-slate-900">Campaxe</span>
                  <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
                    AI Media Buyer
                  </span>
                </h1>
                
                {/* Tagline */}
                <div className="bg-gradient-to-r from-slate-100 to-blue-50 border-l-4 border-indigo-500 p-6 rounded-r-xl">
                  <p className="text-2xl font-medium text-slate-700 italic">
                    "Observe everything. Touch nothing."
                  </p>
                  <p className="text-lg text-slate-600 mt-2">
                    Make every ad dollar accountable with explainable AI
                  </p>
                </div>
              </motion.div>

              {/* Value Proposition */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-4"
              >
                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                  Transform advertising waste into measurable ROI through immutable audit trails 
                  and explainable AI recommendations. <span className="font-semibold text-slate-800">Coach, not autopilot.</span>
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="pt-4"
              >
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleDownload}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-indigo-500/25"
                >
                  Download Pitch Deck <Download size={20} />
                </motion.button>
              </motion.div>
            </div>

            {/* Right Column - 5 columns */}
            <div className="lg:col-span-5">
              <motion.div 
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative"
              >
                {/* Main Metrics Dashboard */}
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50">
                  
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-lg font-semibold text-slate-600 mb-2">
                      Market Opportunity
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded mx-auto"></div>
                  </div>

                  {/* Dynamic Metric Display */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentMetric}
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      className="text-center mb-8"
                    >
                      <div className="relative">
                        <div className={`w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br ${currentData.color} flex items-center justify-center shadow-lg`}>
                          <currentData.icon className="w-10 h-10 text-white" />
                        </div>
                        <div className={`text-5xl font-bold bg-gradient-to-r ${currentData.color} bg-clip-text text-transparent mb-2`}>
                          {currentData.value}
                        </div>
                        <div className="text-lg font-semibold text-slate-700 mb-1">
                          {currentData.label}
                        </div>
                        <div className="text-sm text-slate-500">
                          {currentData.sublabel}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Metric Indicators */}
                  <div className="flex justify-center space-x-2 mb-8">
                    {keyMetrics.map((_, index) => (
                      <motion.div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentMetric 
                            ? 'bg-gradient-to-r from-indigo-500 to-purple-500 scale-125' 
                            : 'bg-slate-300'
                        }`}
                        whileHover={{ scale: 1.2 }}
                      />
                    ))}
                  </div>

                  {/* Quick Stats Grid - Campaxe Core Values */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
                      <div className="text-2xl font-bold text-purple-700">24/7</div>
                      <div className="text-sm text-purple-600">AI Monitoring</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
                      <div className="text-2xl font-bold text-purple-700">Zero</div>
                      <div className="text-sm text-purple-600">Black Box</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
                      <div className="text-2xl font-bold text-purple-700">200+</div>
                      <div className="text-sm text-purple-600">Integrations</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
                      <div className="text-2xl font-bold text-purple-700">Real</div>
                      <div className="text-sm text-purple-600">Time Insights</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Trust Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-20 pt-8 border-t border-slate-200"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 text-slate-500">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-indigo-500" />
                <span className="text-sm font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-purple-500" />
                <span className="text-sm font-medium">24/7 Monitoring</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">Immutable Audits</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InvestorHero;