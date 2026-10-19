import React, { useState } from 'react';
import { ArrowRight, Compass, TrendingUp, Sparkles, Shield, Cpu } from 'lucide-react';
import heroFutureTechImg from '../assets/images/hero_future_tech_1791120525721.jpg';

interface HeroProps {
  onExploreClick: () => void;
  onTrendsClick: () => void;
  onSelectCategory: (categoryId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onTrendsClick,
  onSelectCategory
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none glow-spotlight" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/60 dark:bg-cyan-950/60 light:bg-cyan-50 border border-cyan-800/50 dark:border-cyan-800/50 light:border-cyan-200 text-cyan-300 dark:text-cyan-300 light:text-cyan-800 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Nền tảng tri thức & khám phá công nghệ thế kỷ 21</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 leading-[1.15]" style={{ textWrap: 'balance' }}>
              CÔNG NGHỆ ĐANG THAY ĐỔI TƯƠNG LAI
            </h1>

            <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 max-w-2xl leading-relaxed">
              Khám phá toàn diện 18 làn sóng công nghệ đột phá định hình văn minh nhân loại: từ Trí tuệ nhân tạo, Điện toán lượng tử, Robot tự hành cho đến Năng lượng xanh và Giao diện sinh học.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-lg shadow-lg shadow-cyan-950/40 transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <span>Khám phá công nghệ</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onTrendsClick}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-700 bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-200 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-300 rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <TrendingUp className="w-4 h-4 text-cyan-400" />
                <span>Xem xu hướng tương lai</span>
              </button>
            </div>

            {/* Key quantitative proof stats - claim-to-proof adjacent */}
            <div className="pt-6 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white dark:text-white light:text-slate-900 tabular-nums">
                  18
                </div>
                <div className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 mt-0.5">
                  Nhóm công nghệ lõi
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 dark:text-cyan-400 light:text-cyan-600 tabular-nums">
                  100+
                </div>
                <div className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 mt-0.5">
                  Ứng dụng thực tiễn
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-bold text-violet-400 dark:text-violet-400 light:text-violet-600 tabular-nums">
                  2040+
                </div>
                <div className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 mt-0.5">
                  Lộ trình dự báo
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Focal Carrier with Zero-Broken-Image Policy */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 shadow-2xl shadow-cyan-950/20 bg-slate-900 group">
              {!imgError ? (
                <img
                  src={heroFutureTechImg}
                  alt="Không gian mô phỏng tương tác các công nghệ mới hiện đại"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="w-full aspect-[16/10] bg-gradient-to-br from-slate-900 via-cyan-950 to-blue-950 flex flex-col items-center justify-center p-6 text-center">
                  <Cpu className="w-12 h-12 text-cyan-400 mb-3 animate-pulse" />
                  <p className="text-sm font-semibold text-white">Future Technology Matrix</p>
                  <p className="text-xs text-slate-400 mt-1">Hội tụ AI, Quantum & Tự động hóa</p>
                </div>
              )}

              {/* Bottom Scrim & Context Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-5">
                <div className="flex items-center gap-2 text-xs font-semibold text-cyan-300">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span>Trung tâm Nghiên cứu & Trải nghiệm Đa chiều</span>
                </div>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  Dữ liệu chuẩn hóa từ các báo cáo công nghệ toàn cầu IEEE, MIT Technology Review và WEF.
                </p>
              </div>
            </div>

            {/* Quick Filter Shortcuts */}
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="text-slate-400 dark:text-slate-400 light:text-slate-500 py-1">Tìm nhanh:</span>
              <button
                type="button"
                onClick={() => onSelectCategory('ai_data')}
                className="px-2.5 py-1 bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-200 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 rounded-md transition-colors"
              >
                Trí tuệ nhân tạo
              </button>
              <button
                type="button"
                onClick={() => onSelectCategory('hardware_robotics')}
                className="px-2.5 py-1 bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-200 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 rounded-md transition-colors"
              >
                Robot & Xe tự hành
              </button>
              <button
                type="button"
                onClick={() => onSelectCategory('future_frontier')}
                className="px-2.5 py-1 bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-200 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 rounded-md transition-colors"
              >
                Lượng tử & Não máy
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
