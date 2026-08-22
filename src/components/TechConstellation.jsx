import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Info } from 'lucide-react';
import { TECH_CONSTELLATION } from '../data/portfolioData';

const TechConstellation = ({ theme }) => {
  const [activeNode, setActiveNode] = useState(TECH_CONSTELLATION[0]);
  const isDark = theme === 'dark';

  return (
    <section id="stack" className="section-anchor py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">


        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-accent-purple" />
              <span className="text-xs font-mono tracking-widest text-accent-purple dark:text-accent-cyan uppercase font-bold">
                04 // INTERACTIVE ECOSYSTEM
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-gray-900 dark:text-white">
              TECH <span className="text-gradient dark:text-gradient">CONSTELLATION</span>
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-md">
            Click or hover any interconnected node in the constellation to inspect its role.
          </p>
        </div>

        {/* Constellation Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left / Center Node Constellation Canvas Area */}
          <div className={`lg:col-span-8 p-5 sm:p-8 rounded-3xl border relative overflow-hidden ${
            isDark
              ? 'border-white/10 bg-gradient-to-br from-[#0c101d] to-[#070912]'
              : 'border-[#D8DCE5] bg-white shadow-md'
          }`}>
            {/* Ambient center aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl pointer-events-none" />

            {/* Central Node */}
            <div className="flex justify-center mb-6">
              <button
                onClick={() => setActiveNode(TECH_CONSTELLATION[0])}
                onMouseEnter={() => setActiveNode(TECH_CONSTELLATION[0])}
                className={`px-5 py-2.5 rounded-2xl font-mono text-xs sm:text-sm font-black tracking-wider transition-all duration-300 flex items-center gap-2 shadow-lg ${
                  activeNode?.name === 'AI Engineering'
                    ? 'bg-gradient-to-r from-accent-purple via-accent-violet to-accent-cyan text-white shadow-glow-purple scale-105 border border-white/30'
                    : isDark
                    ? 'bg-accent-purple/20 text-accent-purple border border-accent-purple/40 hover:scale-105'
                    : 'bg-accent-purple/10 text-accent-purple border border-accent-purple/30 hover:scale-105'
                }`}
              >
                <Cpu size={16} />
                <span>AI ENGINEERING [CENTRAL]</span>
              </button>
            </div>

            {/* Orbiting / Connected Nodes Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 relative z-10">
              {TECH_CONSTELLATION.filter((n) => !n.isCenter).map((node, index) => {
                const isActive = activeNode?.name === node.name;
                return (
                  <motion.button
                    key={node.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: index * 0.02 }}
                    onClick={() => setActiveNode(node)}
                    onMouseEnter={() => setActiveNode(node)}
                    className={`p-2.5 rounded-xl font-mono text-xs font-bold text-left transition-all duration-300 border flex items-center justify-between ${
                      isActive
                        ? 'border-accent-purple dark:border-accent-cyan bg-accent-purple/15 dark:bg-accent-cyan/20 text-accent-purple dark:text-white shadow-sm scale-105'
                        : isDark
                        ? 'border-white/10 bg-white/5 text-gray-300 hover:border-accent-purple/40 hover:bg-white/10 hover:text-white'
                        : 'border-[#D8DCE5] bg-gray-50 text-gray-800 hover:border-accent-purple hover:bg-white shadow-sm'
                    }`}
                  >
                    <span className="truncate">{node.name}</span>
                    <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-accent-purple dark:bg-accent-cyan' : 'bg-gray-400'}`} />
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Right Node Info Panel */}
          <div className="lg:col-span-4">
            <motion.div
              key={activeNode?.name}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className={`p-6 rounded-3xl border ${
                isDark
                  ? 'glass-card-dark border-accent-purple/30 bg-[#0c101d]'
                  : 'glass-card-light bg-white border-[#D8DCE5] shadow-sm'
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <Info size={15} className="text-accent-purple dark:text-accent-cyan" />
                <span className="text-[10px] font-mono tracking-widest text-accent-purple dark:text-accent-cyan uppercase font-bold">
                  NODE METADATA
                </span>
              </div>

              <h3 className="font-display font-black text-xl text-gray-900 dark:text-white">
                {activeNode?.name}
              </h3>
              <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase bg-accent-purple/15 text-accent-purple border border-accent-purple/30">
                CATEGORY // {activeNode?.category}
              </span>

              <p className="mt-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-normal">
                {activeNode?.desc}
              </p>

              <div className="mt-5 pt-4 border-t border-gray-200 dark:border-white/10 flex items-center justify-between text-xs font-mono text-gray-500">
                <span>Interconnected</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">Active in Production</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechConstellation;
