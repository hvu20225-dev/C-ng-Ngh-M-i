import React, { useState } from 'react';
import { TRENDING_TECHNOLOGIES } from '../data/trends';
import { TrendingUp, Flame, Zap, Award, ArrowUpRight } from 'lucide-react';
import { TechItem } from '../types/tech';

interface TrendingSectionProps {
  onSelectTechById: (techId: string) => void;
}

export const TrendingSection: React.FC<TrendingSectionProps> = ({ onSelectTechById }) => {
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const filteredTrends = filterStatus === 'all'
    ? TRENDING_TECHNOLOGIES
    : TRENDING_TECHNOLOGIES.filter((t) => t.status === filterStatus);

  return (
    <section id="trends" className="py-12 md:py-20 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold text-cyan-400 dark:text-cyan-400 light:text-cyan-600 mb-1">
              BẢNG XẾP HẠNG TĂNG TRƯỞNG
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
              Xu Hướng Công Nghệ Nóng Nhất 2026
            </h2>
            <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2 max-w-2xl">
              Đo lường từ tốc độ gia tăng vốn đầu tư mạo hiểm (VC), số lượng sáng chế đăng ký và mức độ áp dụng thực tế tại các tập đoàn hàng đầu thế giới.
            </p>
          </div>

          {/* Filter Status buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-200/80 border border-slate-800 dark:border-slate-800 light:border-slate-300 rounded-lg text-xs">
            {['all', 'Bùng nổ', 'Đột phá mới', 'Tăng tốc', 'Trưởng thành'].map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => setFilterStatus(status)}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors whitespace-nowrap ${
                  filterStatus === status
                    ? 'bg-cyan-500 text-white shadow-sm'
                    : 'text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900'
                }`}
              >
                {status === 'all' ? 'Tất cả' : status}
              </button>
            ))}
          </div>
        </div>

        {/* Trending Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {filteredTrends.map((trend) => (
            <div
              key={trend.id}
              className="p-5 sm:p-6 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Ranking and clean metadata */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 font-bold text-xs tabular-nums">
                      #{trend.rank}
                    </span>
                    <span className="text-xs text-slate-400">
                      {trend.category}
                    </span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="text-xs font-semibold text-emerald-400">
                      {trend.status}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-cyan-400 tabular-nums">
                    {trend.growthRate}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-white dark:text-white light:text-slate-900 mb-2">
                  {trend.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 mb-4 leading-relaxed">
                  {trend.description}
                </p>

                {/* Primary Drivers */}
                <div className="mb-4">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">
                    Động lực thúc đẩy chính:
                  </span>
                  <div className="flex flex-wrap gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-600">
                    {trend.primaryDrivers.map((driver, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-slate-950/60 border border-slate-800 text-slate-300 text-[11px]"
                      >
                        {driver}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom bar with impact meter & button */}
              <div className="pt-3 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex items-center justify-between gap-4">
                <div className="flex-1 max-w-[200px]">
                  <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                    <span>Chỉ số tác động</span>
                    <span className="font-mono tabular-nums text-cyan-400 font-bold">
                      {trend.impactScore}/100
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                      style={{ width: `${trend.impactScore}%` }}
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectTechById(trend.techId)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Chi tiết</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
