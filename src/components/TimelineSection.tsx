import React, { useState } from 'react';
import { TIMELINE_MILESTONES } from '../data/trends';
import { Clock, Calendar, CheckCircle, Sparkles, ChevronRight } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const [selectedMilestoneIndex, setSelectedMilestoneIndex] = useState<number>(0);
  const activeMilestone = TIMELINE_MILESTONES[selectedMilestoneIndex];

  return (
    <section id="timeline" className="py-12 md:py-20 bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold text-cyan-400 dark:text-cyan-400 light:text-cyan-600 mb-1">
            DỰ BÁO TƯƠNG LAI
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
            Lộ Trình Tiến Hóa Công Nghệ (2025 – 2040+)
          </h2>
          <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2">
            Tổng hợp kịch bản phát triển từ các viện nghiên cứu công nghệ hàng đầu thế giới về các cột mốc đột phá khả dĩ trong hai thập kỷ tới.
          </p>
        </div>

        {/* Horizontal Year Milestones Selector */}
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4 mb-8 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
          {TIMELINE_MILESTONES.map((milestone, idx) => {
            const isSelected = selectedMilestoneIndex === idx;
            return (
              <button
                key={milestone.year}
                type="button"
                onClick={() => setSelectedMilestoneIndex(idx)}
                className={`flex-1 min-w-[120px] p-3 rounded-xl border text-center transition-all ${
                  isSelected
                    ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400 shadow-md shadow-cyan-950/30'
                    : 'bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className="text-lg sm:text-xl font-extrabold tabular-nums font-mono">
                  {milestone.year}
                </div>
                <div className="text-[11px] font-medium truncate mt-0.5 opacity-80">
                  {milestone.techGroup.split('/')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Milestone Spotlight Showcase */}
        {activeMilestone && (
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-xl">
            <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
              {/* Left Column: Summary & Year badge */}
              <div className="lg:w-7/12 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-mono">
                    Năm {activeMilestone.year}
                  </span>
                  <span className="text-xs text-slate-400">
                    Trọng tâm: <strong className="text-slate-200 dark:text-slate-200 light:text-slate-700">{activeMilestone.techGroup}</strong>
                  </span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span className="text-xs text-emerald-400 font-medium">
                    {activeMilestone.readinessLevel}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900">
                  {activeMilestone.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                  {activeMilestone.summary}
                </p>
              </div>

              {/* Right Column: Key Breakthrough Checklist */}
              <div className="lg:w-5/12 w-full p-5 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200/80 space-y-3">
                <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Các đột phá dự kiến xuất hiện</span>
                </div>

                <ul className="space-y-2.5">
                  {activeMilestone.expectedBreakthroughs.map((breakthrough, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{breakthrough}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
