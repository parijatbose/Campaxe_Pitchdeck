import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { TrendingUp, Calendar, Target } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const StoryMarketChart: React.FC = () => {
  const chartRef = useRef<ChartJS>(null);

  // Simplified story data points
  const storyData = [
    { year: 2015, value: 0.5, phase: "Traditional Era" },
    { year: 2020, value: 0.8, phase: "Digital Shift" },
    { year: 2025, value: 1.2, phase: "AI Inflection" },
    { year: 2030, value: 2.0, phase: "AI Dominance" },
    { year: 2035, value: 3.0, phase: "Full Automation" }
  ];

  const data = {
    labels: storyData.map(d => d.year.toString()),
    datasets: [
      {
        label: 'Global Ad Spend ($T)',
        data: storyData.map(d => d.value),
        borderColor: '#6366f1',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        borderWidth: 4,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#8b5cf6',
        pointBorderColor: '#fff',
        pointBorderWidth: 3,
        pointRadius: 8,
        pointHoverRadius: 12,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(99, 102, 241, 0.95)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#6366f1',
        borderWidth: 2,
        cornerRadius: 8,
        callbacks: {
          label: function(context: any) {
            const dataPoint = storyData[context.dataIndex];
            return `${dataPoint.phase}: $${dataPoint.value}T`;
          }
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 3.5,
        grid: {
          color: 'rgba(99, 102, 241, 0.1)',
          lineWidth: 1,
        },
        ticks: {
          color: '#64748b',
          font: {
            family: 'Inter',
            size: 12,
          },
          callback: function(value: any) {
            return '$' + value + 'T';
          }
        },
      },
      x: {
        grid: {
          color: 'rgba(99, 102, 241, 0.1)',
          lineWidth: 1,
        },
        ticks: {
          color: '#64748b',
          font: {
            family: 'Inter',
            size: 12,
          },
        },
      },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-6">
        
        {/* Story Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-indigo-50 border border-indigo-200 text-indigo-700 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            The Digital Evolution
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            A Story of 
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Exponential Growth
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Watch how advertising transformed from a $500B traditional industry 
            into tomorrow's $3T AI-driven ecosystem.
          </p>
        </motion.div>

        {/* Chart Container */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200"
          >
            <div className="h-80 mb-8">
              <Line ref={chartRef} data={data} options={options} />
            </div>

            {/* Story Timeline */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-slate-700 text-center mb-8">The Journey</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Chapter 1: Past */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-slate-50 rounded-xl"
                >
                  <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calendar className="w-6 h-6 text-slate-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">2015-2020</h4>
                  <p className="text-sm text-slate-600">Traditional advertising shifts digital. Manual processes dominate.</p>
                  <div className="text-lg font-bold text-slate-700 mt-2">$0.5T → $0.8T</div>
                </motion.div>

                {/* Chapter 2: Present */}
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border-2 border-indigo-200"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">2025</h4>
                  <p className="text-sm text-slate-600">AI inflection point. Smart automation begins. <strong>Campaxe era starts.</strong></p>
                  <div className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mt-2">$1.2T</div>
                </motion.div>

                {/* Chapter 3: Future */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-purple-50 rounded-xl"
                >
                  <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">2030-2035</h4>
                  <p className="text-sm text-slate-600">AI-driven advertising ecosystem. Human oversight, AI execution.</p>
                  <div className="text-lg font-bold text-purple-600 mt-2">$2T → $3T</div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Key Insight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center px-6 py-4 bg-white rounded-xl shadow-lg border border-indigo-200">
              <div className="w-3 h-3 bg-indigo-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-slate-700 font-medium">
                <strong className="text-indigo-600">2025 is the pivot year</strong> — where AI transforms advertising from reactive to predictive
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StoryMarketChart;