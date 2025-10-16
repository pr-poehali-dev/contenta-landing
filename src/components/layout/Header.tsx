import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.theme-menu-container')) {
        setIsThemeMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { href: '#services', label: 'Услуги' },
    { href: '#cases', label: 'Кейсы' },
    { href: '#about', label: 'О студии' }
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'top-0 bg-background/60 backdrop-blur-xl border-b border-border/40 shadow-lg' 
            : 'md:bottom-8 bottom-0 bg-transparent'
        }`}
      >
        <nav className={`container mx-auto px-4 flex items-center transition-all duration-500 ${
          isScrolled ? 'h-16 justify-between' : 'h-20 justify-between'
        }`}>
          <div className="relative theme-menu-container">
            <button
              onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
              className={`flex items-center gap-3 transition-all duration-500 hover:opacity-80 ${
                isScrolled ? 'scale-90' : 'scale-100'
              }`}
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center shadow-lg" style={{ 
                background: `linear-gradient(to bottom right, var(--theme-primary), var(--theme-accent))`,
                boxShadow: `0 10px 25px -5px ${theme === 'dark' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(129, 216, 208, 0.2)'}`
              }}>
                <span className="text-white font-bold text-base">CT</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight" style={{ color: 'var(--theme-text-dark)' }}>ContenTA</span>
                <span className="text-xs -mt-1" style={{ color: 'var(--theme-text)' }}>Studio</span>
              </div>
            </button>

            {isThemeMenuOpen && (
              <div className={`absolute left-0 w-64 rounded-2xl shadow-2xl border overflow-hidden z-50 ${
                isScrolled ? 'top-full mt-2' : 'bottom-full mb-2'
              }`}
                style={{ 
                  backgroundColor: theme === 'dark' ? '#1E293B' : 'white',
                  borderColor: theme === 'dark' ? '#334155' : '#E5E7EB'
                }}
              >
                <div className="p-3">
                  <p className="text-xs font-semibold mb-3 px-2" style={{ color: 'var(--theme-text)' }}>Выберите тему</p>
                  
                  <button
                    onClick={() => { setTheme('dark'); setIsThemeMenuOpen(false); }}
                    className="w-full flex items-center gap-3 p-3 rounded-xl transition-all hover:scale-[1.02]"
                    style={{ 
                      backgroundColor: theme === 'dark' ? 'rgba(16, 185, 129, 0.1)' : '#F9FAFB',
                      border: theme === 'dark' ? '2px solid #10B981' : '2px solid transparent'
                    }}
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #10B981, #059669)' }}>
                      <Icon name="Moon" size={20} className="text-white" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-semibold text-sm" style={{ color: theme === 'dark' ? '#F1F5F9' : '#1F2937' }}>Тёмная тема</div>
                      <div className="text-xs" style={{ color: theme === 'dark' ? '#94A3B8' : '#6B7280' }}>Зелёные акценты</div>
                    </div>
                  </button>

                  <button
                    onClick={() => { setTheme('tiffany'); setIsThemeMenuOpen(false); }}
                    className="w-full flex items-center gap-3 p-3 rounded-xl transition-all hover:scale-[1.02] mt-2"
                    style={{ 
                      backgroundColor: theme === 'tiffany' ? 'rgba(129, 216, 208, 0.1)' : '#F9FAFB',
                      border: theme === 'tiffany' ? '2px solid #81D8D0' : '2px solid transparent'
                    }}
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #81D8D0, #70F0DC)' }}>
                      <Icon name="Sparkles" size={20} className="text-white" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-semibold text-sm" style={{ color: theme === 'dark' ? '#F1F5F9' : '#1F2937' }}>Tiffany Blue</div>
                      <div className="text-xs" style={{ color: theme === 'dark' ? '#94A3B8' : '#6B7280' }}>Элегантная палитра</div>
                    </div>
                  </button>

                  <button
                    onClick={() => { setTheme('purple'); setIsThemeMenuOpen(false); }}
                    className="w-full flex items-center gap-3 p-3 rounded-xl transition-all hover:scale-[1.02] mt-2"
                    style={{ 
                      backgroundColor: theme === 'purple' ? 'rgba(168, 85, 247, 0.1)' : '#F9FAFB',
                      border: theme === 'purple' ? '2px solid #A855F7' : '2px solid transparent'
                    }}
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #A855F7, #C084FC)' }}>
                      <Icon name="Zap" size={20} className="text-white" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-semibold text-sm" style={{ color: theme === 'dark' ? '#F1F5F9' : '#1F2937' }}>Purple Glow</div>
                      <div className="text-xs" style={{ color: theme === 'dark' ? '#94A3B8' : '#6B7280' }}>Популярная тема</div>
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className={`hidden md:flex items-center gap-1 sm:gap-2 md:gap-6 px-3 sm:px-4 md:px-8 py-3 transition-all duration-500 ${
            isScrolled 
              ? 'bg-transparent rounded-none' 
              : 'backdrop-blur-2xl shadow-lg rounded-full'
          }`}
          style={!isScrolled ? { 
            backgroundColor: 'var(--theme-card)', 
            borderColor: 'color-mix(in srgb, var(--theme-primary) 20%, transparent)', 
            borderWidth: '1px', 
            borderStyle: 'solid' 
          } : {}}
          >
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
                <span className="nav-underline" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button 
              size={isScrolled ? "default" : "lg"}
              className="hidden md:flex text-white hover:shadow-lg transition-all text-sm" 
              style={{ backgroundColor: 'var(--theme-accent)' }}
              asChild
            >
              <a href="#contact">Связаться</a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </Button>
          </div>
        </nav>
      </header>

      <div 
        className={`md:hidden fixed inset-0 bg-background/95 backdrop-blur-xl z-40 transition-all duration-500 ${
          isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div className="container mx-auto px-4 pt-32 pb-8 flex flex-col h-full">
          <nav className="flex flex-col gap-2 mb-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-nav-link"
                onClick={handleLinkClick}
              >
                <span className="text-2xl font-bold">{link.label}</span>
                <Icon name="ChevronRight" size={24} className="opacity-50" />
              </a>
            ))}
          </nav>

          <Button 
            size="lg"
            className="bg-[#2D5F6E] hover:bg-[#2D5F6E]/90 hover:shadow-lg hover:shadow-[#81D8D0]/30 transition-all text-lg h-14 w-full" 
            asChild
          >
            <a href="#contact" onClick={handleLinkClick}>
              Связаться
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </a>
          </Button>

          <div className="mt-auto pt-8 border-t border-border/40">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#81D8D0] to-[#2D5F6E] flex items-center justify-center shadow-lg shadow-[#81D8D0]/20">
                <span className="text-white font-bold text-sm">CT</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight">ContenTA</span>
                <span className="text-xs text-muted-foreground -mt-1">Studio</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Стратегическое агентство контент-маркетинга
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .nav-link {
          position: relative;
          font-size: 0.75rem;
          font-weight: 500;
          padding: 0.5rem 0.75rem;
          transition: color 0.3s ease;
          white-space: nowrap;
        }

        @media (min-width: 640px) {
          .nav-link {
            font-size: 0.875rem;
            padding: 0.5rem 1rem;
          }
        }

        @media (min-width: 768px) {
          .nav-link {
            font-size: 0.875rem;
            padding: 0.5rem 1.25rem;
          }
        }

        .nav-link:hover {
          color: #2D5F6E;
        }

        .nav-underline {
          position: absolute;
          bottom: 0.25rem;
          left: 0.75rem;
          right: 0.75rem;
          height: 2px;
          background: linear-gradient(90deg, #81D8D0, #70F0DC);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        @media (min-width: 640px) {
          .nav-underline {
            left: 1rem;
            right: 1rem;
          }
        }

        @media (min-width: 768px) {
          .nav-underline {
            left: 1.25rem;
            right: 1.25rem;
          }
        }

        .nav-link:hover .nav-underline {
          transform: scaleX(1);
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 1rem;
          border-radius: 1rem;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
          border: 1px solid rgba(139, 92, 246, 0.1);
          transition: all 0.3s ease;
        }

        .mobile-nav-link:active {
          transform: scale(0.98);
          background: linear-gradient(135deg, rgba(129, 216, 208, 0.1), rgba(112, 240, 220, 0.1));
          border-color: rgba(129, 216, 208, 0.4);
        }
      `}</style>
    </>
  );
}