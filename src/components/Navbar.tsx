import React, { useState, useEffect } from 'react';
import { Search, Sun, Moon, Heart, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  favoritesCount: number;
  onOpenFavorites: () => void;
  onOpenSearch: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  favoritesCount,
  onOpenFavorites,
  onOpenSearch,
  activeSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Khám phá', href: '#technologies' },
    { label: 'Xu hướng', href: '#trends' },
    { label: 'So sánh', href: '#comparison' },
    { label: 'Tech Lab', href: '#tech-lab' },
    { label: 'Timeline', href: '#timeline' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-slate-950/85 dark:bg-slate-950/85 light:bg-white/85 backdrop-blur-md border-slate-800/60 dark:border-slate-800/60 light:border-slate-200/80 shadow-sm'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text wordmark as per Top Bar Contract */}
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-white dark:text-white light:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded"
        >
          FutureTech
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-600">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`hover:text-cyan-400 dark:hover:text-cyan-400 light:hover:text-cyan-600 transition-colors py-1 ${
                activeSection === item.href.replace('#', '')
                  ? 'text-cyan-400 dark:text-cyan-400 light:text-cyan-600 font-semibold border-b-2 border-cyan-400'
                  : ''
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary interactive controls (Search, Theme, Favorites, Mobile Menu) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={onOpenSearch}
            className="p-2 text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 rounded-lg hover:bg-slate-800/60 dark:hover:bg-slate-800/60 light:hover:bg-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-500"
            aria-label="Tìm kiếm công nghệ"
            title="Tìm kiếm (Ctrl + K)"
          >
            <Search className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onToggleTheme}
            className="p-2 text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 rounded-lg hover:bg-slate-800/60 dark:hover:bg-slate-800/60 light:hover:bg-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-500"
            aria-label={theme === 'dark' ? 'Chuyển sang chế độ sáng' : 'Chuyển sang chế độ tối'}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            type="button"
            onClick={onOpenFavorites}
            className="relative p-2 text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 rounded-lg hover:bg-slate-800/60 dark:hover:bg-slate-800/60 light:hover:bg-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-500"
            aria-label={`Danh sách yêu thích (${favoritesCount})`}
          >
            <Heart className={`w-4 h-4 ${favoritesCount > 0 ? 'text-rose-500 fill-rose-500' : ''}`} />
            {favoritesCount > 0 && (
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white tabular-nums">
                {favoritesCount}
              </span>
            )}
          </button>

          <a
            href="#technologies"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 dark:bg-cyan-600 dark:hover:bg-cyan-500 light:bg-cyan-600 light:hover:bg-cyan-500 rounded-lg transition-colors whitespace-nowrap shadow-sm shadow-cyan-900/20"
          >
            <span>Khám phá ngay</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 rounded-lg hover:bg-slate-800/60 dark:hover:bg-slate-800/60 light:hover:bg-slate-100 transition-colors"
            aria-label="Menu điều hướng"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 dark:border-slate-800 light:border-slate-200 bg-slate-950/95 dark:bg-slate-950/95 light:bg-white/95 backdrop-blur-md px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 dark:hover:text-cyan-400 light:hover:text-cyan-600 rounded-md"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200/80 flex items-center justify-between">
            <span className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500">Chế độ giao diện</span>
            <button
              onClick={onToggleTheme}
              className="px-3 py-1 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-700 dark:border-slate-700 light:border-slate-300 rounded"
            >
              {theme === 'dark' ? 'Chuyển sang Sáng' : 'Chuyển sang Tối'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
