import React from 'react';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Globe, DollarSign } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MarketOverview: React.FC = () => {
  const data = {
    labels: ['Global Ad Spend 2025', 'Digital Share 2025', 'U.S. Market 2025', 'China 2030 (Projected)'],
    datasets: [
      {
        label: 'Market Size (Billions USD)',
        data: [1000, 780, 420, 180],
        backgroundColor: [
          'rgba(99, 102, 241, 0.8)',
          'rgba(99, 102, 241, 0.7)',
          'rgba(99, 102, 241, 0.6)',
          'rgba(99, 102, 241, 0.5)',
        ],
        borderColor: [
          'rgb(99, 102, 241)',
          'rgb(99, 102, 241)',
          'rgb(99, 102, 241)',
          'rgb(99, 102, 241)',
        ],
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
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
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#6366f1',
        borderWidth: 1,
        cornerRadius: 8,
        callbacks: {
          label: function(context: any) {
            return `$${context.parsed.y}B`;
          }
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(148, 163, 184, 0.3)',
        },
        ticks: {
          color: '#64748b',
          font: {
            family: 'Inter',
            size: 12,
          },
          callback: function(value: any) {
            return '$' + value + 'B';
          }
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#64748b',
          font: {
            family: 'Inter',
            size: 11,
          },
          maxRotation: 45,
        },
      },
    },
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 bg-indigo-50 border border-indigo-200 text-indigo-700 rounded-full text-sm font-medium mb-6">
            <Globe className="w-4 h-4 mr-2" />
            Market Size & Growth Story
          </div>
          
          <h2 className="text-4xl font-bold text-slate-900 mb-4 leading-tight">
            The Global Advertising Market is 
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Enormous and Expanding
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Bar Chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Market Size (Billions USD)</h3>
            <div className="h-80">
              <Bar data={data} options={options} />
            </div>
          </motion.div>

          {/* Big Prominent Points */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Growth Rate */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-green-600 text-lg font-bold">↗</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">10.5% Growth</h3>
                  <p className="text-slate-600">Expected in 2025 (WARC)</p>
                </div>
              </div>
              <p className="text-slate-700 font-medium">
                Market reaching <strong className="text-indigo-600">$1.23T by 2026</strong>
              </p>
            </div>

            {/* AdTech Market Size */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-200 shadow-lg">
              <div className="flex items-center mb-4">
                <DollarSign className="w-8 h-8 text-indigo-600 mr-3" />
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    $987B AdTech
                  </h3>
                  <p className="text-slate-600">Market value in 2025</p>
                </div>
              </div>
              <p className="text-slate-700 font-medium text-sm leading-relaxed">
                Valued at <strong className="text-indigo-600">$987B in 2025</strong>, projected to reach 
                <strong className="text-purple-600"> $2.55T by 2032</strong> (Fortune Business Insights). 
                Future Market Insights suggests it could hit <strong className="text-purple-600">$3.8T by 2035</strong>.
              </p>
            </div>

            {/* Regional Growth */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Regional Powerhouses</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-slate-700">India (2026)</span>
                  <span className="text-lg font-bold text-indigo-600">$18B</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-slate-700">Brazil (2030)</span>
                  <span className="text-lg font-bold text-indigo-600">$34.3B</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-slate-700">MENA (2032)</span>
                  <span className="text-lg font-bold text-indigo-600">$44.8B</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Key Insight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-white rounded-2xl p-8 border-2 border-indigo-200 shadow-xl text-center"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-4">The Trillion-Dollar Opportunity</h3>
          <p className="text-lg text-slate-700 leading-relaxed">
            A market this massive and complex means <strong className="text-indigo-600">every percentage point of efficiency 
            saved translates into billions of dollars in value</strong>. This is where intelligent automation becomes critical.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketOverview;