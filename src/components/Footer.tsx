import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Shield, Calendar } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Stop
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Wasting Ad Spend?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join forward-thinking agencies and brands who are already using Campaxe 
            to make every ad dollar accountable.
          </p>
          
          <div className="flex justify-center mb-8">
            <a 
              href="https://www.campaxe.net" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Visit Campaxe
            </a>
          </div>

          <p className="text-gray-400 text-sm">
            See how Campaxe can optimize your campaigns
          </p>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center font-bold">
                C
              </div>
              <span className="text-2xl font-bold">Campaxe</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              AI-powered campaign management platform that eliminates waste in digital advertising.
            </p>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support & Legal</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <a href="mailto:support@catchaxe.com" className="text-gray-300 hover:text-white transition-colors">
                  support@catchaxe.com
                </a>
              </div>
            </div>
            
            {/* <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-300">SOC 2 Type II Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-300">GDPR Compliant</span>
              </div>
            </div> */}
            
            <div className="space-y-2">
              <a 
                href="https://www.campaxe.net/privacy-policy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="https://www.campaxe.net/terms-of-service" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm mb-2">
            <Shield className="inline w-4 h-4 mr-2" />
            Privacy-safe optimization — no invasive tracking, complete transparency
          </p>
          <p className="text-gray-500 text-xs">
            © 2025 Campaxe Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;