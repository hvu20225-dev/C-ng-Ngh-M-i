import React from 'react';
import { TechItem } from '../types/tech';
import { TechIcon } from './TechIcon';
import { Heart, ArrowUpRight, Scale } from 'lucide-react';

interface TechCardProps {
  tech: TechItem;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onSelectTech: (tech: TechItem) => void;
  isInComparison: boolean;
  onToggleComparison: (id: string) => void;
}

export const TechCard: React.FC<TechCardProps> = ({
  tech,
  isFavorite,
  onToggleFavorite,
  onSelectTech,
  isInComparison,
  onToggleComparison
}) => {
  return (
    <div className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200/90 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 light:hover:border-cyan-400 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-950/20">
      <div>
        {/* Top Header: Icon & Action Quick-Triggers */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
            style={{ backgroundColor: `${tech.accentColor}25`, color: tech.accentColor }}
          >
            <TechIcon name={tech.iconName} className="w-5 h-5" />
          </div>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onToggleComparison(tech.id);
              }}
              title={isInComparison ? 'Xóa khỏi so sánh' : 'Thêm vào bảng so sánh'}
              className={`p-1.5 rounded-md transition-colors ${
                isInComparison
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 light:text-slate-500 light:hover:text-slate-800 light:hover:bg-slate-100'
              }`}
              aria-label={`So sánh ${tech.name}`}
            >
              <Scale className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite(tech.id);
              }}
              title={isFavorite ? 'Bỏ yêu thích' : 'Lưu vào yêu thích'}
              className={`p-1.5 rounded-md transition-colors ${
                isFavorite
                  ? 'text-rose-500 hover:text-rose-400'
                  : 'text-slate-400 hover:text-rose-400 hover:bg-slate-800/50 light:text-slate-500 light:hover:text-rose-600 light:hover:bg-slate-100'
              }`}
              aria-label={`Yêu thích ${tech.name}`}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-rose-500' : ''}`} />
            </button>
          </div>
        </div>

        {/* Clean unboxed metadata with typographic separators (Zero-Pill discipline) */}
        <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 mb-2">
          <span>{tech.categoryLabel}</span>
          <span aria-hidden="true">·</span>
          <span>{tech.maturityLevel}</span>
          <span aria-hidden="true">·</span>
          <span className="text-cyan-400 dark:text-cyan-400 light:text-cyan-600 font-medium tabular-nums">
            +{tech.trendScore}% quan tâm
          </span>
        </div>

        {/* Primary Title */}
        <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 group-hover:text-cyan-400 dark:group-hover:text-cyan-400 light:group-hover:text-cyan-600 transition-colors">
          {tech.name}
        </h3>
        <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 italic mb-3">
          {tech.englishName}
        </p>

        {/* Description */}
        <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 line-clamp-3 mb-4 leading-relaxed">
          {tech.shortDesc}
        </p>

        {/* Key Application Highlight */}
        <div className="p-2.5 rounded-lg bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200/60 mb-4 text-xs">
          <span className="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-700">Ứng dụng tiêu biểu: </span>
          <span className="text-slate-300 dark:text-slate-300 light:text-slate-600">
            {tech.applications[0]?.title} ({tech.applications[0]?.domain})
          </span>
        </div>
      </div>

      {/* Footer Card Actions */}
      <div className="pt-3 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 flex items-center justify-between">
        {/* Maturity Progress Bar indicator */}
        <div className="w-1/2 pr-3">
          <div className="flex justify-between text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-500 mb-1">
            <span>Độ chín</span>
            <span className="tabular-nums font-mono">{tech.maturityPercent}%</span>
          </div>
          <div className="h-1.5 w-full bg-slate-800 dark:bg-slate-800 light:bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${tech.maturityPercent}%`, backgroundColor: tech.accentColor }}
            />
          </div>
        </div>

        <button
          type="button"
          onClick={() => onSelectTech(tech)}
          className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 dark:text-cyan-400 dark:hover:text-cyan-300 light:text-cyan-600 light:hover:text-cyan-700 transition-colors focus-visible:outline-none"
        >
          <span>Khám phá</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
