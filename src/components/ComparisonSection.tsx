import React from 'react';
import { TechItem } from '../types/tech';
import { COMPARISON_PRESETS } from '../data/trends';
import { TechIcon } from './TechIcon';
import { Scale, X, Plus, Sparkles, Check, AlertCircle } from 'lucide-react';

interface ComparisonSectionProps {
  allTechnologies: TechItem[];
  comparisonIds: string[];
  onToggleComparison: (id: string) => void;
  onClearComparison: () => void;
  onSetComparisonIds: (ids: string[]) => void;
  onSelectTech: (tech: TechItem) => void;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({
  allTechnologies,
  comparisonIds,
  onToggleComparison,
  onClearComparison,
  onSetComparisonIds,
  onSelectTech
}) => {
  const selectedTechs = allTechnologies.filter((t) => comparisonIds.includes(t.id));

  return (
    <section id="comparison" className="py-12 md:py-20 bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-100/60 border-t border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold text-cyan-400 dark:text-cyan-400 light:text-cyan-600 mb-1">
              ĐỐI CHIẾU & ĐÁNH GIÁ
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
              So Sánh Đa Chiều Các Công Nghệ
            </h2>
            <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2 max-w-2xl">
              Đặt cạnh nhau từ 2 đến 3 công nghệ để phân tích sâu sự khác biệt về bản chất, chi phí, rào cản ứng dụng và tiềm năng đột phá.
            </p>
          </div>

          {comparisonIds.length > 0 && (
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-400 tabular-nums">
                Đã chọn: <span className="text-cyan-400 font-semibold">{comparisonIds.length}</span>/3
              </span>
              <button
                type="button"
                onClick={onClearComparison}
                className="px-3 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                Xóa so sánh
              </button>
            </div>
          )}
        </div>

        {/* Preset quick buttons */}
        <div className="mb-6 flex items-center gap-2 overflow-x-auto pb-2 text-xs">
          <span className="text-slate-400 shrink-0">Gợi ý đối chiếu:</span>
          {COMPARISON_PRESETS.map((preset, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => onSetComparisonIds(preset.ids)}
              className="px-3 py-1.5 rounded-lg bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:border-cyan-500 hover:text-cyan-400 whitespace-nowrap transition-colors"
            >
              {preset.label}
            </button>
          ))}
        </div>

        {/* Selection Bar / Add tech dropdown if less than 3 */}
        {comparisonIds.length < 3 && (
          <div className="mb-8 p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <Plus className="w-4 h-4 text-cyan-400" />
              <span>
                Thêm công nghệ vào bảng (tối đa 3 công nghệ):
              </span>
            </div>
            <select
              value=""
              onChange={(e) => {
                if (e.target.value) {
                  onToggleComparison(e.target.value);
                  e.target.value = '';
                }
              }}
              className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-slate-200 focus:outline-none focus:ring-1 focus:ring-cyan-500"
            >
              <option value="" disabled>-- Chọn công nghệ để thêm --</option>
              {allTechnologies
                .filter((t) => !comparisonIds.includes(t.id))
                .map((t) => (
                  <option key={t.id} value={t.id}>
                    + {t.name}
                  </option>
                ))}
            </select>
          </div>
        )}

        {/* Comparison Table */}
        {selectedTechs.length >= 2 ? (
          <div className="overflow-x-auto rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-200 bg-slate-900/80 dark:bg-slate-900/80 light:bg-white shadow-xl">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-800 dark:border-slate-800 light:border-slate-200 bg-slate-950/70 dark:bg-slate-950/70 light:bg-slate-50">
                  <th className="p-4 w-44 font-semibold text-slate-400 dark:text-slate-400 light:text-slate-600 text-xs uppercase tracking-wider">
                    Tiêu chí phân tích
                  </th>
                  {selectedTechs.map((tech) => (
                    <th key={tech.id} className="p-4 min-w-[260px] align-top">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                            style={{ backgroundColor: `${tech.accentColor}25`, color: tech.accentColor }}
                          >
                            <TechIcon name={tech.iconName} className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-bold text-white dark:text-white light:text-slate-900 text-base">
                              {tech.name}
                            </div>
                            <div className="text-xs text-slate-400 italic">
                              {tech.englishName}
                            </div>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => onToggleComparison(tech.id)}
                          className="p-1 rounded text-slate-400 hover:text-rose-400 hover:bg-slate-800"
                          title="Xóa khỏi bảng"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 dark:divide-slate-800/80 light:divide-slate-200 text-xs sm:text-sm">
                {/* Row 1: Nhóm & Trọng tâm bản chất */}
                <tr>
                  <td className="p-4 font-semibold text-slate-400 dark:text-slate-400 light:text-slate-600 bg-slate-950/30 dark:bg-slate-950/30 light:bg-slate-50/50">
                    Bản chất cốt lõi
                  </td>
                  {selectedTechs.map((tech) => (
                    <td key={tech.id} className="p-4 text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                      {tech.shortDesc}
                    </td>
                  ))}
                </tr>

                {/* Row 2: Độ chín & Mức độ phát triển */}
                <tr>
                  <td className="p-4 font-semibold text-slate-400 dark:text-slate-400 light:text-slate-600 bg-slate-950/30 dark:bg-slate-950/30 light:bg-slate-50/50">
                    Mức độ thương mại hóa
                  </td>
                  {selectedTechs.map((tech) => (
                    <td key={tech.id} className="p-4">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="font-semibold text-white dark:text-white light:text-slate-900">
                          {tech.maturityLevel}
                        </span>
                        <span className="text-xs text-slate-400 tabular-nums">
                          ({tech.maturityPercent}%)
                        </span>
                      </div>
                      <div className="h-1.5 w-full max-w-[180px] bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${tech.maturityPercent}%`, backgroundColor: tech.accentColor }}
                        />
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Row 3: Lĩnh vực ứng dụng thực tiễn */}
                <tr>
                  <td className="p-4 font-semibold text-slate-400 dark:text-slate-400 light:text-slate-600 bg-slate-950/30 dark:bg-slate-950/30 light:bg-slate-50/50">
                    Ứng dụng nổi bật
                  </td>
                  {selectedTechs.map((tech) => (
                    <td key={tech.id} className="p-4">
                      <ul className="space-y-1.5">
                        {tech.applications.slice(0, 3).map((app, i) => (
                          <li key={i} className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                            <span className="font-semibold text-cyan-400">{app.domain}:</span> {app.title}
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>

                {/* Row 4: Lợi ích chính */}
                <tr>
                  <td className="p-4 font-semibold text-slate-400 dark:text-slate-400 light:text-slate-600 bg-slate-950/30 dark:bg-slate-950/30 light:bg-slate-50/50">
                    Điểm mạnh vượt trội
                  </td>
                  {selectedTechs.map((tech) => (
                    <td key={tech.id} className="p-4">
                      <ul className="space-y-1">
                        {tech.benefits.slice(0, 3).map((b, i) => (
                          <li key={i} className="text-xs text-emerald-400 dark:text-emerald-400 light:text-emerald-600 flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>

                {/* Row 5: Rào cản & Thách thức */}
                <tr>
                  <td className="p-4 font-semibold text-slate-400 dark:text-slate-400 light:text-slate-600 bg-slate-950/30 dark:bg-slate-950/30 light:bg-slate-50/50">
                    Rào cản & Thách thức
                  </td>
                  {selectedTechs.map((tech) => (
                    <td key={tech.id} className="p-4">
                      <ul className="space-y-1">
                        {tech.challenges.slice(0, 3).map((c, i) => (
                          <li key={i} className="text-xs text-amber-400 dark:text-amber-400 light:text-amber-600 flex items-start gap-1.5">
                            <AlertCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>

                {/* Row 6: Tiềm năng tương lai */}
                <tr>
                  <td className="p-4 font-semibold text-slate-400 dark:text-slate-400 light:text-slate-600 bg-slate-950/30 dark:bg-slate-950/30 light:bg-slate-50/50">
                    Viễn cảnh tương lai
                  </td>
                  {selectedTechs.map((tech) => (
                    <td key={tech.id} className="p-4 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                      {tech.futureOutlook}
                      <div className="mt-3">
                        <button
                          type="button"
                          onClick={() => onSelectTech(tech)}
                          className="text-cyan-400 hover:underline font-semibold"
                        >
                          Xem hồ sơ đầy đủ &rarr;
                        </button>
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="py-12 px-6 rounded-2xl border border-dashed border-slate-800 bg-slate-900/30 text-center">
            <Scale className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <h3 className="text-base font-bold text-white mb-1">
              {selectedTechs.length === 1
                ? 'Đã chọn 1 công nghệ — Vui lòng chọn thêm ít nhất 1 công nghệ khác'
                : 'Chưa có công nghệ nào trong bảng so sánh'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto mb-4">
              Nhấp vào biểu tượng cán cân <Scale className="w-3.5 h-3.5 inline text-cyan-400" /> ở góc mỗi thẻ công nghệ hoặc chọn một trong các cặp gợi ý phía trên.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {COMPARISON_PRESETS.slice(0, 3).map((preset, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => onSetComparisonIds(preset.ids)}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-cyan-600/30 hover:bg-cyan-600/50 text-cyan-300 border border-cyan-500/40 transition-colors"
                >
                  Thử so sánh: {preset.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
