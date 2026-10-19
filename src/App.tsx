import React, { useState, useEffect } from 'react';
import { TECHNOLOGIES } from './data/technologies';
import { TechItem } from './types/tech';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechGrid } from './components/TechGrid';
import { TechDetailModal } from './components/TechDetailModal';
import { ComparisonSection } from './components/ComparisonSection';
import { TrendingSection } from './components/TrendingSection';
import { TimelineSection } from './components/TimelineSection';
import { TechLabSection } from './components/TechLab/TechLabSection';
import { DataVisualization } from './components/DataVisualization';
import { FavoritesDrawer } from './components/FavoritesDrawer';
import { Footer } from './components/Footer';

export default function App() {
  // Theme state
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      const savedTheme = localStorage.getItem('futuretech_theme');
      if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
      return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  });

  // Apply theme class to documentElement
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('futuretech_theme', theme);
    } catch {
      // storage disabled
    }
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Favorites state with localStorage
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('futuretech_favorites');
      if (saved) return JSON.parse(saved);
      return ['artificial-intelligence', 'quantum-computing', 'robotics'];
    } catch {
      return ['artificial-intelligence', 'quantum-computing', 'robotics'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('futuretech_favorites', JSON.stringify(favorites));
    } catch {
      // storage disabled
    }
  }, [favorites]);

  const handleToggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleClearAllFavorites = () => {
    setFavorites([]);
  };

  // Comparison state
  const [comparisonIds, setComparisonIds] = useState<string[]>([
    'artificial-intelligence',
    'quantum-computing'
  ]);

  const handleToggleComparison = (id: string) => {
    setComparisonIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      if (prev.length >= 3) {
        // Replace last item if already 3
        return [prev[0], prev[1], id];
      }
      return [...prev, id];
    });
  };

  const handleClearComparison = () => {
    setComparisonIds([]);
  };

  // Filtering & Search
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Tech Detail Modal
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);

  // Favorites Drawer
  const [isFavoritesOpen, setIsFavoritesOpen] = useState<boolean>(false);

  // Active section tracking for navbar
  const [activeSection, setActiveSection] = useState<string>('technologies');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['technologies', 'trends', 'comparison', 'tech-lab', 'timeline'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectTechById = (techId: string) => {
    const found = TECHNOLOGIES.find((t) => t.id === techId);
    if (found) {
      setSelectedTech(found);
    }
  };

  const handleOpenSearch = () => {
    const el = document.getElementById('technologies');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCompareFavorites = () => {
    if (favorites.length >= 2) {
      setComparisonIds(favorites.slice(0, 3));
      const el = document.getElementById('comparison');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 dark:bg-slate-950 light:bg-slate-50 text-slate-100 dark:text-slate-100 light:text-slate-900 transition-colors duration-200">
      {/* Background grid pattern */}
      <div className="fixed inset-0 pointer-events-none bg-grid-pattern opacity-60 z-0" />

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation */}
        <Navbar
          theme={theme}
          onToggleTheme={handleToggleTheme}
          favoritesCount={favorites.length}
          onOpenFavorites={() => setIsFavoritesOpen(true)}
          onOpenSearch={handleOpenSearch}
          activeSection={activeSection}
        />

        {/* Hero Section */}
        <main className="flex-1">
          <Hero
            onExploreClick={() => {
              document.getElementById('technologies')?.scrollIntoView({ behavior: 'smooth' });
            }}
            onTrendsClick={() => {
              document.getElementById('trends')?.scrollIntoView({ behavior: 'smooth' });
            }}
            onSelectCategory={(catId) => {
              setSelectedCategory(catId);
              document.getElementById('technologies')?.scrollIntoView({ behavior: 'smooth' });
            }}
          />

          {/* Technology Catalog & Grid */}
          <TechGrid
            technologies={TECHNOLOGIES}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onSelectTech={(tech) => setSelectedTech(tech)}
            comparisonList={comparisonIds}
            onToggleComparison={handleToggleComparison}
          />

          {/* Multi-Dimensional Comparison Section */}
          <ComparisonSection
            allTechnologies={TECHNOLOGIES}
            comparisonIds={comparisonIds}
            onToggleComparison={handleToggleComparison}
            onClearComparison={handleClearComparison}
            onSetComparisonIds={setComparisonIds}
            onSelectTech={(tech) => setSelectedTech(tech)}
          />

          {/* Trending Technologies 2026 */}
          <TrendingSection onSelectTechById={handleSelectTechById} />

          {/* Interactive Tech Lab (Smart Home, AI Neural Net, Quantum) */}
          <TechLabSection />

          {/* Future Timeline (2025 - 2040+) */}
          <TimelineSection />

          {/* Global Adoption & Investment Data Visualization */}
          <DataVisualization />
        </main>

        {/* Footer */}
        <Footer onSelectCategory={(catId) => setSelectedCategory(catId)} />
      </div>

      {/* Technology Detail Modal */}
      <TechDetailModal
        tech={selectedTech}
        onClose={() => setSelectedTech(null)}
        isFavorite={selectedTech ? favorites.includes(selectedTech.id) : false}
        onToggleFavorite={handleToggleFavorite}
        isInComparison={selectedTech ? comparisonIds.includes(selectedTech.id) : false}
        onToggleComparison={handleToggleComparison}
      />

      {/* Favorites Drawer */}
      <FavoritesDrawer
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favoriteIds={favorites}
        allTechnologies={TECHNOLOGIES}
        onToggleFavorite={handleToggleFavorite}
        onSelectTech={(tech) => setSelectedTech(tech)}
        onClearAllFavorites={handleClearAllFavorites}
        onCompareFavorites={handleCompareFavorites}
      />
    </div>
  );
}
