import React from 'react';
import { TechItem } from '../types/tech';
import { TechIcon } from './TechIcon';
import { X, Trash2, Heart, Scale, ArrowUpRight } from 'lucide-react';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  favoriteIds: string[];
  allTechnologies: TechItem[];
  onToggleFavorite: (id: string) => void;
  onSelectTech: (tech: TechItem) => void;
  onClearAllFavorites: () => void;
  onCompareFavorites: () => void;
}

export const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({
  isOpen,
  onClose,
  favoriteIds,
  allTechnologies,
  onToggleFavorite,
  onSelectTech,
  onClearAllFavorites,
  onCompareFavorites
}) => {
  if (!isOpen) return null;

  const favoriteTechs = allTechnologies.filter((t) => favoriteIds.includes(t.id));

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-slate-950/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md h-full bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            <h3 className="font-bold text-white text-base">
              Công nghệ Đã Lưu ({favoriteTechs.length})
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Đóng ngăn yêu thích"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer List */}
        <div className="flex-1 p-5 overflow-y-auto space-y-3">
          {favoriteTechs.length > 0 ? (
            favoriteTechs.map((tech) => (
              <div
                key={tech.id}
                className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-all flex items-start justify-between gap-3"
              >
                <div
                  className="flex items-start gap-3 cursor-pointer flex-1"
                  onClick={() => {
                    onSelectTech(tech);
                    onClose();
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: `${tech.accentColor}25`, color: tech.accentColor }}
                  >
                    <TechIcon name={tech.iconName} className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm hover:text-cyan-400 transition-colors">
                      {tech.name}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {tech.categoryLabel} · {tech.maturityLevel}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    type="button"
                    onClick={() => onToggleFavorite(tech.id)}
                    className="p-1.5 rounded text-slate-500 hover:text-rose-400 hover:bg-slate-800"
                    title="Xóa khỏi yêu thích"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="py-16 text-center text-slate-500 space-y-3">
              <Heart className="w-12 h-12 mx-auto text-slate-700 stroke-[1.5]" />
              <p className="text-sm">Bạn chưa lưu công nghệ nào vào danh sách.</p>
              <p className="text-xs text-slate-600">
                Nhấp vào biểu tượng trái tim trên bất kỳ thẻ công nghệ nào để lưu và xem lại sau.
              </p>
            </div>
          )}
        </div>

        {/* Drawer Footer Actions */}
        {favoriteTechs.length > 0 && (
          <div className="p-4 border-t border-slate-800 bg-slate-950/60 space-y-2">
            {favoriteTechs.length >= 2 && (
              <button
                type="button"
                onClick={() => {
                  onCompareFavorites();
                  onClose();
                }}
                className="w-full py-2.5 px-4 bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Scale className="w-4 h-4" />
                <span>Đưa các mục này vào bảng so sánh</span>
              </button>
            )}

            <button
              type="button"
              onClick={onClearAllFavorites}
              className="w-full py-2 px-4 text-xs text-slate-400 hover:text-rose-400 transition-colors text-center"
            >
              Xóa tất cả mục đã lưu
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
