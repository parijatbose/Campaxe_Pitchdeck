import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, DollarSign, Users, Shield, Zap } from 'lucide-react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const FundingSection: React.FC = () => {
  const fundingAllocation = [
    { label: 'Product Development', value: 45, color: '#8b5cf6' },
    { label: 'Team Expansion', value: 30, color: '#a855f7' },
    { label: 'Market Operations', value: 25, color: '#ec4899' }
  ];

  const pieData = {
    labels: fundingAllocation.map(item => item.label),
    datasets: [
      {
        data: fundingAllocation.map(item => item.value),
        backgroundColor: fundingAllocation.map(item => item.color),
        borderColor: '#ffffff',
        borderWidth: 3,
        hoverOffset: 8,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 20,
          usePointStyle: true,
          font: {
            family: 'Inter',
            size: 14,
            weight: 500,
          },
          color: '#374151'
        },
      },
      tooltip: {
        backgroundColor: 'rgba(139, 92, 246, 0.95)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#8b5cf6',
        borderWidth: 1,
        callbacks: {
          label: function(context: any) {
            return `${context.label}: ${context.parsed}%`;
          }
        }
      },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Investment Opportunity
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join us in transforming the $1.2T advertising industry by eliminating the $400B+ 
            lost annually to waste, fraud, and inefficiencies.
          </p>
        </motion.div>

        {/* Main Investment Details */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left: Key Metrics */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 border border-purple-100 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">$10M Seed Round</h3>
                  <p className="text-gray-600">18-month runway to Series A</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Previous funding:</span>
                  <span className="font-semibold text-gray-900">$1.5M Pre-seed</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Current valuation:</span>
                  <span className="font-semibold text-gray-900">$40M</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600">Target customers:</span>
                  <span className="font-semibold text-gray-900">50M+ advertisers</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-purple-100 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Market Validation</h3>
                  <p className="text-gray-600">Proven demand & early traction</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="text-center py-4">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">$26.8B</div>
                  <p className="text-gray-600">Wasted in Q2 2025 alone (ANA Report)</p>
                </div>
                <div className="text-center py-4">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">40%</div>
                  <p className="text-gray-600">Of ad spend lost to inefficiencies</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Fund Allocation Pie Chart */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border border-purple-100 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Fund Allocation</h3>
            
            {/* Pie Chart */}
            <div className="h-80 mb-8">
              <Pie data={pieData} options={pieOptions} />
            </div>
            
            {/* Allocation Details */}
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                <Zap className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-gray-900">Product Development (45%)</span>
                  <p className="text-gray-600 mt-1">AI platform enhancement, 200+ integrations, fraud detection systems</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                <Users className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-gray-900">Team Expansion (30%)</span>
                  <p className="text-gray-600 mt-1">Engineering, data science, sales, and customer success teams</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                <Shield className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-gray-900">Market Operations (25%)</span>
                  <p className="text-gray-600 mt-1">Customer acquisition, strategic partnerships, compliance infrastructure</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 18-Month Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 border border-purple-100 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            18-Month Strategic Milestones
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Team Scale",
                metric: "25 → 60",
                description: "Engineers, AI specialists, sales professionals"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Customer Base",
                metric: "100 Clients",
                description: "Mid-market to enterprise customers"
              },
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: "Revenue Goal",
                metric: "$5M ARR",
                description: "Recurring subscription revenue"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Series A Ready",
                metric: "$25M+",
                description: "Next funding round preparation"
              }
            ].map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                  {milestone.icon}
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  {milestone.metric}
                </div>
                <h4 className="font-semibold text-gray-700 mb-2">{milestone.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{milestone.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          {/* <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Advertising?</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Join us in building the AI-powered platform that makes every advertising dollar accountable. 
              Every percentage point of efficiency saved translates into billions of dollars in value.
            </p>
            <button className="bg-white text-purple-600 hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
              Schedule Investment Discussion
            </button>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default FundingSection;