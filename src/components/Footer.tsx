import React from 'react';
import { ArrowUp, Globe, Sparkles } from 'lucide-react';

interface FooterProps {
  onSelectCategory: (categoryId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 bg-slate-950 dark:bg-slate-950 light:bg-slate-50 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand & Introduction */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xl font-bold tracking-tight text-white dark:text-white light:text-slate-900">
              FutureTech
            </span>
            <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed max-w-sm">
              Nền tảng tri thức và trải nghiệm tương tác mở về các công nghệ mới đột phá trong đời sống hiện đại và tương lai nhân loại.
            </p>
            <div className="text-xs text-slate-500">
              Tổng hợp và chuẩn hóa theo các tiêu chuẩn học thuật IEEE, ACM và Diễn đàn Kinh tế Thế giới (WEF).
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <div className="font-bold text-slate-200 dark:text-slate-200 light:text-slate-900 uppercase tracking-wider text-[11px]">
              Điều Hướng
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#technologies" className="hover:text-cyan-400 transition-colors">
                  Danh mục 18 Công nghệ
                </a>
              </li>
              <li>
                <a href="#trends" className="hover:text-cyan-400 transition-colors">
                  Bảng xếp hạng Xu hướng
                </a>
              </li>
              <li>
                <a href="#comparison" className="hover:text-cyan-400 transition-colors">
                  Bảng so sánh đa chiều
                </a>
              </li>
              <li>
                <a href="#tech-lab" className="hover:text-cyan-400 transition-colors">
                  Interactive Tech Lab
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-cyan-400 transition-colors">
                  Lộ trình tương lai 2040+
                </a>
              </li>
            </ul>
          </div>

          {/* Technology Groups */}
          <div className="space-y-3">
            <div className="font-bold text-slate-200 dark:text-slate-200 light:text-slate-900 uppercase tracking-wider text-[11px]">
              Lĩnh Vực Công Nghệ
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onSelectCategory('ai_data');
                    document.getElementById('technologies')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Trí tuệ nhân tạo & Dữ liệu
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onSelectCategory('hardware_robotics');
                    document.getElementById('technologies')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Robot & Xe tự hành
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onSelectCategory('network_cloud');
                    document.getElementById('technologies')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Mạng 5G/6G & An ninh mạng
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onSelectCategory('bio_green');
                    document.getElementById('technologies')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Công nghệ Xanh & CRISPR
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onSelectCategory('future_frontier');
                    document.getElementById('technologies')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Điện toán Lượng tử & BCI
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="space-y-3">
            <div className="font-bold text-slate-200 dark:text-slate-200 light:text-slate-900 uppercase tracking-wider text-[11px]">
              Thông Tin & Pháp Lý
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <span className="block text-slate-300">Đơn vị phát triển:</span>
                FutureTech Innovation Initiative
              </li>
              <li>
                <span className="block text-slate-300">Email trao đổi:</span>
                contact@futuretech-explorer.io
              </li>
              <li>
                <span className="text-[11px]">Bản quyền nội dung &copy; 2026 FutureTech. Bảo lưu mọi quyền.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 text-xs">
            Thiết kế theo chuẩn công nghệ tương lai · Tương thích WCAG AA · Tối ưu hiệu năng 60fps
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
          >
            <span>Về đầu trang</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
