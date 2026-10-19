import React from 'react';
import { BarChart3, TrendingUp, Layers, PieChart } from 'lucide-react';
import biotechGreenImg from '../assets/images/biotech_green_earth_1791120566599.jpg';

export const DataVisualization: React.FC = () => {
  const industryAdoption = [
    { sector: 'Tài chính & Ngân hàng', rate: 84, topTech: 'AI & An ninh Zero-Trust' },
    { sector: 'Chăm sóc sức khỏe & Y tế', rate: 76, topTech: 'Kỹ thuật gen & AI Chẩn đoán' },
    { sector: 'Sản xuất & Công nghiệp nặng', rate: 79, topTech: 'Robotics & IoT Công nghiệp' },
    { sector: 'Vận tải & Logistics', rate: 71, topTech: 'Xe tự hành & Tối ưu hóa Big Data' },
    { sector: 'Nông nghiệp & Năng lượng', rate: 64, topTech: 'Công nghệ Xanh & Cảm biến IoT' }
  ];

  const globalInvestments = [
    { area: 'Trí tuệ nhân tạo (AI & GenAI)', amount: '$180 Tỷ', share: 36, color: '#38bdf8' },
    { area: 'Năng lượng Xanh & Pin thế hệ mới', amount: '$145 Tỷ', share: 29, color: '#22c55e' },
    { area: 'Robot & Tự động hóa sản xuất', amount: '$85 Tỷ', share: 17, color: '#06b6d4' },
    { area: 'Điện toán Lượng tử & Siêu vật liệu', amount: '$52 Tỷ', share: 10, color: '#8b5cf6' },
    { area: 'Công nghệ sinh học & CRISPR', amount: '$38 Tỷ', share: 8, color: '#10b981' }
  ];

  return (
    <section className="py-12 md:py-20 bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold text-cyan-400 dark:text-cyan-400 light:text-cyan-600 mb-1">
            DỮ LIỆU & ĐỊNH LƯỢNG
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
            Bức Tranh Áp Dụng Công Nghệ Toàn Cầu
          </h2>
          <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2">
            Tổng hợp dữ liệu thực tế về tỷ lệ tích hợp công nghệ mới trong các ngành kinh tế trọng yếu và quy mô dòng vốn đầu tư mạo hiểm.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Industry Adoption Rates */}
          <div className="lg:col-span-6 p-6 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white dark:text-white light:text-slate-900 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-cyan-400" />
                <span>Mức độ số hóa & chuyển đổi theo ngành (%)</span>
              </h3>
              <span className="text-xs text-slate-400 font-mono">Báo cáo Q1/2026</span>
            </div>

            <div className="space-y-4 pt-2">
              {industryAdoption.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                      {item.sector}
                    </span>
                    <span className="font-mono text-cyan-400 font-bold tabular-nums">
                      {item.rate}%
                    </span>
                  </div>

                  <div className="h-2 w-full bg-slate-800 dark:bg-slate-800 light:bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                      style={{ width: `${item.rate}%` }}
                    />
                  </div>

                  <div className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-500">
                    Trụ cột ưu tiên: <span className="text-slate-300 dark:text-slate-300 light:text-slate-700">{item.topTech}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Global Capital Allocation & Green Tech spotlight */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-white dark:text-white light:text-slate-900 flex items-center gap-2">
                  <PieChart className="w-4 h-4 text-emerald-400" />
                  <span>Phân bổ vốn đầu tư R&D mạo hiểm toàn cầu</span>
                </h3>
                <span className="text-xs text-slate-400 font-mono">Tổng: $500B+</span>
              </div>

              {/* Progress bar breakdown */}
              <div className="h-3 w-full flex rounded-full overflow-hidden bg-slate-800">
                {globalInvestments.map((g, i) => (
                  <div
                    key={i}
                    title={`${g.area}: ${g.share}%`}
                    style={{ width: `${g.share}%`, backgroundColor: g.color }}
                  />
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {globalInvestments.map((g, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-950/50 dark:bg-slate-950/50 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200/80">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: g.color }} />
                      <span className="text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 truncate">
                        {g.area.split('(')[0]}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm font-bold text-white dark:text-white light:text-slate-900 font-mono tabular-nums">{g.amount}</span>
                      <span className="text-xs text-slate-400 font-mono tabular-nums">{g.share}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* High fidelity image banner feature: Biotech & Green Tech */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 group">
              <img
                src={biotechGreenImg}
                alt="Nông nghiệp thẳng đứng và công nghệ xanh tương lai"
                referrerPolicy="no-referrer"
                className="w-full aspect-[16/7] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent flex flex-col justify-end p-5">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Mục tiêu Net Zero 2050
                </span>
                <p className="text-sm text-slate-200 font-medium mt-1">
                  Công nghệ Xanh và Công nghệ Sinh học là hai trụ cột có tốc độ tăng trưởng vốn đầu tư vượt 35% mỗi năm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
