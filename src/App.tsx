import React from 'react';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import ProblemSolution from './components/Problemsolution';
import MarketChart from './components/MarketChart';
import TargetAudience from './components/TargetAudience';
import KPIGrid from './components/KPIGrid';
import ProductFeatures from './components/ProductFeatures';
import HowItWorks from './components/HowItWorks';
import CompetitiveAdvantage from './components/CompetitiveAdvantage';
import TeamSection from './components/TeamSection';
import FundingSection from './components/FundingSection';
import Footer from './components/Footer';
import MarketOverview from './components/MarketOverview';

function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100 overflow-hidden">
              <img 
                src="/Images/Campaxe_logo.png" 
                alt="Campaxe Logo" 
                className="w-10 h-10 object-cover rounded-full"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Campaxe</span>
          </div>
                        
          <div className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-gray-600 hover:text-purple-600 transition-colors">Home</a>
            <a href="#problem" className="text-gray-600 hover:text-purple-600 transition-colors">Problem</a>
            <a href="#market" className="text-gray-600 hover:text-purple-600 transition-colors">Market</a>
            <a href="#product" className="text-gray-600 hover:text-purple-600 transition-colors">Product</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-purple-600 transition-colors">How It Works</a>
            <a href="#team" className="text-gray-600 hover:text-purple-600 transition-colors">Team</a>
            <a href="#funding" className="text-gray-600 hover:text-purple-600 transition-colors">Funding</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="problem">
          <ProblemSection />                  
        </div>
        <div id="market">
          <MarketOverview />
          <MarketChart />
          <TargetAudience />
        </div>
        <KPIGrid />
        <ProblemSolution />                         
        <div id="product">
          <ProductFeatures />
        </div>
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <CompetitiveAdvantage />                         
        <div id="team">
          <TeamSection />
        </div>
        <div id="funding">
          <FundingSection />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;