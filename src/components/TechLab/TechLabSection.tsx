import React, { useState } from 'react';
import { SmartHomeSim } from './SmartHomeSim';
import { AiAssistantSim } from './AiAssistantSim';
import { QuantumSim } from './QuantumSim';
import { FlaskConical, Home, Bot, Atom, Sparkles } from 'lucide-react';

export const TechLabSection: React.FC = () => {
  const [activeLabTab, setActiveLabTab] = useState<'smarthome' | 'ai' | 'quantum'>('smarthome');

  return (
    <section id="tech-lab" className="py-12 md:py-20 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 dark:text-cyan-400 light:text-cyan-600 mb-1">
              <FlaskConical className="w-3.5 h-3.5" />
              <span>PHÒNG THỰC NGHIỆM TƯƠNG TÁC</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
              Interactive Tech Lab
            </h2>
            <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2 max-w-2xl">
              Trải nghiệm thực tế các nguyên lý kỹ thuật qua mô phỏng tương tác: tự động hóa nhà thông minh, mạng nơ-ron nhân tạo và cổng tính toán lượng tử.
            </p>
          </div>

          {/* Segmented lab switch control buttons */}
          <div className="flex items-center gap-1 p-1 bg-slate-900 dark:bg-slate-900 light:bg-slate-200 border border-slate-800 dark:border-slate-800 light:border-slate-300 rounded-xl text-xs overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveLabTab('smarthome')}
              className={`px-3 py-2 rounded-lg font-medium flex items-center gap-2 whitespace-nowrap transition-colors ${
                activeLabTab === 'smarthome'
                  ? 'bg-cyan-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white dark:text-slate-400 dark:hover:text-white light:text-slate-600 light:hover:text-slate-900'
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              <span>Nhà thông minh IoT</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveLabTab('ai')}
              className={`px-3 py-2 rounded-lg font-medium flex items-center gap-2 whitespace-nowrap transition-colors ${
                activeLabTab === 'ai'
                  ? 'bg-cyan-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white dark:text-slate-400 dark:hover:text-white light:text-slate-600 light:hover:text-slate-900'
              }`}
            >
              <Bot className="w-3.5 h-3.5" />
              <span>AI & Mạng Nơ-ron</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveLabTab('quantum')}
              className={`px-3 py-2 rounded-lg font-medium flex items-center gap-2 whitespace-nowrap transition-colors ${
                activeLabTab === 'quantum'
                  ? 'bg-cyan-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white dark:text-slate-400 dark:hover:text-white light:text-slate-600 light:hover:text-slate-900'
              }`}
            >
              <Atom className="w-3.5 h-3.5" />
              <span>Lượng tử & Robot</span>
            </button>
          </div>
        </div>

        {/* Active Lab Component */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-xl">
          {activeLabTab === 'smarthome' && <SmartHomeSim />}
          {activeLabTab === 'ai' && <AiAssistantSim />}
          {activeLabTab === 'quantum' && <QuantumSim />}
        </div>
      </div>
    </section>
  );
};
