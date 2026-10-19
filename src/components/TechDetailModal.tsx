import React, { useState, useEffect } from 'react';
import { TechItem } from '../types/tech';
import { TechIcon } from './TechIcon';
import { X, Heart, Scale, CheckCircle2, AlertTriangle, Sparkles, Building2, Globe } from 'lucide-react';

interface TechDetailModalProps {
  tech: TechItem | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  isInComparison: boolean;
  onToggleComparison: (id: string) => void;
}

type TabType = 'overview' | 'applications' | 'benefits_challenges' | 'future';

export const TechDetailModal: React.FC<TechDetailModalProps> = ({
  tech,
  onClose,
  isFavorite,
  onToggleFavorite,
  isInComparison,
  onToggleComparison
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (tech) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [tech, onClose]);

  if (!tech) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-tech-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex items-start justify-between p-5 sm:p-6 border-b border-slate-800 bg-slate-950/50">
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: `${tech.accentColor}25`, color: tech.accentColor }}
            >
              <TechIcon name={tech.iconName} className="w-6 h-6" />
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span>{tech.categoryLabel}</span>
                <span aria-hidden="true">·</span>
                <span>{tech.maturityLevel} ({tech.maturityPercent}%)</span>
              </div>
              <h2 id="modal-tech-title" className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                {tech.name}
              </h2>
              <p className="text-xs text-slate-400 italic">{tech.englishName}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onToggleComparison(tech.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
                isInComparison
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <Scale className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isInComparison ? 'Đã trong so sánh' : 'So sánh'}</span>
            </button>

            <button
              type="button"
              onClick={() => onToggleFavorite(tech.id)}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-rose-400 hover:bg-slate-700 transition-colors"
              aria-label="Lưu vào danh sách yêu thích"
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-rose-500 text-rose-500' : ''}`} />
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Đóng cửa sổ chi tiết"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-slate-800 bg-slate-900/60 overflow-x-auto text-xs font-semibold">
          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            className={`pb-3 px-1 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Tổng quan & Nguyên lý
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('applications')}
            className={`pb-3 px-1 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'applications'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Ứng dụng thực tế ({tech.applications.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('benefits_challenges')}
            className={`pb-3 px-1 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'benefits_challenges'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Lợi ích & Thách thức
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('future')}
            className={`pb-3 px-1 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'future'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Tác động & Tương lai
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-300">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">Định nghĩa & Bản chất</h4>
                <p className="text-slate-200 leading-relaxed text-base">{tech.shortDesc}</p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">Cách thức công nghệ vận hành</h4>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-300 leading-relaxed">
                  {tech.howItWorks}
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-3">Chỉ số định lượng then chốt</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {tech.keyStats.map((stat, i) => (
                    <div key={i} className="p-3.5 rounded-lg bg-slate-950/40 border border-slate-800/80">
                      <div className="text-lg sm:text-xl font-bold text-cyan-400 tabular-nums">{stat.value}</div>
                      <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'applications' && (
            <div className="space-y-4">
              <p className="text-slate-400 text-xs">
                Các giải pháp thực tế đang được triển khai trên quy mô công nghiệp và đời sống:
              </p>
              <div className="grid grid-cols-1 gap-4">
                {tech.applications.map((app, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-white text-base flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-cyan-400" />
                        <span>{app.title}</span>
                      </h4>
                      <span className="text-xs text-cyan-300 font-mono">
                        {app.domain}
                      </span>
                    </div>
                    <p className="text-slate-300 leading-relaxed text-sm">
                      {app.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'benefits_challenges' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Benefits */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Ưu điểm & Lợi ích vượt bậc</span>
                </div>
                <ul className="space-y-2.5">
                  {tech.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Thách thức kỹ thuật & Rủi ro</span>
                </div>
                <ul className="space-y-2.5">
                  {tech.challenges.map((c, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'future' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                  <Globe className="w-4 h-4" />
                  <span>Tác động xã hội & Chuyển dịch văn minh</span>
                </div>
                <p className="text-slate-200 leading-relaxed text-sm">
                  {tech.socialImpact}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-violet-950/30 to-slate-900 border border-violet-900/40 space-y-2">
                <div className="flex items-center gap-2 text-violet-400 font-semibold text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>Viễn cảnh tương lai (2026 - 2040)</span>
                </div>
                <p className="text-slate-200 leading-relaxed text-sm">
                  {tech.futureOutlook}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between text-xs">
          <span className="text-slate-500">Nhấn ESC hoặc click ra ngoài để đóng</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg transition-colors"
          >
            Đóng lại
          </button>
        </div>
      </div>
    </div>
  );
};
