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
import { TrendingUp, Star, Target } from 'lucide-react';

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

const CampaxeOpportunityChart: React.FC = () => {
  const chartRef = useRef<ChartJS>(null);

  // Data points matching the image
  const years = ['2015', '2020', '2025', '2030', '2035', '2040'];
  const globalAdSpend = [0.5, 0.7, 1.1, 1.7, 2.4, 3.2];
  const estimatedWastage = [0.15, 0.25, 0.4, 0.65, 0.95, 1.3];

  const data = {
    labels: years,
    datasets: [
      {
        label: 'Global Ad Spend ($T)',
        data: globalAdSpend,
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 3,
        fill: false,
        tension: 0.4,
        pointBackgroundColor: '#3b82f6',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
      },
      {
        label: 'Estimated Wastage ($T)',
        data: estimatedWastage,
        borderColor: '#ef4444',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        borderWidth: 3,
        borderDash: [8, 4],
        fill: false,
        tension: 0.4,
        pointBackgroundColor: '#ef4444',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
        labels: {
          usePointStyle: true,
          font: {
            family: 'Inter',
            size: 12,
          },
          color: '#64748b',
        },
      },
      title: {
        display: true,
        text: 'The CAMPEX Opportunity: Turning Advertising Waste into ROI',
        font: {
          family: 'Inter',
          size: 16,
          weight: 'bold',
        },
        color: '#1e293b',
        padding: 20,
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#334155',
        borderWidth: 1,
        cornerRadius: 8,
        callbacks: {
          label: function(context: any) {
            return `${context.dataset.label}: $${context.parsed.y}T`;
          }
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 3.5,
        grid: {
          color: 'rgba(148, 163, 184, 0.3)',
          lineWidth: 1,
        },
        ticks: {
          color: '#64748b',
          font: {
            family: 'Inter',
            size: 11,
          },
          callback: function(value: any) {
            return '$' + value + 'T';
          }
        },
        title: {
          display: true,
          text: 'Value ($ Trillions)',
          color: '#64748b',
          font: {
            family: 'Inter',
            size: 12,
          },
        },
      },
      x: {
        grid: {
          color: 'rgba(148, 163, 184, 0.3)',
          lineWidth: 1,
        },
        ticks: {
          color: '#64748b',
          font: {
            family: 'Inter',
            size: 11,
          },
        },
        title: {
          display: true,
          text: 'Year',
          color: '#64748b',
          font: {
            family: 'Inter',
            size: 12,
          },
        },
      },
    },
    annotation: {
      annotations: {
        campexPoint: {
          type: 'point',
          xValue: '2025',
          yValue: 1.1,
          backgroundColor: '#fbbf24',
          borderColor: '#f59e0b',
          borderWidth: 3,
          radius: 8,
        },
      },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-indigo-50 border border-indigo-200 text-indigo-700 rounded-full text-sm font-medium mb-6">
            <Target className="w-4 h-4 mr-2" />
            Market Opportunity
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Why Campaxe Is
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Uniquely Positioned?
            </span>
          </h2>
        </motion.div>

        {/* Chart Container */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200"
          >
            <div className="h-96 mb-8">
              <Line ref={chartRef} data={data} options={options} />
            </div>

            {/* CAMPEX Inflection Point Label */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-yellow-50 border border-yellow-200 rounded-lg">
                <Star className="w-4 h-4 text-yellow-600 mr-2" />
                <span className="text-sm font-medium text-yellow-800">
                  CAMPEX Inflection Point (2025)
                </span>
              </div>
            </div>

            {/* Key Points */}
            <div className="space-y-4 border-l-4 border-indigo-500 pl-6">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-slate-700">
                  <strong>Wastage rising:</strong> Nearly 40% of global ad spend is wasted, set to cross $1T yearly by 2040 if unchecked.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-slate-700">
                  <strong>2025 inflection point:</strong> A trillion-dollar market, record waste, and accelerating AI adoption create the perfect disruption moment.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-slate-700">
                  <strong>Campaxe solution:</strong> AI-powered insights turn wasted spend into measurable ROI, making every dollar accountable.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-slate-700">
                  <strong>Big vision:</strong> Campaxe aims to be the global operating system of media buying, unifying platforms and setting new standards.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bottom Insight */}
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
                <strong className="text-indigo-600">Perfect timing:</strong> Campaxe launches at the intersection of trillion-dollar waste and AI maturity
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CampaxeOpportunityChart;