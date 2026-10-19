import React, { useState, useMemo } from 'react';
import { TechItem } from '../types/tech';
import { TECH_CATEGORIES } from '../data/technologies';
import { TechCard } from './TechCard';
import { Search, X, SlidersHorizontal, ArrowUpDown } from 'lucide-react';

interface TechGridProps {
  technologies: TechItem[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onSelectTech: (tech: TechItem) => void;
  comparisonList: string[];
  onToggleComparison: (id: string) => void;
}

export const TechGrid: React.FC<TechGridProps> = ({
  technologies,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  favorites,
  onToggleFavorite,
  onSelectTech,
  comparisonList,
  onToggleComparison
}) => {
  const [sortBy, setSortBy] = useState<'trend' | 'maturity' | 'name'>('trend');

  // Filter & Search logic
  const filteredTechnologies = useMemo(() => {
    return technologies.filter((tech) => {
      // Category filter
      const matchesCategory =
        selectedCategory === 'all' || tech.category === selectedCategory;

      // Search filter
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesQuery =
        tech.name.toLowerCase().includes(q) ||
        tech.englishName.toLowerCase().includes(q) ||
        tech.shortDesc.toLowerCase().includes(q) ||
        tech.categoryLabel.toLowerCase().includes(q) ||
        tech.applications.some(
          (app) =>
            app.title.toLowerCase().includes(q) ||
            app.domain.toLowerCase().includes(q) ||
            app.description.toLowerCase().includes(q)
        );

      return matchesCategory && matchesQuery;
    }).sort((a, b) => {
      if (sortBy === 'trend') return b.trendScore - a.trendScore;
      if (sortBy === 'maturity') return b.maturityPercent - a.maturityPercent;
      if (sortBy === 'name') return a.name.localeCompare(b.name, 'vi');
      return 0;
    });
  }, [technologies, selectedCategory, searchQuery, sortBy]);

  return (
    <section id="technologies" className="py-12 md:py-20 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold text-cyan-400 dark:text-cyan-400 light:text-cyan-600 mb-1">
              DANH MỤC CÔNG NGHỆ
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
              Khám Phá Các Trụ Cột Công Nghệ Đột Phá
            </h2>
            <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2 max-w-2xl">
              18 nhóm công nghệ then chốt với dữ liệu vận hành, phân tích ứng dụng thực tế và dự báo tác động sâu rộng đến tương lai.
            </p>
          </div>

          <div className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 tabular-nums">
            Hiển thị <span className="font-semibold text-cyan-400 dark:text-cyan-400 light:text-cyan-600">{filteredTechnologies.length}</span> / {technologies.length} công nghệ
          </div>
        </div>

        {/* Filter & Search Bar Controls */}
        <div className="bg-slate-900/70 dark:bg-slate-900/70 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 rounded-xl p-4 mb-8 space-y-4 shadow-sm">
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Tìm kiếm theo tên công nghệ, từ khóa, lĩnh vực (ví dụ: AI, y tế, robot, 5G)..."
                className="w-full pl-10 pr-9 py-2 text-sm bg-slate-950/80 dark:bg-slate-950/80 light:bg-white border border-slate-700/80 dark:border-slate-700/80 light:border-slate-300 rounded-lg text-slate-100 dark:text-slate-100 light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white"
                  aria-label="Xóa nội dung tìm kiếm"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-2 shrink-0">
              <ArrowUpDown className="w-4 h-4 text-slate-400" />
              <span className="text-xs text-slate-400 hidden sm:inline">Sắp xếp:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 text-xs font-medium bg-slate-950/80 dark:bg-slate-950/80 light:bg-white border border-slate-700/80 dark:border-slate-700/80 light:border-slate-300 rounded-lg text-slate-200 dark:text-slate-200 light:text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 cursor-pointer"
              >
                <option value="trend">Mức độ quan tâm cao nhất</option>
                <option value="maturity">Mức độ trưởng thành thực tiễn</option>
                <option value="name">Tên bảng chữ cái A-Z</option>
              </select>
            </div>
          </div>

          {/* Interactive Category Tabs (functional segmented buttons) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            {TECH_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => onSelectCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-cyan-500 text-white shadow-sm shadow-cyan-950/40'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 light:text-slate-600 light:hover:text-slate-900 light:hover:bg-slate-200'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] tabular-nums ${isActive ? 'text-cyan-100' : 'text-slate-500'}`}>
                    ({cat.count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tech Grid or Empty State */}
        {filteredTechnologies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTechnologies.map((tech) => (
              <TechCard
                key={tech.id}
                tech={tech}
                isFavorite={favorites.includes(tech.id)}
                onToggleFavorite={onToggleFavorite}
                onSelectTech={onSelectTech}
                isInComparison={comparisonList.includes(tech.id)}
                onToggleComparison={onToggleComparison}
              />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center rounded-2xl border border-slate-800/80 bg-slate-900/40 p-8">
            <SlidersHorizontal className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">Không tìm thấy công nghệ phù hợp</h3>
            <p className="text-sm text-slate-400 max-w-md mx-auto mb-4">
              Không có kết quả nào khớp với từ khóa "{searchQuery}" trong danh mục đã chọn.
            </p>
            <button
              type="button"
              onClick={() => {
                onSearchChange('');
                onSelectCategory('all');
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors"
            >
              Đặt lại bộ lọc & tìm kiếm
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
